const express = require("express");
const app = express();
//usando o ejs 
app.set('view engine', 'ejs');




app.get('/:nome/:lang',function(req,res){
   
    
    //poegando os valores que o usuario enviou 

    var nome =req.params.nome;
    var lang = req.params.lang;

     //neste caso para renderizar o index.ejs não é necessarios colocar o caminho 
    //porque o render ja espéra que exista a pasta views e busca dentro dela qualçquer aruivo com o nome index
    //que eu escrevi dentro da função 

    res.render('index',{
        //passando as variaveis para o ejs mostrar no html
        nome:nome,
        lang:lang,
        empresa:"Udemy",
        inscritos: 8000,
        msg: true
    });
    
});



app.listen(8080,()=>{console.log("app rodando !")});
