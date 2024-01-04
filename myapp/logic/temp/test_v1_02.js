require('../globals.js');
console.log(numberSetsFrequensVikingTall.get(22));


const data = {
    22: {
      before: { 45: 2, 21: 4 },
      after: { 18: 2, 5: 2 }
    },
    21: {
      before: { 22: 4 },
      after: { 5: 1, 7: 1 }
    },
    5: {
      before: { 21: 1 },
      after: { 7: 1, 8: 1 }
    },
    7: {
      before: { 5: 1 },
      after: { 8: 1 }
    },
    8: {
      before: { 7: 1 },
      after: {}
    }
  };
  
  function calculateNextNumberProbability(userInput, data) {
    const beforeFrequencies = data[userInput].before;
    const afterFrequencies = data[userInput].after;
  
    const totalBeforeFrequency = Object.values(beforeFrequencies).reduce(
      (total, freq) => total + freq,
      0
    );
    const totalAfterFrequency = Object.values(afterFrequencies).reduce(
      (total, freq) => total + freq,
      0
    );
  
    const beforeProbabilities = {};
    const afterProbabilities = {};
  
    for (const number in beforeFrequencies) {
      const frequency = beforeFrequencies[number];
      beforeProbabilities[number] = frequency / totalBeforeFrequency;
    }
  
    for (const number in afterFrequencies) {
      const frequency = afterFrequencies[number];
      afterProbabilities[number] = frequency / totalAfterFrequency;
    }
  
    return { before: beforeProbabilities, after: afterProbabilities };
  }
  
  function findBestNumber(probabilities) {
    let bestNumber = null;
    let bestProbability = 0;
  
    for (const number in probabilities) {
      if (probabilities[number] > bestProbability) {
        bestNumber = number;
        bestProbability = probabilities[number];
      }
    }
  
    return bestNumber;
  }
  
  const userInput = 22; // Replace with the user's input
  const nextNumberProbabilities = calculateNextNumberProbability(
    userInput,
    data
  );
  
  console.log("Probabilities before:", nextNumberProbabilities.before);
  console.log("Probabilities after:", nextNumberProbabilities.after);
  
  const bestBeforeNumber = findBestNumber(nextNumberProbabilities.before);
  const bestAfterNumber = findBestNumber(nextNumberProbabilities.after);
  
  console.log("Best number before:", bestBeforeNumber);
  console.log("Best number after:", bestAfterNumber);
  