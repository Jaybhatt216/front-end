var colt = "not busy";
var weather = "nice";

if (colt === "not busy" && weather === "nice") {
  console.log("go to the park");
}
Prints: "go to the park"
// like bash && means and
//Operator	Meaning	Example	How it works
//&&	Logical AND	value1 && value2	Returns true if both value1 and value2 evaluate to true.
//||	Logical OR	value1 || value2	Returns true if either value1 or value2 (or even both!) evaluates to true.
//!	Logical NOT	!value1	Returns the opposite of value1. If value1 is true, then !value1 is false.

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators.
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
if (flavor == "strawberry" || "chocolate" || "vanilla" && vessel == "cone" || "bowl" && toppings == "sprinkles" || "peanuts"){
   console.log("I'd like two scoops of chocolate ice cream in a cone with sprinkles.");
}


/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if (shirtWidth == 19 && shirtLength == 28  && shirtSleeve == 8.21) {
    console.log("S");
}else if (shirtWidth == 26 && shirtLength == 33  && shirtSleeve == 9.63){
    console.log("2XL");
}else  if (shirtWidth == 18 && shirtLength == 29  && shirtSleeve == 8.47){
    console.log("N/a");
}    
