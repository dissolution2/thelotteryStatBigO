const stripedData = require('../raw_data.js');
const dataSet = stripedData(2);

      function calculateBestNextNumber(mostFrequentTriplets, dataSet) {
        // Create an object to store the frequency of numbers that appear with the given triplets.
        const nextNumberFrequency = {};
      
        // Create an object to store the rows where each triplet occurred.
        const tripletRows = {};
      
        // Iterate through the dataset and update the frequency of numbers that appear with the triplets.
        for (const row of dataSet) {
          for (const triplet of mostFrequentTriplets) {
            if (triplet.every((num) => row.includes(num))) {
              // All numbers in the triplet are present in the current row.
              for (const num of row) {
                if (!triplet.includes(num)) {
                  // Increment the frequency of the number that is not in the triplet.
                  if (!nextNumberFrequency[num]) {
                    nextNumberFrequency[num] = 0;
                  }
                  nextNumberFrequency[num]++;
                }
              }
      
              // Store the row where the triplet occurred.
              if (!tripletRows[triplet.toString()]) {
                tripletRows[triplet.toString()] = [];
              }
              tripletRows[triplet.toString()].push(row);
            }
          }
        }
      
        // Find the number with the highest frequency.
        let bestNextNumber = null;
        let maxFrequency = 0;
        for (const num in nextNumberFrequency) {
          const frequency = nextNumberFrequency[num];
          if (frequency > maxFrequency) {
            bestNextNumber = Number(num);
            maxFrequency = frequency;
          }
        }
      
        return { bestNextNumber, tripletRows };
      }
      
      // Example usage:
      const mostFrequentTriplets = [
        [22, 26, 30]
        // Add more triplets as needed
      ];
      /** ,
        [18, 21, 35],
        [22, 26, 35], */
      
      for (const triplet of mostFrequentTriplets) {
        const { bestNextNumber, tripletRows } = calculateBestNextNumber([triplet], dataSet);
        console.log(`Best Next Probability Number for Triplet ${triplet}: ${bestNextNumber}`);
      
        // Check if the triplet occurred in any rows before attempting to display them.
        const tripletRowsArray = tripletRows[triplet.toString()];
        if (tripletRowsArray && tripletRowsArray.length > 0) {
          console.log(`Triplet ${triplet} occurred in the following rows:`);
          tripletRowsArray.forEach((row, index) => {
            console.log(`Row ${index + 1}: ${row.join(', ')}`);
          });
        } else {
          console.log(`Triplet ${triplet} did not occur in any rows.`);
        }
      }
      