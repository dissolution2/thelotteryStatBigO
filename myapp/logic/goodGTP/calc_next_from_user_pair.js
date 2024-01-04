const stripedData = require('../raw_data.js');
const dataSet = stripedData(2);


    function calculateBestNextNumber(userInput, dataSet) {
        // Create an object to store the frequency of numbers that appear with the user's input pairs.
        const nextNumberFrequency = {};
      
        // Sort the user input to ensure consistent pairs.
        const userPair = userInput.slice().sort();
      
        // Initialize a count for the user's input pair.
        let userPairCount = 0;
      
        // Initialize an array to store the rows where the user's input pair occurs.
        const rowsWithUserPair = [];
      
        // Iterate through the dataset and update the frequency of numbers that appear with the user's input pairs.
        for (let i = 0; i < dataSet.length; i++) {
          const row = dataSet[i];
          const numbers = row.slice().sort(); // Sort all numbers in the current row.
          if (userPair.every((num) => numbers.includes(num))) {
            // All numbers in the user's input pair are present in the current row.
            userPairCount++; // Increment the count of occurrences for the user's input pair.
            rowsWithUserPair.push({ row, numbers }); // Store the row and numbers in the array.
            for (const num of numbers) {
              if (!userPair.includes(num)) {
                // Increment the frequency of the number that is not in the user's input pair.
                if (!nextNumberFrequency[num]) {
                  nextNumberFrequency[num] = 0;
                }
                nextNumberFrequency[num]++;
              }
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
      
        return { bestNextNumber, userPairCount, rowsWithUserPair };
      }
      
      // Example usage with user input:
      const userInput = [25,26]; // Replace with the user's input pair.
      const { bestNextNumber, userPairCount, rowsWithUserPair } = calculateBestNextNumber(userInput, dataSet);
      console.log(`User Input Pair ${userInput} occurred ${userPairCount} times in the dataset.`);
      console.log(`Best Next Probability Number for User Input Pair ${userInput}: ${bestNextNumber}`);
      console.log(`Rows where User Input Pair ${userInput} occurred:`);
      rowsWithUserPair.forEach(({ row }, index) => {
        console.log(`Row ${index + 1}: [${row.join(", ")}]`);
      });
      