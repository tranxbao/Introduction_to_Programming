
//  Distance.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-12 File created.   2016-12-12 Last modification.

/*  To format the output an external function named tools.printf() is
    in use in this program.

*/

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write( "\n This program converts meters to other units of" 
                   +  "\n distance. Please, enter a distance in meters:  " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in the value.
   
   var distance_in_meters = Number( input_from_user.toString() ) ;

   var distance_in_kilometers  =  distance_in_meters / 1000.0 ;
   var distance_in_miles       =  6.21371e-4 *  distance_in_meters ;
   var distance_in_yards       =  1.093613   *  distance_in_meters ;
   var distance_in_feet        =  3.280840   *  distance_in_meters ;
   var distance_in_inches      =  12         *  distance_in_feet ;
   var distance_in_light_years  =  distance_in_meters /
                               ( 2.99793e8 * 365 * 24 * 3600 ) ;

   process.stdout.write( "\n " + distance_in_meters + " meters is: \n\n" ) ;

   tools.printf( "%15.3f  kilometers\n",distance_in_kilometers) ;
   tools.printf( "%15.3f  miles \n",    distance_in_miles ) ;
   tools.printf( "%15.3f  yards \n",    distance_in_yards ) ;

   tools.printf( "%15.3f  feet  \n%15.3f  inches \n",
                     distance_in_feet, distance_in_inches ) ;

   tools.printf( "%15.13f  light years \n\n", distance_in_light_years) ;

   process.exit() ;
} ) ;


/**
   // The above calls to tools.printf() could be replaced with the
   // following statements.
   
   process.stdout.write( 
          tools.sprintf( "%15.3f  kilometers\n",distance_in_kilometers) ) ;
   process.stdout.write(
          tools.sprintf( "%15.3f  miles \n",    distance_in_miles ) ) ;
   process.stdout.write(
          tools.sprintf( "%15.3f  yards \n",    distance_in_yards ) ) ;

   process.stdout.write( tools.sprintf( "%15.3f  feet  \n%15.3f  inches \n",
                         distance_in_feet, distance_in_inches ) ) ;

   process.stdout.write(
          tools.sprintf( "%15.13f  light years \n\n", distance_in_light_years) ) ;

*/

