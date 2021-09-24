process.stdout.write("\n please, enter a number, I will tell ya is it even or odd number:");
process.stdin.on( "data", function( input_from_user )
{
    var given_number = Number(input_from_user)  ;
   
    
    
    
    
 
    if ( given_number%2==0 )
    {
    process.stdout.write("\nEntered number is even");
    }
    else
    {
        process.stdout.write("\nEntered number is odd");
    }

process.exit() ;
 
} ) ;