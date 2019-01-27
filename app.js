// server side

const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();


const {getLoginPage, getAddAccount, addAccount} = require('./routes/index.js');
const {getMainPage} = require('./routes/main-page.js')
const {getLentPage} = require('./routes/lent.js')
const {getDebtPage} = require('./routes/debt.js')

const port = 5000;

// create connection to database
// mysql.createConnection takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'debtDB'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to debtDB!');
});
global.db = db;

app.set('port', process.env.port || port); // express will use specified port
app.set('views', __dirname + '/views'); // express will look at /views folder to render view
app.set('view engine', 'ejs') // configure template engine
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))) // conf express to use the public folder
app.use(fileUpload()); // configure fileUpload

app.get('/', getLoginPage);
app.get('/addacc', getAddAccount);
app.post('/addacc', addAccount);
app.get('/main', getMainPage);
app.get('/lent', getLentPage);
app.get('/debt', getDebtPage);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
