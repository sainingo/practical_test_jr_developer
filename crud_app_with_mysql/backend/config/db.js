require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crud_app"
});


module.exports = db;

