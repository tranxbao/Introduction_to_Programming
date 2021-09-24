//  StringReverse.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-02 File created.   2017-10-15 Last modification.

process.stdout.write( "\n This program is able to reverse a string."
                   +  "\n Please, type in a string.\n\n   " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // When we take the string from the user input, we need to
   // use the trim() method to get rid of line termination characters.
   
   X

   process.stdout.write( "\n String length is " + string_from_keyboard.length
                      +  ".\n\n String in reverse character order: \n\n   " ) ;

   var character_index = string_from_keyboard.length ;

   while (  character_index  >  0  )
   {
      character_index  --  ;
      process.stdout.write( string_from_keyboard[ character_index ] ) ;
   }

   process.stdout.write( "\n\n" ) ;
   process.exit() ;
} ) ;