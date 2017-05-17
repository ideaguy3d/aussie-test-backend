/**
 * Group1Controller
 *
 * @description :: Server-side logic for managing group1s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    food: function (req, res) {
        res.send("you hit the food end point !! ^_^");
    },
    aussieFood: function (req, res) {
        res.send("Aussie Food end point :)");
    },
    special: {
        food: function(req, res){
            res.send("You end the special food endpoint ! YUMMY.")
        }
    }
};

