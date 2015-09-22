/**
 * Created by usuario on 9/22/15.
 */

var randomNumber = require('./module1');
var toDollar = require('./module2');

var figureItOut = function(){
    return toDollar(randomNumber(100, 1000000));
};

var balance = function(balance){
    var message = "Account Balance: \n";
    return message;
};

exports.figureItOut = figureItOut;
exports.balance = balance;
