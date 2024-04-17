require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "task_management_app"
});


module.exports = db;

