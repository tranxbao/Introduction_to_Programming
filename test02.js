function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            process.stdout.write( "It is not a palindrome");
            
    }
        
    process.stdout.write("It is a palindrome") ;
    

}  
    
   
}

// take input
const string = "madam";

checkPalindrome(string);
