var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

/** Logic viking lotto */
let set_globals = require('./logic/globals.js'); // sett all globals for logic
set_globals(); //
/** Logic viking lotto */


/** start data insertion */
require('./logic/insert.js'); // dose this one time every time, server start
/** start data insertion */



/** test on last days since last drawn */
// let days_map = new Map();
// const days = require('./logic/days_since_last_drawn.js');

// Map() => vikingNumber(1 etc ) as key, value 'string data';
// vikingMainLotto.forEach((value, keys) => {
//   // console.log('key: ', keys, ' value: ', value);
//   days_map.set(keys, days(value));
// });

// days_map.forEach((value,keys)=>{
//   console.log('number: ', keys, ' has: ', value, ' days since last drawn');
// });
// console.log(days_map); // Debug Line
/** test on last days since last drawn */



const run_viking_test = require('./logic/test_run_logic.js'); // get test run script
run_viking_test(); // run test

/** run test main script */ 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));


// app.use('/', indexRouter);
app.use(indexRouter);
// app.use('/test/my/long/v1/api', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
