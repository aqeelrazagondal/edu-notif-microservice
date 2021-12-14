const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const jobsNservices = require('./routes/bulkNotif/jobsNServices');
const trainings = require('./routes/bulkNotif/trainingsJob');
const resumeUpdates = require('./routes/bulkNotif/resumesJob');
const adminNotif = require('./routes/bulkNotif/adminNotif');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(jsonParser);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/jobsservices', jsonParser, jobsNservices);
app.post('/trainingsJob', jsonParser, trainings);
app.post('/resumeUpdates', jsonParser, resumeUpdates);
app.post('/admin-notify', jsonParser, adminNotif);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
