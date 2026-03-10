import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/meals', label: t.nav.meals },
    { to: '/workouts', label: t.nav.workouts },
    { to: '/plans', label: t.nav.plans },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          🏋️ Fit<span>Planner</span> AI
        </NavLink>

        <ul className="navbar-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
            title={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
          >
            {lang === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
          </button>

          <button
            className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t.nav.toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar-mobile">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <button
            className="lang-toggle lang-toggle-mobile"
            onClick={() => { toggleLang(); setMenuOpen(false); }}
            aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
          >
            {lang === 'en' ? '🇪🇸 Español' : '🇬🇧 English'}
          </button>
        </div>
      )}
    </nav>
  );
}
