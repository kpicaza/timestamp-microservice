var express = require('express');
var path = require('path');
var timeService = require('./time/service');

var app = express();

app.get("/", function (request, response) {
    response.sendFile(path.resolve('views/index.html'));
});

app.get("/:time", function (request, response) {
    response.send(JSON.stringify(
      timeService(request.params.time)
    ));
});


var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
