module.exports = function(app) {
    var Event = require("../models/event");
    var path = require('path');

    // UI routes
    app.get('/', function(req,res){
            res.type('text/html');
            res.sendFile(path.join(__dirname, '../', 'index.html'));
    });


    // API routes
    app.get('/api/events', function(req,res) {
        Event.getEvents(function (err, events) {
            if (events) {
                res.json(events);    
            } else {
                res.status(404).send("404 - not found");    
            }
        });
    });

}