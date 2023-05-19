function vikingRandomGenerator(number, pol, excludeNumber_one, excludeNumber_two, excludeNumber_thre){
    let num = [];
    
    for(let index = 1; index < number + 1; index++){
        
        let random_number = Math.floor(Math.random() * pol + 1); // + 1 so we dont get 0 as a number generated
        
        if(index == 1){
            num.push(random_number);
        }
        
        if(index > 1){
            let found = 0;
        
            for(let srIndex = 0; srIndex < num.length; srIndex++ ){

                if(num[srIndex] == random_number){
                    found = 1;
                    break;
                }

                if(excludeNumber_one == random_number || excludeNumber_two == random_number || excludeNumber_thre == random_number){
                    found = 1
                    break;
                }

            }
            // ! found = add to array
            if(found != 1){
                num.push(random_number);
            }
            
            // found = subtract index to loop one more time
            if(found == 1){
                found = 0; // resett found
                index--;
            }
        }
    }
    return num;
};
// const { randomCupong } = require('randomGen');

// number, pol, excludeNumber_one, excludeNumber_two, excludeNumber_thre
let cupong = [];
cupong = vikingRandomGenerator(3,48,22,35,41);
cupong.push(22);
cupong.push(35);
cupong.push(41);
cupong.push((vikingRandomGenerator(1,5)).pop());
console.log("cupong: ", cupong);

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

// an remember ??
// jQuery(document).ready(function($){

//     // All your code using $
    
//     });

// function subtract(a, b){
//     return a - b;
// }

//module.exports.subtract = subtract;

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

/***  Date's */
function getDateDaysSince(StringDate){
    let now = new Date();
    let acquired = new Date(StringDate);
    let elapsed = now - acquired;
    let daysSinceAxquierd = Math.floor(elapsed / 86400000); //(1000 * 3600 * 24)); //86400000); // readability 1000 sec, 3600 Hours, 24 Hours in a day.
    return daysSinceAxquierd;
}


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
            console.log("Befor Number: " + key + " frequency drawn: " + value);
        }

        for(let k of this.befor.keys()){
            //console.log("keys: " + k);

            $("document").ready(function() {
                $("#look-up-sequens-freq-befor").append("<button id=\"Freq\" class=\"button button1\">Befor: " + k + "</button>");
                //$("#look-up-sequens-freq").append("<button id=\"" +  k + "\" class=\"button button1\">Befor: " + k + "</button>");
                //$("#look-up-nummber-freq").append("<p id=\"" +  k + "\" >" + this.after. + "</p>");
            });
        }
        
        for(let v of this.befor.values()){
            //console.log("Values: " + v);

            $("document").ready(function() {
                $("#look-up-freq-befor").append("<button id=\"Freq\" class=\"button button1\">Freq: " + v + "</button>");
                //$("#look-up-nummber-freq").append("<p id=\"" +  v + "\" >" + v +  "</p>");
            });

        }



    }

    getAfterValue(){
        
        

        /** for console debug */
        for (var [key, value] of this.after) {
            console.log("After Number: " + key + " frequency drawn: " + value);
        }

        for(let k of this.after.keys()){
            //console.log("keys: " + k);

            $("document").ready(function() {
                $("#look-up-sequens-freq-after").append("<button id=\"Freq\" class=\"button button1\">After: " + k + "</button>");
                //$("#look-up-nummber-freq").append("<p id=\"" +  k + "\" >" + this.after. + "</p>");
            });
        }
        
        for(let v of this.after.values()){
            //console.log("Values: " + v);

            $("document").ready(function() {
                $("#look-up-freq-after").append("<button id=\"Freq\" class=\"button button1\">Freq: " + v + "</button>");
                //$("#look-up-nummber-freq").append("<p id=\"" +  v + "\" >" + v +  "</p>");
            });
            
        }

        return this.after;
    }


}

/** numberSetsFrequensVikingTall = Map 
 * key: 1 to 48
 * Value: numberFrequensSetsClass = Class of value number's 1 to 48
 * and two Maps after and befor :- Set later.
 * 
 */
for(let y=1; y < 49; y++){
    numberSetsFrequensVikingTall.set(y,new numberFrequensSetsClass(y));
}

function inFunc_numberSetsFrequensVikingTall(value, beforV, afterV){

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
    //let test_map = new Map();

    //test_map = numberSetsFrequensVikingTall.get(value).getAfterValue();
/*
    for (var [key, value] of test_map) {
        console.log("After Number: " + key + " frequency drawn: " + value);
        
        

    }
*/
}

function printLookUpFreqOfMainNumbersAll(){
    for(let i=1; i < numberSetsFrequensVikingTall.size - 1; i++ ){
        console.log("MainLottoNumber: "+  numberSetsFrequensVikingTall.get(i).getNumberValue());
        numberSetsFrequensVikingTall.get(i).getBeforValue();
        numberSetsFrequensVikingTall.get(i).getAfterValue();
    }
}

/** testing Class */

for(let y=0; y < 48;y++){
    vikingMainLotto.set(y+1,0); // sett the number to the list, and add 0 value for date.
}


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
        
        let element;
        $("document").ready(function() {
                element = document.getElementById('n_number');
                if(element != null){
                    element.remove();
                }
                $("#look-up-nummber-freq").append("<button id=\"n_number\" class=\"button button1\">" + positionOfVikingLotto + "</button>");
                
                let btn_getNumberFreq;

                btn_getNumberFreq = document.getElementById('n_number');
                btn_getNumberFreq.addEventListener('click', event => {
                    //inFunc_lookUpNummberFreq(1);

                    let test_element = document.querySelectorAll(`[id^="Freq"]`);
                    console.log("element size : " + test_element.length);
                    for(let i =0; i < test_element.length; i++){
                        test_element[i].remove();
                    }

                    lookUpStats(6,positionOfVikingLotto);
                    console.log("Button pressed from: " + positionOfVikingLotto );
                });


                element = document.getElementById('f_number');
                if(element != null){
                    element.remove();
                }
                $("#look-up-nummber-freq").append("<p id=\"f_number\"> frequency: " + _map.get(positionOfVikingLotto) + "</p>");
                //$("#look-up-nummber-freq").append("<p> Nummber: " + positionOfVikingLotto + " has frequency: " + _map.get(positionOfVikingLotto) + "</p>");
            });
    }

    return _map.get(positionOfVikingLotto);
}

function inFunc_lookUpNummberViking(position){
    if(vikingMainLotto.has(position)){
        console.log("Nummber: " + position + " Last added date: " + vikingMainLotto.get(position)); // index == lotto number , value is the date last added.


        console.log("Days since last drawn: " + getDateDaysSince(vikingMainLotto.get(position)) );

        //$("document").ready(function() {
        //    $("#look-up-nummber-viking").append("<p>  Nummber: " + position + " Last added date: " + vikingMainLotto.get(position) + "</p>");
        //});


    }
}



function inFunc_getFrequensListOfNummbers(menuArg, freqHigherThen){
    //console.log("mneu chosen is: " + menuArg + " freqHigherThen is: " + freqHigherThen);
    switch(menuArg){
        case 1: // get the hol list!!
            for(let x=1; x < numberFrequensVikingMainLotto.length; x++){
                inFunc_lookUpNummberFreq(x);
            }
            break;
        case 2: // get only freq number != 0
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
        case 3: // get only freq number > 0
            //console.log("Number Frequens > " + freqHigherThen + "\n");
            for(let x=1; x < numberFrequensVikingMainLotto.length; x++){
                let _map = new Map();
                _map = numberFrequensVikingMainLotto[x]; // numberFrequensVikingMainLotto contains a map, retrive a map check value and key
                if(_map.has(x)){
                    if(_map.get(x) > freqHigherThen){
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
/*
function inFunc_setFunctionFreqExtraNumbers(position, freq){
    let map = new Map();
    map = numberFrequensVikingTall[position];

    if(map.has(position)){
        map.set(position,freq);
    }
}
*/

function inFunc_setFunctionVikingLottoDrawnDate(position, x){ // date
    if(vikingMainLotto.has(position)){
        vikingMainLotto.set(position,x);
    }
}

// Chanded 8 March 2023 added x to the winningRow !!
/**
 * 
 * @param {*} n_1 
 * @param {*} n_2 
 * @param {*} n_3 
 * @param {*} n_4 
 * @param {*} n_5 
 * @param {*} n_6 
 * @param {*} n_7 
 * @param {*} x 
 */
function inFunc_setVikingLottoWinningRowToFreq(n_1, n_2, n_3, n_4, n_5, n_6, n_7, x){
    let input = [n_1, n_2, n_3, n_4, n_5, n_6, n_7,x];
    winningVikingRow.push(input); 

    inFunc_numberSetsFrequensVikingTall(n_1,0,n_2);
    inFunc_numberSetsFrequensVikingTall(n_2,n_1,n_3);
    inFunc_numberSetsFrequensVikingTall(n_3,n_2,n_4);
    inFunc_numberSetsFrequensVikingTall(n_4,n_3,n_5);
    inFunc_numberSetsFrequensVikingTall(n_5,n_4,n_6)
    inFunc_numberSetsFrequensVikingTall(n_6,n_5,0);

    //const drawDate = new Date(2018, 11, 24)

    //console.log("d date is: " + d);

    //let today = new Date();
    //var dd = String(today.getDate()).padStart(2, '0');
    //var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //var yyyy = today.getFullYear();
    
    //today = _mm + '/' + _dd + '/' + _yyyy;

    //today.setDate(_mm);
    
    
    //set_date = mm + '/' + dd + '/' + yyyy;
    
    //set_date.setMonth(mm);
    //set_date.setDate(day);
    //set_date.setFullYear(year);
    //extraVikingNumber
    //ToDo: sett extra number in it's own array of frequence
    /** remove last n_7 as its an extra number [array.length - 1] */
    // eddit must be - 2 to take out n_7 and x
    for(let t=0; t < input.length - 2;t++){ 
        
        /** set Map key numbers, value frequense of that number been drawn */
        inFunc_setFunctionFreq(input[t], inFunc_findFunctionFreq(input[t]) + 1);
        
        //inFunc_setFunctionFreqExtraNumbers(input[input.length],
        
            /** set Map key numbers, value toDay's date - add on Every Wensday etc. */
        //inFunc_setFunctionVikingLottoDrawnDate(input[t],dateFunction(1));
        
        // debug 
        //console.log("d date is: " + x);
        
        inFunc_setFunctionVikingLottoDrawnDate(input[t], x);

    }
}
/** Remove the last diget from freq main number as its a last Extra number
 *  array.length;
 *  Number: 1 has frequency: 2
    Number: 2 has frequency: 4
    Number: 3 has frequency: 2
    Number: 4 has frequency: 2
    Number: 5 has frequency: 3
 *  
    array.lenght - 1;
    Number: 1 has frequency: 1
    Number: 2 has frequency: 1
    Number: 4 has frequency: 1
    Number: 5 has frequency: 2

 */
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
    //test_numberSetsFrequensVikingTall(24,2,33);
}

/**
 * 
 * @param {*} arg 
 * @returns 
 */
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
        let first = winningVikingRow[u];
        

        console.log("winning Row : " + first[0] +
         " - " + first[1] + " - " + first[2] +
         " - " + first[3] + " - " + first[4] +
         " - " + first[5] + " - [Extra: " + first[6] +"]" );
        
        $("document").ready(function() {
            $("#winning-rows").append("<p> winning Row : " + first[0] + " - " + first[1] + " - " + first[2] +
            " - " + first[3] + " - " + first[4] +
            " - " + first[5] + " - [Extra: " + first[6] +"]" + "</p>");
        });

        //console.log("Winning Row: " + winningVikingRow[u].toString().replace(/\,/gi, " - "));
    }
}


// working here !!! ToDo :
console.log("working on: inFunc_printVikingLottoNumberSameVinningRowCount.....\n\n" );
//numberCountLookingFor
// sett's of numbers 
/**
 * sett's 
 * choice 1. sett's of 3 (x 2) -X = optional [number_one + number_two + number_thre] + [number_four + number_five + number_six]
 * choice 2. sett's of 2 (x 3) -X optional [number_one + number_two] + [number_thre + number_four] + [number_five + number_six]
 * 
 */



function inFunc_printVikingLottoNumberSameVinningRowCount(menuArg, number_one, number_two, number_thre, number_four, number_five, number_six){

    switch(menuArg){
        case 1:
            console.log("VikingNumber: " + number_one + " is in winning row's:\n");
            break;
        case 2:
            console.log("VikingNumber: " + number_one + " - " + number_two + " is in winning row's:\n");
            break;
        case 3:
            console.log("VikingNumber: " + number_one + " - " + number_two + " - " + number_thre + " is in winning row's:\n");
            break;
    }
    let lopped = 0;
    let found_number_one; // = 0;
    let found_number_two; //= 0;
    let index_one = 0
    let index_two = 0;
    
    let found_number_thre; // = 0;
    let found_number_four; //= 0;

    let found_number_five; // = 0;
    let found_number_six; //= 0;



    for(let u=0; u < winningVikingRow.length;u++){
            //let rowString = winningVikingRow[u];
            //rowString = rowString.toString().replace(/\,/gi, " - ");
            //console.log("Winning Row: " + rowString);
            let first = winningVikingRow[u];


            switch(menuArg){
            
            case 1:
                for(let i= 0; i < first.length - 1;i++ ){ // last is Extra Number drawn
                    
                    if(number_one == first[i] ){
                        let row = winningVikingRow[u];
                        
                        switch(i){
                            case 0:
                                console.log('%c' + row[0]  + "%c - " + row[1] + " - " + row[2] +
                                " - " + row[3] + " - " + row[4] +
                                " - " + row[5] + " - [Extra: " + row[6] +"]" + " - " + row[7], 'background-color: yellow', 'color: black');
                                break;
                            case 1:    
                                console.log('%c' + row[0]  + " - %c" + row[1] + "%c - " + row[2] +
                                " - " + row[3] + " - " + row[4] +
                                " - " + row[5] + " - [Extra: " + row[6] +"]" + " - " + row[7], 'color: black', 'background-color: yellow', 'color: black');
                                break;
                            case 2:    
                                console.log('%c' + row[0]  + " - " + row[1] + " - %c" + row[2] +
                                "%c - " + row[3] + " - " + row[4] +
                                " - " + row[5] + " - [Extra: " + row[6] +"]" + " - " + row[7], 'color: black', 'background-color: yellow', 'color: black');
                                break;
                            case 3:    
                                console.log('%c' + row[0]  + " - " + row[1] + " - " + row[2] +
                                " - %c" + row[3] + "%c - " + row[4] +
                                " - " + row[5] + " - [Extra: " + row[6] +"]" + " - " + row[7], 'color: black', 'background-color: yellow', 'color: black');
                                break;
                            case 4:    
                                console.log('%c' + row[0]  + " - " + row[1] + " - " + row[2] +
                                " - " + row[3] + " - %c" + row[4] +
                                "%c - " + row[5] + " - [Extra: " + row[6] +"]" + " - " + row[7], 'color: black', 'background-color: yellow', 'color: black');
                                break;
                            case 5:    
                                console.log('%c' + row[0]  + " - " + row[1] + " - " + row[2] +
                                " - " + row[3] + " - " + row[4] +
                                " - %c" + row[5] + "%c - [Extra: " + row[6] +"]" + " - " + row[7], 'color: black', 'background-color: yellow', 'color: black');
                                break;
                        }
                    }
                }
                break;
            case 2:
                /*** Number_two */
                
                lopped = 0;
                found_number_one = 0;
                found_number_two = 0;

                for(let i= 0; i < first.length - 1;i++ ){ // last is Extra Number drawn
                    
                    lopped++;

                    if(number_one == first[i] ){
                        //console.log("found " + number_one + " on: " + u);
                        found_number_one = 1;
                        //index_one = i;
                    }
                    if(number_two == first[i] ){
                        //console.log("found " + number_two + " on: "  + u);
                        found_number_two = 1;
                        //index_two = i;
                    }
                
                      
                }
                //console.log("looped : " + lopped);
                if(found_number_one == 1 && found_number_two == 1 && lopped == 7){
                    //console.log("Found number_one and number_two " + u);

                    //console.log(winningVikingRow[u]);
                    found_number_one = 0;
                    found_number_two = 0;
                    
                    let row = winningVikingRow[u];
                
                    console.log(row[0]  + " - " + row[1] + " - " + row[2] +
                    " - " + row[3] + " - " + row[4] +
                    " - " + row[5] + " - [Extra: " + row[6] +"]" + " - " + row[7] );
                }

                
            break;
            case 3:
                lopped = 0;
                found_number_one = 0;
                found_number_two = 0;
                found_number_thre = 0;
                for(let i= 0; i < first.length - 1;i++ ){ // last is Extra Number drawn
                    lopped++;
                    if(number_one == first[i] ){
                        //console.log("found " + number_two + " on: "  + u);
                        found_number_one = 1;
                        index_one = i;
                    }
                    if(number_two == first[i] ){
                        //console.log("found " + number_two + " on: "  + u);
                        found_number_two = 1;
                        index_two = i;
                    }
                    if(number_thre == first[i] ){
                        //console.log("found " + number_two + " on: "  + u);
                        found_number_thre = 1;
                        //index_two = i;
                    }
                }
                if(found_number_one == 1 && found_number_two == 1 && found_number_thre == 1 && lopped == 7 ){
                    //console.log("Found number_one and number_two " + u);

                    //console.log(winningVikingRow[u]);
                    found_number_one = 0;
                    found_number_two = 0;
                    found_number_thre = 0;
                    
                    let row = winningVikingRow[u];
                    
                    let string1 = '%c';
                    let string2 = '%c';
                    let string3 = '%c';



                    console.log(first[0]  + " - " + first[1] + " - " + first[2] +
                    " - " + first[3] + " - " + first[4] +
                    " - " + first[5] + " - [Extra: " + first[6] +"]" + " - " + first[7] );
                    
                    
                    //console.log(row[0]  + " - " + row[1] + " - " + row[2] +
                    //" - " + row[3] + " - " + row[4] +
                    //" - " + row[5] + " - [Extra: " + row[6] +"]" + " - " + row[7] );
                }
                break;
        }
            
    }


}

// import { winnin_row_file } from "./winnin_row_file.js";

// winnin_row_file();

/** Add the winning rows */
// January, February, March, April, May, June, July, August, September, October, November, December
// 2021
inFunc_setVikingLottoWinningRowToFreq(6,9,19,24,27,35,3,"February 7, 2021"); 
// inFunc_setVikingLottoWinningRowToFreq(7,34,21,18,35,11,4,"February 20, 2021");

// // 2022
// inFunc_setVikingLottoWinningRowToFreq(28,43,40,39,12,6,2,"January 5, 2022");
// inFunc_setVikingLottoWinningRowToFreq(17,47,43,26,21,13,1,"January 12, 2022");
// inFunc_setVikingLottoWinningRowToFreq(43,40,31,29,16,3,5,"January 19, 2022");
// inFunc_setVikingLottoWinningRowToFreq(48,28,8,46,19,26,2,"January 26, 2022");

// inFunc_setVikingLottoWinningRowToFreq(18,31,21,36,27,16,2,"February 2, 2022");
// inFunc_setVikingLottoWinningRowToFreq(17,26,21,10,22,14,3,"February 9, 2022");
// inFunc_setVikingLottoWinningRowToFreq(21,1,6,46,17,20,3,"February 16, 2022");
// inFunc_setVikingLottoWinningRowToFreq(13,32,16,29,33,34,1,"February 23, 2022");

// inFunc_setVikingLottoWinningRowToFreq(45,24,46,38,13,21,1,"March 2, 2022");
// inFunc_setVikingLottoWinningRowToFreq(15,5,35,48,34,3,5,"March 9, 2022");
// inFunc_setVikingLottoWinningRowToFreq(36,29,33,34,18,7,4,"March 16, 2022");
// inFunc_setVikingLottoWinningRowToFreq(26,36,41,15,17,2,2,"March 23, 2022");
// inFunc_setVikingLottoWinningRowToFreq(9,4,38,21,31,15,5,"March 30, 2022");

// inFunc_setVikingLottoWinningRowToFreq(48,20,34,11,10,42,1,"April 6, 2022");
// inFunc_setVikingLottoWinningRowToFreq(20,23,43,22,28,6,2,"April 13, 2022");
// inFunc_setVikingLottoWinningRowToFreq(12,13,22,26,20,23,5,"April 20, 2022");
// inFunc_setVikingLottoWinningRowToFreq(14,34,32,31,37,42,5,"April 27, 2022");


// inFunc_setVikingLottoWinningRowToFreq(24,6,19,35,9,27,3,"May 4, 2022");
// inFunc_setVikingLottoWinningRowToFreq(24,47,27,13,28,37,4,"May 11, 2022");
// inFunc_setVikingLottoWinningRowToFreq(45,5,47,24,34,9,5,"May 18, 2022");
// inFunc_setVikingLottoWinningRowToFreq(31,15,21,11,9,40,4,"May 25, 2022");

// inFunc_setVikingLottoWinningRowToFreq(43,37,46,23,14,7,4,"June 1, 2022");
// inFunc_setVikingLottoWinningRowToFreq(34,9,41,4,3,43,2,"June 8, 2022");
// inFunc_setVikingLottoWinningRowToFreq(21,15,47,29,39,48,2,"June 15, 2022");
// inFunc_setVikingLottoWinningRowToFreq(40,30,16,2,22,20,3,"June 22, 2022");
// inFunc_setVikingLottoWinningRowToFreq(40,24,7,48,35,12,1,"June 29, 2022");

// inFunc_setVikingLottoWinningRowToFreq(2,35,44,28,36,27,4,"July 6, 2022");
// inFunc_setVikingLottoWinningRowToFreq(18,48,44,21,16,9,1,"July 13, 2022");
// inFunc_setVikingLottoWinningRowToFreq(17,15,47,30,31,13,4,"July 20, 2022");
// inFunc_setVikingLottoWinningRowToFreq(38,30,48,32,20,45,2,"July 27, 2022");

// inFunc_setVikingLottoWinningRowToFreq(5,7,12,14,10,44,2,"August 3 ,2022"); 
// inFunc_setVikingLottoWinningRowToFreq(44,45,39,2,41,24,2,"August 10 ,2022"); 
// inFunc_setVikingLottoWinningRowToFreq(35,3,15,34,23,13,2,"August 17 ,2022"); 
// inFunc_setVikingLottoWinningRowToFreq(42,11,32,4,28,19,4,"August 24 ,2022"); 
// inFunc_setVikingLottoWinningRowToFreq(39,33,43,36,14,48,3,"August 31 ,2022");

// inFunc_setVikingLottoWinningRowToFreq(40,19,26,36,13,35,2,"September 7, 2022");
// inFunc_setVikingLottoWinningRowToFreq(26,31,3,30,28,22,5,"September 14, 2022");
// inFunc_setVikingLottoWinningRowToFreq(15,48,24,42,7,13,2,"September 21, 2022");
// inFunc_setVikingLottoWinningRowToFreq(33,24,2,42,17,44,2,"September 28, 2022");

// inFunc_setVikingLottoWinningRowToFreq(5,45,6,35,11,31,1,"October 5, 2022"); 
// inFunc_setVikingLottoWinningRowToFreq(37,18,40,21,19,7,3,"October 12, 2022");
// inFunc_setVikingLottoWinningRowToFreq(35,4,44,24,17,41,2,"October 19, 2022");
// inFunc_setVikingLottoWinningRowToFreq(22,41,24,38,30,13,2,"October 26, 2022"); 

// inFunc_setVikingLottoWinningRowToFreq(17,1,22,23,45,5,5,"November 2, 2022"); 
// inFunc_setVikingLottoWinningRowToFreq(22,17,10,18,15,23,3,"November 9, 2022");
// inFunc_setVikingLottoWinningRowToFreq(30,46,37,41,9,44,2,"November 16, 2022");
// inFunc_setVikingLottoWinningRowToFreq(32,28,27,12,37,5,4,"November 23, 2022");
// inFunc_setVikingLottoWinningRowToFreq(22,34,16,40,28,5,5,"November 30, 2022");

// inFunc_setVikingLottoWinningRowToFreq(8,13,9,37,10,48,3,"December 7, 2022"); 
// inFunc_setVikingLottoWinningRowToFreq(30,2,10,39,22,16,5,"December 14, 2022");  
// inFunc_setVikingLottoWinningRowToFreq(4,44,23,30,41,6,2,"December 21, 2022"); 
// inFunc_setVikingLottoWinningRowToFreq(16,22,24,27,4,12,4,"December 28, 2022");
// // 2023
// inFunc_setVikingLottoWinningRowToFreq(1,35,36,22,6,46,1,"January 4, 2023");
// inFunc_setVikingLottoWinningRowToFreq(22,47,40,25,43,39,2,"January 11, 2023");
// inFunc_setVikingLottoWinningRowToFreq(3,20,41,37,43,26,5,"January 18, 2023");
// inFunc_setVikingLottoWinningRowToFreq(18,39,34,19,45,25,2,"January 25, 2023");

// inFunc_setVikingLottoWinningRowToFreq(33,26,5,2,20,16,3,"February 1, 2023");
// inFunc_setVikingLottoWinningRowToFreq(3,23,4,26,21,34,1,"February 8, 2023");
// inFunc_setVikingLottoWinningRowToFreq(48,9,43,41,21,10,4,"February 15, 2023");
// inFunc_setVikingLottoWinningRowToFreq(15,25,30,4,39,33,4,"February 22, 2023");

// inFunc_setVikingLottoWinningRowToFreq(32,31,35,40,41,22,1,"March 1, 2023");
// inFunc_setVikingLottoWinningRowToFreq(16,11,3,23,8,22,4,"March 8, 2023");
// inFunc_setVikingLottoWinningRowToFreq(41,4,8,48,2,11,4,"March 15, 2023");
// inFunc_setVikingLottoWinningRowToFreq(27,4,28,24,45,37,3,"March 22, 2023");
// inFunc_setVikingLottoWinningRowToFreq(14,30,36,16,10,32,1,"March 29, 2023");

// inFunc_setVikingLottoWinningRowToFreq(42,7,8,19,21,2,2,"April 5, 2023");
// inFunc_setVikingLottoWinningRowToFreq(37,32,39,29,4,5,1,"April 12, 2023");
// inFunc_setVikingLottoWinningRowToFreq(39,26,41,21,3,22,4,"April 19, 2023");
// inFunc_setVikingLottoWinningRowToFreq(48,36,32,26,45,25,5,"April 26, 2023");

// inFunc_setVikingLottoWinningRowToFreq(6,22,38,43,45,39,2,"May 3, 2023");
// inFunc_setVikingLottoWinningRowToFreq(17,24,7,10,12,20,4,"May 10, 2023");


let cupongObject ={ 1: 22, 2: 35, 3: 41, 4: 4, 5: 21, 6: 18, 7: 5 };


function test(){
    console.log("test function");
    let one_found = 0;
    let two_found = 0;
    let three_found = 0;
    let four_found = 0;
    let five_found = 0;
    let six_found = 0;
    let extra_found = 0;
    
    for(let u=0; u < winningVikingRow.length;u++){
        let row_winning = winningVikingRow[u];


        
        // console.log("\n");
        // console.log("row_winning length: ", row_winning.length);
        // console.log("row_winning ", row_winning[u]);

        for(let row=0; row < row_winning.length - 2; row++){

            for(let c=0; c < 6; c++){

                console.log("cupong: ", cupongObject[c+1], " row_winning ", row_winning[row]);
                if(c == 5 ){
                    console.log("\n");  
                }
                
                
                if(cupongObject[c] == row_winning[u]){

                    console.log("found " + cupongObject[c] + " on: " + row_winning[row]);
                    switch(c){
                        case 1:
                            console.log("1 cupong nr is correct ");
                            break;
                        case 2:
                            console.log("2 cupong nr is correct ");
                            break;
                        case 3:
                            console.log("3 cupong nr is correct ");
                            break;
                        case 4:
                            console.log("4 cupong nr is correct ");
                            break;
                        case 5:
                            console.log("5 cupong nr is correct ");
                            break;
                        case 6:
                            console.log("6 cupong nr is correct ");
                            break;
                        case 7:
                            console.log("7 cupong nr is correct ");
                            break;
                    }

                }

            }
        }
        console.log("[Extra number] cupong: ", cupongObject[7], " [Extra number] row_winning ", row_winning[6]);
        if(cupongObject[7] == row_winning[6]){
            // 
        }
    }
    console.log("\n");
}

test();


// add to remote rep!!


function lookUpStats(menuArg, numberValue){

    switch(menuArg){
        case 1:
            console.log("\n** Look up nummber **");
            inFunc_lookUpNummberFreq(numberValue);
            inFunc_lookUpNummberViking(numberValue);
            break;
        case 2:
            console.log("\n");
            inFunc_getFrequensListOfNummbers(1); // 1. hole list, 2 freq != 0
            break;
        case 3:
            console.log("\n");
            inFunc_getFrequensListOfNummbers(2); // 1. hole list, 2 freq != 0
        break;
        case 4:
            console.log("\n");
            console.log(" ** Number Frequens > " + numberValue + " **\n");
            inFunc_getFrequensListOfNummbers(3, numberValue); // menuAarg 3 frequens > value
            break;
        case 5:
            console.log("\n");
            inFunc_printVikingLottoWinningRows();
            break;
        case 6:
            console.log("\n");
            printLookUpFreqOfaMainNumber(numberValue);
            break;
        case 7:
            console.log("\n");
            printLookUpFreqOfMainNumbersAll();
            break;
        case 0:
        default :
            console.log("\t\t\tMenu\n" + 
            "MenuArg(1,value) Look up a number info -arg {number} \n" +
            "MenuArg(2) prints list with -arg{ 1 hole list} \n" +
            "MenuArg(3) prints list with -arg{ 2 freq > 0}  \n" +
            "MenuArg(4,value) prints list with -arg{ 3 freq > value} eks 4,value where freq > value \n" +
            "MenuArg(5) prints the winning row list \n" +
            "MenuArg(6,value) prints Set's of frequency -arg{ 6 , ValueNumber } freq numbers drawn befor and after \n" +
            "7 prints Set's All (1 - 48) all set's of frequency \n\n");

            console.log("\n");
            console.log("To Do: Print Sett's that have more then 1 freq \n");
            

        break;
    }
    
}

function menu(){
  console.log("Menu() -this\n" +
  "lookUpStats(MenuArg, arg to the list) - 0 to get list menu\n\n");
}

menu();

//testing (menu 1 - 3, if 1 , value if 2, value, value etc)
//inFunc_printVikingLottoNumberSameVinningRowCount(1,3);
console.log("\n");
inFunc_printVikingLottoNumberSameVinningRowCount(2,22,41);
console.log("\n");
lookUpStats(1,22);
console.log("\n");
lookUpStats(6,22);
console.log("\n");
lookUpStats(4,10);

// inFunc_printVikingLottoNumberSameVinningRowCount(1,25);
// console.log("\n");
// inFunc_printVikingLottoNumberSameVinningRowCount(2,22,23);
// console.log("\n");
// inFunc_printVikingLottoNumberSameVinningRowCount(2,35,11);
// console.log("\n");
// inFunc_printVikingLottoNumberSameVinningRowCount(3,31,32,35);

// console.log("\n");
// inFunc_printVikingLottoNumberSameVinningRowCount(3,22,35,41);

// lookUpStats(4,4);
// lookUpStats(1,22);

/*
lookUpStats(0);
lookUpStats(1,22);
lookUpStats(4,3);
lookUpStats(6,22);

lookUpStats(1,3);
lookUpStats(1,8);
lookUpStats(1,11);
lookUpStats(1,16);
lookUpStats(1,22);
lookUpStats(1,23);
*/
//lookUpStats(1,4);

/*
lookUpStats(1,4);
lookUpStats(1,5);
lookUpStats(1,6);
lookUpStats(1,9);
lookUpStats(1,10);
lookUpStats(1,16);
lookUpStats(1,17);
lookUpStats(1,18);
lookUpStats(1,21);
lookUpStats(1,22);
lookUpStats(1,23);
lookUpStats(1,24);
lookUpStats(1,30);
lookUpStats(1,34);
lookUpStats(1,35);
lookUpStats(1,37);
lookUpStats(1,39);
lookUpStats(1,40);
lookUpStats(1,41);
lookUpStats(1,44);
*/

/** 17,22,24,35,37,41,43,44 */

// date("January 5, 2023");
// date("January 5, 2023 15:00:00 PST");
function date(StringDate){
    let now = new Date();
    let acquired = new Date(StringDate);
    let elapsed = now - acquired;
    let daysSinceAxquierd = Math.floor(elapsed / 86400000); //(1000 * 3600 * 24)); //86400000); // readability 1000 sec, 3600 Hours, 24 Hours in a day.
    return daysSinceAxquierd;
}

function Person (
    name,
    surname,
    dateOfBirth
) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.currentAge = function() {
        var today = new Date();
        var birthDate = new Date(dateOfBirth);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}

//let myPerson = new Person("Robin", "Larsen", "December 5, 1977 15:00:00 PST");
//console.log("Current Age: " + myPerson.currentAge());

 //lotto ???
 // 11 17 27 29 6 15 26 25 okt 22
 // 1 26 13 3 17 15 27 4 okt 29
 // 21 8 9 33 17 34 18 32 nov 5
 // 23 1 33 14 12 32 27 10 nov 12
 // 25 29 5 19 10 2 30 6 nov 19
 // 10 27 23 4 7 1 13 31 nov 26
 // 23 18 14 20 31 27 10 16 des 3
// 4 30 27 2 24 12 3 8 des 10
//3 29 30 31 23 18 12 27 des 17 
//22 12 10 31 20 2 11 21 des 24
  
 













