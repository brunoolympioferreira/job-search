const numbers = [1, 2, 3, 4, 5];
const names = ['BOBBY', 'SALLY, DEBBIE']

const squares = numbers.map(num => num * num);
const lowerCaseNames = names.map(name => name.toLowerCase());

console.log(squares); // [1, 4, 9, 16, 25]
console.log(lowerCaseNames); // ['bobby', 'sally, debbie']