
/* assumptions
1. doora is the answer
2. user choice will be any of these three doors depending on the userChoice output. (a = .3333 or less b= between .3333 and .6666 c= the rest)
*/
var switchWin = 0;
var switchLoss = 0;
var noswitchWin = 0;
var noswitchLoss = 0;

var Switch = function(){
    var userChoice = Math.random()
    if (userChoice <= .3333 /*correct answer*/) {
        switchLoss ++;
    }
    else if (userChoice > .3333 && userChoice <=.6666 /*wrong answer*/) {
        switchWin ++;
    }
    else /*wrong answer*/{
       switchWin ++;
    }
};

var noSwitch = function(){
    var userChoice = Math.random()
    if (userChoice <= .3333 /*correct answer*/) {
        noswitchWin ++;
    }
    else if (userChoice > .3333 && userChoice <=.6666 /*wrong answer*/) {
        noswitchLoss ++;
    }
    else /*wrong answer*/{
        noswitchLoss ++;
    }
}

for (var i = 0; i <1000; i++){
    Switch();
    noSwitch();
};

var switchWinPercentage = "Switch Strategy: "+switchWin/10+"%";
var noSwitchWinPercentage = "NoSwitch Strategy: "+noswitchWin/10+"%";
console.log(switchWinPercentage);
console.log(noSwitchWinPercentage);
