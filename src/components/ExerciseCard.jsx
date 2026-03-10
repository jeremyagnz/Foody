import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

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
  const [imgError, setImgError] = useState(false);
  const { t } = useLang();
  const ec = t.exerciseCard;

  const { name, muscle, difficulty, equipment, location, sets, reps, instructions, gif, emoji } = exercise;

  const diffColor   = DIFFICULTY_COLORS[difficulty] ?? 'badge-gray';
  const muscleColor = MUSCLE_COLORS[muscle]          ?? 'badge-gray';
  const locColor    = LOCATION_COLORS[location]      ?? 'badge-gray';

  const muscleLabel = t.muscles[muscle]        ?? muscle;
  const locLabel    = t.locations[location]    ?? location;
  const diffLabel   = t.difficulties[difficulty] ?? difficulty;
  const equipLabel  = t.equipments[equipment]    ?? equipment;

  return (
    <div className="card">
      {gif && !imgError
        ? <img src={gif} alt={name} className="card-exercise-img" onError={() => setImgError(true)} />
        : <div className="card-emoji" aria-hidden="true">{emoji}</div>
      }

      <div>
        <h3 className="card-title">{name}</h3>
        <div className="badge-row" style={{ marginTop: '0.5rem' }}>
          <span className={`badge ${muscleColor}`}>{muscleLabel}</span>
          <span className={`badge ${diffColor}`}>{diffLabel}</span>
          <span className={`badge ${locColor}`}>{locLabel}</span>
        </div>
      </div>

      <div className="sets-reps">
        <div className="sets-reps-box">
          <span className="sets-reps-value">{sets}</span>
          <span className="sets-reps-label">{ec.sets}</span>
        </div>
        <span className="sets-reps-sep">×</span>
        <div className="sets-reps-box">
          <span className="sets-reps-value">{reps}</span>
          <span className="sets-reps-label">{muscle === 'cardio' ? ec.mins : ec.reps}</span>
        </div>
      </div>

      <div className="badge-row">
        <span className="badge badge-gray">🔧 {equipLabel}</span>
      </div>

      <button className="details-btn" onClick={() => setOpen((o) => !o)}>
        {open ? ec.hideInstructions : ec.showInstructions}
      </button>

      {open && (
        <div className="details-panel">
          <div>
            <p className="details-section-title">{ec.howTo}</p>
            <p className="instructions-text">{instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}
