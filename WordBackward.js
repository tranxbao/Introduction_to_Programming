//Write code for a function that prints out a given word backwards.
function wordBackwards(word) {
    // Your code goes here
    let str = word.split("").reverse().join("");
    console.log(str);
}
wordBackwards("Alakylä");
wordBackwards("madam");