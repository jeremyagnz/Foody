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

export default function ExercisePreview({ exercise }) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const ec = t.exerciseCard;

  const { name, muscle, difficulty, equipment, sets, reps, instructions, emoji } = exercise;

  const diffColor = DIFFICULTY_COLORS[difficulty] ?? 'badge-gray';
  const muscleColor = MUSCLE_COLORS[muscle] ?? 'badge-gray';
  const muscleLabel = t.muscles[muscle] ?? muscle;
  const diffLabel = t.difficulties[difficulty] ?? difficulty;
  const equipLabel = t.equipments[equipment] ?? equipment;

  return (
    <div className={`exercise-preview${open ? ' exercise-preview--open' : ''}`}>
      <button
        className="exercise-preview-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${name} – ${open ? ec.hideInstructions : ec.showInstructions}`}
      >
        <span className="exercise-preview-toggle-emoji">{emoji}</span>
        <span className="exercise-preview-toggle-name">{name}</span>
        <span className="exercise-preview-toggle-chevron">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="exercise-preview-body">
          <div className="badge-row">
            <span className={`badge ${muscleColor}`}>{muscleLabel}</span>
            <span className={`badge ${diffColor}`}>{diffLabel}</span>
            <span className="badge badge-gray">🔧 {equipLabel}</span>
          </div>
          <div className="exercise-preview-stats">
            <span className="exercise-preview-stat-value">{sets}</span>
            <span className="exercise-preview-stat-label">{ec.sets}</span>
            <span className="exercise-preview-stat-sep">×</span>
            <span className="exercise-preview-stat-value">{reps}</span>
            <span className="exercise-preview-stat-label">
              {muscle === 'cardio' ? ec.mins : ec.reps}
            </span>
          </div>
          <p className="exercise-preview-instructions">{instructions}</p>
        </div>
      )}
    </div>
  );
}
