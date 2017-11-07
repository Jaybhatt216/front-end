var umberlla = {}; // this is to create a object this is currenlty empty so we will add properties
var umberlla = {
  color: "pink", //this is a object with properties like color or isOpen because there is more than one property add a comma but last one np comma
  isOpen: false,
  open: function() { //now we make a method which is a function or a task to do
    if (umberlla.isOpen === true) {
      return "The umberlla is already opened!";

    } else {
      umberlla.isOpen = true;
      return "Julia opens the umberlla"; // this method has a loop if the isOpen property is true then umberlla is open then return it is open else you will open the umberlla
    }

  }
};

typeof umberlla // will tell you the data type in example typeof umberlla will result objects

var sister = {
  name: "sarah",
  age: 23,
  parents: ["Alice","Andy"],
  siblings:["Julia"],
  favoriteColor: "purple",
  pets: true
};

// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

Object-literal notation
var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};
The syntax you see above is called object-literal notation. There are some important things you need to remember when you're structuring an object literal:

The "key" (representing a property or method name) and its "value" are separated from each other by a colon
The key: value pairs are separated from each other by commas
The entire object is wrapped inside curly braces { }.
And, kind of like how you can look up a word in the dictionary to find its definition, the key in a key:value pair allows you to look up a piece of information about an object. Here's are a couple examples of how you can retrieve information about my sister's parents using the object you created.

// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]
Using sister["parents"] is called bracket notation (because of the brackets!) and using sister.parents is called dot notation (because of the dot!).



TIP: It’s worth noting that while we can represent real-world objects as JavaScript objects, the analogy does not always hold. This is a good starting place for thinking about the structure and purpose of objects, but as you continue your career as a developer, you’ll find that JavaScript objects can behave wildly different than real objects.
NOTE: typeof is an operator that returns the name of the data type that follows it:

typeof "hello" // returns "string"
typeof true // returns "boolean"
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
typeof function hello() { } // returns "functi
Objects are one of the most important data structures in JavaScript. Get ready to see them everywhere!

They have properties (information about the object) and methods (functions or capabilities the object has). Objects are an incredibly powerful data type and you will see them all over the place when working with JavaScript, or any other object-oriented programming language.

Object literals, methods, and properties
You can define objects using object-literal notation:

var myObj = {
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

myObj.eat(); // method
myObj.color; // property
Naming conventions
Feel free to use upper and lowercase numbers and letters, but don't start your property name with a number. You don't need to wrap the string in quotes! If it's a multi-word property, use camel case. Don't use hyphens in your property names

var richard = {
  "1stSon": true;
  "loves-snow": true;
};

richard.1stSon // error
richard.loves-snow // error
