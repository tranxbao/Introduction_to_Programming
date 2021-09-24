/*Create a program that finds specific items in an array.
1. Create an array with the following items: 55, 23,
6456, 324, 21, 234, 72, 21
2. Ask the user what they want to search for in the
integer array.
3. Loop through the array and compare the values with the input given by the user.
4. If the item is found, print out in which index the value was found.
5. If the item is not found, print out a message saying item was not found*/
const util = require("util");
process.stdout.write("Please enter number you want to search:");
let myArray = [55,23,6456,324,21,234,72,21];
let isOk=false;
process.stdin.on("data",function(input){
    let num = Number(input);

   for(i=0;i<myArray.length;i++){
    switch(true){
        case(num==myArray[i]):
        process.stdout.write(util.format("%d was found in index %d\n",num,i));
        isOk = true;
        break;
}
    }
    if(isOk==false){
        process.stdout.write(util.format("%d is not found in array",num));
    }
process.exit();
});


