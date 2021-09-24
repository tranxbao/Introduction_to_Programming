/**
	Palindrome algorithm.
	Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, 
	such as 'madam' or 'racecar'.
*/

function isPalindrome(string) {
	/**
		initialize variable that holds reversed passed string and make this string lowercese
	*/
	var reversedString = reverse(string.toLowerCase());

	/**
		trim whitespaces from 'reversedString'
	*/
	reversedString = reversedString.replace(/ /g, '');
	
	/**
		create arrays from passed string and reversed string
	*/

	const stringCharray = string.split('');
	const reversedStringCharArray = reversedString.split('');

	/**
		call helper function that compares two arrays if is equal
	*/
	return isArraysEqual(stringCharray, reversedStringCharArray);
}


/**
	Helper function that revese passed string
*/
function reverse(s) {
  return s.split('').reverse().join('');
}


/**
	Helper function that compares two arrays
*/
function isArraysEqual(arr1, arr2) {
	// check length of passed arrays. If length of arrays are not equal -> arrays not equal
	if (arr1.length != arr2.length) {
		return false;
	}

	// create variable that holds length of array
	var i = arr1.length;

	// iterate each element in array and compare to element of second array
	while(i--) {
		// this loop will run when i will be higher than 0
		// if 'i' will be equal to 0 expresion in 'while' loop is false

		// compare each element of arrays
		if (arr1[i] !== arr2[i]) {
			console.log("It is not a palindrome.");
            break;


		}

		console.log("It is a palindrome.")
        break;
	}
}

/**
 *
	Usage
*/

const palindromeString = "madam";
const notPalindromeString = "abcd";
//process.stdout.write("enter a string:")
//process.stdin.on("data",function isPalindrome(palindromeString));    // returns true
console.log(isPalindrome(notPalindromeString)); // returns false
console.log(isPalindrome(palindromeString)); // returns true