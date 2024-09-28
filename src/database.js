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
    content VARCHAR(1000) NOT NULL
);

CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    gender CHAR(1),
    birthday DATE NOT NULL, 
    signature_id INT 
);



*/