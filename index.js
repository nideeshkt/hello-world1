var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '250',
        body: 'The time in Los Angeles is: ' + currentTime.toString(),
    });
};
