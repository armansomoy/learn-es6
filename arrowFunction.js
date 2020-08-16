// function double(num){
//     return num * 2; 
// }

// const double =  function(num){
//     return num * 2; 
// }

const double = num=> num * 2 ;
const add = (x, y) => x + y ;
const give = () => 5 ;
const multiline = (x, y) => {
    const sum1 = x + y;
    const sum2 = y - x;
    const total = sum1 + sum2;
    return total;
}


const result = multiline(20, 10);
console.log(result);