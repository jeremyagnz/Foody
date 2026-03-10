const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      meals: 'Meals',
      workouts: 'Workouts',
      plans: 'Plans',
      toggleMenu: 'Toggle menu',
    },

    // Home page
    home: {
      heroBadge: '🤖 AI-Powered Fitness',
      heroTitle: 'Transform Your Body with',
      heroSubtitle:
        'Personalised meal plans, expert workout routines and complete fitness programmes — all in one place. Start your transformation today.',
      btnViewPlans: '🚀 View Plans',
      btnExploreMeals: '🥗 Explore Meals',
      btnWorkouts: '💪 Workouts',
      statMeals: 'Meals',
      statExercises: 'Exercises',
      statPlans: 'Complete Plans',
      whatsInside: "What's Inside",
      sectionTitle: 'Everything You Need to Succeed',
      sectionSubtitle:
        'FitPlanner AI gives you the tools, the data and the guidance to hit your fitness goals faster.',
      feature1Title: 'Smart Meal Planner',
      feature1Desc:
        'Browse 50+ nutritionist-crafted meals filtered by goal — weight loss, muscle gain, fat burn, or maintenance. Complete macros included.',
      feature2Title: 'Workout Library',
      feature2Desc:
        'Access 60+ exercises for home and gym, filtered by muscle group, equipment and difficulty. Step-by-step instructions for every move.',
      feature3Title: 'Weekly Fitness Plans',
      feature3Desc:
        '4 complete weekly plans built around your goal. Each day has a structured workout and meal schedule ready to follow.',
      ctaTitle: 'Ready to Start Your Journey?',
      ctaSubtitle:
        'Choose a plan, follow the meals and workouts. It really is that simple.',
      btnGetStarted: '🔥 Get Started Now',
      btnBrowseWorkouts: '💪 Browse Workouts',
    },

    // Filter labels
    filters: {
      goal: 'Goal:',
      location: 'Location:',
      equipment: 'Equipment:',
      muscle: 'Muscle:',
      all: 'All',
    },

    // Goal categories
    goals: {
      'weight loss': 'Weight Loss',
      'muscle gain': 'Muscle Gain',
      'fat burn': 'Fat Burn',
      maintenance: 'Maintenance',
    },

    // Location filter
    locations: {
      home: 'Home',
      gym: 'Gym',
    },

    // Equipment filter
    equipments: {
      bodyweight: 'Bodyweight',
      weights: 'Weights',
      'resistance bands': 'Resistance Bands',
      machines: 'Machines',
    },

    // Muscle filter
    muscles: {
      chest: 'Chest',
      back: 'Back',
      legs: 'Legs',
      arms: 'Arms',
      shoulders: 'Shoulders',
      core: 'Core',
      cardio: 'Cardio',
    },

    // Meals page
    meals: {
      title: '🥗 Meal Library',
      subtitle: (count) =>
        `Discover ${count}+ nutritionist-crafted meals tailored to your fitness goal.`,
      searchPlaceholder: 'Search meals or ingredients…',
      showing: (node, total) =>
        ['Showing ', node, ` of ${total} meals`],
      noResultsTitle: 'No meals found',
      noResultsDesc: 'Try adjusting your search or filter.',
    },

    // Workouts page
    workouts: {
      title: '💪 Exercise Library',
      subtitle: (count) =>
        `${count}+ exercises for home and gym — filter by muscle, equipment and difficulty.`,
      searchPlaceholder: 'Search exercises…',
      showing: (node, total) =>
        ['Showing ', node, ` of ${total} exercises`],
      noResultsTitle: 'No exercises found',
      noResultsDesc: 'Try adjusting your filters or search term.',
    },

    // Plans page
    plans: {
      title: '📅 Fitness Plans',
      subtitle:
        'Complete weekly programmes with structured workouts and meals — pick your goal and follow the plan.',
      showing: (node, total) =>
        ['Showing ', node, ` of ${total} plans`],
      noResultsTitle: 'No plans found',
      noResultsDesc: 'Try a different goal filter.',
    },

    // MealCard
    mealCard: {
      protein: 'Protein',
      carbs: 'Carbs',
      fat: 'Fat',
      showDetails: '▼ Show Details',
      hideDetails: '▲ Hide Details',
      ingredients: 'Ingredients',
      instructions: 'Instructions',
    },

    // ExerciseCard
    exerciseCard: {
      sets: 'Sets',
      reps: 'Reps',
      mins: 'mins',
      showInstructions: '▼ Show Instructions',
      hideInstructions: '▲ Hide Instructions',
      howTo: 'How to perform',
    },

    // PlanCard
    planCard: {
      rest: 'REST',
      showSchedule: '▼ View Full Schedule',
      hideSchedule: '▲ Hide Schedule',
      restDay: '😴 Rest Day',
      exercises: '💪 Exercises',
      mealsSect: '🍽 Meals',
      days: {
        monday: 'Mon',
        tuesday: 'Tue',
        wednesday: 'Wed',
        thursday: 'Thu',
        friday: 'Fri',
        saturday: 'Sat',
        sunday: 'Sun',
      },
      daysFull: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  es: {
    // Navbar
    nav: {
      home: 'Inicio',
      meals: 'Comidas',
      workouts: 'Ejercicios',
      plans: 'Planes',
      toggleMenu: 'Abrir menú',
    },

    // Home page
    home: {
      heroBadge: '🤖 Fitness con Inteligencia Artificial',
      heroTitle: 'Transforma Tu Cuerpo con',
      heroSubtitle:
        'Planes de comidas personalizados, rutinas de ejercicio expertas y programas de fitness completos — todo en un solo lugar. ¡Empieza tu transformación hoy!',
      btnViewPlans: '🚀 Ver Planes',
      btnExploreMeals: '🥗 Explorar Comidas',
      btnWorkouts: '💪 Ejercicios',
      statMeals: 'Comidas',
      statExercises: 'Ejercicios',
      statPlans: 'Planes Completos',
      whatsInside: '¿Qué Incluye?',
      sectionTitle: 'Todo lo que Necesitas para Triunfar',
      sectionSubtitle:
        'FitPlanner AI te da las herramientas, los datos y la guía para alcanzar tus metas de fitness más rápido.',
      feature1Title: 'Planificador de Comidas',
      feature1Desc:
        'Explora más de 50 comidas elaboradas por nutricionistas, filtradas por objetivo: pérdida de peso, ganar músculo, quemar grasa o mantenimiento. Macros completos incluidos.',
      feature2Title: 'Biblioteca de Ejercicios',
      feature2Desc:
        'Accede a más de 60 ejercicios para casa y gimnasio, filtrados por grupo muscular, equipo y dificultad. Instrucciones paso a paso para cada movimiento.',
      feature3Title: 'Planes Semanales de Fitness',
      feature3Desc:
        '4 planes semanales completos diseñados para tu objetivo. Cada día tiene una rutina de ejercicio y un menú de comidas listo para seguir.',
      ctaTitle: '¿Listo para Comenzar tu Viaje?',
      ctaSubtitle:
        'Elige un plan, sigue las comidas y los ejercicios. Así de simple.',
      btnGetStarted: '🔥 Empezar Ahora',
      btnBrowseWorkouts: '💪 Ver Ejercicios',
    },

    // Filter labels
    filters: {
      goal: 'Objetivo:',
      location: 'Lugar:',
      equipment: 'Equipo:',
      muscle: 'Músculo:',
      all: 'Todos',
    },

    // Goal categories (display labels, comparison still uses EN keys)
    goals: {
      'weight loss': 'Pérdida de Peso',
      'muscle gain': 'Ganar Músculo',
      'fat burn': 'Quemar Grasa',
      maintenance: 'Mantenimiento',
    },

    // Location filter
    locations: {
      home: 'Casa',
      gym: 'Gimnasio',
    },

    // Equipment filter
    equipments: {
      bodyweight: 'Peso Corporal',
      weights: 'Pesas',
      'resistance bands': 'Bandas de Resistencia',
      machines: 'Máquinas',
    },

    // Muscle filter
    muscles: {
      chest: 'Pecho',
      back: 'Espalda',
      legs: 'Piernas',
      arms: 'Brazos',
      shoulders: 'Hombros',
      core: 'Core',
      cardio: 'Cardio',
    },

    // Meals page
    meals: {
      title: '🥗 Biblioteca de Comidas',
      subtitle: (count) =>
        `Descubre ${count}+ comidas elaboradas por nutricionistas para tu objetivo.`,
      searchPlaceholder: 'Buscar comidas o ingredientes…',
      showing: (node, total) =>
        ['Mostrando ', node, ` de ${total} comidas`],
      noResultsTitle: 'No se encontraron comidas',
      noResultsDesc: 'Intenta ajustar tu búsqueda o filtro.',
    },

    // Workouts page
    workouts: {
      title: '💪 Biblioteca de Ejercicios',
      subtitle: (count) =>
        `${count}+ ejercicios para casa y gimnasio — filtra por músculo, equipo y dificultad.`,
      searchPlaceholder: 'Buscar ejercicios…',
      showing: (node, total) =>
        ['Mostrando ', node, ` de ${total} ejercicios`],
      noResultsTitle: 'No se encontraron ejercicios',
      noResultsDesc: 'Intenta ajustar los filtros o el término de búsqueda.',
    },

    // Plans page
    plans: {
      title: '📅 Planes de Fitness',
      subtitle:
        'Programas semanales completos con entrenamientos y comidas estructurados — elige tu objetivo y sigue el plan.',
      showing: (node, total) =>
        ['Mostrando ', node, ` de ${total} planes`],
      noResultsTitle: 'No se encontraron planes',
      noResultsDesc: 'Prueba un filtro de objetivo diferente.',
    },

    // MealCard
    mealCard: {
      protein: 'Proteína',
      carbs: 'Carbohidratos',
      fat: 'Grasas',
      showDetails: '▼ Ver Detalles',
      hideDetails: '▲ Ocultar Detalles',
      ingredients: 'Ingredientes',
      instructions: 'Instrucciones',
    },

    // ExerciseCard
    exerciseCard: {
      sets: 'Series',
      reps: 'Reps',
      mins: 'mins',
      showInstructions: '▼ Ver Instrucciones',
      hideInstructions: '▲ Ocultar Instrucciones',
      howTo: 'Cómo realizarlo',
    },

    // PlanCard
    planCard: {
      rest: 'DESC',
      showSchedule: '▼ Ver Programa Completo',
      hideSchedule: '▲ Ocultar Programa',
      restDay: '😴 Día de Descanso',
      exercises: '💪 Ejercicios',
      mealsSect: '🍽 Comidas',
      days: {
        monday: 'Lun',
        tuesday: 'Mar',
        wednesday: 'Mié',
        thursday: 'Jue',
        friday: 'Vie',
        saturday: 'Sáb',
        sunday: 'Dom',
      },
      daysFull: {
        monday: 'Lunes',
        tuesday: 'Martes',
        wednesday: 'Miércoles',
        thursday: 'Jueves',
        friday: 'Viernes',
        saturday: 'Sábado',
        sunday: 'Domingo',
      },
    },
  },
};

export default translations;
