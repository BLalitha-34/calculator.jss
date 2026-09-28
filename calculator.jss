let num1 = 20;
let num2 = 10;
let operator = "+";
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operator";
}
console.log("First Number: " + num1);
console.log("Second Number: " + num2);
console.log("Operator: " + operator);
console.log("Result: " + result);
OUTPUT:
First Number: 20
Second Number: 10
Operator: +
Result: 30
