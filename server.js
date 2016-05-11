var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();

// DB
mongoose.connect('mongodb://localhost/drhorriblesblog')

// App
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));

// Routes
app.get('/', function(req, res) {
  res.send({message: 'server'});
});
app.use('/api/posts', require('./controllers/posts'));

// Server
var port = process.env.PORT || 3000;
var server = http.createServer(app); // http is native node library
server.listen(port, function(data) {
  console.log('Andre', port);
})
