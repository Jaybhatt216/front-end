/*array is goof for multiple variables of the same type for example
you have a bunch of donuts and want to make a var for each one
this helps with organization its like a numbered list starts with 0 */
//array for multiple donuts
//[]; makes a array anything inside is part of the array a comma spereates the elements and also last element does not need a comma
var donuts = ["glazed","chocolate frosted","cinnamon","sprinkled","powdered","cinnamon sugar",
"glazed cruller","chocolate cruller","cookies","boston creme","powdered jelly filled","creme de leche",
"glazed donut holes","blueberry donut holes","chocolate donut holes"];

//a index for  array elements is basically 0 to whatever where 0 is the first elements
//to access a element from a array using the index use the following
console.log(donuts[11]); //console.log(name of array [element number in index remember it starts with 0 so 12 is 11]);
donuts[1] = "glazed cruller"; // changes the second element in the `donuts` array to "glazed cruller"
console.log(donuts[1]);
console.log(donuts.length); //print the lenght of the array
// list of other methods like length
push and pop = remove or add element from array
sort = sort element from array
reverse = reverse array order
donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array
donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array
With the pop() method you don’t need to pass a value; instead, pop() will always remove the last element from the end of the array. Also, pop() returns the element that has been removed in case you need to use it.
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1

Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here
hasEnoughPlayers(arr.lenght){
               if (arr.length >= 7) {
        return true;
}
    return false;
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

/*Arrays
An array is useful because it stores multiple values into a single, organized data structure. You can define a new array by listing values separated with commas between square brackets [].

// creates a `donuts` array with three strings
var donuts = ["glazed", "powdered", "jelly"];
But strings aren’t the only type of data you can store in an array. You can also store numbers, booleans… and really anything!

// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];
You can even store an array in an array to create a nested array!

// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [[1, 2, 3], ["Julia", "James"], [true, false, true, false]];
Nested arrays can be particularly hard to read, so it's common to write them on one line, using a newline after each comma:

var arraysInArrays = [
  [1, 2, 3],
  ["Julia", "James"],
  [true, false, true, false]
];*/
/*Indexing
Remember that elements in an array are indexed starting at the position 0. To access an element in an array, use the name of the array immediately followed by square brackets containing the index of the value you want to access.

var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array
Prints: "glazed"
One thing to be aware of is if you try to access an element at an index that does not exist, a value of undefined will be returned back.

console.log(donuts[3]); // the fourth element in `donuts` array does not exist!
Prints: undefined

Avoid accessing elements outside the bounds of an array. If you try to, the missing element will be returned back as undefined !*/

Array Loops
Once the data is in the array, you want to be able to efficiently access and manipulate each element in the array without writing repetitive code for each element.

For instance, if this was our original donuts array:

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
and we decided to make all the same donut types, but only sell them as donut holes instead, we could write the following code:

donuts[0] += " hole";
donuts[1] += " hole";
donuts[2] += " hole";
donuts array: ["jelly donut hole", "chocolate donut hole", "glazed donut hole"]
But remember, you have another powerful tool at your disposal, loops!

To loop through an array, you can use a variable to represent the index in the array, and then loop over that index to perform whatever manipulations your heart desires.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
donuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]
In this example, the variable i is being used to represent the index of the array. As i is incremented, you are stepping over each element in the array starting from 0 until donuts.length - 1 (donuts.length is out of bounds).

Arrays have a set of special methods to help you iterate over and perform operations on collections of data. You can view the MDN Documentation list of Array methods here, but a couple big ones to know are the forEach() and map() methods.

The forEach() method gives you an alternative way to iterate over an array, and manipulate each element in the array with an inline function expression.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
Prints:
JELLY DONUT HOLE
CHOCOLATE DONUT HOLE
GLAZED DONUT HOLE
Notice that the forEach() method iterates over the array without the need of an explicitly defined index. In the example above, donut corresponds to the element in the array itself. This is different from a for or while loop where an index is used to access each element in the array:

for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}
Parameters
The function that you pass to the forEach() method can take up to three parameters. In the video, these are called element, index, and array, but you can call them whatever you like.

The forEach() method will call this function once for each element in the array (hence the name forEach.) Each time, it will call the function with different arguments. The element parameter will get the value of the array element. The index parameter will get the index of the element (starting with zero). The array parameter will get a reference to the whole array, which is handy if you want to modify the elements.

Here's another example:

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
Prints:
Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat
On the next page, you'll do a quiz that uses the forEach() method to modify an array.
NEXT
