//Create a program that prints a triangle. Program asks the
//user for the height of the triangle and then prints out a
//triangle.
process.stdout.write("Please enter size of triangle:");
process.stdin.on("data",function(inputNumber){
    var number = Number(inputNumber);
    
for (var i = number; i--;) {
  var columns = 0;
  while (columns <= i) {
    process.stdout.write('*');
    columns++
  }
  process.stdout.write("\n");
}
process.exit();
});