import { useState, useMemo } from 'react';
import MealCard from '../components/MealCard';
import meals from '../data/meals.json';
import { useLang } from '../context/LanguageContext';

// Internal filter keys (match JSON data values)
const CATEGORY_KEYS = ['all', 'weight loss', 'muscle gain', 'fat burn', 'maintenance'];

export default function Meals() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const { t } = useLang();

  const filtered = useMemo(() => {
    return meals.filter((m) => {
      const matchesCat =
        category === 'all' || m.category.toLowerCase() === category;
      const matchesSearch =
        search.trim() === '' ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.ingredients.some((ing) => ing.toLowerCase().includes(search.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [category, search]);

  // Display label for a category key
  const catLabel = (key) =>
    key === 'all' ? t.filters.all : (t.goals[key] ?? key);

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-title">{t.meals.title}</h1>
        <p className="page-subtitle">{t.meals.subtitle(meals.length)}</p>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-group-label">{t.filters.goal}</span>
          {CATEGORY_KEYS.map((key) => (
            <button
              key={key}
              className={`filter-btn${category === key ? ' active' : ''}`}
              onClick={() => setCategory(key)}
            >
              {catLabel(key)}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          placeholder={t.meals.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="results-count">{t.meals.showing(<strong key="n">{filtered.length}</strong>, meals.length)}</p>

      <div className="cards-grid">
        {filtered.length > 0 ? (
          filtered.map((meal) => <MealCard key={meal.id} meal={meal} />)
        ) : (
          <div className="no-results">
            <div className="no-results-emoji">🔍</div>
            <h3>{t.meals.noResultsTitle}</h3>
            <p>{t.meals.noResultsDesc}</p>
          </div>
        )}
      </div>
    </main>
  );
}
