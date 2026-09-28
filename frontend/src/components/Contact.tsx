import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Salva o formulário na memória AGORA, antes de qualquer pausa
    const form = e.currentTarget; 
    
    const formData = new FormData(form);
    const data = { 
      nome: formData.get('nome'), 
      email: formData.get('email'), 
      mensagem: formData.get('mensagem') 
    };

    try {
      const response = await fetch('http://localhost:3001/api/contatos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        form.reset(); // Usa a variável que salvamos lá em cima
      } else {
        setStatus('Erro: O servidor recusou os dados.');
      }
    } catch (error: any) {
      setStatus('Erro técnico: ' + error.message);
    }
  };


  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Entre em Contato</h2>
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Informações de Contato */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-slate-300 text-lg">
            Estou aberto a novas oportunidades e projetos. Sinta-se à vontade para me mandar uma mensagem!
          </p>
          <div className="flex items-center gap-4 text-slate-200">
            <Mail className="text-indigo-400" />
            <span>jn.bignon@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-slate-200">
            <Phone className="text-indigo-400" />
            <span>+55 (21) 97428-6828</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/JotaR-Dev" className="p-2 bg-slate-800 text-slate-200 rounded-full hover:bg-indigo-600 hover:text-white transition-all"><Github /></a>
            <a href="https://www.linkedin.com/in/jeferson-bignon-278ba43a5/" className="p-2 bg-slate-800 text-slate-200 rounded-full hover:bg-indigo-600 hover:text-white transition-all"><Linkedin /></a>
          </div>
        </div>

        {/* Formulário de Contato */}
        <form onSubmit={handleSubmit} className="bg-slate-800 border border-slate-700 p-8 rounded-xl shadow-lg flex flex-col gap-4">
          <div>
            <label className="block text-slate-300 mb-2 font-medium">Nome</label>
            <input name="nome" required className="w-full p-3 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-slate-300 mb-2 font-medium">E-mail</label>
            <input type="email" name="email" required className="w-full p-3 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-slate-300 mb-2 font-medium">Mensagem</label>
            <textarea name="mensagem" rows={4} required className="w-full p-3 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"></textarea>
          </div>
          <button type="submit" className="mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
            Enviar Mensagem
          </button>
          {status && <p className="text-center mt-4 text-indigo-400 font-medium">{status}</p>}
        </form>

      </div>
    </section>
  );
}
