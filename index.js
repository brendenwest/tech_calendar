var express = require("express");
var app = express();

// configure Express app
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.use('/api', require('cors')());

var routes = require("./lib/routes")(app);

app.use(function(req,res) {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), function() {
    console.log('Express started');    
});