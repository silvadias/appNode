/**
 * Arquivo: app.js
 * Descrição: Este arquivo configura a aplicação utilizando o framework Express.
 * Aqui, definimos os middlewares básicos e as rotas de acesso público.
 */

// Importa o framework Express.
const servidor = require('express');

// Cria uma instância do Express, que será usada para configurar a aplicação.
const app = servidor();

// Importa o arquivo de rotas de livre acesso.
// Este arquivo deve conter as rotas que não requerem autenticação ou restrição.
const livreAcessoRotas = require('./rotas/livreAcessoRotas');

/**
 * Middleware para interpretar requisições com corpo no formato JSON.
 * Este middleware converte o JSON recebido em um objeto JavaScript acessível no `req.body`.
 */
app.use(servidor.json());

/**
 * Define as rotas de livre acesso.
 * Todas as requisições que começarem com '/' serão tratadas pelas rotas definidas
 * no arquivo 'rotas/livreAcessoRotas'.
 */
app.use('/', livreAcessoRotas);

// Exporta a aplicação configurada para que possa ser usada em outros arquivos.
module.exports = app;
