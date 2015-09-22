/**
 * Created by usuario on 9/22/15.
 */

var randomNumber = function(max, min) {
    return Math.floor(Math.random() * (1 + max - min) + min).toString();

};

module.exports =  randomNumber;