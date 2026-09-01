const datas = [10, 25, 30, 45, 50, 65];


const greater = datas.filter(number => number > 30);
console.log(greater);

const GreaterThan40 = datas.find(number => number > 40);
console.log(GreaterThan40);

const exists = datas.includes(50);
console.log(exists);

const doubled = datas.map(number => number * 2);
console.log(doubled);