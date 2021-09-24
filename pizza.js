/*Write code for a function that gets two input parameters, number of pizzas ordered 
and number of participants. Each pizza is sliced into eight equally sized slices.
 Your function needs to calculate how many slices are left when the slices are 
 divided for participants. Function prints out the result as "There are [number of
leftover slices] slices left".

In this task you can assume input to be of correct data type (numeric) and 
error handling is not necessary.*/
const NUMBER_OF_SLICES_IN_PIZZA = 8;
function numberOfSlicesLeft(numberOfPizzas, numberOfParticipants){
// Your code goes here
let numberOfSlicesLeft = (NUMBER_OF_SLICES_IN_PIZZA*numberOfPizzas)%numberOfParticipants;
console.log("there are " + numberOfSlicesLeft + " slices left");
}
numberOfSlicesLeft(1,1);
numberOfSlicesLeft(2,6);