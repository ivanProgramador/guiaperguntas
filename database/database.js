const Sequelize = require('sequelize');

//informando o nome da base de dados 
const connection = new Sequelize('guiaperguntas','root','1234',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection;

