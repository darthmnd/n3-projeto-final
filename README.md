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
Para armazenar as coleções, utilizei o NoSQL MongoDB e a biblioteca Mongoose. Para testar é simples!

:arrow_right: Primeiramente, instalaremos o Node.js através deste link:<p>
https://nodejs.org/en/download/<p>
Siga as instruções do instalador de acordo com seu sistema operacional.

:arrow_right: Também será necessário instalar o MongoDB:<p>
https://www.mongodb.com/download-center/community<p>
Para iniciar o download, selecione seu sistema operacional e a última package disponível para ele.

BÔNUS: Para manipular os dados(em formato BSON/JSON) da sua API de forma mais simples, recomendo instalar também o ROBO 3T:<p>
https://robomongo.org/download

:arrow_right: Será necessário instalar o nodemon (uma variação do node que atualiza alterações no projeto automaticamente) no projeto e as bibliotecas na pasta do projeto pra que funcione corretamente. Dentro da pasta, inicie um cmd e digite os seguintes comandos:<p>

:small_blue_diamond:Para instalar o nodemon: <p>
  <b>npm install -g nodemon</b> <p>

:small_blue_diamond:Para instalar o express: <p>
  <b>npm install express</b><p>

:small_blue_diamond:Para instalar o mongoose: <p>

<b>npm install mongoose</b> <p>
 
 
:arrow_right: E por fim, para navegar entre as rotas, utilize o Postman! O Localhost do projeto está na porta 3000. O download do Postman pode ser feito aqui: <p>
  https://www.getpostman.com/downloads/ <p>
    
 Agora é só executar o arquivo server.js no cmd: <p>
  <b> nodemon server.js </b> <p>  

- <b>ROTAS</b>

:small_blue_diamond:GET '/' - Exibe uma mensagem de boas-vindas;<p>
:small_blue_diamond:GET '/colecoes' - Exibe todas as coleções disponíveis por ordem alfabética;<p>
:small_blue_diamond:GET '/colecoes/avaliacao' - Filtra por avaliação da coleção, da maior (5) para a menor (1);<p>
:small_blue_diamond:POST '/colecoes/adicionar' - Adiciona uma nova coleção;<p>
:small_blue_diamond:PATCH '/colecoes/avaliar:/id' - Adicionar uma nova avaliação a uma coleção através de seu id;<p>
:small_blue_diamond:DELETE '/colecoes/remover/:id' - Remove uma coleção através de seu id.


