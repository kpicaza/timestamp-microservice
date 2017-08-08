
module.exports = function (unixTime, callback) {
    if (isNaN(unixTime)) {
        return callback('Invalid Unix time');
    }

    return callback(null, new Date(1000 * parseInt(unixTime)));
};
