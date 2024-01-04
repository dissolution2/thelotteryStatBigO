// Sample dataset
const dataSet = [
    [6,9,19,24,27,35,"February 7, 2021"], 
    [7,34,21,18,35,11,"February 20, 2021"],
    [28,43,40,39,12,6,"January 5, 2022"],
    // ... (all other rows)
    [2,4,8,10,43,44,5,"September 13, 2023"],
    [19,47,41,6,20,8,3,"September 20, 2023"]
];

// Function to calculate the frequency of a single number chosen by the user
function calculateSingleNumberFrequency(dataSet, chosenNumber) {
    let frequency = 0;

    for (const row of dataSet) {
        if (row.includes(chosenNumber)) {
            frequency++;
        }
    }

    return frequency;
}

// Function to calculate the frequency of a pair of numbers chosen by the user as a set
function calculateNumberPairFrequency(dataSet, number1, number2) {
    let pairFrequency = 0;

    for (const row of dataSet) {
        if (row.includes(number1) && row.includes(number2)) {
            pairFrequency++;
        }
    }

    return pairFrequency;
}

// Example: User chooses a single number (e.g., 22)
const userChosenNumber = 22;
const singleNumberFrequency = calculateSingleNumberFrequency(dataSet, userChosenNumber);

console.log(`Frequency of Number ${userChosenNumber}: ${singleNumberFrequency}`);

// Example: User chooses a pair of numbers (e.g., 22 and 26) as a set
const userChosenNumber1 = 22;
const userChosenNumber2 = 26;
const pairFrequency = calculateNumberPairFrequency(dataSet, userChosenNumber1, userChosenNumber2);

console.log(`Frequency of Number Pair (${userChosenNumber1}, ${userChosenNumber2}): ${pairFrequency}`);
