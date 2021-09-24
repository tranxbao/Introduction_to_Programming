//Write a simple program that asks user for three numbers and create
//the following logic:
//▪ If all three numbers are equal print out “You entered three matching numbers”.
//▪ If all three numbers are different print out “You entered three different numbers”.
//▪ If first two are the same, but the third one is different, print out “Third one doesn’t fit”.
//▪ If any of the numbers is 2, enter “You entered the magic number 2!”.

process.stdout.write("\n Please, enter three numbers separated with single space characters:\n");
process.stdin.on( "data", function( input_from_user )
{
    var numeric_strings = input_from_user.toString().split( " " ) ;
    var first_number    = Number( numeric_strings[ 0 ] ) ;
    var second_number   = Number( numeric_strings[ 1 ] ) ;
    var third_number    = Number( numeric_strings[ 2 ] ) ;
    
if ( first_number == second_number && first_number == third_number && first_number!=2)
    {
       process.stdout.write("\nYou entered three matching numbers");
    }
else if (first_number != second_number && first_number!= third_number&& second_number!=third_number)
    {
        process.stdout.write("\nYou entered three different numbers");
    }
else if (first_number != second_number || first_number != third_number)
    {
        process.stdout.write("\nThird one does not fit.");
    } 
else if (first_number ==2 && second_number ==2 && third_number == 2)
    {
        process.stdout.write("\nYou entered the magic number 2!");
    }
//else{
//        process.stdout.write("I do not understand, please try again.");
//}        
process.exit();
});