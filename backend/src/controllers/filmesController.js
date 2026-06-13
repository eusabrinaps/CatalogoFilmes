// eslint-disable-next-line no-undef
const pool = require('../config/db');

const getAll = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM filmes ORDER BY id');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getById = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM filmes WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'Filme não encontrado' });
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const create = async (req, res) => {
    const { nome, genero, ano, sinopse } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO filmes (nome, genero, ano, sinopse) VALUES ($1, $2, $3, $4) RETURNING *',
            [nome, genero, ano, sinopse]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const update = async (req, res) => {
    const { nome, genero, ano, sinopse } = req.body;
    try {
        const result = await pool.query(
            'UPDATE filmes SET nome=$1, genero=$2, ano=$3, sinopse=$4 WHERE id=$5 RETURNING *',
            [nome, genero, ano, sinopse, req.params.id]
        );
        if (result.rows.length === 0) return res.status(404).json({ error: 'Filme não encontrado' });
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const remove = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM filmes WHERE id=$1 RETURNING *', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'Filme não encontrado' });
        res.json({ message: 'Filme removido com sucesso' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// eslint-disable-next-line no-undef
module.exports = { getAll, getById, create, update, remove };
