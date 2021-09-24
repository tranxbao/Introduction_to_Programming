/*Write code for function that takes two numbers as parameter and performs basic 
calculations (+, -, *, /) for it and prints out the calculations, each on their
 own line as shown in the example.

In this task you can assume input to be of correct data type (numeric) and error
 handling is not necessary.*/

 function basicCalculations (number1, number2) {
    // Your code goes here
    let sum = number1+number2;
    let diff = number1-number2;
    let mult = number1*number2;
    let div = number1/number2;
    console.log(number1+ "+" +number2 + "="+sum);
    console.log(number1+ "-" +number2 + "="+diff);
    console.log(number1+ "*" +number2 + "="+mult);
    console.log(number1+ "/" +number2 + "="+div);
}
basicCalculations(1,2);
basicCalculations(0,0);