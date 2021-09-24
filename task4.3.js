/*Create a program that asks user for number and 
calculates the average for them. Numbers will be asked 
till the user enters a letter.
Hint! You can check whether a value is numeric with 
isNaN().*/
const util = require("util");
process.stdout.write("Calculate numbers average.Enter a letter for stopping.\n"
                     +"enter number:");
let array = [];
let sum = 0;
let average = 0 ;
process.stdin.on("data",function(input){
    
    if(isNaN(input.toString())==true){
        for(i=0;i<array.length;i++){
            sum += Number(array[i]);
            average = (sum/array.length);
        }
      process.stdout.write(util.format("The average is: %d",average));
      process.exit();
    }else{
        process.stdout.write("enter number:")
        array.push(input);
    }

});

