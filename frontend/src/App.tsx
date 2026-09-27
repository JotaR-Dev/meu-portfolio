import About from './components/About';
import ProjectsCarousel from './components/ProjectsCarousel';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans scroll-smooth">
      <main>
        <About />
        <ProjectsCarousel />
        <Reviews />
      </main>
      <Contact />
    </div>
  );
}

export default App;
