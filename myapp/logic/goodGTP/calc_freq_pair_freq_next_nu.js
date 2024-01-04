// this was temp_data.js in same folder
// const dataRow = require('./temp_data.js');
// const dataSet = dataRow();

const stripedData = require('../raw_data.js');
const dataSet = stripedData(2);

  // Create an object to store the frequency of each number from 1 to 48.
/*
  const numberFrequency = {};
  for (let i = 1; i <= 48; i++) {
    numberFrequency[i] = 0;
  }
  
  // Iterate through the dataset and update the frequency of each number.
  for (const row of dataSet) {
    for (let i = 0; i < 6; i++) {
      const number = row[i];
      numberFrequency[number]++;
    }
  }
  
  // Find the most frequently drawn numbers.
  const mostFrequentNumbers = [];
  let maxFrequency = 0;
  for (const number in numberFrequency) {
    const frequency = numberFrequency[number];
    if (frequency > maxFrequency) {
      mostFrequentNumbers.length = 0; // Clear the previous most frequent numbers.
      mostFrequentNumbers.push(Number(number));
      maxFrequency = frequency;
    } else if (frequency === maxFrequency) {
      mostFrequentNumbers.push(Number(number));
    }
  }
  
  console.log("Frequency of Numbers (1-48):", numberFrequency);
  console.log("Most Frequently Drawn Numbers:", mostFrequentNumbers);
 */ 

  // abow is only the numbers and there freq... have that from befor!!

  const pairFrequency = {};
  
  // Iterate through the dataset and update the frequency of pairs.
  for (const row of dataSet) {
    const numbers = row.slice(0, 6).sort(); // Sort the first 6 numbers to ensure consistent pairs.
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
  
  // Find the most frequently drawn pairs.
  const mostFrequentPairs = [];
  let maxPairFrequency = 0;
  for (const pairKey in pairFrequency) {
    const frequency = pairFrequency[pairKey];
    if (frequency > maxPairFrequency) {
      mostFrequentPairs.length = 0; // Clear the previous most frequent pairs.
      mostFrequentPairs.push(pairKey.split(",").map(Number));
      maxPairFrequency = frequency;
    } else if (frequency === maxPairFrequency) {
      mostFrequentPairs.push(pairKey.split(",").map(Number));
    }
  }
  
  console.log("Frequency of Number Pairs:", pairFrequency);
  console.log("Most Frequently Drawn Number Pairs:", mostFrequentPairs);
  

  function calculateBestNextNumber(mostFrequentPairs, dataSet) {
    // Create an object to store the frequency of numbers that appear with the given pairs.
    const nextNumberFrequency = {};
  
    // Iterate through the dataset and update the frequency of numbers that appear with the pairs.
    for (const row of dataSet) {
      const numbers = row.slice(0, 6).sort(); // Sort the first 6 numbers to ensure consistent pairs.
      for (const pair of mostFrequentPairs) {
        if (pair.every((num) => numbers.includes(num))) {
          // All numbers in the pair are present in the current row.
          for (const num of numbers) {
            if (!pair.includes(num)) {
              // Increment the frequency of the number that is not in the pair.
              if (!nextNumberFrequency[num]) {
                nextNumberFrequency[num] = 0;
              }
              nextNumberFrequency[num]++;
            }
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
  
    return bestNextNumber;
  }
  
  // Example usage:
//   const mostFrequentPairs = [
//     [24, 27], [18, 21], [22, 26], [13, 24],
//     [24, 45], [22, 23], [4, 41], [16, 22],
//     [22, 30], [2, 44], [41, 44], [37, 4]
//   ];
  
  for (const pair of mostFrequentPairs) {
    const bestNextNumber = calculateBestNextNumber([pair], dataSet);
    console.log(`Best Next Probability Number for Pair ${pair}: ${bestNextNumber}`);
  }
  