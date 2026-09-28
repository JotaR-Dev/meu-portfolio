import React, { useEffect, useState } from 'react';
import { Trash2, MessageSquare, Star } from 'lucide-react';

export default function Admin() {
  const [abaAtiva, setAbaAtiva] = useState<'contatos' | 'avaliacoes'>('contatos');
  const [contatos, setContatos] = useState<any[]>([]);
  const [avaliacoes, setAvaliacoes] = useState<any[]>([]);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const resContatos = await fetch('http://localhost:3001/api/contatos');
      setContatos(await resContatos.json());

      const resAvaliacoes = await fetch('http://localhost:3001/api/avaliacoes');
      setAvaliacoes(await resAvaliacoes.json());
    } catch (error) {
      console.error("Erro ao carregar dados", error);
    }
  };

  const deletarItem = async (tipo: 'contatos' | 'avaliacoes', id: number) => {
    if (!window.confirm('Tem certeza que deseja apagar?')) return;
    
    try {
      await fetch(`http://localhost:3001/api/${tipo}/${id}`, { method: 'DELETE' });
      carregarDados(); // Recarrega a lista após apagar
    } catch (error) {
      alert('Erro ao apagar item.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">Painel Administrativo</h1>
        
        {/* Abas de Navegação */}
        <div className="flex gap-4 mb-8 border-b border-slate-700 pb-4">
          <button 
            onClick={() => setAbaAtiva('contatos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${abaAtiva === 'contatos' ? 'bg-indigo-600 text-white' : 'bg-slate-800 hover:bg-slate-700'}`}
          >
            <MessageSquare size={20} /> Mensagens
          </button>
          <button 
            onClick={() => setAbaAtiva('avaliacoes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${abaAtiva === 'avaliacoes' ? 'bg-indigo-600 text-white' : 'bg-slate-800 hover:bg-slate-700'}`}
          >
            <Star size={20} /> Avaliações
          </button>
        </div>

        {/* Lista de Contatos */}
        {abaAtiva === 'contatos' && (
          <div className="space-y-4">
            {contatos.map(contato => (
              <div key={contato.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{contato.nome}</h3>
                  <p className="text-indigo-400 text-sm mb-3">{contato.email}</p>
                  <p className="text-slate-300">{contato.mensagem}</p>
                </div>
                <button onClick={() => deletarItem('contatos', contato.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            {contatos.length === 0 && <p className="text-slate-500">Nenhuma mensagem recebida.</p>}
          </div>
        )}

        {/* Lista de Avaliações */}
        {abaAtiva === 'avaliacoes' && (
          <div className="space-y-4">
            {avaliacoes.map(av => (
              <div key={av.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {av.nome} <span className="text-sm text-slate-500 font-normal ml-2">({av.nome_projeto})</span>
                  </h3>
                  <p className="text-slate-300 mt-2">"{av.descricao}"</p>
                </div>
                <button onClick={() => deletarItem('avaliacoes', av.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            {avaliacoes.length === 0 && <p className="text-slate-500">Nenhuma avaliação encontrada.</p>}
          </div>
        )}

      </div>
    </div>
  );
}
