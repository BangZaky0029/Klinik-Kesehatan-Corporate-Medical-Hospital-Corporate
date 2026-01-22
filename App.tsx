
import React from 'react';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-medical-100 selection:text-medical-700">
      {/* Simple Navigation Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold text-corporate-dark font-display">
            Medica<span className="text-medical-600">Corp</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-slate-600 hover:text-medical-600 transition-colors">Home</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-medical-600 transition-colors">Tentang</a>
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-medical-600 transition-colors">Layanan</a>
            <a href="#portfolio" className="text-sm font-semibold text-slate-600 hover:text-medical-600 transition-colors">Fasilitas</a>
            <button className="px-6 py-2 bg-medical-600 text-white text-sm font-bold rounded-full hover:bg-medical-700 transition-all">
              Janji Temu
            </button>
          </div>
          {/* Mobile Menu Icon (Visual Only) */}
          <div className="md:hidden text-slate-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </nav>

      <Home />
    </div>
  );
};

export default App;
