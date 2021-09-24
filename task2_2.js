process.stdout.write("\n please, enter three numbers separated with single space characters:");
process.stdin.on( "data", function( input_from_user )
{
    var numeric_strings = input_from_user.toString().split( " " ) ;
   
    var first_number  = Number( numeric_strings[ 0 ] ) ;
    var second_number = Number( numeric_strings[ 1 ] ) ;
    var third_number = Number( numeric_strings[ 2 ] ) ;
    
    var found_larger_number ;
 
    if ( first_number  >  second_number )
    {
       found_largest_number  =  first_number ;
    }
    else
    {
       found_largest_number  =  second_number ;
    
    if ( third_number  >  found_largest_number )
    {
       found_largest_number  =  third_number ;
       }
       

    }
 
   
 
    process.stdout.write( "\n The largest number is "
                       +  found_largest_number  +  ".\n\n" ) ;  

process.exit() ;
 
} ) ;