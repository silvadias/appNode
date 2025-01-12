/**
 * Arquivo: configuracoes/db.js
 * Descrição: Este arquivo configura e exporta a instância do Sequelize para gerenciar a conexão com o banco de dados.
 * Ele utiliza as variáveis de ambiente definidas em `env.js` para configurar os parâmetros da conexão.
 */

// Importa o pacote Sequelize para gerenciar a conexão com o banco de dados.
const { Sequelize } = require('sequelize');

// Importa as configurações do banco de dados do arquivo `env.js`.
const { DB_NOME, DB_USUARIO, DB_SENHA, DB_SERVIDOR, DB_PORTA, DB_TIPO } = require('./env');

/**
 * Cria uma instância do Sequelize para configurar a conexão com o banco de dados.
 * Parâmetros:
 *  - DB_NOME: Nome do banco de dados.
 *  - DB_USUARIO: Usuário com permissões para acessar o banco.
 *  - DB_SENHA: Senha do usuário configurado.
 *  - Configurações adicionais:
 *      - `host`: Endereço do servidor onde o banco de dados está hospedado.
 *      - `port`: Porta usada pelo banco de dados.
 *      - `dialect`: Tipo do banco de dados (ex.: MySQL, PostgreSQL).
 */
const sequelize = new Sequelize(
  DB_NOME,   // Nome do banco de dados.
  DB_USUARIO, // Nome do usuário.
  DB_SENHA,   // Senha do banco de dados.
  {
    host: DB_SERVIDOR, // Endereço do servidor de banco de dados.
    port: DB_PORTA,    // Porta usada pelo banco de dados.
    dialect: DB_TIPO,  // Tipo de banco de dados (dialeto).
  }
);

// Exporta a instância do Sequelize para ser usada em outros módulos da aplicação.
module.exports = sequelize;
