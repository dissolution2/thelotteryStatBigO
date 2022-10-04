/** Playing with to test
 * 
 * Map and Array - Map inside of Array
 * string.replace etc
 * loops
 * 
 * later add -
 * Math - Probability - Graph - Link List etc
 * 
 */

// Map with number key and value date - 0 if not added
let vikingMainLotto = new Map();  // 1 - 48
let vikingTall = new Map(); // 1 - 5

let map = new Map(); // 
let numberFrequensVikingMainLotto = []; // We can change from array with Map -to only Map !!?? number, value freq but this is to test and learn
let winningVikingRow = []; // store all the winning numbers 


let numberFrequensVikingTall  = []; 




for(let y=0; y < 48;y++){
    vikingMainLotto.set(y+1,0); // sett the number to the list, and add 0 value for date.
}

//console.log(vikingLotto);


for(let i=0; i < 49; i++){ //vikingLotto.length
    numberFrequensVikingMainLotto.push(new Map().set(i,0));
}

//
function inFunc_findFunctionFreq(positionOfVikingLotto){
    return map = numberFrequensVikingMainLotto[positionOfVikingLotto].get(positionOfVikingLotto);
}

function inFunc_lookUpNummberFreq(positionOfVikingLotto){
    let _map = new Map();
    _map = numberFrequensVikingMainLotto[positionOfVikingLotto];

    if(_map.has(positionOfVikingLotto)){
        console.log("Nummber: " + positionOfVikingLotto + " has frequency: " + _map.get(positionOfVikingLotto));
    }

    return _map.get(positionOfVikingLotto);
}

function inFunc_lookUpNummberViking(position){
    if(vikingMainLotto.has(position)){
        console.log("Nummber: " + position + " Last added date: " + vikingMainLotto.get(position));
    }
}



function inFunc_getFrequensListOfNummbers(menuArg){
    switch(menuArg){
        case 1: // get the hol list!!
            for(let x=1; x < numberFrequensVikingMainLotto.length; x++){
                inFunc_lookUpNummberFreq(x);
            }
            break;
        case 2: // get only freq number > 0
            for(let x=1; x < numberFrequensVikingMainLotto.length; x++){
                let _map = new Map();
                _map = numberFrequensVikingMainLotto[x];
                if(_map.has(x)){
                    if(_map.get(x) != 0){
                        console.log("Number: " + x + " has frequency: " + _map.get(x));
                    }
                }
            }
            break;
    }
}

function inFunc_setFunctionFreq(position, freq){
    let map = new Map();
    map = numberFrequensVikingMainLotto[position];

    if(map.has(position)){
        map.set(position,freq);
    }
}


function inFunc_setFunctionVikingLottoDrawnDate(position, date){
    if(vikingMainLotto.has(position)){
        vikingMainLotto.set(position,date);
    }
}

function inFunc_setVikingLottoWinningRowToFreq(n_1, n_2, n_3, n_4, n_5, n_6, n_7){
    let input = [n_1, n_2, n_3, n_4, n_5, n_6, n_7];
    winningVikingRow.push(input); 
    for(let t=0; t < input.length;t++){
        
        /** set Map key numbers, value frequense of that number been drawn */
        inFunc_setFunctionFreq(input[t], inFunc_findFunctionFreq(input[t]) + 1);
        /** set Map key numbers, value toDay's date - add on Every Wensday etc. */
        inFunc_setFunctionVikingLottoDrawnDate(input[t],dateFunction(1));

    }
}

function dateFunction(arg){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    /** to use with registraiting the winning row and later calculate days between days etc */
    switch(arg){
        case 1:
            return today;
        }
}

function inFunc_printVikingLottoWinningRows(){
    for(let u=0; u < winningVikingRow.length;u++){
        let rowString = winningVikingRow[u];
        rowString = rowString.toString().replace(/\,/gi, " - ");
        
        console.log("Winning Row: " + rowString);
    }
}

/** Add the winning rows */
inFunc_setVikingLottoWinningRowToFreq(15,48,24,42,7,13,2);
inFunc_setVikingLottoWinningRowToFreq(6,9,19,24,27,35,3);
inFunc_setVikingLottoWinningRowToFreq(7,34,21,18,35,11,4);

function lookUpStats(menuArg, arg){

    switch(menuArg){
        case 1:
            inFunc_lookUpNummberFreq(arg);
            inFunc_lookUpNummberViking(arg);
            break;
        case 2:
            inFunc_getFrequensListOfNummbers(arg); // 1. hole list, 2 freq > 0
            break;
        case 3:
            inFunc_printVikingLottoWinningRows();
            break;
        case 0:
        default :
            console.log("Menu\n" + 
            "1 Look up a number info -arg {number} \n" +
            "2 prints list with -arg{1 hole list} {2 freq > 0}\n" +
            "3 prints the winning row list\n\n");
        break;
    }
    
}

function menu(){
  console.log("Menu() -this\n" +
  "lookUpStats(MenuArg, arg to the list) - 0 to get list menu\n\n");
}
//eks
menu();
lookUpStats(0);
lookUpStats(3);
lookUpStats(1,24);
//lookUpStats(2,1);
lookUpStats(2,2);











