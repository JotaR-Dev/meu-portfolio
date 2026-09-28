import express, { Request, Response } from 'express';
import cors from 'cors';
import { pool } from './db';

const app = express();
app.use(cors());
app.use(express.json());

// GET /avaliacoes/recentes - Retorna as 5 mais recentes
app.get('/api/avaliacoes/recentes', async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM avaliacoes ORDER BY criado_em DESC LIMIT 5'
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar avaliações' });
  }
});

// POST /avaliacoes - Cria uma avaliação
app.post('/api/avaliacoes', async (req: Request, res: Response) => {
  const { nome, nome_projeto, descricao } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO avaliacoes (nome, nome_projeto, descricao) VALUES ($1, $2, $3) RETURNING *',
      [nome, nome_projeto, descricao]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar avaliação' });
  }
});

// POST /contato - Cria uma mensagem de contato
app.post('/api/contatos', async (req: Request, res: Response) => {
  const { nome, email, mensagem } = req.body;
  try {
    // Apenas insere os dados, sem tentar devolver a linha completa
    await pool.query(
      'INSERT INTO contatos (nome, email, mensagem) VALUES ($1, $2, $3)',
      [nome, email, mensagem]
    );
    // Devolve uma mensagem de sucesso simples
    res.status(201).json({ message: 'Mensagem salva com sucesso!' });
  } catch (error) {
    console.error("ERRO NO BANCO:", error);
    res.status(500).json({ error: 'Erro ao enviar contato' });
  }
});



// --- ROTAS DO ADMIN ---

// Listar todos os contatos
app.get('/api/contatos', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM contatos ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar contatos' });
  }
});

// GET /avaliacoes - Lista todas as avaliações (Usado no painel Admin e no site)
app.get('/api/avaliacoes', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM avaliacoes ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar avaliações' });
  }
});

// Deletar um contato
app.delete('/api/contatos/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM contatos WHERE id = $1', [id]);
    res.json({ message: 'Contato apagado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao apagar contato' });
  }
});

// Deletar uma avaliação
app.delete('/api/avaliacoes/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM avaliacoes WHERE id = $1', [id]);
    res.json({ message: 'Avaliação apagada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao apagar avaliação' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
