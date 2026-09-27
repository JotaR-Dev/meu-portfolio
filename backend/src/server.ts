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

// POST /contatos - Cria uma mensagem de contato
app.post('/api/contatos', async (req: Request, res: Response) => {
  const { nome, email, assunto, descricao } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO contatos (nome, email, assunto, descricao) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, assunto, descricao]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar contato' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
