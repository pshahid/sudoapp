
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorhandler = require('errorhandler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  http = require('http'),
  passport = require('passport'),
  path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
// app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorhandler());
}

// production only
if (env === 'production') {
  // TODO
}


/*
 * Verify that the user is authenticated to the server
 */
function requireAuthentication(req, res, next) {
  // Would error out here if not authenticated
  console.log("Do auth here.");

  // Call next if authenticated
  next();
}

/**
 * Routes
 */

// JSON API
app.all('/api/*', requireAuthentication);

// Users endpoints
app.post('/api/users/new', routes.newUser);
app.get('/api/users/:id', routes.getUser);
app.put('/api/users/:id', routes.updateUser);
app.delete('/api/users/:id', routes.deleteUser);

// Request endpoints
app.post('/api/invite/new', routes.newRequest);
app.get('/api/invite/:id', routes.getRequest);
app.put('/api/invite/:id', routes.updateRequest);
app.delete('/api/invite/:id', routes.deleteRequest);

// Route object endpoints
app.post('/api/event/new', routes.newRoute);
app.get('/api/event/:id', routes.getRoute);
app.put('/api/event/:id', routes.updateRoute);
app.delete('/api/event/:id', routes.deleteRoute);

// redirect all others to the index (HTML5 history)
// app.get('*', routes.index);

// console.log(app.get(routes.index));
/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});