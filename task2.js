function findTwoNumbers(numberList, targetSum, length) {
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (numberList[i] + numberList[j] === targetSum) {
        return [i, j];
      }
    }
  }

  return null;
}

const numbers = [2, 4, 7, 11, 15];
const target = 15;
const size = numbers.length;

const indices = findTwoNumbers(numbers, target, size);

if (indices) {
  console.log(indices);
} else {
  console.log("No two numbers found");
}
