
module.exports = function (naturalTime, callback) {
    var date = new Date(naturalTime);

    if (isNaN(date.getTime())) {
        return callback(date.toDateString());
    }

    return callback(null, date);
};
