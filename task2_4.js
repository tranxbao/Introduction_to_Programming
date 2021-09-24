const util = require( "util" ) ;

process.stdout.write("\n Are you older than 18 yo?"
                     + "\n please answer Y or N: " );
            
process.stdin.on("data",function(input_from_user)
{ 
    
    let answer = input_from_user.toString().toLowerCase().charAt(0).trim();

    if(answer =="y"){
          process.stdout.write("You are grown up");
    }
    else if(answer=="n"){

          process.stdout.write("You are still a minor");
    }
    else
    {
         
          process.stdout.write( util.format( "\n %s is not a valid input.\n",answer ) ) ;
    }

    process.exit() ;
});
