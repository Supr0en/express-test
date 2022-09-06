'use strict';

const express = require('express');

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'exp_test'
});

connection.connect()
connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => { 
    if(err) throw err;
    console.log('The solution is: ', rows[0].solution)
});
connection.end();

const app = express();
const port = 3000;
const host = 'localhost';

app.get('/', (req,res) => res.send('<h1>Hei Maailma!<h1>'));

app.listen(port,host,() => console.log(`${host}:${port} kuuntelee Erik koneella.`));