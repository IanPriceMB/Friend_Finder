var friends = require('../data/friends.js');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(friends);
    });
}