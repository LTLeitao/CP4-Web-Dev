Referencia 1: Tinder UI
Elemento utilizado: Layout em formato de card centralizado com botões de ação circulares na parte inferior.

Onde foi utilizado: Na página principal (<Home/>), que atua como a roleta de descoberta de filmes.

Por que e adequado: O padrão de design do Tinder resolve perfeitamente a necessidade de apresentar uma única opção por vez, forçando uma decisão rápida e combatendo a fadiga de escolha. Os botões grandes e arredondados (X e Coração) são intuitivos e garantem uma boa usabilidade em dispositivos móveis, permitindo que o usuário avance rapidamente pelas sugestões do TMDB.

Referencia 2: Aplicativo Maxstream
Elemento utilizado: Paleta de cores escuras (Dark Mode), uso de gradientes sobre as imagens e hierarquia tipográfica para títulos de filmes.

Onde foi utilizado: No componente <MovieCard/> e no <RootLayout/>.

Por que e adequado: O uso de fundos escuros (tons de azul marinho/preto) é um padrão consolidado em plataformas de streaming, pois proporciona conforto visual e destaca as cores vivas dos pôsteres dos filmes. Observamos também o uso de um gradiente escuro na base da imagem para garantir que o texto (título, nota e ano) fique legível independentemente da imagem de fundo retornada pela API.

Referencia 3: Grid de Cards Amarelos
Elemento utilizado: Organização de conteúdo em grid (grade) de cards quadrados com cantos arredondados.

Onde foi utilizado: Na página de <Favoritos/>, onde o usuário visualiza os filmes que deu match.

Por que e adequado: O formato em grid permite exibir múltiplos itens de forma compacta e organizada. Os cantos arredondados trazem um aspecto mais moderno e amigável à interface. Essa estrutura servirá como base para listar os filmes salvos no localStorage, garantindo uma visualização limpa e fácil de navegar.

Referencia 4: Empty State Workspace
Elemento utilizado: Ilustração centralizada, texto explicativo curto e um botão de ação primária.

Onde foi utilizado: Na página de <Favoritos/>, quando o array de filmes salvos estiver vazio.

Por que e adequado: Um "Empty State" (estado vazio) bem desenhado evita que o usuário ache que o aplicativo está quebrado. A referência inspira a criação de uma tela amigável que explica por que não há conteúdo ali e oferece um botão claro para redirecionar o usuário de volta à roleta de descobertas, mantendo o fluxo de navegação contínuo.