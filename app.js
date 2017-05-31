const path = require('path');
const express = require('express');
const expressVue = require('express-vue');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();

const users = require('./routes/users');

app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', path.join(__dirname, '/views'));
app.set('vue', {
    componentsDir: path.join(__dirname, '/views/components'),
    defaultLayout: 'layout'
});

//Cors Middleware to make request to API on different domains
app.use(cors());

//Body parser middleware
app.use(bodyParser.json());


//
app.use('/users', users);

//Route to homepage
app.get('/', function (req, res) {
    var scope = {
        data: {},
        vue: {}
    };
    res.render('index', scope);
});

app.listen(5000);
console.log('Express server listening on port 5000');