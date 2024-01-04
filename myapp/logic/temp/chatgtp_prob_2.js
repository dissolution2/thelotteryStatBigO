const dataSet = [
    [6,9,19,24,27,35,"February 7, 2021"], 
[7,34,21,18,35,11,"February 20, 2021"],
[28,43,40,39,12,6,"January 5, 2022"],
[17,47,43,26,21,13,"January 12, 2022"],
[43,40,31,29,16,3,"January 19, 2022"],
[48,28,8,46,19,26,2,"January 26, 2022"],

[18,31,21,36,27,16,2,"February 2, 2022"],
[17,26,21,10,22,14,3,"February 9, 2022"],
[21,1,6,46,17,20,3,"February 16, 2022"],
[13,32,16,29,33,34,1,"February 23, 2022"],

[45,24,46,38,13,21,1,"March 2, 2022"],
[15,5,35,48,34,3,5,"March 9, 2022"],
[36,29,33,34,18,7,4,"March 16, 2022"],
[26,36,41,15,17,2,2,"March 23, 2022"],
[9,4,38,21,31,15,5,"March 30, 2022"],

[48,20,34,11,10,42,1,"April 6, 2022"],
[20,23,43,22,28,6,2,"April 13, 2022"],
[12,13,22,26,20,23,5,"April 20, 2022"],
[14,34,32,31,37,42,5,"April 27, 2022"],


[24,6,19,35,9,27,3,"May 4, 2022"],
[24,47,27,13,28,37,4,"May 11, 2022"],
[45,5,47,24,34,9,5,"May 18, 2022"],
[31,15,21,11,9,40,4,"May 25, 2022"],

[43,37,46,23,14,7,4,"June 1, 2022"],
[34,9,41,4,3,43,2,"June 8, 2022"],
[21,15,47,29,39,48,2,"June 15, 2022"],
[40,30,16,2,22,20,3,"June 22, 2022"],
[40,24,7,48,35,12,1,"June 29, 2022"],

[2,35,44,28,36,27,4,"July 6, 2022"],
[18,48,44,21,16,9,1,"July 13, 2022"],
[17,15,47,30,31,13,4,"July 20, 2022"],
[38,30,48,32,20,45,2,"July 27, 2022"],

[5,7,12,14,10,44,2,"August 3 ,2022"], 
[44,45,39,2,41,24,2,"August 10 ,2022"], 
[35,3,15,34,23,13,2,"August 17 ,2022"],
[42,11,32,4,28,19,4,"August 24 ,2022"], 
[39,33,43,36,14,48,3,"August 31 ,2022"],

[40,19,26,36,13,35,2,"September 7, 2022"],
[26,31,3,30,28,22,5,"September 14, 2022"],
[15,48,24,42,7,13,2,"September 21, 2022"],
[33,24,2,42,17,44,2,"September 28, 2022"],

[5,45,6,35,11,31,1,"October 5, 2022"], 
[37,18,40,21,19,7,3,"October 12, 2022"],
[35,4,44,24,17,41,2,"October 19, 2022"],
[22,41,24,38,30,13,2,"October 26, 2022"],
[17,1,22,23,45,5,5,"November 2, 2022"], 
[22,17,10,18,15,23,3,"November 9, 2022"],
[30,46,37,41,9,44,2,"November 16, 2022"],
[32,28,27,12,37,5,4,"November 23, 2022"],
[22,34,16,40,28,5,5,"November 30, 2022"],

[8,13,9,37,10,48,3,"December 7, 2022"], 
[30,2,10,39,22,16,5,"December 14, 2022"],  
[4,44,23,30,41,6,2,"December 21, 2022"], 
[16,22,24,27,4,12,4,"December 28, 2022"],
[1,35,36,22,6,46,1,"January 4, 2023"],
[22,47,40,25,43,39,2,"January 11, 2023"],
[3,20,41,37,43,26,5,"January 18, 2023"],
[18,39,34,19,45,25,2,"January 25, 2023"],
[33,26,5,2,20,16,3,"February 1, 2023"],
[3,23,4,26,21,34,1,"February 8, 2023"],
[48,9,43,41,21,10,4,"February 15, 2023"],
[15,25,30,4,39,33,4,"February 22, 2023"],
[32,31,35,40,41,22,1,"March 1, 2023"],
[16,11,3,23,8,22,4,"March 8, 2023"],
[41,4,8,48,2,11,4,"March 15, 2023"],
[27,4,28,24,45,37,3,"March 22, 2023"],
[14,30,36,16,10,32,1,"March 29, 2023"],
[42,7,8,19,21,2,2,"April 5, 2023"],
[37,32,39,29,4,5,1,"April 12, 2023"],
[39,26,41,21,3,22,4,"April 19, 2023"],
[48,36,32,26,45,25,5,"April 26, 2023"],
[6,22,38,43,45,39,2,"May 3, 2023"],
[17,24,7,10,12,20,4,"May 10, 2023"],
[1,43,4,11,12,26,1,"May 24, 2023"],
[34,24,45,46,48,39,1,"May 31, 2023"],
[17,44,32,37,14,4,4,"Jun 7, 2023"],
[15,44,28,9,41,2,4,"Jun 14, 2023"],
[22,3,13,8,12,2,4,"Jun 28, 2023"],
[30,42,34,13,22,24,5,"July 5, 2023"],
[10,6,2,40,32,38,1,"July 12, 2023"],
[28,29,37,19,4,41,5,"July 19, 2023"],
[5,9,44,34,24,10,5,"July 26, 2023"],
[23,6,7,10,28,30,2,"August 2, 2023"],
[13,19,14,27,23,38,4,"August 9, 2023"],
[48,45,31,44,13,33,1,"August 16, 2023"],
[37,4,26,47,17,42,4,"August 23, 2023"],
[38,10,18,25,21,31,3,"August 30, 2023"],
[2,28,26,47,1,22,5,"September 6, 2023"],
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

// Function to calculate adjusted probabilities as percentages for numbers in the same row as the specified number
function adjustNumberProbabilities(dataSet, number) {
    const numberFrequency = calculateNumberFrequency(dataSet);

    // Calculate the adjusted probability for each number in the same row as the specified number
    const adjustedProbabilities = {};

    for (let i = 1; i <= 48; i++) {
        if (i !== number) {
            const pairFrequency = calculateNumberPairFrequency(dataSet, number, i);
            const adjustedProbability = (pairFrequency + 1) / (numberFrequency[i] + 1);
            // Convert the probability to a percentage
            adjustedProbabilities[i] = (adjustedProbability * 100).toFixed(2);
        }
    }

    // Sort the adjusted probabilities in descending order
    const sortedProbabilities = Object.keys(adjustedProbabilities).sort(
        (a, b) => parseFloat(adjustedProbabilities[b]) - parseFloat(adjustedProbabilities[a])
    );

    return sortedProbabilities;
}

// Function to calculate adjusted probabilities for the next number in the line
function adjustNextNumberProbabilities(dataSet, currentNumber, nextNumber) {
    // Calculate adjusted probabilities for the current number
    const currentProbabilities = adjustNumberProbabilities(dataSet, currentNumber);

    // Calculate the frequency of the next number
    const numberFrequency = calculateNumberFrequency(dataSet);
    const nextNumberFrequency = numberFrequency[nextNumber] || 0;

    // Calculate adjusted probabilities for the next number based on current probabilities and frequency
    const adjustedNextProbabilities = {};

    for (let i = 1; i <= 48; i++) {
        if (i !== currentNumber) {
            const currentProbability = parseFloat(currentProbabilities[i] || '0.00');
            const adjustedProbability = (currentProbability * (nextNumberFrequency + 1)) / (numberFrequency[i] + 1);
            adjustedNextProbabilities[i] = adjustedProbability.toFixed(2);
        }
    }

    // Sort the adjusted next probabilities in descending order
    const sortedNextProbabilities = Object.keys(adjustedNextProbabilities).sort(
        (a, b) => parseFloat(adjustedNextProbabilities[b]) - parseFloat(adjustedNextProbabilities[a])
    );

    return sortedNextProbabilities;
}

// Example: Calculate and display adjusted probabilities as percentages for numbers in the same row as number 22
const numberToAnalyze = 22;
const adjustedProbabilities = adjustNumberProbabilities(dataSet, numberToAnalyze);

console.log(`Adjusted Probabilities for Numbers in the Same Row as ${numberToAnalyze}:`);
adjustedProbabilities.forEach((num) => {
    const probability = adjustedProbabilities[num] || '0.00'; // Default to '0.00' if undefined
    console.log(`Number ${num}: ${probability}%`);
});

// Example: Calculate and display adjusted probabilities for the next number in the line (e.g., 13)
const nextNumber = 13;
const adjustedNextProbabilities = adjustNextNumberProbabilities(dataSet, numberToAnalyze, nextNumber);

console.log(`Adjusted Probabilities for Numbers in the Same Row as ${numberToAnalyze} and Next Number ${nextNumber}:`);
adjustedNextProbabilities.forEach((num) => {
    const probability = adjustedNextProbabilities[num] || '0.00'; // Default to '0.00' if undefined
    console.log(`Number ${num}: ${probability}%`);
});