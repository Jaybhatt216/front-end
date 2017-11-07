//hpow to make loops loop for a fixed amount of time
var x = 1;
console.log(x + " mississippi!");
var x = x + 1;
console.log(x + " mississippi!");

while (x <= 10000) {
  console.log(x + " mississippi!");
  var x = x + 1;

}
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}
//Parts of a While Loop
//There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.

//Three main pieces of information that any loop should have are:

//When to start: The code that sets up the loop — defining the starting value of a variable for instance.
//When to stop: The logical condition to test whether the loop should continue.
//How to get to the next item: The incrementing or decrementing step — for example, x = x * 3 or x = x - 1
//beer song
var num = 99;

while (num > 0) {
    if (num == 1) {
         console.log("1 bottle");
    }else console.log(num + 'bottles');
    num = num - 1;
}
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var num = 60;
while(num > 0){
    console.log('T-' + num + 'seconds')
    if (num == 51){
        console.log('Orbiter transfers from ground to internal power');
    }
    if (num === 1) {
        console.log("Solid rocket booster ignition and liftoff!");
    }

    num = num - 1;
}
