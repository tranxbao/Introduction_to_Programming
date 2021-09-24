/*Write code for a function that checks whether a given string is a valid email
 (NOTE! the validation doesn't need to perfect, it's enough that it fulfills the 
 requirements listed here).
The requirements are:
String must contain following characters: ".", "@"
There must be at least two characters after the period.
The first letter cannot be a "." or a "@".
Hint: String functions you might want to consider using: includes(), charAt(), 
indexOf(), slice() and property length.*/

function checkEmail(email) {
   // Your code goes here
   let lastDotPos = email.lastIndexOf('.');
   let lastAtPos = email.lastIndexOf('@');
   //let emailFirstChar = email.charAt(0);
   if(email.includes(".","@")&&(email.length-lastDotPos) > 2 &&lastAtPos>0 && lastDotPos>0){
     console.log("Email ok");
   }else{
       console.log("Email invalid")
   }
   //var lastAtPos = email.lastIndexOf('@');
   //var lastDotPos = email.lastIndexOf('.');
   //return (lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2);
}
checkEmail("foo");
checkEmail("email@test.fi");
checkEmail("email@test.");