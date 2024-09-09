require('dotenv').config({ path: 'variaveis.env' })

const mysql      = require('mysql2')
const connection = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE
})

connection.connect((err) => {
    if (err) throw err
    console.log(`Conectado à Base de Dados: ${process.env.BD_DATABASE}`)
})

module.exports = connection


// Criação do Banco de Dados

/*

CREATE DATABASE IF NOT EXISTS db_moth;

USE db_moth;

CREATE TABLE IF NOT EXISTS link (
    path CHAR(6) PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR(45) NOT NULL,
    content VARCHAR(255) NOT NULL
);

*/