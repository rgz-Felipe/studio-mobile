const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'usuario_postgres',
  host: 'localhost',
  database: 'seu_banco_de_dados',
  password: 'sua_senha',
  port: 5432,
});

app.use(express.json());

app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter usuários', error);
    res.status(500).json({ error: 'Erro ao obter usuários' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
