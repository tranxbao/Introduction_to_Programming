/*Write code for function that checks given number and prints out "Number is positive
"Number is negative" or "Number is zero" respectively.

In this task you can assume input to be of correct data type (numeric) and error
handling is not necessary.*/
function negativeOrPositive(number){
    // Your code goes here
    if(number<0){
        console.log("Number is negative");
    }else if (number>0){
        console.log("Number is positive");
    }else{
        console.log("Number is zero");
    }
    
}

negativeOrPositive(0);
negativeOrPositive(1);
negativeOrPositive(-1);