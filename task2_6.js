//Create a program with a simple menu and following
//functionality:
//1. Print hello
//2. Print current date
//3. End program . Use switch for this.

process.stdout.write("\n Please select what you want to do."
                    + "\n 1. -Print out hello "  
                    + "\n 2. -Print out current date & time. " 
                    + "\n 3. -Exit. " 
                    + "\n  Please enter your choice number:") ;  

process.stdin.on("data",function(input_from_user) {

    var given_number = Number( input_from_user )  ;

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;



    switch ( given_number )
    {
    case 1 :
    
       process.stdout.write( "\n Hello. \n\n" ) ;
       break ;
 
    case 2 :
        process.stdout.write( "\n Today is "
        +  dateTime  +  ".\n\n" ) ;
       break ;

    case 3 :
        
        break ;   
 
    default:
       process.stdout.write( "\n I do not understand \""
                          +  given_number   +  "\".\n\n" ) ;
    }
 

                  
process.exit() ;
                         
} ) ;                    

