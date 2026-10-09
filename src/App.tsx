import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { PlatformsPage } from './pages/PlatformsPage';
import { PlatformDetailPage } from './pages/PlatformDetailPage';
import { VisionPage } from './pages/VisionPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper when navigating to a new route
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-800 dark:text-silver-200 flex flex-col font-sans selection:bg-cyan-accent selection:text-dark-950 transition-colors duration-300">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/platforms" element={<PlatformsPage />} />
            <Route path="/platforms/:id" element={<PlatformDetailPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
