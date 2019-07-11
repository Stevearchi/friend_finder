var friends = require('../data/friends');


// API GET Requests
// Below code handles when users "visit" a page.

module.exports = function (app) {

    app.get('/api/friendslist', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friendslist', function (req, res) {

        var newProfile = req.body;
        for (var i = 0; i < newProfile.scores.length; i++) {
            newProfile.scores[i] = parseInt(newProfile.scores[i]);
        };

        // Math
        var bestMatchScore = 41; // the farthest apart two people's total scores can be is 40
        var bestMatch = {};
        for (var i = 0; i < friends.length; i++) {
            var score = 0;
            for (var j = 0; j < 9; j++) {
                var miniScore = Math.abs(friends[i].scores[j] - newProfile.scores[j]);
                score += miniScore;
            }
            if (score < bestMatchScore) {
                bestMatchScore = score;
                bestMatch = friends[i];
            }
        }
     
        
        friends.push(newProfile);
        res.end();
    });
};