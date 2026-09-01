const numbers = [10, 20, 30];

const [first, second, third] = numbers;
console.log("Array Destructuring values");

console.log(first);
console.log(second);
console.log(third);



const student = {
    name: "Anbu",
    age: 20,
    course: "Full stack"
};

const { name, age, course } = student;
console.log("Object Destructuring values");

console.log(name);
console.log(age);
console.log(course);