//  StringEquality.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-18 File created.   2016-12-18 Last modification.

/*  This program explores the nature of strings in JavaScript:

    - there can be strings and Strings, i.e., primitive string values and
      String objects

    - String objects are created with the new operator

    - operator == can be used to check if primitive string values
      are the same

    - method valueOf() returns the primitive value of a String object

    - if operator == is used between two references to String objects,
      it checks whether the same object is being referenced

*/

var  first_string   =  "aaaaaa" ;  // Assign primitive string value.
var  second_string  =  "bbbbbb" ;  // Assign primitive string value.

process.stdout.write( "\n  " + first_string + "  " + second_string ) ;

if ( first_string.valueOf() == second_string.valueOf() )
{
   process.stdout.write( "\n     Equal string values." ) ;
}
else
{
   process.stdout.write( "\n     Not equal string values." ) ;
}

if ( first_string  ==  second_string )
{
   process.stdout.write( "\n     Equal string values." ) ;
}
else
{
   process.stdout.write( "\n     Not equal string values." ) ;
}


second_string  =  first_string ;

process.stdout.write( "\n  " + first_string + "  " + second_string ) ;

if ( first_string.valueOf() == second_string.valueOf() )
{
   process.stdout.write( "\n     Equal string values." ) ;
}
else
{
   process.stdout.write( "\n     Not equal string values." ) ;
}

if ( first_string  ==  second_string )
{
   process.stdout.write( "\n     Equal string values." ) ;
}
else
{
   process.stdout.write( "\n     Not equal string values." ) ;
}

// Next, we make both variables to refer to String objects.

second_string  =  new  String( first_string ) ;
first_string   =  new  String( first_string ) ;

process.stdout.write( "\n  " + first_string + "  " + second_string ) ;

if ( first_string.valueOf() == second_string.valueOf() )
{
   process.stdout.write( "\n     Equal String objects." ) ;
}
else
{
   process.stdout.write( "\n     Not equal String objects." ) ;
}

if ( first_string  ==  second_string )
{
   process.stdout.write( "\n     Referencing the same object." ) ;
}
else
{
   process.stdout.write( "\n     Different objects referenced." ) ;
}

process.stdout.write( "\n\n" ) ;