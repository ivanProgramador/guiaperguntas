const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Resposta = require('./database/Resposta');

//so o fato de immportar pra esse arquivo ao salvar ele ja executa a função sync
//que cria a tabela 
const Pergunta = require('./database/Pergunta');

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
   
    //essa função equivale a um select
    //a ordem raw significa cru significa que ele vai trazer somente os dados e nada mais 
    //sem o raw ativo ele vai trazer varias outras informações desnecessarias sobre o registro
    //para colocar em oredem os dados que eu quero trazer 
    //

    Pergunta.findAll({raw:true,
      //Aqui eu digo para o order que eu quero ordenar pelo id e quero a orden decrescente
      //como o order é um array eu to passando esses parametros por indices    
      // DESC = descrescente  e ASC = crescente 
      order:[['id','DESC']]
     }).then(perguntas=>{

      res.render('index',{
         perguntas:perguntas
      });
      
    });

    
    
});



app.get('/perguntar',(req,res)=>{

   res.render('perguntar');
   
});



app.post('/salvarpergunta', (req,res)=>{


    //pegando as informações dos formulario
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    //inserinddo os dados no banco 
    
    Pergunta.create({

      titulo: titulo,
      descricao: descricao
      
    }).then(()=>{

       res.redirect('/');

    })


});



//Rota que acessa uma pergunta especifica 

app.get('/pergunta/:id',(req,res)=>{
   
   var id = req.params.id;

   Pergunta.findOne(
         {where:{id:id}}

    ).then(pergunta=>{

         if(pergunta != undefined){

            res.render("pergunta",{
              pergunta:pergunta
            });

         }else{

             res.redirect('/');
         }
    }


   );

});

//campo que cadastra a resposta 

app.post('/responder',(req,res)=>{

   var corpo = req.body.corpo;
   var perguntaId = req.body.pergunta;

   Resposta.create({

      corpo:corpo,
      perguntaId: perguntaId

   }).then(()=>{

      res.redirect('/pergunta/'+ perguntaId);

   })



});


app.listen(8080,()=>{console.log("app rodando !")});
