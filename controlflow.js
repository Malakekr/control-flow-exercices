//exercice1:

function isFive(number) {
  // Check if the number is equal to 5
  if (number === 5) {
    return true;
  } else {
    return false;
  }
}

// Example:
console.log(isFive(5)); // Output: true
console.log(isFive(10)); // Output: false
console.log(isFive(-3)); // Output: false
console.log(isFive(0)); // Output: false

//exercice2:

function isSubstring(searchString, subString) {
  // Convert both strings to lowercase
  let lowerCaseSearchString = searchString.toLowerCase();
  let lowerCaseSubString = subString.toLowerCase();

  // Check if lowerCaseSubString exists within lowerCaseSearchString
  // using indexOf() method which returns -1 if subString is not found
  return lowerCaseSearchString.indexOf(lowerCaseSubString) !== -1;
}

// Example:
console.log(isSubstring("Hello World", "world")); // Output: true
console.log(isSubstring("Friedchicken", "chicken")); // Output: true
console.log(isSubstring("Genshin is fun", "genshin")); // Output: true
console.log(isSubstring("Hello", "hi")); // Output: false
console.log(isSubstring("Summer", "watermelon")); // Output: false
console.log(isSubstring("Programming", "sleep")); // Output: false

//exercice3:

function eitherStringIncluded(sentence, word1, word2) {
  // Convert all strings to lowercase
  let lowerCaseSentence = sentence.toLowerCase();
  let lowerCaseWord1 = word1.toLowerCase();
  let lowerCaseWord2 = word2.toLowerCase();

  // Check if either lowerCaseWord1 or lowerCaseWord2 is included in lowerCaseSentence
  return (
    lowerCaseSentence.includes(lowerCaseWord1) ||
    lowerCaseSentence.includes(lowerCaseWord2)
  );
}

// Example:
console.log(eitherStringIncluded("Hello world", "hello", "pineapple")); // Output: true
console.log(eitherStringIncluded("potato is yummy", "potato", "python")); // Output: true
console.log(eitherStringIncluded("Hello there", "hi", "hey")); // Output: false
console.log(eitherStringIncluded("teacher is cool", "teacher", "cool")); // Output: true
console.log(eitherStringIncluded("This is a test", "exam", "meow")); // Output: false

//exercice4:

function logBetween(lowNum, highNum) {
  // Loop through each number from lowNum to highNum
  for (let i = lowNum; i <= highNum; i++) {
    console.log(i);
  }
}

// Example:
logBetween(3, 8);
// Output:
// 3
// 4
// 5
// 6
// 7
// 8

logBetween(-2, 2);
// Output:
// -2
// -1
// 0
// 1
// 2

//exercice5:

function logBetweenStepper(min, max, step) {
  // Loop through each number from min to max using step intervals
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}

// Example:
logBetweenStepper(0, 20, 3);
// Output:
// 0 3 6 9 12 15 18

logBetweenStepper(1, 10, 2);
// Output:
// 1 3 5 7 9

//exercice6:

function fizzBuzz(max) {
  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
  }
}

// Example usage:
fizzBuzz(15);
// Output:
// 3
// 5
// 6
// 9
// 10
// 12

//exercice7:

function leastCommonMultiple(num1, num2) {
  // Calculate the maximum of num1 and num2
  let max = Math.max(num1, num2);
  // Initialize lcm as max, since it will be at least as large as the larger number
  let lcm = max;

  // Check divisibility by both numbers starting from max and moving upwards
  while (!(lcm % num1 === 0 && lcm % num2 === 0)) {
    lcm += max; // Increment by max to check the next potential LCM
  }

  return lcm;
}

// Example usage:
console.log(leastCommonMultiple(12, 15)); // Output: 60
console.log(leastCommonMultiple(7, 5)); // Output: 35
