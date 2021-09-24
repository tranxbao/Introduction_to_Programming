//Task 4: Multiplication Table
//Ask the user to enter a number and then print out corresponding multiplication
//table using a loop.
//Optional: Try to make printing according to screenshot on the right. You might use
//util.format, padStart() and padEnd() to achieve this.
process.stdout.write("please enter a number:");
process.stdin.on("data",function(input_from_user){
var input_number=Number(input_from_user);
process.stdout.write("Multiplication table for " +input_number);
for(i=1;i<10;i++){
    process.stdout.write("\n"+input_number+" * "+i+" = " +input_number*i+ "");
}
process.exit();
});