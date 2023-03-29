const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

//tentanbdo conectar 

connection
     .authenticate()
     .then(() => {
       console.log("conexão feita com sucesso")
      })
      .catch((msgErro)=>{
        console.log(msgErro);
       })

//ligando o express no body parser 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//usando o ejs 
app.set('view engine', 'ejs');

//apontando a apasta onde vão ficar os aruivos estaicos da aplicação
//o ejs consegue ler tudo oque estiver nessa pasta de foma automatica

app.use(express.static('public'));






app.get('/',function(req,res){
   
    
    res.render('index');
    
});


app.get('/perguntar',(req,res)=>{

   res.render('perguntar');
   
});

app.post('/salvarpergunta', (req,res)=>{
    //pegando as informações dos formulario
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulario recebido titulo: "+ titulo +"descricao: " + descricao);
});


app.listen(8080,()=>{console.log("app rodando !")});
