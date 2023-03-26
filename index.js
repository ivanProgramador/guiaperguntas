const express = require("express");
const app = express();
//usando o ejs 
app.set('view engine', 'ejs');




app.get('/',function(req,res){
    //neste caso para renderizar o index.ejs não é necessarios colocar o caminho 
    //porque o render ja espéra que exista a pasta views e busca dentro dela qualçquer aruivo com o nome index
    //que eu escrevi dentro da função 

    res.render('index');
    
});



app.listen(8080,()=>{console.log("app rodando !")});
