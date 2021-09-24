// Create a simple program with the following functionality:
// 1. Ask for user to input a number.
// 2. Define a secret number.
// 3. Perform and print out basic calculations for that number with the secret
// number.
process.stdout.write("\n This is a simple calculator, please"
                    + "\n type your number: " ) ;
process.stdin.on("data",function(input_from_user)
{
    var given_number = Number(input_from_user);
    var addition_number = given_number + given_number ;
    var seperation_number = given_number - given_number ;
    var multipication_number = given_number * given_number ;
    var division_number = given_number / given_number ;
    var remainder_number = given_number % given_number ;
    var increasing_number = given_number + 1 ;
    var decreasing_number = given_number - 1 ;

    process.stdout.write("\n  " + given_number + " + " + given_number + " = " + addition_number +"." );
    process.stdout.write("\n  " + given_number + " - " + given_number + " = " + seperation_number +"." );
    process.stdout.write("\n  " + given_number + " * " + given_number + " = " + multipication_number +"." );
    process.stdout.write("\n  " + given_number + " / " + given_number + " = " + division_number +"." );
    process.stdout.write("\n  " + given_number + " % " + given_number + " = " + remainder_number +"." );
    process.stdout.write("\n  " + given_number + " ++ = " + increasing_number +"." );
    process.stdout.write("\n  " + given_number + " -- = " + decreasing_number +"." );
    process.exit();
} );                 