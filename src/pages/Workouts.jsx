import { useState, useMemo } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import workouts from '../data/workouts.json';
import { useLang } from '../context/LanguageContext';

// Internal filter keys (match JSON data values)
const LOCATION_KEYS  = ['all', 'home', 'gym'];
const EQUIPMENT_KEYS = ['all', 'bodyweight', 'weights', 'resistance bands', 'machines'];
const MUSCLE_KEYS    = ['all', 'chest', 'back', 'legs', 'arms', 'shoulders', 'core', 'cardio'];

export default function Workouts() {
  const [location,  setLocation]  = useState('all');
  const [equipment, setEquipment] = useState('all');
  const [muscle,    setMuscle]    = useState('all');
  const [search,    setSearch]    = useState('');
  const { t } = useLang();

  const filtered = useMemo(() => {
    return workouts.filter((w) => {
      const matchesLoc  = location  === 'all' || w.location.toLowerCase()  === location;
      const matchesEq   = equipment === 'all' || w.equipment.toLowerCase() === equipment;
      const matchesMus  = muscle    === 'all' || w.muscle.toLowerCase()    === muscle;
      const matchesSearch = search.trim() === '' || w.name.toLowerCase().includes(search.toLowerCase());
      return matchesLoc && matchesEq && matchesMus && matchesSearch;
    });
  }, [location, equipment, muscle, search]);

  const locLabel  = (k) => k === 'all' ? t.filters.all : (t.locations[k]  ?? k);
  const eqLabel   = (k) => k === 'all' ? t.filters.all : (t.equipments[k] ?? k);
  const musLabel  = (k) => k === 'all' ? t.filters.all : (t.muscles[k]    ?? k);

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-title">{t.workouts.title}</h1>
        <p className="page-subtitle">{t.workouts.subtitle(workouts.length)}</p>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-group-label">{t.filters.location}</span>
          {LOCATION_KEYS.map((key) => (
            <button
              key={key}
              className={`filter-btn${location === key ? ' active' : ''}`}
              onClick={() => setLocation(key)}
            >
              {locLabel(key)}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <span className="filter-group-label">{t.filters.equipment}</span>
          {EQUIPMENT_KEYS.map((key) => (
            <button
              key={key}
              className={`filter-btn${equipment === key ? ' active' : ''}`}
              onClick={() => setEquipment(key)}
            >
              {eqLabel(key)}
            </button>
          ))}
        </div>

        <div className="filter-group">
          <span className="filter-group-label">{t.filters.muscle}</span>
          {MUSCLE_KEYS.map((key) => (
            <button
              key={key}
              className={`filter-btn${muscle === key ? ' active' : ''}`}
              onClick={() => setMuscle(key)}
            >
              {musLabel(key)}
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
          placeholder={t.workouts.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="results-count">{t.workouts.showing(<strong key="n">{filtered.length}</strong>, workouts.length)}</p>

      <div className="cards-grid">
        {filtered.length > 0 ? (
          filtered.map((ex) => <ExerciseCard key={ex.id} exercise={ex} />)
        ) : (
          <div className="no-results">
            <div className="no-results-emoji">🏋️</div>
            <h3>{t.workouts.noResultsTitle}</h3>
            <p>{t.workouts.noResultsDesc}</p>
          </div>
        )}
      </div>
    </main>
  );
}
