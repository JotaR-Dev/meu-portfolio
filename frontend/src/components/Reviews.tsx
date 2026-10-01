import { useState } from 'react';
import { useReviews } from '../hooks/useApi';
import AnimatedSection from './AnimatedSection';

export default function Reviews() {
  const { reviews, addReview, loading, error } = useReviews();
  const [form, setForm] = useState({ nome: '', nome_projeto: '', descricao: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    try {
      await addReview({
        nome: form.nome.trim(),
        nome_projeto: form.nome_projeto.trim(),
        descricao: form.descricao.trim(),
      });
      setForm({ nome: '', nome_projeto: '', descricao: '' });
      setStatus('Avaliação enviada com sucesso!');
    } catch (submitError: unknown) {
      console.error('Erro ao enviar avaliação', submitError);
      setStatus('Não foi possível enviar sua avaliação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="avaliacoes">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-slate-100 mb-10 text-center">Avalie um de meus projetos</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Lista de Avaliações */}
          <div className="flex flex-col gap-4">
            {loading && <p className="text-slate-400">Carregando avaliações...</p>}
            {error && <p role="alert" className="text-red-400">{error}</p>}
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm hover:shadow-md transition">
                <h4 className="font-bold text-slate-100">{rev.nome}</h4>
                <span className="text-xs text-indigo-400 font-semibold mb-2 block">{rev.nome_projeto}</span>
                <p className="text-slate-300 text-sm italic">"{rev.descricao}"</p>
              </div>
            ))}
          </div>

          {/* Formulário */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-slate-100 mb-6">Deixe sua avaliação</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="text" placeholder="Seu Nome" required
                maxLength={120}
                value={form.nome} onChange={e => setForm({...form, nome: e.target.value})}
                className="p-3 rounded-lg border border-slate-600 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input 
                type="text" placeholder="Nome do Projeto" required
                maxLength={160}
                value={form.nome_projeto} onChange={e => setForm({...form, nome_projeto: e.target.value})}
                className="p-3 rounded-lg border border-slate-600 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea 
                placeholder="Seu comentário" rows={4} required
                maxLength={5000}
                value={form.descricao} onChange={e => setForm({...form, descricao: e.target.value})}
                className="p-3 rounded-lg border border-slate-600 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
              <button type="submit" disabled={isSubmitting} className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-60 transition">
                {isSubmitting ? 'Enviando...' : 'Enviar Avaliação'}
              </button>
              {status && <p role="status" aria-live="polite" className="text-center text-indigo-400">{status}</p>}
            </form>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
