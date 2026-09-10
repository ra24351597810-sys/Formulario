import mysql from 'mysql2/promise';

export const conta = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nuevon',
    password: 'root'
});

console.log("Conectou ao mySQL");