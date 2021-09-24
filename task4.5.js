/* Task 5: Smallest and Largest with Random Numbers
1. Create a program with an 100 item array that is initialized with random numbers of range 0-1000.
• To create random numbers you can use Math.random () function.
2. Find the largest value in the array using a loop and print it out.
3. Find the smallest value in the array using a loop and print it out. */
let myArray=[];
let largertNum = 0;
let smallestNum =1000;
while (myArray.length<100){
    let r = Math.floor(Math.random()*1000);
    if (myArray.indexOf(r)===-1)myArray.push(r);
}
for(i=0;i<myArray.length;i++){
    if(myArray[i]>largertNum){
        largertNum=myArray[i];
    }else if(myArray[i]<smallestNum){
        smallestNum=myArray[i];
    }
}

console.log("\n Random numbers: " +myArray);
console.log("\nLargest number is: "+largertNum);
console.log("Smallest number is: "+smallestNum);


