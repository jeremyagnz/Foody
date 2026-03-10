import { useState, useMemo } from 'react';
import PlanCard from '../components/PlanCard';
import plans from '../data/plans.json';

const GOALS = ['All', 'Weight Loss', 'Muscle Gain', 'Fat Burn', 'Maintenance'];

export default function Plans() {
  const [goal, setGoal] = useState('All');

  const filtered = useMemo(() => {
    return plans.filter((p) => {
      return goal === 'All' || p.goal.toLowerCase() === goal.toLowerCase();
    });
  }, [goal]);

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-title">📅 Fitness Plans</h1>
        <p className="page-subtitle">
          Complete weekly programmes with structured workouts and meals — pick your goal and follow the plan.
        </p>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-group-label">Goal:</span>
          {GOALS.map((g) => (
            <button
              key={g}
              className={`filter-btn${goal === g ? ' active' : ''}`}
              onClick={() => setGoal(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count">
        Showing <strong>{filtered.length}</strong> of {plans.length} plans
      </p>

      <div className="cards-grid">
        {filtered.length > 0 ? (
          filtered.map((plan) => <PlanCard key={plan.id} plan={plan} />)
        ) : (
          <div className="no-results">
            <div className="no-results-emoji">📋</div>
            <h3>No plans found</h3>
            <p>Try a different goal filter.</p>
          </div>
        )}
      </div>
    </main>
  );
}
