const number = 16

function printMultiplicationTable () {
    
for(let i=1; i<=12; i++) {

    let solution = number * i
    
     console.log(`${number} * ${i} = ${solution}`);
        // i enclosed the above  expression with backticks (``), which is a syntax for literals and i could include values using `${}`
    }
}

printMultiplicationTable();