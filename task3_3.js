//3.3 Task 3: Looping through Strings
//Create a program with the following functionality:
//1. Ask the user to enter a string.
//2. Loop through the string and print out the string letter by letter saying “1.
//character is [first letter of given string.]”
//Hint! You might need the following String methods: charAt() and trim() and


//property length. Check them out in documentation
process.stdout.write("\n Please, type in a string.\n\n   " ) ;
process.stdin.on( "data", function( input_from_user )
{
    var input_string = input_from_user.toString().trim();
    
    for( let i = 1 ; i < input_string.length +1 ; i++){
      process.stdout.write("\n" + i + ". character is " + input_string.charAt(i-1) );
    }
process.exit();
});