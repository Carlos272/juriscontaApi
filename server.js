var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
require('dotenv').config()

app.use(cors());


var port = process.env.PORT || 8082;


var sendmenssage = require('./app/routes/v1/SendMessege/SendMessage');

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.use('/api/v1/SendMessage', sendmenssage);

app.listen(8082);
console.log('Magic happens at http://localhost:' + port);