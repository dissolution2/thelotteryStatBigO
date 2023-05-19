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

module.exports = vikingRandomGenerator;