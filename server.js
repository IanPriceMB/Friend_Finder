var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

var value;
var compatabilityArr = [];
function compatability() {
    for (let i =0; i < friends.length; i ++){
        if (newFriend.name !== friends[i].name){
            for (let j = 0; j < newFriend.scores.length; j++){
                value += Math.abs(newFriend.scores[j] - friends[i].scores[j])
            }
            compatabilityArr.push({friendScore: value, friendName: friends[i].name})
        }
    }
    var checker = Math.min.apply(null, compatabilityArr.friendScore)
    for (let k = 0; k < compatabilityArr.length; k++){
        if (checker === compatabilityArr[k].friendScore){
            return compatabilityArr[k].friendName;
        }
    }
}

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});