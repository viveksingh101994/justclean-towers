const express = require('express');
const bodyParser = require('body-parser');
require('./database/connection');
const towerRoute = require('./modules/tower/tower.route');
const app = express();
const { serverError } = require('./common/response');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/towers', towerRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.sendStatus(404);
});

// error handler
app.use(function (errObj, req, res, next) {
  // set locals, only providing error in development
  let errorResp = errObj;
  if (errObj instanceof Error) {
    errorResp = serverError();
    errorResp.err = errObj;
  }
  next(errorResp);
});

app.use((resData, req, res, next) => {
  if (resData.status === 200) {
    res.send(resData.body);
  } else {
    res.status(resData.status);
    res.json(resData.message);
  }
});

module.exports = app;
