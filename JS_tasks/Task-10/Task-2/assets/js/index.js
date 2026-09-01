console.log("====TASK-1====");

let num1 = 25;

if (num1 % 2 === 0) {
    console.log(num1 + " is an Even Number");
} else {
    console.log(num1 + " is an Odd Number");
}


console.log("====TASK-2====");

let a = 25;
let b = 45;
let c = 35;

let largest = Math.max(a, b, c);

console.log("Numbers: " + a + ", " + b + ", " + c);
console.log("Largest = " + largest);


console.log("====TASK-3====");

let num3 = 17;
let isPrime = true;

if (num3 < 2) {
    isPrime = false;
}

for (let i = 2; i <= Math.sqrt(num3); i++) {
    if (num3 % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(
    num3 + (isPrime ? " is a Prime Number" : " is Not a Prime Number")
);


console.log("====TASK-4====");

let num4 = 5;
let factorial = 1;

for (let i = 1; i <= num4; i++) {
    factorial *= i;
}

console.log("Factorial of " + num4 + " = " + factorial);


console.log("====TASK-5====");

let n = 8;
let first = 0;
let second = 1;
let fibonacci = [];

for (let i = 0; i < n; i++) {
    fibonacci.push(first);

    let next = first + second;
    first = second;
    second = next;
}

console.log("Fibonacci Series: " + fibonacci.join(" , "));


console.log("====TASK-6====");

let num6 = 121;
let original = num6;
let reversed6 = 0;

while (num6 > 0) {
    let digit = num6 % 10;
    reversed6 = reversed6 * 10 + digit;
    num6 = Math.floor(num6 / 10);
}

console.log(
    original === reversed6
        ? original + " is a Palindrome"
        : original + " is Not a Palindrome"
);


console.log("====TASK-7====");

let num7 = 12345;
let temp = num7;
let reversed7 = 0;

while (temp > 0) {
    let digit = temp % 10;
    reversed7 = reversed7 * 10 + digit;
    temp = Math.floor(temp / 10);
}

console.log("Reverse of " + num7 + " = " + reversed7);


console.log("====TASK-8====");

let num8 = 12345;
let temp8 = num8;
let sum = 0;

while (temp8 > 0) {
    sum += temp8 % 10;
    temp8 = Math.floor(temp8 / 10);
}

console.log("Sum of digits of " + num8 + " = " + sum);


console.log("====TASK-9====");

let num9 = 153;
let original9 = num9;
let digits = String(num9).length;
let temp9 = num9;
let armstrongSum = 0;

while (temp9 > 0) {
    let digit = temp9 % 10;
    armstrongSum += Math.pow(digit, digits);
    temp9 = Math.floor(temp9 / 10);
}

console.log(
    armstrongSum === original9
        ? original9 + " is an Armstrong Number"
        : original9 + " is Not an Armstrong Number"
);


console.log("====TASK-10====");

let year = 2024;

let leap = (year % 400 === 0) ||
           (year % 4 === 0 && year % 100 !== 0);

console.log(
    year + (leap ? " is a Leap Year" : " is Not a Leap Year")
);
