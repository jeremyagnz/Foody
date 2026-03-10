import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLang();
  const h = t.home;

  const features = [
    { emoji: '🥗', title: h.feature1Title, desc: h.feature1Desc },
    { emoji: '🏋️', title: h.feature2Title, desc: h.feature2Desc },
    { emoji: '📅', title: h.feature3Title, desc: h.feature3Desc },
  ];

  const stats = [
    { number: '55+', label: h.statMeals },
    { number: '63+', label: h.statExercises },
    { number: '4',   label: h.statPlans },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">{h.heroBadge}</div>
        <h1 className="hero-title">
          {h.heroTitle}<br />
          <span className="accent">FitPlanner AI</span>
        </h1>
        <p className="hero-subtitle">{h.heroSubtitle}</p>
        <div className="hero-actions">
          <Link to="/plans"    className="btn-primary">{h.btnViewPlans}</Link>
          <Link to="/meals"    className="btn-secondary">{h.btnExploreMeals}</Link>
          <Link to="/workouts" className="btn-secondary">{h.btnWorkouts}</Link>
        </div>

        {/* Stats */}
        <div className="stats-row">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <p className="section-label">{h.whatsInside}</p>
        <h2 className="section-title">{h.sectionTitle}</h2>
        <p className="section-subtitle">{h.sectionSubtitle}</p>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-emoji">{f.emoji}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 1.5rem 5rem', maxWidth: 1280, margin: '0 auto' }}>
        <div className="cta-section">
          <h2 className="cta-title">{h.ctaTitle}</h2>
          <p className="cta-subtitle">{h.ctaSubtitle}</p>
          <div className="hero-actions" style={{ marginBottom: 0 }}>
            <Link to="/plans"    className="btn-primary">{h.btnGetStarted}</Link>
            <Link to="/workouts" className="btn-secondary">{h.btnBrowseWorkouts}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
