// ==============================
// String Manipulation Functions
// ==============================

// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Count Characters in a String
function countCharacters(str) {
  return str.length;
}

// Capitalize the First Letter of Each Word
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ==================
// Array Functions
// ==================

// Find Maximum Value in an Array
function findMax(arr) {
  return Math.max(...arr);
}

// Find Minimum Value in an Array
function findMin(arr) {
  return Math.min(...arr);
}

// Calculate the Sum of an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array Based on a Condition
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

// ==========================
// Mathematical Functions
// ==========================

// Calculate Factorial
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Generate Fibonacci Sequence up to n terms
function fibonacci(n) {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) sequence.push(0);
    else if (i === 1) sequence.push(1);
    else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// ===================
// Example Usage
// ===================

console.log("🔁 Reverse String:", reverseString("hello")); // "olleh"
console.log("🔢 Character Count:", countCharacters("hello world")); // 11
console.log("📝 Capitalized:", capitalizeWords("hello world")); // "Hello World"

console.log("📈 Max:", findMax([1, 5, 9, 3])); // 9
console.log("📉 Min:", findMin([1, 5, 9, 3])); // 1
console.log("➕ Sum:", sumArray([1, 2, 3, 4])); // 10
console.log("🔍 Filter (Even):", filterArray([1, 2, 3, 4], n => n % 2 === 0)); // [2, 4]

console.log("🧮 Factorial of 5:", factorial(5)); // 120
console.log("🧪 Is 7 Prime?:", isPrime(7)); // true
console.log("🔢 Fibonacci (7 terms):", fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
