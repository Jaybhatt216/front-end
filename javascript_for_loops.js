//for loops
//The for loop explicitly forces you to define the start point, stop point, and each step of the loop. In fact, you'll get an Uncaught SyntaxError: Unexpected token ) if you leave out any of the three required pieces.

for ( start; stop; step ) {
  // do this thing
}
//Here's an example of a for loop that prints out the values from 0 to 5. Notice the semicolons separating the different statements of the for loop: var i = 0; i < 6; i = i + 1

for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}
//Did you know you can also nest loops inside of each other? Paste this nested loop in your browser and take a look at what it prints out:

for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
x++ or ++x // same as x = x + 1
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5
for (var x = 9; x > 1; x = x - 1) {
   console.log("hello " + x);
}

for (var x = 5; x < 10; x++) {
    console.log(x);
}
for (var k = 0; k < 200; k++) {
    console.log(k);
}
var factorial = 12;
for (i = 1; i <= 12; i++)
{
  factorial *= i;
}
