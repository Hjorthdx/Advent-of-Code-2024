const fs = require('fs');

const inputFile = 'dec1-input.txt';

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const lines = data.trim().split('\n');
    const leftNumbers = [];
    const rightNumbers = [];

    lines.forEach(line => {
      const [left, right] = line.split(/\s+/);
      leftNumbers.push(left);
      rightNumbers.push(right);
    });

    leftNumbers.sort((a, b) => {
      return a - b;
    });

    rightNumbers.sort((a, b) => {
      return a - b;
    });

    const distances = [];

    leftNumbers.forEach((leftNumber, index) => {
      var x = Math.abs(Number(leftNumber) - Number(rightNumbers[index]));
      distances.push(x);
    });


    const totalDistance = distances.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    console.log('Total distance', totalDistance);

    const similarityValues = [];

    leftNumbers.forEach((leftValue, index) => {
    let howManyTimes = 0;

    rightNumbers.forEach((rightValue, index) => {
        if (Number(leftValue) === Number(rightValue)) {
        howManyTimes++;
        }
    });
    similarityValues.push(leftValue * howManyTimes);
    });

    const similarity = similarityValues.reduce((acc, curr) => {
      return acc + curr;
    });
    console.log('Total similarity', similarity);
});