CREATE DATABASE portfolio_db;

\c portfolio_db;

CREATE TABLE avaliacoes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    nome_projeto VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contatos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    assunto VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
