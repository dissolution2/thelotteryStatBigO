// let vikingMainLotto = new Map();  // 1 - 48
// let vikingTall = new Map(); // 1 - 5

// let map = new Map(); // 
// let numberFrequensVikingMainLotto = []; // We can change from array with Map -to only Map !!?? number, value freq but this is to test and learn
// let winningVikingRow = []; // store all the winning numbers 
// let numberFrequensVikingTall  = []; 
// let numberSetsFrequensVikingTall = new Map();



function vikingRandomGenerator(number, pol, excludeNumber_one, excludeNumber_two, excludeNumber_thre){
    let num = [];
    
    if(typeof excludeNumber_one == 'number'){
    //    console.log("ex1 = number: ", excludeNumber_one); 
       num.push(excludeNumber_one);
    }

    if(typeof excludeNumber_two == 'number'){
        // console.log("ex2 = number: ", excludeNumber_two);
        num.push(excludeNumber_two); 
    }
    if(typeof excludeNumber_thre == 'number'){
        // console.log("ex3 = number: ", excludeNumber_thre);
        num.push(excludeNumber_thre) 
    }
    // console.log("number asked: ", number);
    let found = 0;
    for(let i =0; i < number;i++){
        let random_number = Math.floor(Math.random() * pol + 1);
        for(let j =0; j < num.length;j++){
            // console.log("looping ", i);
            // console.log(num[j], " == ", random_number);
            if(num[j] == random_number){
                found++;
                // console.log("found: ", found);
                break;
            }
        }
        // for serach finished
        if(found > 0){
            i--;
            found = 0;
        }
        else if(found == 0){
            // console.log("pushed: ", random_number);
            if(num.length == number){
                break;
            }else{
                num.push(random_number);
            }
        }
    }
    return num;
};

let cupongArray = [];

cupongArray = vikingRandomGenerator(6,48,22,26,47);
let vikingNumber = vikingRandomGenerator(1,5)[0];
cupongArray.push(vikingNumber);
console.log(cupongArray);


function test(cupongArray){
   
    let found = new Map();
    let vikkingLottoPrizes = new Map();
    
    let winningStat_1 = [];
    let winningStat_2 = [];
    let winningStat_3 = [];
    let winningStat_4 = [];
    let winningStat_5 = [];
    let winningStat_6 = [];

    vikkingLottoPrizes.set(1, winningStat_1);
    vikkingLottoPrizes.set(2, winningStat_2);
    vikkingLottoPrizes.set(3, winningStat_3);
    vikkingLottoPrizes.set(4, winningStat_4);
    vikkingLottoPrizes.set(5, winningStat_5);
    vikkingLottoPrizes.set(6, winningStat_6);

    found.set(1,false);
    found.set(2,false);
    found.set(3,false);
    found.set(4,false);
    found.set(5,false);
    found.set(6,false);
    found.set(7,false);
    
    for(let u=0; u < winningVikingRow.length;u++){
        let row_winning = winningVikingRow[u];


        for(let row=0; row < row_winning.length - 2; row++){ // - 2 on length -1 for date -1 for extra number check!!

            
            for(let c=0; c < cupongArray.length; c++){
// console.log("cupong index: ", c );
                if(cupongArray[c] == row_winning[row]){

                    //console.log("found " + cupongArray[c] + " on: " + row_winning[row]);
                    switch(c){
                        case 0: 
                            found.set(1,true);
                            // console.log(cupongArray[c], " case 0 found set 1 true ",  row_winning[row]);
                            break;
                        case 1:
                            found.set(2,true);
                            // console.log(cupongArray[c], " case 1 found set 2 true ",  row_winning[row]);
                            break;
                        case 2:
                            found.set(3,true);
                            // console.log(cupongArray[c], " case 2 found set 3 true ",  row_winning[row]);
                            break;
                        case 3:
                            found.set(4,true);
                            // console.log(cupongArray[c], " case 3 found set 4 true ",  row_winning[row]);
                            break;
                        case 4:
                            found.set(5,true);
                            // console.log(cupongArray[c], " case 4 found set 5 true ",  row_winning[row]);
                            break;
                        case 5:
                            found.set(6,true);
                            // console.log(cupongArray[c], " case 5 found set 6 true ",  row_winning[row]);
                            break;
                        // case 6:
                        //     found.set(7,true);
                        //     break;
                    }
                }
            }
        }// end of cupong
        
        // console.log("[Extra number] cupong: ", cupongArray[6], " [Extra number] row_winning ", row_winning[6]);
        
        if(cupongArray[6] == row_winning[6]){
            // 
            //extra_found++;
            // console.log("cupongArray[6]: ", cupongArray[6], " == ", " row_winning[6]:  ", row_winning[6]  );
            found.set(7,true);
        }

        let mainNumbesrCountFound = 0; // check how many correct with in a cupon
        let extraNumberFound = 0;
        found.forEach((value, keys) => {
            if(value == true && keys !== 7 ){
                mainNumbesrCountFound++;
            }
            
            if( keys == 7 && value == true){
                extraNumberFound = 1;
            }
            //console.log(keys,value)

        });
        // console.log("extra numberFound is: ", extraNumberFound, " 1 == true 0 == false" );
        
// console.log("cound found: ", mainNumbesrCountFound, " on winning row: ", row_winning);
        
// let prize_6_pluss = 0;
// let prize_6 = 0;
// let prize_5_pluss = 0;
// let prize_5 = 0;
// let prize_4 = 0;
// let prize_3 = 0;

switch(extraNumberFound){
    case 0:
        //console.log("extra numbers is false");
        // we have potential 6 5 4 3 prize (with no extra number)
        switch(mainNumbesrCountFound){
            case 6: // no extra (2 prize)
            //console.log("6 -Prize-");
            let check_2 = vikkingLottoPrizes.get(2);
            check_2.push(winningVikingRow[u]);
            break;
            case 5: // no extra (4 prize)
            //console.log("4 -Prize-");
            let check_4 = vikkingLottoPrizes.get(4);
            check_4.push(winningVikingRow[u]);
            break;
            case 4: // no extra (5 prize)
            //console.log("5 -Prize-");
            let check_5 = vikkingLottoPrizes.get(5);
            check_5.push(winningVikingRow[u]);
            break;
            case 3: // no extra (6 prize)
            //console.log("6 -Prize-");
            let check_6 = vikkingLottoPrizes.get(6);
            check_6.push(winningVikingRow[u]);
            break;
        }
        break;
    case 1:
        // we have potential all prize
        //console.log("extra numbers is true");
        switch(mainNumbesrCountFound){
            case 6: // pluss 1 (main prize)
            //console.log("6 pluss 1 -Prize-");
            let check_1 = vikkingLottoPrizes.get(1);
            check_1.push(winningVikingRow[u]);
            break;
            case 5: // pluss 1 (3 prize)
            //console.log("5 pluss 1 -Prize-");
            let check_3 = vikkingLottoPrizes.get(3);
            check_3.push(winningVikingRow[u]);
            break;
            case 4: // no extra is given with 4 main pluss extra
            //console.log("5 -Prize-");
            let check_5 = vikkingLottoPrizes.get(5);
            check_5.push(winningVikingRow[u]);
            break;
            case 3: // no extra is given with 3 main pluss extra
            //console.log("6 -Prize-");
            let check_6 = vikkingLottoPrizes.get(6);
            check_6.push(winningVikingRow[u]);
            break;
        }
        break;
}
    found.set(1,false);
    found.set(2,false);
    found.set(3,false);
    found.set(4,false);
    found.set(5,false);
    found.set(6,false);
    found.set(7,false);
    }
    console.log("\n");
    vikkingLottoPrizes.forEach((value, keys) => {
        switch(keys){
            case 1:
                console.log(keys, " 6 + 1 Prize Count: ",value)
                break;
            case 2:
                console.log(keys, " 6 + 0 Prize Count: ",value)
                break;
            case 3:
                console.log(keys, " 5 + 1 Prize Count: ",value)
                break;
            case 4:
                console.log(keys, " 5 + 0 Prize Count: ",value)
                break;
            case 5:
                console.log(keys, " 4 Prize Count: ",value)
                break;
            case 6:
                console.log(keys, " 3 Prize Count: ",value)
                break;
        }    
    });

}
// let loopingTest = 0;
// do {
//     test(cupongArray);
//     loopingTest++;
//     console.log("loopingTest ",loopingTest);
// } while (winningStat_1.length > 1);
test(cupongArray);