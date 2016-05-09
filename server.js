var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
var mongoose = require('mongoose');
var Post = require('./models/post');
var port = process.env.PORT || 3000;
var app = express();

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/')));

// Database
mongoose.connect('mongodb://localhost/drhorriblesblog');
app.use('/api/posts', require('./controllers/posts'));

app.get('/', function(req, res) {
  res.sendFile(__dirnmae, '/index.html');
})

app.listen(port, function() {
  console.log('Captain Hammer: ' + port + ' | Dr. Horrible: 1')
});