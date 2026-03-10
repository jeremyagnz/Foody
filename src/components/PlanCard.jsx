import { useState } from 'react';

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

const DAY_LABELS = {
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
  sunday: 'Sun',
};

export default function PlanCard({ plan }) {
  const [open, setOpen] = useState(false);

  const { name, goal, description, duration, difficulty, emoji, schedule } = plan;
  const goalColor = GOAL_COLORS[goal] ?? 'badge-gray';
  const diffColor = DIFFICULTY_COLORS[difficulty] ?? 'badge-gray';

  const days = Object.keys(DAY_LABELS);

  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>

      <div>
        <h3 className="card-title">{name}</h3>
        <div className="badge-row" style={{ marginTop: '0.5rem' }}>
          <span className={`badge ${goalColor}`}>{goal}</span>
          <span className={`badge ${diffColor}`}>{difficulty}</span>
          <span className="badge badge-gray">⏱ {duration}</span>
        </div>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {description}
      </p>

      <div className="week-overview">
        {days.map((day) => {
          const dayData = schedule[day];
          const exCount = dayData?.exercises?.length ?? 0;
          const isRest = exCount === 0;
          return (
            <div key={day} className={`day-pill${isRest ? ' rest' : ''}`}>
              <span className="day-pill-name">{DAY_LABELS[day]}</span>
              <span className="day-pill-count">{isRest ? 'REST' : exCount}</span>
            </div>
          );
        })}
      </div>

      <button className="details-btn" onClick={() => setOpen((o) => !o)}>
        {open ? '▲ Hide Schedule' : '▼ View Full Schedule'}
      </button>

      {open && (
        <div className="details-panel">
          <div className="schedule-grid">
            {days.map((day) => {
              const dayData = schedule[day];
              const isRest = (dayData?.exercises?.length ?? 0) === 0;
              return (
                <div key={day} className="schedule-day">
                  <p className="schedule-day-name">{day.charAt(0).toUpperCase() + day.slice(1)}</p>
                  {isRest ? (
                    <span className="badge badge-gray">😴 Rest Day</span>
                  ) : (
                    <div className="schedule-list">
                      <p className="schedule-list-title">💪 Exercises</p>
                      <div className="schedule-items">
                        {dayData.exercises.map((ex, i) => (
                          <span key={i} className="schedule-item">{ex}</span>
                        ))}
                      </div>
                      <p className="schedule-list-title">🍽 Meals</p>
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
