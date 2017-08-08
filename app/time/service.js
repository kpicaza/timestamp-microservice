var fromUnix = require('./from-unix');
var fromNatural = require('./from-natural');

var model = {
  unix: null,
  natural: null
};

var run = function (time, callback, next) {
  return callback(time, function (err, date) {
    if (err) {
      return 'undefined' === typeof next ? model : run(time, next);
    }

    model.unix = date.getTime();
    model.natural = date.toDateString();

    return model;
  });
};

module.exports = function (time) {
  return run(time, fromNatural, fromUnix);
};


