import { useState, useMemo } from 'react';
import MealCard from '../components/MealCard';
import meals from '../data/meals.json';

const CATEGORIES = ['All', 'Weight Loss', 'Muscle Gain', 'Fat Burn', 'Maintenance'];

export default function Meals() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return meals.filter((m) => {
      const matchesCat =
        category === 'All' || m.category.toLowerCase() === category.toLowerCase();
      const matchesSearch =
        search.trim() === '' ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.ingredients.some((ing) => ing.toLowerCase().includes(search.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-title">🥗 Meal Library</h1>
        <p className="page-subtitle">
          Discover {meals.length}+ nutritionist-crafted meals tailored to your fitness goal.
        </p>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-group-label">Goal:</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${category === cat ? ' active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
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
          placeholder="Search meals or ingredients…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="results-count">
        Showing <strong>{filtered.length}</strong> of {meals.length} meals
      </p>

      <div className="cards-grid">
        {filtered.length > 0 ? (
          filtered.map((meal) => <MealCard key={meal.id} meal={meal} />)
        ) : (
          <div className="no-results">
            <div className="no-results-emoji">🔍</div>
            <h3>No meals found</h3>
            <p>Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </main>
  );
}
