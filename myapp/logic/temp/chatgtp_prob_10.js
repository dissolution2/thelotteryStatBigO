// Sample dataset
const dataSet = [
    [6,9,19,24,27,35,"February 7, 2021"], 
    [7,34,21,18,35,11,"February 20, 2021"],
    [28,43,40,39,12,6,"January 5, 2022"],
    // ... (all other rows)
    [2,4,8,10,43,44,5,"September 13, 2023"],
    [19,47,41,6,20,8,3,"September 20, 2023"]
];

// Function to calculate the frequency of each number in the dataset
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

// Function to calculate adjusted probabilities as percentages for numbers
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