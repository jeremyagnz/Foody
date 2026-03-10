import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import workouts from '../data/workouts.json';
import ExercisePreview from './ExercisePreview';

const workoutsMap = Object.fromEntries(workouts.map((w) => [w.name, w]));

const GOAL_COLORS = {
  'weight loss': 'badge-blue',
  'muscle gain': 'badge-green',
  'fat burn': 'badge-red',
  maintenance: 'badge-orange',
};

const DIFFICULTY_COLORS = {
  beginner: 'badge-green',
  intermediate: 'badge-orange',
  advanced: 'badge-red',
};

const DAY_KEYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export default function PlanCard({ plan }) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const pc = t.planCard;

  const { name, goal, description, duration, difficulty, emoji, schedule } = plan;
  const goalColor = GOAL_COLORS[goal] ?? 'badge-gray';
  const diffColor = DIFFICULTY_COLORS[difficulty] ?? 'badge-gray';

  // Translated goal/difficulty labels
  const goalLabel = t.goals[goal] ?? goal;

  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>

      <div>
        <h3 className="card-title">{name}</h3>
        <div className="badge-row" style={{ marginTop: '0.5rem' }}>
          <span className={`badge ${goalColor}`}>{goalLabel}</span>
          <span className={`badge ${diffColor}`}>{difficulty}</span>
          <span className="badge badge-gray">⏱ {duration}</span>
        </div>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {description}
      </p>

      <div className="week-overview">
        {DAY_KEYS.map((day) => {
          const dayData = schedule[day];
          const exCount = dayData?.exercises?.length ?? 0;
          const isRest = exCount === 0;
          return (
            <div key={day} className={`day-pill${isRest ? ' rest' : ''}`}>
              <span className="day-pill-name">{pc.days[day]}</span>
              <span className="day-pill-count">{isRest ? pc.rest : exCount}</span>
            </div>
          );
        })}
      </div>

      <button className="details-btn" onClick={() => setOpen((o) => !o)}>
        {open ? pc.hideSchedule : pc.showSchedule}
      </button>

      {open && (
        <div className="details-panel">
          <div className="schedule-grid">
            {DAY_KEYS.map((day) => {
              const dayData = schedule[day];
              const isRest = (dayData?.exercises?.length ?? 0) === 0;
              return (
                <div key={day} className="schedule-day">
                  <p className="schedule-day-name">{pc.daysFull[day]}</p>
                  {isRest ? (
                    <span className="badge badge-gray">{pc.restDay}</span>
                  ) : (
                    <div className="schedule-list">
                      <p className="schedule-list-title">{pc.exercises}</p>
                      <div className="schedule-exercises">
                        {dayData.exercises.map((ex, i) => {
                          const workout = workoutsMap[ex];
                          return workout ? (
                            <ExercisePreview key={i} exercise={workout} />
                          ) : (
                            <span key={i} className="schedule-item">{ex}</span>
                          );
                        })}
                      </div>
                      <p className="schedule-list-title">{pc.mealsSect}</p>
                      <div className="schedule-items">
                        {dayData.meals.map((meal, i) => (
                          <span key={i} className="schedule-item">{meal}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
