import React from 'react';
import { motion } from 'framer-motion';

const projetos = [
  { id: 1, title: 'Sistema SaaS', desc: 'Plataforma multi-tenant com Node e React.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', url: '#' },
  { id: 2, title: 'E-commerce API', desc: 'API robusta para pagamentos e estoque.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', url: '#' },
  { id: 3, title: 'Dashboard Analytics', desc: 'Visualização de dados em tempo real.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', url: '#' },
];

export default function ProjectsCarousel() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Meus Projetos</h2>
      <div className="project-scroll flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory max-w-6xl mx-auto">
        {projetos.map((proj) => (
          <motion.div 
            key={proj.id}
            whileHover={{ scale: 1.02 }}
            className="min-w-[300px] md:min-w-[400px] bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg snap-center flex-shrink-0"
          >
            <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-100 mb-2">{proj.title}</h3>
              <p className="text-slate-300 mb-4">{proj.desc}</p>
              <a href={proj.url} className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                Ver projeto &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
