// distance_converter by Bao Tran.



const util = require( "util" ) ; // to access the util(ities) module


process.stdout.write( "\n This program converts miles to kilometers." 
                   +  "\n Please, give a distance in miles:  " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in the value.
   
   var distance_in_miles = Number( input_from_user.toString() ) ;

   var distance_in_kilometers  =  1.6093 * distance_in_miles ;

   process.stdout.write( "\n "  +  distance_in_miles  +  " miles is "
   +  distance_in_kilometers  +  " kilometers.\n" ) ;

   process.stdout.write( util.format( "\n %d miles is %d kilometers.\n",
   distance_in_miles,  distance_in_kilometers ) ) ;

   process.exit() ;

} ) ;
