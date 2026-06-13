require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/filmes', require('./routes/filmes'));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
