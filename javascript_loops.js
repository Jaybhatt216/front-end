//var is used to make a variable
//a small intro to loops
var price = 15.00; //price of an item
var money = 20.00; //money I have
//now the loop
if(money >= price) {
  console.log("buy the hammer");
} else {
    console.log("dont buy the hammer");

}
// this loop is saying if you more or equal amount of money as the price of the item buy the item if not dont buy it
// test your code in a web browser by presing ctrl shift J
// other examples
var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}

//multiple if else is possible and only if is possible without else but else needs if
//multipleif else have something called else if it continues the loop
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}


var runner = "Kendyll";
var position = 2;
var medal; //this lets the code input a variable by a change in another value like changing position to 1 makes it gold not sliver

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal."); //here the ouput is added by the code itself in the medal section 
