// Your numberSetsFrequensVikingTall array with objects
const numberSetsFrequensVikingTall = [
    {
      number: 22,
      befor: new Map([
        [10, 1],
        [43, 1],
        [13, 2],
        // Add more before data as needed
      ]),
      after: new Map([
        [14, 1],
        [28, 1],
        [26, 1],
        // Add more after data as needed
      ]),
    },
    // Add similar objects for other numbers
  ];
  
  // Function to calculate next number probabilities based on your data
  function calculateNextNumberProbability(userInput, data) {
    const selectedNumberData = data.find(item => item.number === userInput);
  
    if (!selectedNumberData) {
      return { before: new Map(), after: new Map() };
    }
  
    const beforeFrequencies = selectedNumberData.befor;
    const afterFrequencies = selectedNumberData.after;
  
    let totalBeforeFrequency = 0;
    for (const freq of beforeFrequencies.values()) {
      totalBeforeFrequency += freq;
    }
  
    let totalAfterFrequency = 0;
    for (const freq of afterFrequencies.values()) {
      totalAfterFrequency += freq;
    }
  
    const beforeProbabilities = new Map();
    const afterProbabilities = new Map();
  
    beforeFrequencies.forEach((freq, number) => {
      beforeProbabilities.set(number, freq / totalBeforeFrequency);
    });
  
    afterFrequencies.forEach((freq, number) => {
      afterProbabilities.set(number, freq / totalAfterFrequency);
    });
  
    return { before: beforeProbabilities, after: afterProbabilities };
  }
  
  // Function to find the best number based on probabilities
  function findBestNumber(probabilities) {
    let bestNumber = null;
    let bestProbability = 0;
  
    for (const [number, probability] of probabilities) {
      if (probability > bestProbability) {
        bestNumber = number;
        bestProbability = probability;
      }
    }
  
    return bestNumber;
  }
  
  const userInput = 22; // Replace with the user's input
  const nextNumberProbabilities = calculateNextNumberProbability(
    userInput,
    numberSetsFrequensVikingTall
  );
  
  console.log("Probabilities before:", Object.fromEntries(nextNumberProbabilities.before));
  console.log("Probabilities after:", Object.fromEntries(nextNumberProbabilities.after));
  
  const bestBeforeNumber = findBestNumber(nextNumberProbabilities.before);
  const bestAfterNumber = findBestNumber(nextNumberProbabilities.after);
  
  console.log("Best number before:", bestBeforeNumber);
  console.log("Best number after:", bestAfterNumber);
  