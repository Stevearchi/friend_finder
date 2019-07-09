var friends = require('../data/friends');


  // API GET Requests
  // Below code handles when users "visit" a page.

module.exports = function (app) {

    app.get('/api/friendslist', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friendslist', function (req, res) {
        friends.push(req.body);
    });
};