function square(num) {
    return num * num;
}
console.log(square(5));
// Output: 25
// Function expression
var squareFE = function (num) {
    return num * num;
};
// Higher-order function
function addNumber(a) {
    return function (b) {
        return a + b;
    };
}
var addWith5 = addNumber(5);
console.log(addWith5(3));
console.log(addWith5(15));
//# sourceMappingURL=Function.js.map