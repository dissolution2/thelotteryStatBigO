const fullData = require('../raw_data.js');
const dataSet = fullData(2);
const dataSetFull = fullData(1);
  
  const calculatePairFrequencies = (dataSet) => {
    const pairFrequency = {};
  
    for (const row of dataSet) {
      const numbers = row.slice(0, 6).sort();
  
      for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 6; j++) {
          const pair = [numbers[i], numbers[j]];
          const pairKey = pair.join(",");
          if (!pairFrequency[pairKey]) {
            pairFrequency[pairKey] = 0;
          }
          pairFrequency[pairKey]++;
        }
      }
    }
  
    return pairFrequency;
  };
  
  const showFrequentPairs = (pairFrequency, threshold) => {
    const frequentPairs = [];
    
    for (const pairKey in pairFrequency) {
      const frequency = pairFrequency[pairKey];
      if (frequency >= threshold) {
        const pair = pairKey.split(",").map(Number);
        frequentPairs.push({ pair, frequency });
      }
    }
  
    return frequentPairs;
  };
  
  // Example usage:
  const threshold = 5;
  const pairFrequency = calculatePairFrequencies(dataSet);
  const frequentPairs = showFrequentPairs(pairFrequency, threshold);
  
  console.log(`Pairs with a frequency of ${threshold} or higher:`);
  frequentPairs.forEach(({ pair, frequency }) => {
    console.log(`Pair ${pair}: Frequency ${frequency}`);
  });
  