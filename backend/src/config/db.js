const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

pool.connect()
    .then(client => {
        console.log('Conectado ao banco de dados');
        client.release();
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco:', err.message);
        process.exit(1);
    });

module.exports = pool;
