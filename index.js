const express = require("express");
const app = express();
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
    res.send("Formulario recebido");
});


app.listen(8080,()=>{console.log("app rodando !")});
