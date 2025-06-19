//Manipulation functions
function reverseString() {
    const str = document.getElementById("inputString").value;
    const reversed = str.split("").reverse().join("");
    document.getElementById("stringResult").textContent = "Reversed: " + reversed;
}
function countCharacters() {
    const str = document.getElementById("inputString").value;
    const count = str.length;
    document.getElementById("stringResult").textContent = "Character Count: " + count;
}

function capitalizeWords() {
    const str = document.getElementById("inputString").value;
    const capitalized = str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    document.getElementById("stringResult").textContent = "Capitalized: " + capitalized;
}
//array functions
function getNumbers() {
    const input = document.getElementById("inputnumber").value;
    // Convert input string to an array of numbers
    return input.split(",").map(num => parseFloat(num.trim())).filter(n => !isNaN(n));
}

function findMax() {
    const numbers = getNumbers();
    if (numbers.length === 0) {
        document.getElementById("arrayResult").textContent = "Please enter valid numbers.";
        return;
    }
    const max = Math.max(...numbers);
    document.getElementById("arrayResult").textContent = "Maximum value: " + max;
}

function findMin() {
    const numbers = getNumbers();
    if (numbers.length === 0) {
        document.getElementById("arrayResult").textContent = "Please enter valid numbers.";
        return;
    }
    const min = Math.min(...numbers);
    document.getElementById("arrayResult").textContent = "Minimum value: " + min;
}


function getNumbers() {
    const input = document.getElementById("inputnumber").value.trim();

    // Check if input contains commas
    if (!input.includes(",")) {
        alert("Please separate numbers with commas .");
        let newInput = input.split(/\s+/).join(", ");
    }
    // Normal case, split on commas
    return input.split(",").map(num => parseFloat(num.trim())).filter(n => !isNaN(n));
}

function factorial(n) {
  if (n < 0) return undefined; // Factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example:
console.log(factorial(5)); // 120