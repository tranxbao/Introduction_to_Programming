// distance_converter version 2 by Bao Tran.



const util = require( "util" ) ; // to access the util(ities) module


process.stdout.write( "\n This program converts meters to other units of distance." 
                   +  "\n Please, give a distance in meters:  " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in the value.
   
   var distance_in_meters = Number( input_from_user.toString() ) ;

   var distance_in_kilometers  =  (distance_in_meters/1000).toFixed(3);
   var distance_in_miles       =  (6.21371e-4 * distance_in_meters).toFixed(3) ;
   var distance_in_yards       =  (1.093613 * distance_in_meters).toFixed(3) ;
   var distance_in_feet        =  (3.280840 * distance_in_meters).toFixed(3) ;
   var distance_in_inches      =  (39.37 * distance_in_meters).toFixed(3) ;
   var distance_in_light_years =  (distance_in_meters/( 2.99793e8 * 365 * 24 * 3600 )).toFixed(3) ;

   //process.stdout.write( "\n "  +  distance_in_meters  +  " meters is "
   //+  distance_in_kilometers +  " kilometers.\n" ) ;
   //process.stdout.write( "\n "  +  distance_in_meters  +  " meters is "
   //+  distance_in_miles +  " miles.\n" ) ;
   //process.stdout.write( "\n "  +  distance_in_meters  +  " meters is "
   //+  distance_in_yards +  " yards.\n" ) ;
   //process.stdout.write( "\n "  +  distance_in_meters  +  " meters is "
   //+  distance_in_feet +  " feet.\n" ) ;
   //process.stdout.write( "\n "  +  distance_in_meters  +  " meters is "
   //+  distance_in_inches +  " inches.\n" ) ;
   //process.stdout.write( "\n "  +  distance_in_meters  +  " meters is "
   //+  distance_in_light_years +  " light years.\n" ) ;
   
   process.stdout.write( util.format( "\n %d meters is %d kilometers.\n",
   distance_in_meters,  distance_in_kilometers ) ) ;
   
   process.stdout.write( util.format( "\n %d meters is %d miles.\n",
   distance_in_meters,  distance_in_miles ) ) ;
   
   process.stdout.write( util.format( "\n %d meters is %d yards.\n",
   distance_in_meters,  distance_in_yards ) ) ;
   
   process.stdout.write( util.format( "\n %d meters is %d feet.\n",
   distance_in_meters,  distance_in_feet ) ) ;
   
   process.stdout.write( util.format( "\n %d meters is %d inches.\n",
   distance_in_meters,  distance_in_inches ) ) ;
  
   process.stdout.write( util.format( "\n %d meters is %d light years.\n",
   distance_in_meters,  distance_in_light_years ) ) ;


   

   process.exit() ;

} ) ;
