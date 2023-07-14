
const numbers = [20, 1, 10.5, 50, 70, 2, 4, 12, 8];

function calculateSum() {
    let sum = 0;      //declared the variable 'sum' by initializing it to 0 so i can access it
  
    for(let i=0; i<numbers.length; i++ ) {
    
        let num = numbers[i];       // declared the variable 'num'
    
    sum += num;
}

return sum;    // this is to return the total sum of the array

}
const sum = calculateSum(numbers)

console.log(sum);