# :cherry_blossom: Projeto Final - Coleção de Mangás :cherry_blossom:

Chegamos ao projeto final! O curso foi desafiador e aqui está o resultado de todo o trabalho feito nessas 14 semanas.
Abaixo, um guia para entender o funcionamento da API. Espero que gostem!


- <b>OBJETIVO</b> <p>
CRUD para uma Biblioteca com Coleção de Mangás que visa:<p>

1. Exibir e criar uma coleção de mangás, com seus respectivos títulos e gênero.
2. Adicionar e atualizar avaliações (1-5) para as coleções usando seu id como parâmetro.
3. Deletar coleções pelo id.

- <b>COMO UTILIZAR?</b>

A API foi desenvolvida em Node.js, juntamente com a biblioteca Express. 
Para armazenar o banco das coleções, utilizei o NoSQL MongoDB e a biblioteca Mongoose. Para testar é simples!

:arrow_right: Antes de mais nada, faça um download ou um clone deste repositório no seu computador.<p>
:arrow_right: Em seguida, instalaremos o Node.js através deste link:<p>
https://nodejs.org/en/download/<p>
Siga as instruções do instalador de acordo com seu sistema operacional.

:arrow_right: Também será necessário instalar o MongoDB:<p>
https://www.mongodb.com/download-center/community<p>
Para iniciar o download, selecione seu sistema operacional e a última package disponível para ele.

BÔNUS: Para manipular os dados(em formato BSON/JSON) da sua API de forma mais simples, recomendo instalar também o ROBO 3T:<p>
https://robomongo.org/download

:arrow_right: Será necessário instalar o nodemon (uma variação do node que atualiza alterações no projeto automaticamente) no projeto e as bibliotecas na pasta do projeto pra que funcione corretamente. Dentro da pasta com os arquivos do projeto, inicie um cmd/gitbash e digite os seguintes comandos:<p>

:small_blue_diamond:Para instalar o nodemon: <p>
  <b>npm install -g nodemon</b> <p>

:small_blue_diamond:Para instalar o express: <p>
  <b>npm install express</b><p>

:small_blue_diamond:Para instalar o mongoose: <p>

<b>npm install mongoose</b> <p>
 
 
:arrow_right: E por fim, para navegar entre as rotas, utilize o Postman! O download do Postman pode ser feito aqui: <p>
  https://www.getpostman.com/downloads/ <p>
    
 Agora é só executar o arquivo server.js no cmd: <p>
  <b> nodemon server.js </b> <p>  

- <b>ROTAS</b><p>
Abra o Postman e, na barra de endereço, digite "localhost:3000" seguido de uma das rotas que deseja testar. São elas:

:small_blue_diamond:GET '/' - Exibe uma mensagem de boas-vindas;<p>
:small_blue_diamond:GET '/colecoes' - Exibe todas as coleções disponíveis por ordem alfabética;<p>
:small_blue_diamond:GET '/colecoes/avaliacao' - Filtra por avaliação da coleção, da maior (5) para a menor (1);<p>
:small_blue_diamond:POST '/colecoes/adicionar' - Adiciona uma nova coleção;<p>
:small_blue_diamond:PATCH '/colecoes/avaliar:/id' - Adiciona/atualiza uma avaliação de uma coleção através de seu id;<p>
:small_blue_diamond:DELETE '/colecoes/remover/:id' - Remove uma coleção através de seu id.

<b>IMPORTANTE</b>: as rotas de POST E PATCH são para inserir ou atualizar dados, verifique o arquivo 'mangaSchema' dentro da pasta 'src' para estruturar corretamente seu JSON. Para visualizar esses arquivos, abra-os no seu editor de códigos preferido. Para inserir os dados através do Postman, clique em 'Body', selecione a opção 'raw' e, no lugar de 'Text', selecione a opção 'JSON'. Abrirá um campo para você inserir os dados do seu JSON. Por fim, clique em SEND.
