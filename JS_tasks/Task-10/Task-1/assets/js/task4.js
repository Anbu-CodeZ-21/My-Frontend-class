function value(...numbers) {
    return numbers[0] + numbers[1] + numbers[2];
}
console.log("rest values:");

console.log(value(10, 20, 30));



const d = [10, 20, 30];

const f = [...d, 40];

console.log("spread values:");

console.log(f);