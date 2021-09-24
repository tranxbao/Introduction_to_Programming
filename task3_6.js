//Task 6: Palindrome
//Ask the user to give a string and then check if it’s a palindrome
//(a word, phrase, or sequence that reads the same backwards
//as forwards, e.g. madam or nurses run) or not. Use loops to
//solve this.
//Note: What happens if madam was spelt with a capital letter?
process.stdout.write('Please, enter a string for checking: ') ;
process.stdin.on('data',function(Inp){   
let checkingIn = Inp.toString().trim().toLowerCase();
let checkingInReverse = checkingIn.split('').reverse().join('');

for(let index=0;index<checkingIn.length;index++){
    if(checkingIn[index]!==checkingInReverse[index]){//or checkingIn.charAt(index)...
        process.stdout.write('is not a palindrome.');
        break;
    }else if (checkingIn[index]===checkingInReverse[index]){
        process.stdout.write('is a palindrome.');
        break;
    }
}
process.exit();
});