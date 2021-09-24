/*Write code for function that replaces all a's, i's and e's in a given word with 
asterisks (*) and prints the new word out.*/
function replaceBannedLetters(word) {
    // Your code goes here
    let str = word.replace(/a|i|e/gi, "*");
    console.log(str);
}
replaceBannedLetters("test");
replaceBannedLetters("Foobar");
replaceBannedLetters("JavaScript");
replaceBannedLetters("You");