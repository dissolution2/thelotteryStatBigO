// require('../logic/globals.js');
// let data_insert = require('./data.js'); // no
require('../logic/globals.js');
const fullData = require('./raw_data.js');
const dataSet = fullData(1); // get full data from raw data array [][] swich 1 

// const { 
//     vikingMainLotto, 
//     vikingTall,
//     map,
//     numberFrequensVikingMainLotto,
//     winningVikingRow,
//     numberFrequensVikingTall,
//     numberSetsFrequensVikingTall 
// } = require('../logic/globals.js');


// will change to this maybe !!!
// const dataSet = [
//     [6,9,19,24,27,35,3,"February 7, 2021"], 
//     [7,34,21,18,35,11,4,"February 20, 2021"],

//     // 2022
//     [28,43,40,39,12,6,2,"January 5, 2022"],
//     [17,47,43,26,21,13,1,"January 12, 2022"],
//     [43,40,31,29,16,3,5,"January 19, 2022"],
//     [48,28,8,46,19,26,2,"January 26, 2022"],

//     [18,31,21,36,27,16,2,"February 2, 2022"],
//     [17,26,21,10,22,14,3,"February 9, 2022"],
//     [21,1,6,46,17,20,3,"February 16, 2022"],
//     [13,32,16,29,33,34,1,"February 23, 2022"],

//     [45,24,46,38,13,21,1,"March 2, 2022"],
//     [15,5,35,48,34,3,5,"March 9, 2022"],
//     [36,29,33,34,18,7,4,"March 16, 2022"],
//     [26,36,41,15,17,2,2,"March 23, 2022"],
//     [9,4,38,21,31,15,5,"March 30, 2022"],

//     [48,20,34,11,10,42,1,"April 6, 2022"],
//     [20,23,43,22,28,6,2,"April 13, 2022"],
//     [12,13,22,26,20,23,5,"April 20, 2022"],
//     [14,34,32,31,37,42,5,"April 27, 2022"],


//     [24,6,19,35,9,27,3,"May 4, 2022"],
//     [24,47,27,13,28,37,4,"May 11, 2022"],
//     [45,5,47,24,34,9,5,"May 18, 2022"],
//     [31,15,21,11,9,40,4,"May 25, 2022"],

//     [43,37,46,23,14,7,4,"June 1, 2022"],
//     [34,9,41,4,3,43,2,"June 8, 2022"],
//     [21,15,47,29,39,48,2,"June 15, 2022"],
//     [40,30,16,2,22,20,3,"June 22, 2022"],
//     [40,24,7,48,35,12,1,"June 29, 2022"],

//     [2,35,44,28,36,27,4,"July 6, 2022"],
//     [18,48,44,21,16,9,1,"July 13, 2022"],
//     [17,15,47,30,31,13,4,"July 20, 2022"],
//     [38,30,48,32,20,45,2,"July 27, 2022"],

//     [5,7,12,14,10,44,2,"August 3 ,2022"], 
//     [44,45,39,2,41,24,2,"August 10 ,2022"], 
//     [35,3,15,34,23,13,2,"August 17 ,2022"], 
//     [42,11,32,4,28,19,4,"August 24 ,2022"], 
//     [39,33,43,36,14,48,3,"August 31 ,2022"],

//     [40,19,26,36,13,35,2,"September 7, 2022"],
//     [26,31,3,30,28,22,5,"September 14, 2022"],
//     [15,48,24,42,7,13,2,"September 21, 2022"],
//     [33,24,2,42,17,44,2,"September 28, 2022"],

//     [5,45,6,35,11,31,1,"October 5, 2022"], 
//     [37,18,40,21,19,7,3,"October 12, 2022"],
//     [35,4,44,24,17,41,2,"October 19, 2022"],
//     [22,41,24,38,30,13,2,"October 26, 2022"],

//     [17,1,22,23,45,5,5,"November 2, 2022"], 
//     [22,17,10,18,15,23,3,"November 9, 2022"],
//     [30,46,37,41,9,44,2,"November 16, 2022"],
//     [32,28,27,12,37,5,4,"November 23, 2022"],
//     [22,34,16,40,28,5,5,"November 30, 2022"],

//     [8,13,9,37,10,48,3,"December 7, 2022"], 
//     [30,2,10,39,22,16,5,"December 14, 2022"],  
//     [4,44,23,30,41,6,2,"December 21, 2022"], 
//     [16,22,24,27,4,12,4,"December 28, 2022"],
//     // 2023
//     [1,35,36,22,6,46,1,"January 4, 2023"],
//     [22,47,40,25,43,39,2,"January 11, 2023"],
//     [3,20,41,37,43,26,5,"January 18, 2023"],
//     [18,39,34,19,45,25,2,"January 25, 2023"],

//     [33,26,5,2,20,16,3,"February 1, 2023"],
//     [3,23,4,26,21,34,1,"February 8, 2023"],
//     [48,9,43,41,21,10,4,"February 15, 2023"],
//     [15,25,30,4,39,33,4,"February 22, 2023"],

//     [32,31,35,40,41,22,1,"March 1, 2023"],
//     [16,11,3,23,8,22,4,"March 8, 2023"],
//     [41,4,8,48,2,11,4,"March 15, 2023"],
//     [27,4,28,24,45,37,3,"March 22, 2023"],
//     [14,30,36,16,10,32,1,"March 29, 2023"],

//     [42,7,8,19,21,2,2,"April 5, 2023"],
//     [37,32,39,29,4,5,1,"April 12, 2023"],
//     [39,26,41,21,3,22,4,"April 19, 2023"],
//     [48,36,32,26,45,25,5,"April 26, 2023"],

//     [6,22,38,43,45,39,2,"May 3, 2023"],
//     [17,24,7,10,12,20,4,"May 10, 2023"],
//     [1,43,4,11,12,26,1,"May 24, 2023"],
//     [34,24,45,46,48,39,1,"May 31, 2023"],

//     [17,44,32,37,14,4,4,"Jun 7, 2023"],
//     [15,44,28,9,41,2,4,"Jun 14, 2023"],
//     [22,3,13,8,12,2,4,"Jun 28, 2023"],

//     [30,42,34,13,22,24,5,"July 5, 2023"],
//     [10,6,2,40,32,38,1,"July 12, 2023"],
//     [28,29,37,19,4,41,5,"July 19, 2023"],
//     [5,9,44,34,24,10,5,"July 26, 2023"],

//     [23,6,7,10,28,30,2,"August 2, 2023"],
//     [13,19,14,27,23,38,4,"August 9, 2023"],
//     [48,45,31,44,13,33,1,"August 16, 2023"],
//     [37,4,26,47,17,42,4,"August 23, 2023"],
//     [38,10,18,25,21,31,3,"August 30, 2023"],

//     [2,28,26,47,1,22,5,"September 6, 2023"],
//     [2,4,8,10,43,44,5,"September 13, 2023"],
//     [19,47,41,6,20,8,3,"September 20, 2023"],
//     [25,15,34,21,13,16,2,"September 27, 2023"],
//     [39,14,24,31,27,26,2,"October 4, 2023"],
//     [30,40,25,37,26,48,3,"October 11, 2023"]
// ];

// let dataSetStript = [];
// let temp = [];
// for(let i=0; i < dataSet.length; i++){
//     for(let k=0; k < dataSet[i].length - 2;k++){
//         temp.push(dataSet[i][k]);
//         if(k === 5){
//             dataSetStript.push(temp);
//             temp = [];
//         }
//     }
// }
// to be used with calc_... scripts 
// console.log('dataStript',dataSetStript);

/** call main function input winning row and freq numbers */
inFunc_setVikingLottoWinningRowToFreq(dataSet);


/**
 * old input
 * @param {*} n_1 
 * @param {*} n_2 
 * @param {*} n_3 
 * @param {*} n_4 
 * @param {*} n_5 
 * @param {*} n_6 
 * @param {*} n_7 
 * @param {*} x 
 */
// dataSet) { //
function inFunc_setVikingLottoWinningRowToFreq(data) { //n_1, n_2, n_3, n_4, n_5, n_6, n_7, x_date){ // module.exports = 
    // console.log('dataSet: ', data); // Debug Line
    /** this convertion looks good dobble check the numbers in inFunc_nuberSetFre ????  */

    // [6,9,19,24,27,35,3,"February 7, 2021"],  etc how it looks from data [][] etc
    for(let i=0; i < data.length;i++){
       let input = data[i];
        winningVikingRow.push(input);
        inFunc_numberSetsFrequensVikingTall(data[i][0],0,data[i][1]); //n_1,0,n_2);
        inFunc_numberSetsFrequensVikingTall(data[i][1],data[i][0],data[i][2]); //n_2,n_1,n_3);
        inFunc_numberSetsFrequensVikingTall(data[i][2],data[i][1],data[i][3]); //n_3,n_2,n_4);
        inFunc_numberSetsFrequensVikingTall(data[i][3],data[i][2],data[i][4]); //n_4,n_3,n_5);
        inFunc_numberSetsFrequensVikingTall(data[i][4],data[i][3],data[i][5]); //n_5,n_4,n_6)
        inFunc_numberSetsFrequensVikingTall(data[i][5],data[i][4],0); //n_6,n_5,0);

        for(let t=0; t < input.length - 2;t++){ 
            // set Map key numbers, value frequense of that number been drawn 
            // console.log('input[t]+1', input[t] + 1);
            inFunc_setFunctionFreq(input[t], inFunc_findFunctionFreq(input[t]) + 1);
            inFunc_setFunctionVikingLottoDrawnDate(input[t], data[i][7]); //x_date);
        }
    }

    // old
    // console.log(winningVikingRow);
    // let input = [n_1, n_2, n_3, n_4, n_5, n_6, n_7,x_date];
    // winningVikingRow.push(input); 

    // inFunc_numberSetsFrequensVikingTall(n_1,0,n_2);
    // inFunc_numberSetsFrequensVikingTall(n_2,n_1,n_3);
    // inFunc_numberSetsFrequensVikingTall(n_3,n_2,n_4);
    // inFunc_numberSetsFrequensVikingTall(n_4,n_3,n_5);
    // inFunc_numberSetsFrequensVikingTall(n_5,n_4,n_6)
    // inFunc_numberSetsFrequensVikingTall(n_6,n_5,0);

    // for(let t=0; t < input.length - 2;t++){ 
        
    //     // set Map key numbers, value frequense of that number been drawn 
    //     // console.log('input[t]+1', input[t] + 1);
    //     inFunc_setFunctionFreq(input[t], inFunc_findFunctionFreq(input[t]) + 1);
    //     inFunc_setFunctionVikingLottoDrawnDate(input[t], x_date);
    // }
}


/** func insert data calls and needs  Start: */

function inFunc_setFunctionFreq(position, freq){
    let map = new Map();
    map = numberFrequensVikingMainLotto[position];

    if(map.has(position)){
        map.set(position,freq);
    }
}

// console.log(typeof numberFrequensVikingMainLotto[positionOfVikingLotto]);

function inFunc_findFunctionFreq(positionOfVikingLotto){
    return map = numberFrequensVikingMainLotto[positionOfVikingLotto].get(positionOfVikingLotto);
}

function inFunc_setFunctionVikingLottoDrawnDate(position, x_date){ // date
    if(vikingMainLotto.has(position)){
        vikingMainLotto.set(position,x_date);
    }
}


function inFunc_numberSetsFrequensVikingTall(value, beforV, afterV){
    // console.log('inFunc_numberSetsFrequensVikingTall called');
    
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
    // console.log('numberSetsFrequensVikingTall: ', numberSetsFrequensVikingTall); // debug Line prints all classe freq
}


// old input 
/** func insert data calls and needs  End: */
/*
inFunc_setVikingLottoWinningRowToFreq(6,9,19,24,27,35,3,"February 7, 2021"); 
inFunc_setVikingLottoWinningRowToFreq(7,34,21,18,35,11,4,"February 20, 2021");

// 2022
inFunc_setVikingLottoWinningRowToFreq(28,43,40,39,12,6,2,"January 5, 2022");
inFunc_setVikingLottoWinningRowToFreq(17,47,43,26,21,13,1,"January 12, 2022");
inFunc_setVikingLottoWinningRowToFreq(43,40,31,29,16,3,5,"January 19, 2022");
inFunc_setVikingLottoWinningRowToFreq(48,28,8,46,19,26,2,"January 26, 2022");

inFunc_setVikingLottoWinningRowToFreq(18,31,21,36,27,16,2,"February 2, 2022");
inFunc_setVikingLottoWinningRowToFreq(17,26,21,10,22,14,3,"February 9, 2022");
inFunc_setVikingLottoWinningRowToFreq(21,1,6,46,17,20,3,"February 16, 2022");
inFunc_setVikingLottoWinningRowToFreq(13,32,16,29,33,34,1,"February 23, 2022");

inFunc_setVikingLottoWinningRowToFreq(45,24,46,38,13,21,1,"March 2, 2022");
inFunc_setVikingLottoWinningRowToFreq(15,5,35,48,34,3,5,"March 9, 2022");
inFunc_setVikingLottoWinningRowToFreq(36,29,33,34,18,7,4,"March 16, 2022");
inFunc_setVikingLottoWinningRowToFreq(26,36,41,15,17,2,2,"March 23, 2022");
inFunc_setVikingLottoWinningRowToFreq(9,4,38,21,31,15,5,"March 30, 2022");

inFunc_setVikingLottoWinningRowToFreq(48,20,34,11,10,42,1,"April 6, 2022");
inFunc_setVikingLottoWinningRowToFreq(20,23,43,22,28,6,2,"April 13, 2022");
inFunc_setVikingLottoWinningRowToFreq(12,13,22,26,20,23,5,"April 20, 2022");
inFunc_setVikingLottoWinningRowToFreq(14,34,32,31,37,42,5,"April 27, 2022");


inFunc_setVikingLottoWinningRowToFreq(24,6,19,35,9,27,3,"May 4, 2022");
inFunc_setVikingLottoWinningRowToFreq(24,47,27,13,28,37,4,"May 11, 2022");
inFunc_setVikingLottoWinningRowToFreq(45,5,47,24,34,9,5,"May 18, 2022");
inFunc_setVikingLottoWinningRowToFreq(31,15,21,11,9,40,4,"May 25, 2022");

inFunc_setVikingLottoWinningRowToFreq(43,37,46,23,14,7,4,"June 1, 2022");
inFunc_setVikingLottoWinningRowToFreq(34,9,41,4,3,43,2,"June 8, 2022");
inFunc_setVikingLottoWinningRowToFreq(21,15,47,29,39,48,2,"June 15, 2022");
inFunc_setVikingLottoWinningRowToFreq(40,30,16,2,22,20,3,"June 22, 2022");
inFunc_setVikingLottoWinningRowToFreq(40,24,7,48,35,12,1,"June 29, 2022");

inFunc_setVikingLottoWinningRowToFreq(2,35,44,28,36,27,4,"July 6, 2022");
inFunc_setVikingLottoWinningRowToFreq(18,48,44,21,16,9,1,"July 13, 2022");
inFunc_setVikingLottoWinningRowToFreq(17,15,47,30,31,13,4,"July 20, 2022");
inFunc_setVikingLottoWinningRowToFreq(38,30,48,32,20,45,2,"July 27, 2022");

inFunc_setVikingLottoWinningRowToFreq(5,7,12,14,10,44,2,"August 3 ,2022"); 
inFunc_setVikingLottoWinningRowToFreq(44,45,39,2,41,24,2,"August 10 ,2022"); 
inFunc_setVikingLottoWinningRowToFreq(35,3,15,34,23,13,2,"August 17 ,2022"); 
inFunc_setVikingLottoWinningRowToFreq(42,11,32,4,28,19,4,"August 24 ,2022"); 
inFunc_setVikingLottoWinningRowToFreq(39,33,43,36,14,48,3,"August 31 ,2022");

inFunc_setVikingLottoWinningRowToFreq(40,19,26,36,13,35,2,"September 7, 2022");
inFunc_setVikingLottoWinningRowToFreq(26,31,3,30,28,22,5,"September 14, 2022");
inFunc_setVikingLottoWinningRowToFreq(15,48,24,42,7,13,2,"September 21, 2022");
inFunc_setVikingLottoWinningRowToFreq(33,24,2,42,17,44,2,"September 28, 2022");

inFunc_setVikingLottoWinningRowToFreq(5,45,6,35,11,31,1,"October 5, 2022"); 
inFunc_setVikingLottoWinningRowToFreq(37,18,40,21,19,7,3,"October 12, 2022");
inFunc_setVikingLottoWinningRowToFreq(35,4,44,24,17,41,2,"October 19, 2022");
inFunc_setVikingLottoWinningRowToFreq(22,41,24,38,30,13,2,"October 26, 2022");  // test this with extra numbers

inFunc_setVikingLottoWinningRowToFreq(17,1,22,23,45,5,5,"November 2, 2022"); 
inFunc_setVikingLottoWinningRowToFreq(22,17,10,18,15,23,3,"November 9, 2022");
inFunc_setVikingLottoWinningRowToFreq(30,46,37,41,9,44,2,"November 16, 2022");
inFunc_setVikingLottoWinningRowToFreq(32,28,27,12,37,5,4,"November 23, 2022");
inFunc_setVikingLottoWinningRowToFreq(22,34,16,40,28,5,5,"November 30, 2022");

inFunc_setVikingLottoWinningRowToFreq(8,13,9,37,10,48,3,"December 7, 2022"); 
inFunc_setVikingLottoWinningRowToFreq(30,2,10,39,22,16,5,"December 14, 2022");  
inFunc_setVikingLottoWinningRowToFreq(4,44,23,30,41,6,2,"December 21, 2022"); 
inFunc_setVikingLottoWinningRowToFreq(16,22,24,27,4,12,4,"December 28, 2022");
// 2023
inFunc_setVikingLottoWinningRowToFreq(1,35,36,22,6,46,1,"January 4, 2023");
inFunc_setVikingLottoWinningRowToFreq(22,47,40,25,43,39,2,"January 11, 2023");
inFunc_setVikingLottoWinningRowToFreq(3,20,41,37,43,26,5,"January 18, 2023");
inFunc_setVikingLottoWinningRowToFreq(18,39,34,19,45,25,2,"January 25, 2023");

inFunc_setVikingLottoWinningRowToFreq(33,26,5,2,20,16,3,"February 1, 2023");
inFunc_setVikingLottoWinningRowToFreq(3,23,4,26,21,34,1,"February 8, 2023");
inFunc_setVikingLottoWinningRowToFreq(48,9,43,41,21,10,4,"February 15, 2023");
inFunc_setVikingLottoWinningRowToFreq(15,25,30,4,39,33,4,"February 22, 2023");

inFunc_setVikingLottoWinningRowToFreq(32,31,35,40,41,22,1,"March 1, 2023");
inFunc_setVikingLottoWinningRowToFreq(16,11,3,23,8,22,4,"March 8, 2023");
inFunc_setVikingLottoWinningRowToFreq(41,4,8,48,2,11,4,"March 15, 2023");
inFunc_setVikingLottoWinningRowToFreq(27,4,28,24,45,37,3,"March 22, 2023");
inFunc_setVikingLottoWinningRowToFreq(14,30,36,16,10,32,1,"March 29, 2023");

inFunc_setVikingLottoWinningRowToFreq(42,7,8,19,21,2,2,"April 5, 2023");
inFunc_setVikingLottoWinningRowToFreq(37,32,39,29,4,5,1,"April 12, 2023");
inFunc_setVikingLottoWinningRowToFreq(39,26,41,21,3,22,4,"April 19, 2023");
inFunc_setVikingLottoWinningRowToFreq(48,36,32,26,45,25,5,"April 26, 2023");

inFunc_setVikingLottoWinningRowToFreq(6,22,38,43,45,39,2,"May 3, 2023");
inFunc_setVikingLottoWinningRowToFreq(17,24,7,10,12,20,4,"May 10, 2023");
inFunc_setVikingLottoWinningRowToFreq(1,43,4,11,12,26,1,"May 24, 2023");
inFunc_setVikingLottoWinningRowToFreq(34,24,45,46,48,39,1,"May 31, 2023");

inFunc_setVikingLottoWinningRowToFreq(17,44,32,37,14,4,4,"Jun 7, 2023");
inFunc_setVikingLottoWinningRowToFreq(15,44,28,9,41,2,4,"Jun 14, 2023");
inFunc_setVikingLottoWinningRowToFreq(22,3,13,8,12,2,4,"Jun 28, 2023"); // 180 kr

inFunc_setVikingLottoWinningRowToFreq(30,42,34,13,22,24,5,"July 5, 2023"); // 80 kr
inFunc_setVikingLottoWinningRowToFreq(10,6,2,40,32,38,1,"July 12, 2023");
inFunc_setVikingLottoWinningRowToFreq(28,29,37,19,4,41,5,"July 19, 2023");
inFunc_setVikingLottoWinningRowToFreq(5,9,44,34,24,10,5,"July 26, 2023");

inFunc_setVikingLottoWinningRowToFreq(23,6,7,10,28,30,2,"August 2, 2023");
inFunc_setVikingLottoWinningRowToFreq(13,19,14,27,23,38,4,"August 9, 2023");
inFunc_setVikingLottoWinningRowToFreq(48,45,31,44,13,33,1,"August 16, 2023");
inFunc_setVikingLottoWinningRowToFreq(37,4,26,47,17,42,4,"August 23, 2023");
inFunc_setVikingLottoWinningRowToFreq(38,10,18,25,21,31,3,"August 30, 2023");

inFunc_setVikingLottoWinningRowToFreq(2,28,26,47,1,22,5,"September 6, 2023"); // 480 kr // 4 + 0, 4 + 0, 3 + 1, 3 + 0 = vant 4 ganger på samme kupp  
inFunc_setVikingLottoWinningRowToFreq(2,4,8,10,43,44,5,"September 13, 2023");
inFunc_setVikingLottoWinningRowToFreq(19,47,41,6,20,8,3,"September 20, 2023");
inFunc_setVikingLottoWinningRowToFreq(25,15,34,21,13,16,2,"September 27, 2023");
inFunc_setVikingLottoWinningRowToFreq(39,14,24,31,27,26,2,"October 4, 2023");
inFunc_setVikingLottoWinningRowToFreq(30,40,25,37,26,48,3,"October 11, 2023");

// module.exports = inFunc_setVikingLottoWinningRowToFreq;
*/

