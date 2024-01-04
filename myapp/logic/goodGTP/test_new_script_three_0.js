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
      
      const showFrequentPairs = (pairFrequency, threshold) => {
        const frequentPairs = [];
      
        for (const pairKey in pairFrequency) {
          const frequency = pairFrequency[pairKey].frequency;
          if (frequency >= threshold) {
            const pair = pairKey.split(",").map(Number);
            const rows = pairFrequency[pairKey].rows;
            frequentPairs.push({ pair, frequency, rows });
          }
        }
      
        return frequentPairs;
      };
      
      // Example usage:
      const threshold = 5;
      const pairFrequency = calculatePairFrequencies(dataSet);
      const frequentPairs = showFrequentPairs(pairFrequency, threshold);
      
      console.log(`Pairs with a frequency of ${threshold} or higher:`);
      frequentPairs.forEach(({ pair, frequency, rows }) => {
        console.log(`Pair ${pair}: Frequency ${frequency} found in Rows: [${rows.join(", ")}]`);
      });
      