const express = require('express');
const path = require('path');
const createError = require('http-errors');
const logger = require('morgan');
const hbs = require('hbs');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerHelper(
  'translate',
  require('./helpers/handlebars-translate')
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


// routes and navigation
const indexRouter = require('./routes/index');
const citiesRouter = require('./routes/cities');
const forecastRouter = require('./routes/api/forecast-endpoint');

app.use('/', indexRouter);
app.use('/cities', citiesRouter);
app.use('/api/v1/forecast', forecastRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
