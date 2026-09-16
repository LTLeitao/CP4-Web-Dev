Objetivo
Criar uma aplicação web responsiva que ajude os usuários a descobrirem novos filmes de forma rápida e gamificada. Através de uma interface estilo roleta (ou cards dinâmicos), o sistema exibe uma sugestão por vez, combatendo a fadiga de decisão dos catálogos de streaming.

Público-Alvo
Jovens e adultos que consomem filmes e séries frequentemente, mas que perdem muito tempo tentando escolher um título e acabam frustrados com o excesso de opções.

User Stories e Critérios de Aceitação
História 1: Como usuário, quero ver uma sugestão aleatória de filme na tela inicial para decidir rapidamente o que assistir.

Critério de Aceitação: O card deve exibir o pôster do filme, título, nota, ano e uma breve sinopse puxados da API do TMDB.

História 2: Como usuário, quero poder aceitar (favoritar) ou recusar (pular) o filme sugerido.

Critério de Aceitação: A interface deve ter botões claros de "Pular" e "Gostei". Ao clicar em qualquer um deles, um novo filme deve ser carregado na tela.

História 3: Como usuário, quero acessar uma página com a minha lista de filmes favoritados (Match).

Critério de Aceitação: O sistema deve salvar os filmes favoritados e exibi-los em uma página de "Meus Favoritos".

Estados da Aplicação e Regras do Produto
Loading: Exibir um indicador visual de carregamento enquanto os dados da API do TMDB estiverem sendo buscados.

Empty State: Se a lista de favoritos estiver vazia, exibir uma mensagem amigável convidando o usuário a jogar a roleta.

Regra de Negócio 1: O MVP focará apenas em Filmes (para simplificar o consumo da API neste primeiro momento).

Regra de Negócio 2: Os filmes favoritados devem ser salvos no armazenamento local do navegador (simulando um banco de dados temporário).