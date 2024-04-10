var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/resource', resourceRouter);

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

// MongoDB connection
require('dotenv').config();
const connectionString = process.env.MONGO_CON;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// MongoDB model and seeding
const Book = require("./models/books");

async function recreateDB() {
  try {
    await Book.deleteMany();

    const booksData = [
      { title: 'It starts with us', author: 'Collen Hoover', year: 2022 },
      { title: 'Meditations', author: 'Marcus Aurelius', year: 1559 },
      { title: 'History of the humankind', author: 'Yuval Noah', year: 2011 }
    ];

    await Book.insertMany(booksData);
    console.log("Books collection seeded successfully");
  } catch (error) {
    console.error("Error seeding books collection:", error);
  }
}

let reseed = true;
if (reseed) {
  recreateDB();
}

module.exports = app;