function print_message()
{
   process.stdout.write( "\n   This is a function named \"print_message()\"." ) ;
   process.stdout.write( "\n   Functions usually contain many statements. " ) ;
   process.stdout.write( "\n   Let us now return to the calling program." ) ;
}

// Here is the 'main' program.
// That part of a program that starts executing automatically when
// a program file is activated is usually said to be the 'main' program.

process.stdout.write( "\n THE FIRST STATEMENT IN THE \'MAIN\' PROGRAM." ) ;

print_message() ;  // This is a call to the above function.

process.stdout.write( "\n THIS IS BETWEEN TWO FUNCTION CALLS." ) ;

print_message() ;

process.stdout.write( "\n END OF \'MAIN\' PROGRAM.\n\n" ) ;
