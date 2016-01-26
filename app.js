var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Setup webpack middleware and config
var webpack = require("webpack");
var webpack_middleware = require("webpack-dev-middleware");
var webpack_config = require("./webpack.config.js");
var compiler = webpack(webpack_config);
var wpmw_config = {
    // all options optional

    noInfo: false,
    // display no info to console (only warnings and errors)

    quiet: false,
    // display nothing to the console

    lazy: false,
    // switch into lazy mode
    // that means no watching, but recompilation on every request

    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    // watch options (only lazy: false)

    publicPath: "/",
    // public path to bind the middleware to
    // use the same as in webpack

    headers: { "X-Custom-Header": "yes" },
    // custom headers

    stats: {
        colors: true
    }
    // options for formating the statistics
}


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(webpack_middleware(compiler,wpmw_config));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
