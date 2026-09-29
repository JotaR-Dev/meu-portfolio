import { Database, Layout, Server, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="sobre">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <img 
            src="/profile.jpg" 
            alt="Desenvolvedor" 
            className="w-64 h-64 md:-translate-x-3 md:-translate-y-8 rounded-full shadow-2xl object-cover border-4 border-indigo-500"
          />
          <div>
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Jeferson Bignon (JotaR-Dev)</h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Desenvolvedor de software capacitado para atuar em todas as etapas do projeto. Minha stack inclui tecnologias modernas de Front-end (React, Angular, Tailwind, HTML/CSS/JS) e Back-end (Node.js, Java Spring Boot, APIs REST), integradas a bancos de dados SQL e NoSQL. Sou certificado no ecossistema de desenvolvimento web, além de possuir domínio em ferramentas de versionamento (Git/GitHub) e gestão ágil de projetos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-800 rounded-xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
                <Layout className="text-indigo-400 mb-2" />
                <h3 className="font-semibold text-slate-100">Front-end</h3>
                <p className="text-sm text-slate-300">React, TypeScript, Tailwind, Angular, HTML, CSS e JavaScript</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
                <Server className="text-indigo-400 mb-2" />
                <h3 className="font-semibold text-slate-100">Back-end</h3>
                <p className="text-sm text-slate-300">Node.js, Express, APIs REST, Java com Spring Boot, Git e GitHub, Metodologias Ageis</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
                <Database className="text-indigo-400 mb-2" />
                <h3 className="font-semibold text-slate-100">Banco de Dados</h3>
                <p className="text-sm text-slate-300">PostgreSQL, SQL, NoSQL, Prisma</p>
              </div>
            </div>
            <div className="mt-8 flex items-start gap-2 text-slate-200">
              <Award className="text-indigo-400" />
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                <span className="w-fit rounded-md bg-indigo-500/10 px-2 py-1 font-medium text-indigo-200">
                  Certificações:
                </span>
                <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
                  <div className="space-y-1">
                    <p>Java com Spring Boot</p>
                    <p>Angular</p>
                    <p>HTML, CSS e JavaScript</p>
                    <p>Banco de dados SQL e NoSQL</p>
                    <p>Git e GitHub</p>
                  </div>
                  <div className="space-y-1">
                    <p>Metodologias Ageis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
