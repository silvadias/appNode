/**
 * Arquivo: rotas/livreAcessoRotas.js
 * Descrição: Este arquivo define as rotas públicas de acesso livre, utilizando o Express Router.
 * Ele associa as rotas às ações definidas no controlador correspondente.
 */

// Importa o framework Express.
const servidor = require('express');

// Cria uma instância do Router do Express, que será usada para definir as rotas.
const rota = servidor.Router();

// Importa o controlador responsável pelas ações relacionadas à rota principal.
const homeControlador = require('../controladores/homeControlador');

/**
 * Define a rota principal (`/`) que responde às requisições GET.
 * A lógica para processar a requisição e enviar a resposta é delegada ao `homeControlador`.
 */
rota.get('/',homeControlador.getHome);


// Exporta o objeto de rotas configurado para ser utilizado na aplicação principal.
module.exports = rota;
