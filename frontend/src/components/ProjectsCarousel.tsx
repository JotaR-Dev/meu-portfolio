import { motion } from 'framer-motion';

const projetos = [
  { id: 1, title: 'Local Website Prospecting System | Maricá & RJ', desc: 'Automação de leads para web development | Busca eficiente na sua região.', img: 'projeto1.jpg', url: '#' },
  { id: 2, title: 'YA Beleza no olhar', desc: 'Implementação de um portal de agendamento digital personalizado,\npermitindo que os usuários selecionem serviços e reservem horários em tempo real,\neliminando agendamentos manuais.', img: 'projeto2.jpg', url: '#' },
  { id: 3, title: 'MT Performance', desc: 'Desenvolvimento de um website para a oficina MT Performance,\ncom o objetivo de elevar o profissionalismo da marca no mercado de preparação automotiva.\nA plataforma foi estruturada para otimizar a conexão direta com os clientes\ne atuar como uma vitrine digital de alta, exibindo de forma detalhada\no portfólio de projetos e carros turbo de rua já concluídos.', img: 'projeto3.jpg', url: '#' },
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
              <p className="text-slate-300 mb-4 whitespace-pre-line">{proj.desc}</p>
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
