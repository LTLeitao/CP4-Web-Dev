Markdown
# Movie Discovery Roulette (MVP)

> **Link da Aplicação Rodando na Vercel:** [https://cp-4-web-dev-five.vercel.app/]

Aplicação web responsiva desenvolvida em React para descoberta interativa de filmes utilizando a API pública do The Movie Database (TMDB). O projeto simula o funcionamento de uma roleta com interações estilo card swipe/match, permitindo ao usuário salvar seus filmes favoritos no armazenamento local do navegador.

Este projeto foi construído para fins de avaliação acadêmica na disciplina de Desenvolvimento Web.

---

## Integrantes do Grupo

* **Leonardo Teodoro Leitão** - RM 569724

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

## API Utilizada

* **TMDB API (The Movie Database):** Utilizada para consumo de dados assíncronos sobre filmes, incluindo títulos, sinopses, notas de avaliação e imagens de capas oficiais através da API REST pública.

---

## Funcionalidades

* **Roleta de Filmes:** Sorteio aleatório de títulos e páginas diretamente da API do TMDB.
* **Persistência de Favoritos:** Salvamento dos filmes curtidos no `localStorage` do navegador para manter os dados salvos entre sessões.
* **Gerenciamento da Lista:** Visualização dos filmes salvos na rota de Favoritos, com suporte para remoção individual ou exclusão total em massa.
* **Interface Cinematográfica:** Design responsivo em Dark Mode com feedback visual instantâneo para ações de Pular e Curtir.
* **Tratamento de Dados:** Filtro de resiliência com imagens de fallback caso a capa do filme não exista na API e notas formatadas.

---

## Uso de Inteligência Artificial

A Inteligência Artificial (Gemini / Claude) foi empregada durante o desenvolvimento do projeto como uma ferramenta de **parceira de estudos e revisão técnica**, auxiliando nas seguintes etapas:

1. **Estruturação de Documentação:** Apoio na elaboração e formatação dos arquivos da pasta `docs/` (`requirements.md`, `architecture.md` e `references.md`) e do `README.md`.
2. **Resolução de Bugs e Syntax Check:** Auxílio no diagnóstico de erros de imports no `React Router` e verificação da sintaxe correta das chaves (`key`) em iterações com `.map()`.
3. **Revisão de Requisitos:** Validação dos requisitos do projeto para garantir alinhamento com as boas práticas aprendidas em sala de aula.

---

## Estrutura do Projeto

```text
CP4-Web-dev/
├── docs/
│   ├── architecture.md
│   ├── references/
│   │   ├── imagens/
│   │   └── references.md
│   └── requirements.md
├── public/
├── src/
│   ├── components/
│   │   ├── ActionControls.jsx   # Botões de interação (Pular / Curtir)
│   │   ├── MovieCard.jsx        # Card reutilizável do filme
│   │   └── RootLayout.jsx       # Estrutura do layout com Header e Footer
│   ├── pages/
│   │   ├── Favoritos.jsx        # Gerenciamento e grid de salvos
│   │   ├── Home.jsx             # Fluxo principal da roleta
│   │   └── PageNotFound.jsx     # Tratamento de rotas inexistentes
│   ├── App.css
│   ├── App.jsx
│   ├── index.css                # Estilização global do projeto
│   └── main.jsx                 # Ponto de entrada React
├── .env                         # Variáveis de ambiente (não versionado)
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## Autor
Desenvolvido por Leonardo Teodoro Leitão para fins de estudo e apresentação de MVP na disciplina de Desenvolvimento Web.