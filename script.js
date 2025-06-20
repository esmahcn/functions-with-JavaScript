// String Manipulation Functions
function reverseString() {
    const str = document.getElementById("inputString").value;
    const reversed = str.split("").reverse().join("");
    document.getElementById("stringResult").textContent = "Reversed: " + reversed;
}

function countCharacters() {
    const str = document.getElementById("inputString").value;
    document.getElementById("stringResult").textContent = "Character Count: " + str.length;
}

function capitalizeWords() {
    const str = document.getElementById("inputString").value;
    const capitalized = str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    document.getElementById("stringResult").textContent = "Capitalized: " + capitalized;
}

// Array functions
function getNumbers() {
    const input = document.getElementById("inputnumber").value.trim();
    if (!input.includes(",")) {
        alert("Please separate numbers with commas.");
        return [];
    }
    return input.split(",").map(num => parseFloat(num.trim())).filter(n => !isNaN(n));
}

function findMax() {
    const numbers = getNumbers();
    if (numbers.length === 0) {
        document.getElementById("arrayResult").textContent = "Invalid input.";
        return;
    }
    const max = Math.max(...numbers);
    document.getElementById("arrayResult").textContent = "Maximum: " + max;
}

function findMin() {
    const numbers = getNumbers();
    if (numbers.length === 0) {
        document.getElementById("arrayResult").textContent = "Invalid input.";
        return;
    }
    const min = Math.min(...numbers);
    document.getElementById("arrayResult").textContent = "Minimum: " + min;
}

// Factorial
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculateFactorial() {
    const n = parseInt(document.getElementById("factorialInput").value);
    const resultArea = document.getElementById("factorialResult");
    if (isNaN(n) || n < 0) {
        resultArea.textContent = "Please enter a non-negative number.";
        return;
    }
    resultArea.textContent = `Factorial of ${n} is ${factorial(n)}`;
}

// Prime checker
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkPrime() {
    const input = parseInt(document.getElementById("primeInput").value);
    const result = document.getElementById("primeResult");
    if (isNaN(input)) {
        result.textContent = "Please enter a valid number.";
        return;
    }
    result.textContent = input + (isPrime(input) ? " is a prime number." : " is not a prime number.");
}

// Fibonacci Sequence Generator
function generateFibonacci() {
    const n = parseInt(document.getElementById("fibonacciInput").value);
    const resultArea = document.getElementById("fibonacciResult");

    if (isNaN(n) || n <= 0) {
        resultArea.textContent = "Please enter a positive integer.";
        return;
    }

    let fibSeq = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibSeq.push(0);
        } else if (i === 1) {
            fibSeq.push(1);
        } else {
            fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
        }
    }

    resultArea.textContent = `First ${n} Fibonacci numbers: ${fibSeq.join(", ")}`;
}