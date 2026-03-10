import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Workouts from './pages/Workouts';
import Plans from './pages/Plans';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

