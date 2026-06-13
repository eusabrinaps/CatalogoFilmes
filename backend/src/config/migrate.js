const pool = require('./db');

async function migrate() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS filmes (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            genero VARCHAR(100),
            ano INTEGER,
            sinopse TEXT
        )
    `);
    console.log('Migration executada com sucesso');
    await pool.end();
}

migrate().catch(err => {
    console.error('Erro na migration:', err.message);
    process.exit(1);
});
