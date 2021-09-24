process.stdout.write("\n please, enter your Number:");
process.stdin.on( "data", function( input_from_user )
{
    let given_number = Number( input_from_user ) ;
    switch(given_number){
        case 0:
            process.stdout.write("you entered a zero");
            break;
        default:
            process.stdout.write("You entered something else");    
}
process.exit() ;
 
} ) ;