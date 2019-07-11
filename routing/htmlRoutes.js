var path = require('path');  // Included for use in app.gets - helps get the correct path



// Routing

module.exports = function(app){
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });
    
    // This will handle everything except '/survey'
    app.get("/:any", function (req, res){

        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/", function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}