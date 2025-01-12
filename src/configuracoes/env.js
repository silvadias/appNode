/**
 * Arquivo: configuracoes/env.js
 * Descrição: Este arquivo configura e exporta as variáveis de ambiente utilizadas pela aplicação.
 * Ele utiliza o pacote `dotenv` para carregar as variáveis de ambiente definidas em um arquivo `.env`.
 */

// Carrega as variáveis de ambiente do arquivo `.env` para o `process.env`.
require('dotenv').config();

/**
 * Exporta as variáveis de ambiente que serão utilizadas na aplicação.
 * Essas variáveis configuram a conexão com o banco de dados e a porta do servidor.
 */
module.exports = {
  // Configurações do banco de dados:
  DB_NOME: process.env.DB_NOME,          // Nome do banco de dados.
  DB_USUARIO: process.env.DB_USUARIO,   // Nome de usuário para acessar o banco de dados.
  DB_SENHA: process.env.DB_SENHA,       // Senha para o banco de dados.
  DB_SERVIDOR: process.env.DB_SERVIDOR, // Endereço do servidor de banco de dados.
  DB_PORTA: process.env.DB_PORTA,       // Porta usada pelo banco de dados.
  DB_TIPO: process.env.DB_TIPO || 'mysql', // Tipo do banco de dados (ex.: MySQL, PostgreSQL).
                                           // Valor padrão: 'mysql'.

  // Configuração da porta do servidor:
  PORTA: process.env.PORTA,             // Porta onde o servidor irá escutar.
};
