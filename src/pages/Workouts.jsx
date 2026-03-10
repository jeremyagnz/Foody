import { useState, useMemo } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import workouts from '../data/workouts.json';

const LOCATIONS = ['All', 'Home', 'Gym'];
const EQUIPMENTS = ['All', 'Bodyweight', 'Weights', 'Resistance Bands', 'Machines'];
const MUSCLES = ['All', 'Chest', 'Back', 'Legs', 'Arms', 'Shoulders', 'Core', 'Cardio'];

export default function Workouts() {
  const [location, setLocation] = useState('All');
  const [equipment, setEquipment] = useState('All');
  const [muscle, setMuscle] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return workouts.filter((w) => {
      const matchesLoc = location === 'All' || w.location.toLowerCase() === location.toLowerCase();
      const matchesEq =
        equipment === 'All' || w.equipment.toLowerCase() === equipment.toLowerCase();
      const matchesMuscle =
        muscle === 'All' || w.muscle.toLowerCase() === muscle.toLowerCase();
      const matchesSearch =
        search.trim() === '' || w.name.toLowerCase().includes(search.toLowerCase());
      return matchesLoc && matchesEq && matchesMuscle && matchesSearch;
    });
  }, [location, equipment, muscle, search]);

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-title">💪 Exercise Library</h1>
        <p className="page-subtitle">
          {workouts.length}+ exercises for home and gym — filter by muscle, equipment and difficulty.
        </p>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-group-label">Location:</span>
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              className={`filter-btn${location === loc ? ' active' : ''}`}
              onClick={() => setLocation(loc)}
            >
              {loc}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <span className="filter-group-label">Equipment:</span>
          {EQUIPMENTS.map((eq) => (
            <button
              key={eq}
              className={`filter-btn${equipment === eq ? ' active' : ''}`}
              onClick={() => setEquipment(eq)}
            >
              {eq}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <span className="filter-group-label">Muscle:</span>
          {MUSCLES.map((m) => (
            <button
              key={m}
              className={`filter-btn${muscle === m ? ' active' : ''}`}
              onClick={() => setMuscle(m)}
            >
              {m}
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
          placeholder="Search exercises…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="results-count">
        Showing <strong>{filtered.length}</strong> of {workouts.length} exercises
      </p>

      <div className="cards-grid">
        {filtered.length > 0 ? (
          filtered.map((ex) => <ExerciseCard key={ex.id} exercise={ex} />)
        ) : (
          <div className="no-results">
            <div className="no-results-emoji">🏋️</div>
            <h3>No exercises found</h3>
            <p>Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </main>
  );
}
