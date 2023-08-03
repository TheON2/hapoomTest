const mysql = require('mysql2/promise');
require('dotenv').config();

async function createDatabase() {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: process.env.DB_PASSWORD,
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS hapoom;');
  console.log('Database created successfully.');

  connection.close();
}

createDatabase();