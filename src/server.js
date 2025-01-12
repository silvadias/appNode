/**
 * Arquivo: servidor.js
 * Descrição: Este arquivo é responsável por inicializar o servidor da aplicação, autenticar
 * e sincronizar o banco de dados e escutar as requisições na porta definida.
 */

// Importa a aplicação configurada no arquivo 'app.js'.
const app = require('./app');

// Importa a configuração da porta definida no arquivo './configuracoes/env'.
const { PORTA } = require('./configuracoes/env');

// Importa a instância do Sequelize configurada no arquivo './configuracoes/db'.
const sequelize = require('./configuracoes/db');

/**
 * Função responsável por iniciar o servidor.
 * - Autentica a conexão com o banco de dados usando Sequelize.
 * - Sincroniza as tabelas do banco de dados conforme os modelos definidos.
 * - Inicia o servidor na porta especificada.
 */
const iniciarServidor = async () => {
    try {
        // Tenta autenticar a conexão com o banco de dados.
        await sequelize.authenticate();
        console.log('Banco de Dados Autenticado');

        // Sincroniza os modelos definidos no Sequelize com o banco de dados.
        await sequelize.sync();
        console.log('Banco de Dados sincronizado.');

        // Inicia o servidor na porta definida em 'configuracoes/env'.
        app.listen(PORTA, () => {
            console.log(`Servidor rodando na porta ${PORTA}`);
        });
    } catch (error) {
        // Captura e exibe qualquer erro que ocorra durante o processo.
        console.log('Erro ao iniciar o servidor:', error);
    }
};

// Chama a função para iniciar o servidor.
iniciarServidor();
