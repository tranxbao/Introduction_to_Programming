//Create a program that asks the user for a string and then
//prints it out from the last letter to the first. Use a for loop.
process.stdout.write("enter a string: ");
process.stdin.on("data",function(input){
var splitstring =input.toString().split().join("");
var reversed = [];
 /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decree i after each iteration */
for (var i = splitstring.length - 1; i >= 0; i--) { 
    reversed += splitstring[i]// or reversed= reversed+splitstring[i]
}

process.stdout.write(splitstring);
process.stdout.write("The word backwards is: " +reversed);


process.exit();
});