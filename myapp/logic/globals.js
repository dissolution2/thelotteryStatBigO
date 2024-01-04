let numberFrequensSetsClass = require('./class.js');

module.exports =  function set_globals(){

global.length_Of_Random = 0;
global.vikingMainLotto = new Map();  // 1 - 48
global.vikingTall = new Map(); // 1 - 5

global.map = new Map(); // 
global.numberFrequensVikingMainLotto = []; // We can change from array with Map -to only Map !!?? number, value freq but this is to test and learn
global.winningVikingRow = []; // store all the winning numbers 
global.numberFrequensVikingTall  = []; 
global.numberSetsFrequensVikingTall = new Map();

// pre set the global. vikingMainLotto
for(let y=0; y < 48;y++){
    vikingMainLotto.set(y+1,0); // sett the number to the list, and add 0 value for date.
}

// pre set the global. numberFrequensVikingMainLotto 
for(let i=0; i < 49; i++){ //vikingLotto.length
    numberFrequensVikingMainLotto.push(new Map().set(i,0));
}

// pre set the global. numberSetsFrequensVikingTall 
for(let y=1; y < 49; y++){
    numberSetsFrequensVikingTall.set(y,new numberFrequensSetsClass(y));
}

}


