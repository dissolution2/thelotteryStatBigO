
const stripedData = require('../raw_data.js');
const dataSet = stripedData(2);

  // Create an object to store the frequency of each number from 1 to 48.
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
  
  const tripletFrequency = {};
  
  // Iterate through the dataset and update the frequency of triplets.
  for (const row of dataSet) {
    const numbers = row.slice(0, 6).sort(); // Sort the first 6 numbers to ensure consistent triplets.
    for (let i = 0; i < 4; i++) {
      for (let j = i + 1; j < 5; j++) {
        for (let k = j + 1; k < 6; k++) {
          const triplet = [numbers[i], numbers[j], numbers[k]];
          const tripletKey = triplet.join(",");
          if (!tripletFrequency[tripletKey]) {
            tripletFrequency[tripletKey] = 0;
          }
          tripletFrequency[tripletKey]++;
        }
      }
    }
  }
  
  // Find the most frequently drawn triplets.
  const mostFrequentTriplets = [];
  let maxTripletFrequency = 0;
  for (const tripletKey in tripletFrequency) {
    const frequency = tripletFrequency[tripletKey];
    if (frequency > maxTripletFrequency) {
      mostFrequentTriplets.length = 0; // Clear the previous most frequent triplets.
      mostFrequentTriplets.push(tripletKey.split(",").map(Number));
      maxTripletFrequency = frequency;
    } else if (frequency === maxTripletFrequency) {
      mostFrequentTriplets.push(tripletKey.split(",").map(Number));
    }
  }
  
  console.log("Frequency of Number Triplets:", tripletFrequency);
  console.log("Most Frequently Drawn Number Triplets:", mostFrequentTriplets);
  
  function calculateBestNextNumber(mostFrequentTriplets, dataSet) {
    // Create an object to store the frequency of numbers that appear with the given triplets.
    const nextNumberFrequency = {};
  
    // Iterate through the dataset and update the frequency of numbers that appear with the triplets.
    for (const row of dataSet) {
      const numbers = row.slice(0, 6).sort(); // Sort the first 6 numbers to ensure consistent triplets.
      for (const triplet of mostFrequentTriplets) {
        if (triplet.every((num) => numbers.includes(num))) {
          // All numbers in the triplet are present in the current row.
          for (const num of numbers) {
            if (!triplet.includes(num)) {
              // Increment the frequency of the number that is not in the triplet.
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
  for (const triplet of mostFrequentTriplets) {
    const bestNextNumber = calculateBestNextNumber([triplet], dataSet);
    console.log(`Best Next Probability Number for Triplet ${triplet}: ${bestNextNumber}`);
  }
  