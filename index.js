const express = require("express");
const app = express();
//usando o ejs 
app.set('view engine', 'ejs');




app.get('/:nome/:lang',function(req,res){
   
    
    //poegando os valores que o usuario enviou 

    var nome =req.params.nome;
    var lang = req.params.lang;
    var mostraMsg = false;
    //passando um array de objetos
    var produtos = [
        {nome: 'Doritos', preço:3.14},
        {nome: 'Coca-cola', preço:5.00},
        {nome: 'leite', preço:1.45}
    ]




     //neste caso para renderizar o index.ejs não é necessarios colocar o caminho 
    //porque o render ja espéra que exista a pasta views e busca dentro dela qualçquer aruivo com o nome index
    //que eu escrevi dentro da função 

    res.render('index',{
        //passando as variaveis para o ejs mostrar no html
        nome:nome,
        lang:lang,
        empresa:"Udemy",
        inscritos: 8000,
        msg: mostraMsg,
        produtos: produtos
    });
    
});



app.listen(8080,()=>{console.log("app rodando !")});
