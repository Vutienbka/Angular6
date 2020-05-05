function square(num: number): number {
    return num * num;
}

console.log(square(5));
// Output: 25

// Function expression
const squareFE = function (num: number): number {
    return num * num;
}

// Higher-order function
function addNumber(a: number): Function {
    return function(b: number): number {
        return a + b;
    }
}

const addWith5 = addNumber(5);
console.log(addWith5(3));
console.log(addWith5(15));
