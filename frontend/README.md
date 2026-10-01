# Portfolio frontend

## Configurar o Supabase

1. Crie um projeto no [Supabase](https://supabase.com/dashboard).
2. No projeto, abra o **SQL Editor** e execute o conteúdo de [`../database.sql`](../database.sql). O script cria as tabelas `avaliacoes` e `contatos`, ativa RLS e configura o acesso público usado pelo app. Mantenha a **Data API** habilitada e as tabelas no schema `public` expostas à API.
3. Copie `.env.example` para `.env.local` e preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` com os valores de **Project URL** e **Publishable key** no painel **Connect** do Supabase.
4. Na pasta `frontend`, execute `npm install` e `npm run dev`.

Use somente a chave publicável no frontend. Nunca coloque uma `service_role` ou secret key em variáveis `VITE_` ou em arquivos enviados ao navegador.

## Acesso público

Os formulários de contato e avaliação funcionam sem login. Avaliações são públicas. Por decisão do projeto, `/admin` também é público: qualquer visitante pode ler e apagar avaliações e mensagens, inclusive endereços de e-mail. A chave publicável não protege esses dados; as permissões são deliberadamente abertas pelas políticas RLS em `database.sql`. Os formulários também aceitam envios de qualquer visitante, então podem receber spam. Não use essa configuração se as mensagens precisarem ser privadas; para restringir ou moderar envios, adicione autenticação ou validação/rate limiting no servidor.
