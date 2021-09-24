let Palindrome=(str)=>{                 //arrow function.+for x loop-->ES6.
let ispalindrome = str.split('').reverse().join('');
  console.log(str.toLowerCase()===ispalindrome.toLowerCase());
}
Palindrome('MaDam');
//(function(str){
 //  let reversed="";
 //  for (let x of str){
  //    reversed=x+reversed;
  // }
//console.log(str===reversed)
//})("madam")
