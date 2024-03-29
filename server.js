var express = require('express');
var path = require('path');
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;



// Parse request body as JSON; allows us to use req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function(){
 // Log (server-side) when our server has started
 console.log("Server listening on: http://localhost:" + PORT);
});