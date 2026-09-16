architecture.md
Paginas
RootLayout: Componente de layout base que contem o Header padrão da aplicação e o componente Outlet para renderizar o conteúdo dinâmico das rotas filhas, conforme ensinado no material de rotas.

Home (Roleta): Pagina principal onde o usuario visualiza a sugestão atual do filme e decide se pula ou favorita.

Favoritos: Pagina que exibe a lista de todos os filmes que o usuario deu "match".

PageNotFound: Pagina de erro caso o usuario tente acessar um caminho inexistente na url.

Rotas
Utilizaremos a abordagem de Data API com createBrowserRouter e RouterProvider.

Path: /

Elemento principal: <RootLayout/>

ErrorElement: <PageNotFound/>

Rotas Filhas (children):

index: true (Rota /) -> Renderiza a <Home/>

path: '/favoritos' -> Renderiza a <Favoritos/>

Componentes e Props
Seguiremos a boa prática de criar componentes focados (Single Responsibility) e organiza-los na pasta src/components/, separando a lógica da interface em partes menores e reutilizáveis.

Header: Barra de navegacao contendo o logo e o uso do componente <Link> para navegar entre as rotas / e /favoritos sem recarregar a pagina.

MovieCard: O elemento visual que exibe a imagem e dados do filme.

Props esperadas: movie (objeto contendo titulo, caminho do poster, nota e sinopse do filme retornado pela API).

ActionControls: Componente que encapsula os botoes de acao (Pular e Gostei).

Props esperadas: onSkip (funcao para carregar o proximo filme) e onLike (funcao para salvar nos favoritos e carregar o proximo).

Estados do React (useState)
O gerenciamento de dados que refletem na interface sera feito via useState:

currentMovie (Objeto): Armazena os dados atuais do filme em exibicao na tela da Roleta.

favorites (Array): Guarda a lista de filmes salvos. Na tela de favoritos, faremos um map neste array para exibir varios MovieCard.

isLoading (Booleano): Inicia como true e muda para false apos a requisicao da API, servindo para exibir um texto de "Carregando..." enquanto os dados nao chegam.

Efeitos (useEffect)
A interacao com a API externa e com o navegador dependera do hook useEffect:

Chamada da API do TMDB: Na montagem do componente <Home/>, utilizaremos um useEffect com array de dependencias vazio [] para buscar um filme aleatorio ou de uma lista pre-definida do TMDB e armazenar no estado currentMovie.

Sincronizacao do LocalStorage (Leitura): Um useEffect no carregamento principal para ler o localStorage e resgatar os favoritos salvos em sessoes anteriores.

Sincronizacao do LocalStorage (Escrita): Um useEffect que tera o estado favorites no array de dependencias [favorites]. Sempre que um filme for adicionado a essa lista, o efeito atualizara o armazenamento local.