// Sample dataset
const dataSet = [
    [6,9,19,24,27,35,"February 7, 2021"], 
    [7,34,21,18,35,11,"February 20, 2021"],
    [28,43,40,39,12,6,"January 5, 2022"],
    [17,47,43,26,21,13,"January 12, 2022"],
    [43,40,31,29,16,3,"January 19, 2022"],
    [48,28,8,46,19,26,"January 26, 2022"],

    [18,31,21,36,27,16,"February 2, 2022"],
    [17,26,21,10,22,14,"February 9, 2022"],
    [21,1,6,46,17,20,"February 16, 2022"],
    [13,32,16,29,33,34,"February 23, 2022"],

    [45,24,46,38,13,21,"March 2, 2022"],
    [15,5,35,48,34,3,5,"March 9, 2022"],
    [36,29,33,34,18,7,"March 16, 2022"],
    [26,36,41,15,17,2,"March 23, 2022"],
    [9,4,38,21,31,15,"March 30, 2022"],
];

// Function to calculate the frequency of each number in the dataset, excluding the last position
function calculateNumberFrequency(dataSet) {
    const numberFrequency = {};

    for (const row of dataSet) {
        for (let i = 0; i < row.length - 1; i++) {
            const num = row[i];
            numberFrequency[num] = (numberFrequency[num] || 0) + 1;
        }
    }

    return numberFrequency;
}

// Function to calculate the frequency of pairs of numbers in the same row
function calculateNumberPairFrequency(dataSet, number1, number2) {
    let pairFrequency = 0;

    for (const row of dataSet) {
        if (row.includes(number1) && row.includes(number2)) {
            pairFrequency++;
        }
    }

    return pairFrequency;
}

// Function to find the number with the highest frequency after a number pair
function findNumberWithHighestFrequencyAfterPair(dataSet, number1, number2) {
    const numberFrequency = calculateNumberFrequency(dataSet);
    const pairFrequency = calculateNumberPairFrequency(dataSet, number1, number2);
    
    const frequenciesAfterPair = {};
    
    for (const row of dataSet) {
        for (let i = 0; i < row.length - 2; i++) { // Exclude the last position and the one before it
            const currentNum = row[i];
            const nextNum = row[i + 1];
            
            if ((currentNum === number1 && nextNum === number2) || (currentNum === number2 && nextNum === number1)) {
                const numAfterPair = row[i + 2];
                frequenciesAfterPair[numAfterPair] = (frequenciesAfterPair[numAfterPair] || 0) + 1;
            }
        }
    }

    let highestFrequency = -1;
    let mostFrequentNumber = null;

    for (const num in frequenciesAfterPair) {
        if (frequenciesAfterPair[num] > highestFrequency) {
            highestFrequency = frequenciesAfterPair[num];
            mostFrequentNumber = num;
        }
    }

    return mostFrequentNumber;
}

// Example: Find the number with the highest frequency after the number pair (22, 26)
const number1 = 22;
const number2 = 26;
const mostFrequentNumberAfterPair = findNumberWithHighestFrequencyAfterPair(dataSet, number1, number2);

console.log(`Number with Highest Frequency after (${number1}, ${number2}): ${mostFrequentNumberAfterPair}`);

// Function to calculate adjusted probabilities as percentages for numbers, excluding the last position
function calculateAdjustedProbabilities(dataSet) {
    const numberFrequency = calculateNumberFrequency(dataSet);
    const totalRows = dataSet.length;

    const adjustedProbabilities = {};

    for (let i = 1; i <= 48; i++) {
        const frequency = numberFrequency[i] || 0;
        const adjustedProbability = (frequency / totalRows) * 100;
        adjustedProbabilities[i] = adjustedProbability.toFixed(2);
    }

    return adjustedProbabilities;
}

// Example: Calculate and display adjusted probabilities as percentages for all numbers
const adjustedProbabilities = calculateAdjustedProbabilities(dataSet);

console.log("Adjusted Probabilities for All Numbers:");
for (let i = 1; i <= 48; i++) {
    const probability = adjustedProbabilities[i] || '0.00'; // Default to '0.00' if undefined
    const frequency = calculateNumberFrequency(dataSet)[i] || 0;
    console.log(`Number ${i}: Probability=${probability}%, Frequency=${frequency}`);
}
