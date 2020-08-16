const num1 = [15, 20, 25];
const num2 = [30, 20, 24];
const result = num1.concat([200]).concat(num2);
const result2 =[...num1, 200, ...num2]
// console.log(result2);


const business = 350; 
const acting = 250;
const minister = 230;
const allMoney = [350, 250, 270, 450];
const maximum = Math.max(...allMoney);
console.log(maximum); 