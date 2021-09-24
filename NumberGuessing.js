//NumberGuessing.ja created by Bao Tran.

process.stdout.write("\n This is a number guessing game, please"
                    + "\n type your number: " ) ;//print text to users.
process.stdin.on("data",function(input_from_user)//reading data.
{
    let given_number = Number(input_from_user);//convert input from string to number for calculating.
    let winning_number = (given_number + 1).toString() ; //Convert numbers to strings fo print.Adding 1 to the input number.

    process.stdout.write("\n Your typed in " + given_number + "."
                        +"\n My number is " + winning_number +"."
                        +"\n Sorry, you lost, I won, game is over.\n\n" ) ;
    process.exit();
} );                  