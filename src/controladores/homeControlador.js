/**
 * Arquivo: controladores/homeControlador.js
 * Descrição: Este arquivo define um controlador que lida com as requisições para a rota "/".
 * O controlador envia uma resposta simples com o texto "home" ao cliente.
 */

// Exporta uma função que será usada como controlador para a rota "/".
// Parâmetros:
//  - `req` (Request): Objeto da requisição HTTP, contendo informações como cabeçalhos, parâmetros e corpo da requisição.
//  - `res` (Response): Objeto da resposta HTTP, usado para enviar uma resposta ao cliente.
module.exports = (req, res) => {
    // Envia uma resposta com o texto 'home' ao cliente.
    res.send('home');
  };
  