import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

const CATEGORY_COLORS = {
  'weight loss': 'badge-blue',
  'muscle gain': 'badge-green',
  'fat burn': 'badge-red',
  maintenance: 'badge-orange',
};

function MacroBar({ label, value, total, colorClass }) {
  const pct = total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0;
  return (
    <div className="macro-row">
      <span className="macro-label">{label}</span>
      <div className="macro-bar-wrap">
        <div className={`macro-bar ${colorClass}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="macro-value">{value}g</span>
    </div>
  );
}

export default function MealCard({ meal }) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const mc = t.mealCard;

  const { name, category, calories, protein, carbs, fat, ingredients, instructions, emoji } = meal;
  const totalMacros = protein + carbs + fat;
  const badgeClass = CATEGORY_COLORS[category] ?? 'badge-gray';

  // Display category label in current language
  const categoryLabel = t.goals[category] ?? category;

  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>

      <div>
        <h3 className="card-title">{name}</h3>
        <div className="badge-row" style={{ marginTop: '0.5rem' }}>
          <span className={`badge ${badgeClass}`}>{categoryLabel}</span>
          <span className="calories-badge">🔥 {calories} kcal</span>
        </div>
      </div>

      <div className="macros">
        <MacroBar label={mc.protein} value={protein} total={totalMacros} colorClass="protein" />
        <MacroBar label={mc.carbs}   value={carbs}   total={totalMacros} colorClass="carbs" />
        <MacroBar label={mc.fat}     value={fat}      total={totalMacros} colorClass="fat" />
      </div>

      <button className="details-btn" onClick={() => setOpen((o) => !o)}>
        {open ? mc.hideDetails : mc.showDetails}
      </button>

      {open && (
        <div className="details-panel">
          <div>
            <p className="details-section-title">{mc.ingredients}</p>
            <ul className="ingredients-list">
              {ingredients.map((ing, i) => (
                <li key={i} className="ingredient-tag">{ing}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="details-section-title">{mc.instructions}</p>
            <p className="instructions-text">{instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}
