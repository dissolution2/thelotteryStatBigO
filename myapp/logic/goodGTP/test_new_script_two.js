const fullData = require('../raw_data.js');
const dataSet = fullData(2);
const dataSetFull = fullData(1);
   
      
    
    
    // Define the user's input pairs as variables
    // let userinputpairOne = [24, 27];
    // let userinputpairTwo = [16, 22]; // on time

    let userinputpairOne = [24, 27];
    let userinputpairTwo = [16, 22];
    
    function findPairsInSameRow(dataSet, pair1, pair2) {
        const pairsInSameRow = [];
    
        for (let i = 0; i < dataSet.length; i++) {
            const row = dataSet[i];
            const foundPair1 = pair1.every(num => row.includes(num));
            const foundPair2 = pair2.every(num => row.includes(num));
    
            if (foundPair1 && foundPair2) {
                pairsInSameRow.push(i + 1); // Adding 1 to convert to 1-based row numbers
            }
        }
    
        return pairsInSameRow;
    }
    
    const commonRows = findPairsInSameRow(dataSet, userinputpairOne, userinputpairTwo);
    
    console.log(`[${userinputpairOne}] and [${userinputpairTwo}] can be found together ${commonRows.length} times in the same row.`);
    if (commonRows.length > 0) {
        console.log("Found in the following rows:");
        commonRows.forEach(row => {
            console.log(`Row ${row}: [${dataSet[row - 1].join(", ")}]`);
        });
    }

    if(commonRows.length > 0){

        commonRows.forEach(row => {
            console.log(`Row ${row}: [${dataSetFull[row-1]}] - Full data`);
        });   
        // console.log('Row Full: ', dataSet[row -1]);
    }
    