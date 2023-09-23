/* @ return [] input numper, pol, exclude_1..2..3 */

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

// let cupongArray = [];
// //cupongArray = vikingRandomGenerator(6,48,22,35);
// cupongArray = vikingRandomGenerator(6,48,22,26,47);
// // cupongArray = vikingRandomGenerator(6,48);
// // cupongArray.push(10);
// // cupongArray.push(9);

// let vikingNumber = vikingRandomGenerator(1,5)[0];
// cupongArray.push(vikingNumber);
// console.log(cupongArray);




// test(cupongArray); // return no

module.exports = vikingRandomGenerator;