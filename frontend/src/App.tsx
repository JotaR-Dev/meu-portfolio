import React from 'react';
import About from './components/About';
import ProjectsCarousel from './components/ProjectsCarousel';
import Contact from './components/Contact';
import Admin from './components/Admin';
// Ajuste o nome da importação abaixo caso seu arquivo tenha outro nome (ex: Testimonials)
import Reviews from './components/Reviews'; // Ajuste o nome da importação caso seu arquivo tenha outro nome (ex: Testimonials)

export default function App() {
  // Verifica se o usuário digitou /admin no navegador
  const isRouteAdmin = window.location.pathname === '/admin';

  // Renderiza o painel
  if (isRouteAdmin) {
    return <Admin />;
  }

  // Renderiza o portfólio completo
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <main>
        <About />
        <ProjectsCarousel />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}
