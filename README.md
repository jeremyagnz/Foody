# FitPlanner AI 🏋️

A modern, responsive fitness and nutrition web app built with React + Vite. Plan your meals, track workouts, and follow complete weekly fitness programmes.

## Features

- 🥗 **Meal Planner** — 55+ nutritionist-crafted meals with full macros (calories, protein, carbs, fat), ingredients, portions and instructions. Filterable by goal.
- 💪 **Workout Library** — 63+ exercises for home and gym, filterable by muscle group, equipment and difficulty.
- 📅 **Weekly Plans** — 4 complete 7-day plans (Weight Loss, Muscle Gain, Fat Burn, Maintenance) with daily workouts and meals.

## Tech Stack

- React 18
- Vite 7
- React Router DOM
- CSS Grid / Custom Properties (dark theme)

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deploy to Netlify

The project includes a `netlify.toml` with build settings and SPA redirect rules. Import the repository in Netlify and it will deploy automatically.

## Project Structure

```
src/
  data/
    meals.json      # 55 meals
    workouts.json   # 63 exercises
    plans.json      # 4 weekly plans
  components/
    Navbar.jsx
    MealCard.jsx
    ExerciseCard.jsx
    PlanCard.jsx
  pages/
    Home.jsx
    Meals.jsx
    Workouts.jsx
    Plans.jsx
```
