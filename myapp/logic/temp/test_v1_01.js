

// const data = {
//     22: { before: {}, after: {} },
//     21: { before: {}, after: {} },
//     5: { before: {}, after: {} },
//     7: { before: {}, after: {} },
//     8: { before: {}, after: {} },
//     1: { before: {21: 1, 17: 1, 0: 2, 47: 1}, after: { 6: 1, 22: 2, 35: 1, 43: 1 } }
//   };

  // const data = {
  //   22: {
  //     before: { 45: 2, 21: 4 },
  //     after: { 18: 2, 5: 2, 13:100 }
  //   },
  //   21: {
  //     before: { 22: 4 },
  //     after: { 5: 1, 7: 1 }
  //   },
  //   5: {
  //     before: { 21: 1 },
  //     after: { 7: 1, 8: 1 }
  //   },
  //   7: {
  //     before: { 5: 1 },
  //     after: { 8: 1 }
  //   },
  //   8: {
  //     before: { 7: 1 },
  //     after: {}
  //   }
  // };
  
  // function calculateNextNumberProbability(userInput, data) {
  //   const frequencies = data[userInput].after;
  
  //   const totalFrequency = Object.values(frequencies).reduce(
  //     (total, freq) => total + freq,
  //     0
  //   );
  
  //   const probabilities = {};
  
  //   for (const number in frequencies) {
  //     const frequency = frequencies[number];
  //     probabilities[number] = frequency / totalFrequency;
  //   }
  
  //   return probabilities;
  // }
  
  // const userInput = 22; // Replace with the user's input
  // const nextNumberProbabilities = calculateNextNumberProbability(
  //   userInput,
  //   data
  // );
  
  // console.log(nextNumberProbabilities);
  
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
  
  const userInput = 22; // Replace with the user's input
  const nextNumberProbabilities = calculateNextNumberProbability(
    userInput,
    data
  );
  
  console.log("Probabilities before:", nextNumberProbabilities.before);
  console.log("Probabilities after:", nextNumberProbabilities.after);
  