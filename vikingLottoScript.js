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


// test
//for(let i=0; i < 6;i++){ // vikingLotto extra numbers 

//}




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
        console.log("Nummber: " + position + " Last added date: " + vikingMainLotto.get(position));


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

function inFunc_setVikingLottoWinningRowToFreq(n_1, n_2, n_3, n_4, n_5, n_6, n_7, x){
    let input = [n_1, n_2, n_3, n_4, n_5, n_6, n_7];
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
    for(let t=0; t < input.length - 1;t++){ 
        
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

/** Add the winning rows */
// January, February, March, April, May, June, July, August, September, October, November, December
inFunc_setVikingLottoWinningRowToFreq(6,9,19,24,27,35,3,"February 7,2021"); 
inFunc_setVikingLottoWinningRowToFreq(7,34,21,18,35,11,4,"February 20,2021"); 
inFunc_setVikingLottoWinningRowToFreq(15,48,24,42,7,13,2,"September 21,2022");
inFunc_setVikingLottoWinningRowToFreq(33,24,2,42,17,44,2,"September 28,2022");
inFunc_setVikingLottoWinningRowToFreq(5,45,6,35,11,31,1,"October 5,2022"); 
inFunc_setVikingLottoWinningRowToFreq(37,18,40,21,19,7,3,"October 12,2022");
inFunc_setVikingLottoWinningRowToFreq(35,4,44,24,17,41,2,"October 19,2022");
inFunc_setVikingLottoWinningRowToFreq(17,1,22,23,45,5,5,"November 2,2022"); 
inFunc_setVikingLottoWinningRowToFreq(22,17,10,18,15,23,3,"November 9,2022");
inFunc_setVikingLottoWinningRowToFreq(30,46,37,41,9,44,2,"November 16,2022");
inFunc_setVikingLottoWinningRowToFreq(32,28,27,12,37,5,4,"November 23,2022");
inFunc_setVikingLottoWinningRowToFreq(22,34,16,40,28,5,5,"November 30,2022");
inFunc_setVikingLottoWinningRowToFreq(8,13,9,37,10,48,3,"December 7,2022"); 
inFunc_setVikingLottoWinningRowToFreq(30,2,10,39,22,16,5,"December 14,2022");  
inFunc_setVikingLottoWinningRowToFreq(4,44,23,30,41,6,2,"December 21,2022"); 
inFunc_setVikingLottoWinningRowToFreq(16,22,24,27,4,12,4,"December 28,2022"); 
inFunc_setVikingLottoWinningRowToFreq(1,35,36,22,6,46,1,"January 4,2023");
inFunc_setVikingLottoWinningRowToFreq(22,47,40,25,43,39,2,"January 11,2023");
inFunc_setVikingLottoWinningRowToFreq(3,20,41,37,43,26,5,"January 18,2023");
inFunc_setVikingLottoWinningRowToFreq(18,39,34,19,45,25,2,"January 25,2023");
inFunc_setVikingLottoWinningRowToFreq(33,26,5,2,20,16,3,"February 1,2023");
inFunc_setVikingLottoWinningRowToFreq(3,23,4,26,21,34,1,"February 8,2023");
inFunc_setVikingLottoWinningRowToFreq(48,9,43,41,21,10,4,"February 15,2023");
inFunc_setVikingLottoWinningRowToFreq(15,25,30,4,39,33,4,"February 22,2023");
inFunc_setVikingLottoWinningRowToFreq(32,31,35,40,41,22,1,"March 1 ,2023");





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
lookUpStats(0);
lookUpStats(1,22);
lookUpStats(4,3);
lookUpStats(6,22);

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
  
 













