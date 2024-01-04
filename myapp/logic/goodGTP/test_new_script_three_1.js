const fullData = require('../raw_data.js');
const dataSet = fullData(2);
const dataSetFull = fullData(1);
  
  const calculatePairFrequencies = (dataSet) => {
    const pairFrequency = {};
  
    for (let i = 0; i < dataSet.length; i++) {
      const row = dataSet[i];
      const numbers = row.slice(0, 6).sort();
  
      for (let j = 0; j < 5; j++) {
        for (let k = j + 1; k < 6; k++) {
          const pair = [numbers[j], numbers[k]];
          const pairKey = pair.join(",");
          if (!pairFrequency[pairKey]) {
            pairFrequency[pairKey] = {
              frequency: 0,
              rows: [],
            };
          }
          pairFrequency[pairKey].frequency++;
          pairFrequency[pairKey].rows.push(i + 1); // Add 1 to the row number to make it 1-based.
        }
      }
    }
  
    return pairFrequency;
  };
  
  const showFrequentPairs = (pairFrequency, threshold, dataSet) => {
    const frequentPairs = [];
  
    for (const pairKey in pairFrequency) {
      const frequency = pairFrequency[pairKey].frequency;
      if (frequency >= threshold) {
        const pair = pairKey.split(",").map(Number);
        const rows = pairFrequency[pairKey].rows;
        const rowDetails = rows.map((rowNumber) => `Row ${rowNumber}: [${dataSet[rowNumber - 1].join(", ")}]`);
        frequentPairs.push({ pair, frequency, rowDetails });
      }
    }
  
    return frequentPairs;
  };
  
  // Example usage:
  const threshold = 4;
  const pairFrequency = calculatePairFrequencies(dataSet);
  const frequentPairs = showFrequentPairs(pairFrequency, threshold, dataSet);
  
  console.log(`Pairs with a frequency of ${threshold} or higher:`);
  frequentPairs.forEach(({ pair, frequency, rowDetails }) => {
    console.log(`Pair ${pair}: Frequency ${frequency} found in Rows:`);
    console.log(rowDetails.join("\n"));
  });
  

  console.log('Row 1: ',dataSetFull[0]); // Row nr - 1
  console.log('Row 20: ',dataSetFull[19]); // Row nr - 1
  console.log('Row 21: ',dataSetFull[20]); // Row nr - 1