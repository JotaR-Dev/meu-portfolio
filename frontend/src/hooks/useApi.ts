import { useState, useEffect, useCallback } from 'react';

const API_URL = 'http://localhost:3001/api';

export interface Review {
  id?: number;
  nome: string;
  nome_projeto: string;
  descricao: string;
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = useCallback(async () => {
    const response = await fetch(`${API_URL}/avaliacoes/recentes`);
    const data = await response.json();
    setReviews(data);
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const addReview = async (review: Review) => {
    await fetch(`${API_URL}/avaliacoes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    });
    fetchReviews(); // Atualiza a lista automaticamente após inserir
  };

  return { reviews, addReview };
}

export function useContact() {
  const sendContact = async (data: any) => {
    await fetch(`${API_URL}/contatos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };
  return { sendContact };
}
