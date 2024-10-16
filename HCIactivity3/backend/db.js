const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dnyanmauli',
    database: 'university'
});

connection.connect((err) => {
    if(err)
        throw new err;
    console.log("Connected to mysql db");
});

module.exports = connection;
