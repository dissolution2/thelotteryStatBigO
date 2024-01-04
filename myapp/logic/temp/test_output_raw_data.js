const dataRows = require('./temp_data.js');

const stripedData = dataRows(2);
const fullData = dataRows(1);

console.log('stripedData: ', stripedData);
console.log('fullData: ', fullData);

