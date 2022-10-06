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
let numberSetsFrequensVikingTall = new Map();

/** value number 24 
 * WinningRow index 0
 *  befor 33 after 2
 * WinningRow index 1
 *  befor 48 after 42
 * 
 * value = 24
 * befor.set(33,0)
 * after.set(2,0)
 * 
 * befor.set(48,0)
 * after.set(42,0)
 * 
 * if(befor.has(key))
 *  freqNumber = befor.get(key)
 *  befor.set(key,freqNubmer + 1)
 * 
 * ?
 * both ways !? so we have then every drawn number befor and after and there frequency drawn in that order.
 * befor.set(2,0)
 * after.set(48,0)
 * 
 */

class numberFrequensSetsClass{
    constructor(value){
        this.numberValue = value;
        this.befor = new Map();
        this.after = new Map();
    }

    getNumberValue(){
        return this.numberValue;
    }

    findBefor(valueToFind){
        for(let i=0; i < this.befor.size; i++){
            if(this.befor.has(valueToFind)){
                return true;
            }
        }
        return false; 
    }
    
    findAfter(valueToFind){
        for(let i=0; i < this.after.size; i++){
            if(this.after.has(valueToFind)){
                return true;
            }
        }
        return false; 
    }

    addBeforValue(beforV){

        switch(this.findBefor(beforV)){
            case true:
                this.befor.set(beforV, this.befor.get(beforV) + 1);
                break;
            case false:
                this.befor.set(beforV,1);
                break;
        }
        
    }

    addAfterValue(afterV){

        switch(this.findAfter(afterV)){
            case true:
                this.after.set(afterV, this.after.get(afterV) + 1);
                break;
            case false:
                this.after.set(afterV,1);
                break;
        }
        
    }

    getBeforValue(){
        for (var [key, value] of this.befor) {
            console.log("Befor Number: " + key + " Frequesn drawn: " + value);
        }
    }

    getAfterValue(){
        for (var [key, value] of this.after) {
            console.log("After Number: " + key + " Frequesn drawn: " + value);
        }
    }


}

for(let y=1; y < 49; y++){
    numberSetsFrequensVikingTall.set(y,new numberFrequensSetsClass(y));
}
function test_numberSetsFrequensVikingTall(value, beforV, afterV){

    if(numberSetsFrequensVikingTall.has(value)){
        
        /** beforV */
        //console.log("set main numbers with nuberFrqClass empty Map's")
        numberSetsFrequensVikingTall.get(value).addBeforValue(beforV);
        /** Print Check Value -on error!! */
        //console.log("MainLottoNumber: " + numberSetsFrequensVikingTall.get(value).getNumberValue());
        //numberSetsFrequensVikingTall.get(value).getBeforValue();
        
        /** afterV */
        numberSetsFrequensVikingTall.get(value).addAfterValue(afterV);
        /** Print Check Value -on error!! */
        //console.log("MainLottoNumber: " + numberSetsFrequensVikingTall.get(value).getNumberValue());
        //numberSetsFrequensVikingTall.get(value).getAfterValue();

    }
}

function printAllSets(){
    for(let y=1; y < 49; y++){
        console.log("MainLottoNumber: "+  numberSetsFrequensVikingTall.get(y).getNumberValue());
        numberSetsFrequensVikingTall.get(y).getBeforValue();
        numberSetsFrequensVikingTall.get(y).getAfterValue();
    }
}

function printLookUpFreqOfaMainNumber(value){
    console.log("MainLottoNumber: "+  numberSetsFrequensVikingTall.get(value).getNumberValue());
    numberSetsFrequensVikingTall.get(value).getBeforValue();
    numberSetsFrequensVikingTall.get(value).getAfterValue();
}

/** testing Class */
//test_numberSetsFrequensVikingTall(24,2,33);
//test_numberSetsFrequensVikingTall(24,4,33);
//test_numberSetsFrequensVikingTall(24,4,33); // dublicate 4 freq = 2
//test_numberSetsFrequensVikingTall(25,1,33);
//test_numberSetsFrequensVikingTall(25,6,33);
//test_numberSetsFrequensVikingTall(25,2,33);
//test_numberSetsFrequensVikingTall(25,6,33); // dublicate 6 freq = 2
//printAllSets();



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

function inFunc_setsFrequenseOfSets(){
    // use winningVikingRow
    // eks (15,48,24,42,7,13,2)
    /**
     * Number
     *  15 {=> After 48}
     *  48 {<= Befor 15 => After 24}
     *  24 {<= Befor 48 => After 42}
     *  42 {<= Befor 24 => After 7}
     *  7 {<= Befor 42 => After 13}
     *  2 = VikingNumber
     * 
     *  Array[index] = NumberValue;
     *  Array[index - 1] = Befor != Null of index
     *  Array[index + 1] = After != 5 of index , index 6 = VikingNumber
     * 
     */
    test_numberSetsFrequensVikingTall(24,2,33);
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
        //let rowString = winningVikingRow[u];
        //rowString = rowString.toString().replace(/\,/gi, " - ");
        //console.log("Winning Row: " + rowString);
        console.log("Winning Row: " + winningVikingRow[u].toString().replace(/\,/gi, " - "));
    }
}

/** Add the winning rows */

inFunc_setVikingLottoWinningRowToFreq(6,9,19,24,27,35,3); //
inFunc_setVikingLottoWinningRowToFreq(7,34,21,18,35,11,4); //


inFunc_setVikingLottoWinningRowToFreq(15,48,24,42,7,13,2); // Ons 21 sep
inFunc_setVikingLottoWinningRowToFreq(33,24,2,42,17,44,2) // Ons 28 sep
inFunc_setVikingLottoWinningRowToFreq(5,45,6,35,11,31,1); // Ons 5 okt

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
test_numberSetsFrequensVikingTall(24,19,27); // Value - b - A 
test_numberSetsFrequensVikingTall(24,48,42);
test_numberSetsFrequensVikingTall(24,33,2);
printLookUpFreqOfaMainNumber(24);




//lookUpStats(3);
lookUpStats(1,24);
//lookUpStats(2,1);
//lookUpStats(2,2);














