const { json } = require('body-parser');
var express = require('express');
var router = express.Router();

let randomGenerated = [];
/* GET home page. */
// get frequensVkingTall
router.get('/freqDrawn/:number', function(req, res, next) {

  let x_value = Number(req.params.number);
  
  if(x_value > 0 && x_value < 49 ) { 
    res.render('index', 
      { data: 
        { number: numberSetsFrequensVikingTall.get(x_value).getNumberValue(),
        befor: numberSetsFrequensVikingTall.get(x_value).getBeforMap(),
        after: numberSetsFrequensVikingTall.get(x_value).getAfterMap() 
        } 
      });
  }else{
    res.render('index', { data: { number: Number(0) } });
  }
  console.log('x_value: ', x_value );
});


router.post('/freqDrawn', function(req, res, next) {
  const test_cupong_winning_row = require('../logic/test_cupong.js'); // 
  let vikkingLottoPrizes = new Map();
  vikkingLottoPrizes = test_cupong_winning_row(randomGenerated);
// console.log('req.body: ', req.body);

const postObj = JSON.parse(JSON.stringify(req.body));
// console.log('postObje: ', postObj);
let index = Object.values(postObj)[0].toString().split(':')[1];

// console.log('index: ', index);
  if(index < 6 ) { 
    res.render('index', 
      { data: 
        { number: numberSetsFrequensVikingTall.get(Number(Object.keys(postObj)[0])).getNumberValue(),
        befor: numberSetsFrequensVikingTall.get(Number(Object.keys(postObj)[0])).getBeforMap(),
        after: numberSetsFrequensVikingTall.get(Number(Object.keys(postObj)[0])).getAfterMap(),
        random: randomGenerated, prizes: vikkingLottoPrizes 
        } 
      });
  }else{
    console.log('index: ', index, ' looking for Extra viking freq -implemnt later');
    // res.render('index', { data: { number: Number(0) } });
  }
});

router.post('/freqNumber', function(req, res, next) {
  // console.log('freqAll called');
  const test_cupong_winning_row = require('../logic/test_cupong.js'); // 
  const postObj = JSON.parse(JSON.stringify(req.body));
  console.log('postObje: ', postObj);

  // globals: numberFrequensVikingMainLotto:  [
  //   Map(1) { 0 => 0 },   Map(1) { 1 => 5 },   Map(1) { 2 => 13 },

  let valueFreqDrawn = 0;
  for(let i = 0; i < numberFrequensVikingMainLotto.length;i++){
      if(numberFrequensVikingMainLotto[i].has(Number(Object.keys(postObj)[0]))){
        valueFreqDrawn = numberFrequensVikingMainLotto[i].get(Number(Object.keys(postObj)[0]));
        break;
      }
  }
  console.log('found: ', valueFreqDrawn);

  let days_map = new Map();
  const days = require('../logic/days_since_last_drawn.js');

  // Map() => vikingNumber(1 etc ) as key, value 'string data';
  vikingMainLotto.forEach((value, keys) => {
    // console.log('key: ', keys, ' value: ', value);
    days_map.set(keys, days(value));
  });

  let day = [];
  days_map.forEach((value,keys)=>{
    
    if(keys === Number(Object.keys(postObj)[0])){
      console.log('number: ', keys, ' has: ', value, ' days since last drawn');
      day.push(keys);
      day.push(value);
    }
  });
  
  let vikkingLottoPrizes = new Map();
  vikkingLottoPrizes = test_cupong_winning_row(randomGenerated);

  res.render('index', { data: 
    { number: null, random: randomGenerated, prizes: vikkingLottoPrizes, 
      freqnumber: { number: Number(Object.keys(postObj)[0]), freq: valueFreqDrawn, days: day }
    } 
  });
  // res.render('index', { data: { number: Number(0) }, freq: { k: '', v: '' } });
});




router.get('/freqAll/:number', function(req, res, next) {
  // console.log('freqAll called');
  let x_value = Number(req.params.number);
  let asked_heighest_freq = new Map();
  for(let i=0; i < numberFrequensVikingMainLotto.length;i++){
    numberFrequensVikingMainLotto[i].forEach((value, keys) => {

      // console.log('keys: ', keys, ' value: ', value);
      if(value >= x_value){
        asked_heighest_freq.set(keys,value);
      }
    });
  }

  console.log('asked_heighest_freq: ', asked_heighest_freq);
  // console.log('numberFrequensVikingMainLotto: ',numberFrequensVikingMainLotto);

  res.render('index', { data: { number: Number(0) }, freq: { k: '', v: '' } });
});

// main page at start - for now no data to show!!!
router.get('/', function(req, res, next) {

  //console.log('req.params: ', req.params);

  res.render('index', { data: { number: Number(0) } });
});

// if user manulay type in url /random =(Post)
router.get('/random', function(req, res, next) {

  //console.log('req.params: ', req.params);

  res.render('index', { data: { number: Number(0) } });
});


// get random cupong with max 3 default numbers and check winning changes up against data = winningRow's
router.post('/random', function(req, res, next) {
  const vikingRandomGenerator = require('../logic/number_generator.js'); // 
  const test_cupong_winning_row = require('../logic/test_cupong.js'); // 

  // console.log('req.params: ', req.body);
  // console.log('par: ', req.body['33']);

  // 1. stringify to get [Object: null prototype] away 
  // 2. parse to get it back to an Object
  // req.params:  [Object: null prototype] { '22': '22', '23': '23', '24': '24' }
  const paramObject = JSON.parse(JSON.stringify(req.body));

  console.log('paramObject: ', paramObject);
//   console.log('length: ', Object.keys(obj_parsed).length);

//   console.log('index 0 value: ', Object.keys(obj_parsed)[0]);

//  Object.keys(req.body).map(function(key,index) {
//     console.log('value: ', key, ' index: ', index);
//  });

 randomGenerated = [];
 /* @ return [] input numper, pol, exclude_1..2..3 */
 switch(Object.keys(paramObject).length){
   case 1:
    randomGenerated = vikingRandomGenerator(
      6,
      48,
      Number(Object.keys(paramObject)[0]));
    break;
   case 2:
    randomGenerated = vikingRandomGenerator(
      6,
      48,
      Number(Object.keys(paramObject)[0]),
      Number(Object.keys(paramObject)[1]));
    break;
   case 3:
    randomGenerated = vikingRandomGenerator(
      6,
      48,
      Number(Object.keys(paramObject)[0]),
      Number(Object.keys(paramObject)[1]),
      Number(Object.keys(paramObject)[2]));
    break;
    default:
      randomGenerated = vikingRandomGenerator(
        6,
        48);    
  }

  // and might have the last vikingNumber to be able to chosen!!
  let vikingNumber = vikingRandomGenerator(1,5)[0];
  randomGenerated.push(vikingNumber);
  
  console.log('randomGenerated: ', randomGenerated); // DebugLine
  
// works but cant get the row generated!! input to test_cu... (vikingRandomGenerator(6,48,22,35)) 
// testing, changed the way do the import
//   test_cupong_winning_row(randomGenerated).forEach((value, keys) => {
//     switch(keys){
//         case 1:
//             console.log(keys, " 6 + 1 Prize Count: ",value)
//             break;
//         case 2:
//             console.log(keys, " 6 + 0 Prize Count: ",value)
//             break;
//         case 3:
//             console.log(keys, " 5 + 1 Prize Count: ",value)
//             break;
//         case 4:
//             console.log(keys, " 5 + 0 Prize Count: ",value)
//             break;
//         case 5:
//             console.log(keys, " 4 Prize Count: ",value)
//             break;
//         case 6:
//             console.log(keys, " 3 Prize Count: ",value)
//             break;
//     }    
// });

// let vikkingLottoPrizes = new Map();
let vikkingLottoPrizes = new Map();
vikkingLottoPrizes = test_cupong_winning_row(randomGenerated);
// console.log('vikkingLottoPrizes: ', vikkingLottoPrizes);

res.render('index', { data: { number: null, random: randomGenerated, prizes: vikkingLottoPrizes } });
});





// router.get('/random/:n1/:n2/:n3', function(req, res, next) {

//   console.log('param: ', req.params);
//   const { data: {n1 , n2 , n3} } = req.params;

//   // switch(data){
//   //     case data['n1'] !== 0 && data['n2'] !== 0 && data['n3'] !== 0:
//   //       console.log('all input is 0');
//   //     break; 
//   //     case 
//   // }

//   // let n1 = 0;
//   // let n2 = 0;
//   // let n3 = 0;

//   if(Number(req.params.n1) > 0){
    
//   }
//   if(Number(req.params.n2) > 0){
    
//   }
//   if(Number(req.params.n3) > 0){
    
//   }

  
//   console.log('n1: ', n1, ' n2: ', n2, ' n3: ', n3);
//   // console.log('cuppong ', cupong );

//   // const cupong = require('../logic/number_generator.js'); // 
//   const vikingRandomGenerator = require('../logic/number_generator.js'); // 
//   const test_cupong_winning_row = require('../logic/test_cupong.js'); // 


//   // user case on how many are inputed!!

//   let randomGenerated = [];
//   randomGenerated = vikingRandomGenerator(6,48,n1,n2,n3);/* @ return [] input numper, pol, exclude_1..2..3 */
//   let vikingNumber = vikingRandomGenerator(1,5)[0];
//   randomGenerated.push(vikingNumber);
//   console.log('randomGenerated: ', randomGenerated);
//   // works but cant get the row generated!! input to test_cu... (vikingRandomGenerator(6,48,22,35))
//   test_cupong_winning_row(randomGenerated).forEach((value, keys) => {
//     switch(keys){
//         case 1:
//             console.log(keys, " 6 + 1 Prize Count: ",value)
//             break;
//         case 2:
//             console.log(keys, " 6 + 0 Prize Count: ",value)
//             break;
//         case 3:
//             console.log(keys, " 5 + 1 Prize Count: ",value)
//             break;
//         case 4:
//             console.log(keys, " 5 + 0 Prize Count: ",value)
//             break;
//         case 5:
//             console.log(keys, " 4 Prize Count: ",value)
//             break;
//         case 6:
//             console.log(keys, " 3 Prize Count: ",value)
//             break;
//     }    
// });





  
  
//   res.render('index', { data: { number: Number(0) } });
  
// });


module.exports = router;
