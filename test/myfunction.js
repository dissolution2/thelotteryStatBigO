function sum(a, b) {
    return a + b;
};

  function multiply(a, b){
    return a * b;
};

function subtract(a, b){
    return a - b;
}


function randomN(a){
    let num = [];
    for(let i = 0; i < a;i++){
        
        num.push(Math.floor(Math.random() * 10));
    }
    return num;
}

// exports to test !!
module.exports.sum = sum;
module.exports.addtraction = multiply;
module.exports.subtract = subtract;
module.exports.randomN = randomN;