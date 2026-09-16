Markdown
# Movie Discovery Roulette (MVP)

> **Link da Aplicação Rodando na Vercel:** [https://cp-4-web-dev-five.vercel.app/]

Aplicação web responsiva desenvolvida em React para descoberta interativa de filmes utilizando a API pública do The Movie Database (TMDB). O projeto simula o funcionamento de uma roleta com interações estilo card swipe/match, permitindo ao usuário salvar seus filmes favoritos no armazenamento local do navegador.

Este projeto foi construído para fins de avaliação acadêmica na disciplina de Desenvolvimento Web.

---

## Recursos Implementados

* **Roleta de Filmes:** Consumo assíncrono da API do TMDB sorteando páginas e filmes aleatoriamente.
* **Persistência Local:** Gerenciamento de favoritos utilizando `localStorage` para manter os dados mesmo após atualizar a página, com validação anti-duplicação.
* **Ações Individuais e em Massa:** Suporte para remover um único filme salvo diretamente pelo card ou limpar a lista completa de favoritos.
* **Tratamento de Dados e Resiliência:** Validação e sanitização de dados recebidos da API (imagens de fallback para capas ausentes e formatação de notas para no máximo uma casa decimal).
* **Navegação de Rotas:** Roteamento de páginas com `react-router-dom` (Home, Favoritos e Página 404 para URLs inválidas).
* **UI/UX Cinematográfica:** Paleta de cores escura personalizada (Dark Mode com fundo azul escuro `#0b132b`/`#1c2541` e detalhes em vermelho `#e63946`) em folha de estilo global externa (`src/index.css`), sem o uso de emojis.

---

## Tecnologias Utilizadas

* **React** (Biblioteca principal de interface)
* **Vite** (Build tool e servidor de desenvolvimento)
* **JavaScript (ES6+)**
* **React Router DOM v6** (Gerenciamento de rotas)
* **CSS3** (Estilização global externa)
* **TMDB API** (Interface de dados de cinema)

---

Estrutura do Projeto
CP4-Web-dev
├── public/
├── src/
│   ├── components/
│   │   ├── ActionControls.jsx   # Botões de interação (Pular / Curtir)
│   │   └── MovieCard.jsx        # Card reutilizável do filme
│   ├── pages/
│   │   ├── Favoritos.jsx        # Gerenciamento e grid de salvos
│   │   ├── Home.jsx             # Fluxo principal da roleta
│   │   └── PageNotFound.jsx     # Tratamento de rotas inexistentes
│   ├── index.css                # Estilização global do projeto
│   ├── main.jsx                 # Ponto de entrada React
│   └── RootLayout.jsx           # Estrutura do layout com Header e Footer
├── .env                         # Variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

---

Autor
Desenvolvido para fins de estudo e apresentação de MVP na disciplina de Desenvolvimento Web.