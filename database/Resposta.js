const Sequelize = require("sequelize");
const connection = require('./database');

const Resposta = connection.define('respostas',{

    corpo:{

          type: Sequelize.TEXT,
          allowNull:false
        },
        //Coluna que relaciona a resposta com a pergunta 
        perguntaId:{
            type: Sequelize.INTEGER,
            allowNull:false
        }

});

Resposta.sync({force:false});

module.exports = Resposta;