/*Write code for a function that gets two parameters, start and end. The function 
then prints out numbers from start to end, each of them on their respective
 line.

In this task you can assume input to be of correct data type (numeric) and
 error handling is not necessary.*/
 function printNumbers(start, end) {
    // Your code goes here
    let num1=Number(start);
    let num2=Number(end);
    for(let i=num1;i<=num2;i++ ){
        console.log(i)

    }
    
}
printNumbers(1,10);