var friends = require('../data/friends.js');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);

        
        var compatabilityArr = [];
        var checkerArr = [];
        var bestFriend;
        function compatability() {
            for (let i =0; i < friends.length; i ++){
                var value = 0;
                if (newFriend.name !== friends[i].name){
                    for (let j = 0; j < newFriend.scores.length; j++){
                        console.log(parseInt(newFriend.scores[j]))
                        console.log(parseInt(friends[i].scores[j]))
                        value += Math.abs((parseInt(newFriend.scores[j])) - (parseInt(friends[i].scores[j])))
                    }
                    compatabilityArr.push({friendScore: value, friendName: friends[i].name})
                }
            }
            for (let x = 0; x < compatabilityArr.length; x++){
                checkerArr.push(compatabilityArr[x].friendScore)
            }
            console.log(checkerArr)
            var checker = Math.min.apply(null, checkerArr)
            console.log(checker)
            for (let k = 0; k < compatabilityArr.length; k++){
                if (checker === compatabilityArr[k].friendScore){
                    bestFriend = {Name: compatabilityArr[k].friendName, FriendValue: checker};
                }
            }
        }
        compatability();
        res.json(bestFriend)
    });
}