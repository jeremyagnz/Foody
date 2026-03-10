import { useState } from 'react';

const DIFFICULTY_COLORS = {
  beginner: 'badge-green',
  intermediate: 'badge-orange',
  advanced: 'badge-red',
};

const MUSCLE_COLORS = {
  chest: 'badge-blue',
  back: 'badge-purple',
  legs: 'badge-teal',
  arms: 'badge-orange',
  shoulders: 'badge-red',
  core: 'badge-green',
  cardio: 'badge-red',
};

const LOCATION_COLORS = {
  home: 'badge-green',
  gym: 'badge-blue',
};

export default function ExerciseCard({ exercise }) {
  const [open, setOpen] = useState(false);

  const { name, muscle, difficulty, equipment, location, sets, reps, instructions, emoji } = exercise;

  const diffColor = DIFFICULTY_COLORS[difficulty] ?? 'badge-gray';
  const muscleColor = MUSCLE_COLORS[muscle] ?? 'badge-gray';
  const locColor = LOCATION_COLORS[location] ?? 'badge-gray';

  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>

      <div>
        <h3 className="card-title">{name}</h3>
        <div className="badge-row" style={{ marginTop: '0.5rem' }}>
          <span className={`badge ${muscleColor}`}>{muscle}</span>
          <span className={`badge ${diffColor}`}>{difficulty}</span>
          <span className={`badge ${locColor}`}>{location}</span>
        </div>
      </div>

      <div className="sets-reps">
        <div className="sets-reps-box">
          <span className="sets-reps-value">{sets}</span>
          <span className="sets-reps-label">Sets</span>
        </div>
        <span className="sets-reps-sep">×</span>
        <div className="sets-reps-box">
          <span className="sets-reps-value">{reps}</span>
          <span className="sets-reps-label">{muscle === 'cardio' ? 'mins' : 'Reps'}</span>
        </div>
      </div>

      <div className="badge-row">
        <span className="badge badge-gray">🔧 {equipment}</span>
      </div>

      <button className="details-btn" onClick={() => setOpen((o) => !o)}>
        {open ? '▲ Hide Instructions' : '▼ Show Instructions'}
      </button>

      {open && (
        <div className="details-panel">
          <div>
            <p className="details-section-title">How to perform</p>
            <p className="instructions-text">{instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}
