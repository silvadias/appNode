
const { DataTypes } = require('sequelize');
const sequelize = require('../configuracoes/db');
/**
 * Arquivo: controladores/homeControlador.js
 * Descrição: Este arquivo define um controlador que lida com as requisições para a rota "/".
 * O controlador envia uma resposta simples com o texto "home" ao cliente.
 */

// Exporta uma função que será usada como controlador para a rota "/".
// Parâmetros:
//  - `req` (Request): Objeto da requisição HTTP, contendo informações como cabeçalhos, parâmetros e corpo da requisição.
//  - `res` (Response): Objeto da resposta HTTP, usado para enviar uma resposta ao cliente.
//module.exports = (req, res) => {
    // Envia uma resposta com o texto 'home' ao cliente.
    
const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
const ActorMovies = sequelize.define('ActorMovies', {
  MovieId: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie, // 'Movies' would also work
      key: 'id',
    },
  },
  ActorId: {

    type: DataTypes.INTEGER,
    references: {
      model: Actor, // 'Actors' would also work
      key: 'id',
    },
  },
});

Movie.belongsToMany(Actor, { through: ActorMovies });
Actor.belongsToMany(Movie, { through: ActorMovies });




/*  
await Actor.create({
    name:'Mateus'
}) 
 await Movie.create({
    name:'bahia'
}) 
Ator = await Actor.findAll();
res.send('registrado no banco de dados');
   await ActorMovies.create({
        ActorId:'3',
        MovieId:'1'
    }
    )

 */


//////////////////FUNCIONA///////////////////////////

const getHome = async (req, res) => {
   try {

    let actoId = 1; 
    const actor = await Movie.findOne({
        where: { id: actoId },
        attributes:['name'],          
        include: {
          model: Actor, // Inclua os filmes relacionados   
          attributes:['name'],       
          through: { attributes: [] }, // Exclua informações desnecessárias da tabela intermediária
        },
      });
    
    return res.status(200).json({actor});
  } catch (error) {
    console.error('Erro no controlador:', error);
    res.status(500).send('Erro interno do servidor.');
  }
};

// Exporta a função nomeada.
module.exports = {getHome};