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
            className="w-48 h-48 rounded-full shadow-2xl object-cover border-4 border-indigo-500"
          />
          <div>
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Jeferson Bignon (JotaR-Dev)</h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Especialista em construir soluções completas, da modelagem de dados à interface do usuário. 
              Foco em arquitetura escalável, código limpo e performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-800 rounded-xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
                <Layout className="text-indigo-400 mb-2" />
                <h3 className="font-semibold text-slate-100">Front-end</h3>
                <p className="text-sm text-slate-300">React, TypeScript, Tailwind</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
                <Server className="text-indigo-400 mb-2" />
                <h3 className="font-semibold text-slate-100">Back-end</h3>
                <p className="text-sm text-slate-300">Node.js, Express, APIs REST</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
                <Database className="text-indigo-400 mb-2" />
                <h3 className="font-semibold text-slate-100">Banco de Dados</h3>
                <p className="text-sm text-slate-300">PostgreSQL, SQL, Prisma</p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2 text-slate-200">
              <Award className="text-indigo-400" />
              <span className="font-medium">Certificações:</span> AWS Cloud Practitioner, React Advanced.
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
