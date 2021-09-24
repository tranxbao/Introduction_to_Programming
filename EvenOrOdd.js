/*Write code for a function that checks whether given number is odd or even and 
prints out "[number] is even" or "[number] is odd"

In this task you can assume input to be of correct data type (numeric) and error 
handling is not necessary.*/
function oddOrEven(number) {
    // Your code goes here
    let num = Number(number);
    if(num%2==0){
        console.log(num +" is even");
    }else{
        console.log(num +" is odd");
    }
    
}
oddOrEven(2);
oddOrEven(5);