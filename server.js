//variavel que recebe o moódulo express
var express = require('express');
//Objeto que vamos fazer uso dentro da aplicação
var app = express();

//usando o método get
app.get('/', function(req, res){
    res.send('Hello World!!');
});

app.get('/uma_lista', function(req, res){
    // res.send('Esse é o conteudo para um componente de lista'); 
    let lista = [
        {
          id: 1,
          nome: "Vagner Santos",
          idade: 33,
          Cidade: "Salvador",
          Estado: "BA"
        }
       ];
       res.send(lista);
});

app.get('/zf*zy', function(req, res){
    res.send('Outro Componente a partir de uma rota customizada!');
});

app.use(express.static('public'));

//aqui, vamos implementar o "Escutador da requisição"
var server = app.listen(8080, function (){
    var host = server.address().address;
    var port = server.address().port;

    console.log(`O Servidor pode ser acessado em http:// ${host}:${port}`);
});