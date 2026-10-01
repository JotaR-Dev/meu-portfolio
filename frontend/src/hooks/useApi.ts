import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Review {
  id: number;
  nome: string;
  nome_projeto: string;
  descricao: string;
}

export type ReviewInput = Omit<Review, 'id'>;

export interface ContactInput {
  nome: string;
  email: string;
  mensagem: string;
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = useCallback(async () => {
    const { data, error: fetchError } = await supabase
      .from('avaliacoes')
      .select('id, nome, nome_projeto, descricao')
      .order('criado_em', { ascending: false })
      .limit(5);

    if (fetchError) throw fetchError;
    setReviews(data ?? []);
  }, []);

  useEffect(() => {
    void fetchReviews()
      .catch((fetchError: unknown) => {
        console.error('Erro ao carregar avaliações', fetchError);
        setError('Não foi possível carregar as avaliações.');
      })
      .finally(() => setLoading(false));
  }, [fetchReviews]);

  const addReview = async (review: ReviewInput) => {
    const { data, error: insertError } = await supabase
      .from('avaliacoes')
      .insert(review)
      .select('id, nome, nome_projeto, descricao')
      .single();

    if (insertError) throw insertError;

    setReviews((currentReviews) =>
      [data, ...currentReviews.filter((item) => item.id !== data.id)].slice(0, 5),
    );
    setError(null);
  };

  return { reviews, addReview, loading, error };
}

export async function sendContact(contact: ContactInput) {
  const { error } = await supabase.from('contatos').insert(contact);
  if (error) throw error;
}
