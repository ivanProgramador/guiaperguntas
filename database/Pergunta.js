//criando um model 

const Sequelize = require('sequelize');
const connection = require('./database');

//a função define serve para criar a tabela no banco 
//no primeiro parametro ela recebe o nome da tabela 
//no segundo ela recebe um json cada objetoi desse json vao ser 
// um campo 

const Pergunta = connection.define('peguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
     }
});

//aqui ele cria a tabela  o oibhjeto dizendo {force:false} 
//significa se existir uma tebela com esse noem na base ele não vai forçar
//a criação de outra.

Pergunta.sync({force:false}).then(()=>{});



