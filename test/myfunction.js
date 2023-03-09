function sum(a, b) {
    return a + b;
};

  function multiply(a, b){
    return a * b;
};

function subtract(a, b){
    return a - b;
};

function getRandomNumber(numberPol){
   return Math.floor(Math.random() * numberPol); 
};
/* test dev. with all test strings // comit out //
function randomN(number, pol){
    let num = [];
    
    for(let index = 1; index < number + 1; index++){
        //console.log("I-Loop runes " + index);
       
        let random_number = Math.floor(Math.random() * pol); // getRandomNumber(pol); // a to check if no same number would be called, set the pool now to 48
        //console.log("random number is: " + random_number);

        if(random_number == 0){
            random_number = 10;   
        }

        if(index == 1){
            num.push(random_number);
        }
        
        if(index > 1){
            //console.log("Index > 1 and num.length is: " + num.length);
            
            let found = 0;
            //let loopRuned = 0;
            for(let srIndex = 0; srIndex < num.length; srIndex++ ){

                //loopRuned++;
                //console.log("Search for same number have run: " + loopRuned);

                if(num[srIndex] == random_number){
                    //console.log("\n");
                    //console.log("random == !! : " + num[srIndex] + " random_number " + random_number);
                    //console.log("\n");
                    found = 1;
              //      loopRuned = 0;
                    break;
                }
            }
            // if found we wil miss a number to the array !!! 
            // how to add a new random if random number allready exist ?
            if(found != 1){
                num.push(random_number);
            }
            
            // have to call a new random numer and check it 
            if(found == 1){
                found = 0;
                //console.log("\n");
                //console.log("Equal numbers have been found!!");
                //console.log("\n");

// set back the main index loop 1 so we do call random numbers one more time
                index--;
            }
        }
    }
    return num;
};
// get 6 random numbers from a pool of 48
console.log(randomN(6,48));
console.log(randomN(1,5));
*/

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
console.log(vikingRandomGenerator(6,48));
console.log(vikingRandomGenerator(5,5));

// test 3 numbers random , 3 given = 21 - 22 - 23 to exclude
console.log("\n");
console.log("21 - 22 - 23 - " + vikingRandomGenerator(3,48,22,21,23).join(" - "));
console.log(vikingRandomGenerator(1,5));

// test 5 numbers random , 1 given = 23 to exclude
console.log("\n");
console.log("23 - " + vikingRandomGenerator(5,48,23).join(" - "));
console.log(vikingRandomGenerator(1,5));

// exports to test !!
//module.exports.sum = sum;
//module.exports.addtraction = multiply;
//module.exports.subtract = subtract;
//module.exports.randomN = randomN;