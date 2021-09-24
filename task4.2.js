/*Create a program that keeps asking the user to input
numbers. These numbers are stored in an array. Keep asking
till zero is entered. After that the numbers are printed out in
a reverse order. Don’t use array methods for this but only
simple loops.*/
const util=require("util")
process.stdout.write("Please enter numbers:");
let array = []  
process.stdin.on("data",function(input){
if (input == 0) {
        process.stdout.write("Reversed order: ")
        for(i=array.length-1;i>=0;i--){
            process.stdout.write(util.format("%d ", array[i]))
        }
        process.exit();
    }else{
        process.stdout.write("Please enter numbers:");
        array.push(input)
    }
})
   
    
       

    
    /*if (num==0){
        process.stdout.write("\n"+SArray);
        process.exit();  
    }
    

    /*    var arr = [];
        while(arr.length < 8){
            var r = Math.floor(Math.random() * 100) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        console.log(arr);    
 */    
    
    

