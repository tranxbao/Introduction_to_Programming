/*Create a program with the following arrays:
1. an integer array with five items: 5, 7, 32, 31 and 8.
2. a double array with three items: 12.4, -13.55 and 67.44,
3. a string array with four items: “Helsinki”, “Lissabon”,
“New York” and “Shanghai”.
Then print out the following:
- “The value in the index number 3 is: “ and the value from the string array.
- “The fourth item in the int array is: “ and the value from the int array.
- “In the double array there are xx items” where xx is the size of the array.
.*/
let intergerArray = [5,7,32,31,8];
let doubleArray = [12.4,-13.55,67.44];
let stringArray = ["Helsinki","Lissabon","Newyork","Shanghai"];
process.stdout.write("\nThe value in the index number 3 is " +stringArray[3] );
process.stdout.write("\nThe fourth item in the int array is: " +intergerArray[3] );
process.stdout.write("\nIn the double array there are " + doubleArray.length + " items");

//- The whole content of the integer array with a loop.

process.stdout.write("\nInterger Array contents: ");
for(let i=0;i<5;i++){
    process.stdout.write("\n"+intergerArray[i]);
}
//- The whole content of the double array from the last item to the first.

process.stdout.write("\nDouble Array contents last to first: ");
let newdoubleArray = doubleArray.reverse();
process.stdout.write("\n"+newdoubleArray);

//- Lastly, in a loop go through the string array and set all the values to be
 //“empty” and print it out as a comma separated string
 for(i=0;i<stringArray.length;i++){
     stringArray[i] = "empty";
     }
     process.stdout.write("\nNew string array: " +stringArray);
 



