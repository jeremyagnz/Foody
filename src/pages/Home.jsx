import { Link } from 'react-router-dom';

const features = [
  {
    emoji: '🥗',
    title: 'Smart Meal Planner',
    desc: 'Browse 50+ nutritionist-crafted meals filtered by goal — weight loss, muscle gain, fat burn, or maintenance. Complete macros included.',
  },
  {
    emoji: '🏋️',
    title: 'Workout Library',
    desc: 'Access 60+ exercises for home and gym, filtered by muscle group, equipment and difficulty. Step-by-step instructions for every move.',
  },
  {
    emoji: '📅',
    title: 'Weekly Fitness Plans',
    desc: '4 complete weekly plans built around your goal. Each day has a structured workout and meal schedule ready to follow.',
  },
];

const stats = [
  { number: '55+', label: 'Meals' },
  { number: '63+', label: 'Exercises' },
  { number: '4', label: 'Complete Plans' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">🤖 AI-Powered Fitness</div>
        <h1 className="hero-title">
          Transform Your Body with<br />
          <span className="accent">FitPlanner AI</span>
        </h1>
        <p className="hero-subtitle">
          Personalised meal plans, expert workout routines and complete fitness programmes — all in one place. Start your transformation today.
        </p>
        <div className="hero-actions">
          <Link to="/plans" className="btn-primary">🚀 View Plans</Link>
          <Link to="/meals" className="btn-secondary">🥗 Explore Meals</Link>
          <Link to="/workouts" className="btn-secondary">💪 Workouts</Link>
        </div>

        {/* Stats */}
        <div className="stats-row">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <p className="section-label">What's Inside</p>
        <h2 className="section-title">Everything You Need to Succeed</h2>
        <p className="section-subtitle">
          FitPlanner AI gives you the tools, the data and the guidance to hit your fitness goals faster.
        </p>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-emoji">{f.emoji}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 1.5rem 5rem', maxWidth: 1280, margin: '0 auto' }}>
        <div className="cta-section">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">Choose a plan, follow the meals and workouts. It really is that simple.</p>
          <div className="hero-actions" style={{ marginBottom: 0 }}>
            <Link to="/plans" className="btn-primary">🔥 Get Started Now</Link>
            <Link to="/workouts" className="btn-secondary">💪 Browse Workouts</Link>
          </div>
        </div>
      </section>
    </>
  );
}
