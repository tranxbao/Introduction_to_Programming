//Create a program that asks the user for a string and then
//prints it out so that all odd characters are in uppercase
//and all even characters are in lower case. Use a for loop

process.stdout.write("Please enter a string,I will make it up and down:\n");
process.stdin.on("data",function(input){
    //var reg = /\b(?![\s.])/
    var string = input.toString().split("")
    var newString = [];
     for(var i = 0; i < string.length; i++){
        if (i % 2 != 0) {
           newString[i] = string[i].toUpperCase();//or newString += string.charAt(i).toLowerCase();
        }
        else {
           newString[i] = string[i].toLowerCase();
        }   
     }

     process.stdout.write(" "+ newString.join(" "));

process.exit();
});