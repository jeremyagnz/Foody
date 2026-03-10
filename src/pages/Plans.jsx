import { useState, useMemo } from 'react';
import PlanCard from '../components/PlanCard';
import plans from '../data/plans.json';
import { useLang } from '../context/LanguageContext';

// Internal filter keys (match JSON data values)
const GOAL_KEYS = ['all', 'weight loss', 'muscle gain', 'fat burn', 'maintenance'];

export default function Plans() {
  const [goal, setGoal] = useState('all');
  const { t } = useLang();

  const filtered = useMemo(() => {
    return plans.filter((p) =>
      goal === 'all' || p.goal.toLowerCase() === goal
    );
  }, [goal]);

  const goalLabel = (k) =>
    k === 'all' ? t.filters.all : (t.goals[k] ?? k);

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-title">{t.plans.title}</h1>
        <p className="page-subtitle">{t.plans.subtitle}</p>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-group-label">{t.filters.goal}</span>
          {GOAL_KEYS.map((key) => (
            <button
              key={key}
              className={`filter-btn${goal === key ? ' active' : ''}`}
              onClick={() => setGoal(key)}
            >
              {goalLabel(key)}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count">{t.plans.showing(<strong key="n">{filtered.length}</strong>, plans.length)}</p>

      <div className="cards-grid">
        {filtered.length > 0 ? (
          filtered.map((plan) => <PlanCard key={plan.id} plan={plan} />)
        ) : (
          <div className="no-results">
            <div className="no-results-emoji">📋</div>
            <h3>{t.plans.noResultsTitle}</h3>
            <p>{t.plans.noResultsDesc}</p>
          </div>
        )}
      </div>
    </main>
  );
}
