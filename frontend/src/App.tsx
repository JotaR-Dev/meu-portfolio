import About from './components/About';
import ProjectsCarousel from './components/ProjectsCarousel';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Reviews from './components/Reviews';

export default function App() {
  const isRouteAdmin = window.location.pathname === '/admin';

  if (isRouteAdmin) {
    return <Admin />;
  }

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
