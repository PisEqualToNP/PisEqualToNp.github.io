// server side

const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const port = 5000;

// create connection to database
// mysql.createConnection takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'nickjon20',
    database: 'debtDB'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MarketDB!');
});
global.db = db;



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
