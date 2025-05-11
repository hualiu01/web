

- [Java Script Syntax](#java-script-syntax)
  - [Intro](#intro)
  - [JS build](#js-build)
  - [JS Primitive Data types](#js-primitive-data-types)
    - [Primitive Types](#primitive-types)
    - [Wrapper Objects of Primitive Types](#wrapper-objects-of-primitive-types)
    - [Coerce](#coerce)
    - [`undefined` vs `null`](#undefined-vs-null)
    - [`NAN`](#nan)
      - [Key Points About `NaN`:](#key-points-about-nan)
      - [Examples](#examples)
    - [CONST](#const)
  - [Variables](#variables)
    - [block scope or function scope](#block-scope-or-function-scope)
    - [`var` `let` and `const`](#var-let-and-const)
    - [example of `let` block scope](#example-of-let-block-scope)
    - [naming](#naming)
  - [Operators](#operators)
    - [Arithmetic operators](#arithmetic-operators)
    - [Assignment operators](#assignment-operators)
    - [Comparison Operators](#comparison-operators)
  - [Control FLow \& Conditional Statements](#control-flow--conditional-statements)
    - [if else](#if-else)
    - [switch](#switch)
    - [while](#while)
    - [for loop](#for-loop)
  - [JS Array/List](#js-arraylist)
    - [NEW](#new)
    - [ARR LENGTH \& GET ITEM](#arr-length--get-item)
    - [ITERATE](#iterate)
    - [PUSH \& CONCAT](#push--concat)
    - [FILTER \& FIND \& INDEXOF \& FINDIDEX \& INCLUDES](#filter--find--indexof--findidex--includes)
    - [FILL](#fill)
    - [COPY](#copy)
    - [MAP \& REDUCE](#map--reduce)
  - [JS Objects \& Map](#js-objects--map)
  - [Functions](#functions)
    - [ES6 standard - the `=>`](#es6-standard---the-)
    - [Anonymous Functions and IIFE](#anonymous-functions-and-iife)
      - [Anonymous Functions](#anonymous-functions)
      - [IIFE (Immediately Invoked Function Expression)](#iife-immediately-invoked-function-expression)
  - [JS Class \& Interface \& Inheritance](#js-class--interface--inheritance)
    - [Prototypes](#prototypes)
  - [JS Data \& Time](#js-data--time)
    - [Time Zone](#time-zone)
  - [JS I/O](#js-io)
    - [`console.log`](#consolelog)
    - [work with files](#work-with-files)
    - [JS with JSON](#js-with-json)
  - [JS Error](#js-error)
    - [Error obj properties](#error-obj-properties)

# Java Script Syntax

## Intro

1. JS is both an ___Object Oriented language and an Event Oriented language___.
    - event example: click, movement, typing ...

2. Java Script and PHP: JS can not call PHP function directly and vice versa.
This is because JS is client side code and PHP is server side.
But, with Http as middleman, JS can induces a call to a URL which ends in a php file that executes a PHP function.

3. Dom code is executed from top to bottom.
    - So if your JS code is manipulating DOM,
    put your JS code __in the end__ of the HTML. Or there is a programming
    way to solve this: `<script>window.onload = function {JS code}</script>`
    - Also DOM is using __blocking calls__ to render the page.
    So be mindful when you embed calls, it could slow down the loading of the
    whole page, if there were something wrong with the code.

4. Downside of factoring JS files into a single file instead of putting it in html?
    - It means __More http calls !__. Thus, the speed of loading the page further slows down! Note, for the second and third time of loading this page, this JS is very likely to have been cached. But for the first time this indeed will slow down the loading.


## JS build

___Webpack___

A module bundler for JS.

___Babel___

A JS compiler. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

___Web Assembly___

A binary instruction format that runs in your browser

## JS Primitive Data types

### Primitive Types
- number
  - Inegers
    - 16 (decimal)
    - 020 (octal)
    - 0x10 (hexadecimal, hex)
  - Floating point (double precision; 16bit floating point numbers)
    - 3.1412
    - 5e2 (exponent)
    - "floating-point percision error"
      `console.log(3.4 + 5.12 + 0.45); // 8.969999999999999`
      - to fix it
        ```js
        let result = 3.4 + 5.12 + 0.45;
        console.log(result.toFixed(2)); // "8.97"
        ```
        or
        ```js
        console.log(Math.round(result * 100) / 100); // 8.97
        ```
  - NaN, See more details on [nan](#nan)
  ```js
  > typeof(NaN)
    'number'
  ```
- string (double or single quotation mark)
  - "hi"
  - 'hi'
- boolean
  - true of false
  - JS is case-sensitive, thus, True or False won't work
- null
  ```js
    > typeof(null)
    'object'
  ```
  see more at [undefined-vs-null](#undefined-vs-null)
- undefined
  - __A data type has not been assigned, or the variable does not exist__
  ```js
  > typeof(undefined)
    'undefined'
  ```
  see more at [undefined-vs-null](#undefined-vs-null)
- __ALL__ other non primitive data types are objects.

### Wrapper Objects of Primitive Types

- boolean -> Boolean
- number -> Number
- string -> String

```js
typeof "abc"; // "string" (primitive)
typeof String("abc"); // "stirng" 
typeof new String("abc"); // "object"
typeof (new String("abc")).valueOf(); // "string"
```
### Coerce

To "coerce the value" in JavaScript means to convert a value from one data type to another, either explicitly or implicitly, in order to perform an operation or comparison. This process is also known as type coercion.

__Implicit Coercion__
```js
console.log("5" - 2); // 3 (string "5" is coerced to a number)
console.log("5" + 2); // "52" (number 2 is coerced to a string)
```
- exaplain: The `-` operator expects numeric operands. While the `+` operator is used for both addition and string concatenation.
If one of the operands is a string, JavaScript coerces the other operand into a string.


__Explicit Coercion__
```js
console.log(Number("5")); // 5 (explicitly converting string to number)
console.log(String(123)); // "123" (explicitly converting number to string)
```

### `undefined` vs `null`
undefined - Declared but not assigned a value

null - __explicitly__ indicate that a variable or property has no value or is empty.

undefined is a primitive type, while null is NOT a primitive type.

```js
let a; // undefined
let b = null; // null

console.log(a); // undefined
console.log(b); // null

console.log(typeof a); // "undefined"
console.log(typeof null); // "object"
console.log(typeof b); // "object"
```
```js
isNaN(null) // => false
null <1 // => true
null <0 // => false
```

### `NAN`

**`NaN`** (short for "Not-a-Number") is a special value in JavaScript that represents a computational result that is __not a valid number__.

#### Key Points About `NaN`:
1. **Type**:
   - `NaN` is of type `number`.
   - Example:
     ```javascript
     console.log(typeof NaN); // "number"
     ```

2. **When Does `NaN` Occur?**:
   - When a mathematical operation fails to produce a valid number.
   - Examples:
     ```javascript
     console.log(0 / 0); // NaN
     console.log(Math.sqrt(-1)); // NaN
     console.log(parseInt("abc")); // NaN

      > s = "I am a string"
      'I am a string'
      > console.log("a number: %d", s)
      a number: NaN
      undefined
     ```

3. **`NaN` is Not Equal to Itself**:
   - `NaN` is the only value in JavaScript that is **not equal to itself**.
   - Example:
     ```javascript
     console.log(NaN === NaN); // false
     ```

4. **Checking for `NaN`**:
   - Use the `isNaN()` function to check if a value is `NaN` __after implicite coerce__.
   - Example:
     ```javascript
     console.log(isNaN(NaN)); // true
     console.log(isNaN("abc")); // true => coerce to NaN then eval
     console.log(isNaN(123)); // false => coerce to 123 then eval
     console.log(isNaN("123")); // false => coerce to 123 then eval
     ```
  - will `null` be "Not a number"
    ```js
    let my_null = null
    isNaN(my_null) // false 
    ```

5. **`Number.isNaN()`**:
   - A more reliable way to check for `NaN` because it __doesn't coerce__ the value => thus, __strickly__ checking whether it is `NaN`.
   - Example:
     ```javascript
     console.log(Number.isNaN(NaN)); // true
     console.log(Number.isNaN("abc")); // false
     console.log(Number.isNaN(123)); // false
     console.log(Number.isNaN("123")); // false
     ```

#### Examples
```javascript
let result = 0 / 0;
if (isNaN(result)) {
    console.log("The result is NaN");
}
```

### CONST
const errored out on initing twice:
```
> const list = [2,3,4,5]
undefined
> const list = [2,3,4,5]
Uncaught SyntaxError: Identifier 'list' has already been declared
```

## Variables

### block scope or function scope
- block-scoped, meaning it is only accessible within the block {} where it is declared.
- function-scoped, meaning it is accessible throughout the entire function or globally if declared outside a function.

### `var` `let` and `const`
- var
  - function level scope
  - can be redeclared in the same block
  ```js
  {var a =1; var a =2}
  ```
- let
  - introduced in ES6 
  - provides block-level scoping => block means "{}"
    ```js
    {
      let x = 10;
    }
    console.log(x); // Error: x is not defined (outside of the block)
    ```
  - variables declared with `let` can be reassigned but not redeclared
    ```js
    // this is ok
    {
      let a = 9;
      a = 12
    }

    // this will errored out
    {
      let a = 9;
      let a = 12; // will get error
    }
    ```
- const
  - introduced in ES6 
  - provides block-level scoping

### example of `let` block scope
```js
let span = document.getElementById("my-span");
const btn = document.getElementById("my-btn");

btn.onclick = () => {
    span.textContent = "changed text";
};
```
=> works. Because `span` is declared with `let` __outside of any block__, it behaves __similarly to var__ because it is in the global or function scope.

```js
if (true) {
    let span = document.getElementById("my-span");
    const btn = document.getElementById("my-btn");

    btn.onclick = () => {
        span.textContent = "changed text"; // Works because `span` is in the same block
    };
}

console.log(span); // ReferenceError: span is not defined
```


### naming
- ok to start with `$` such as `let $price;`
- not ok to start with number
- ok to have `_` but not `-`

## Operators

### Arithmetic operators
```js
console.log("5 + 3 = ", 5 + 3)
console.log("7 - 3 = ", 7 - 3)
console.log("8 * 2 = ", 8 * 2)
console.log("28 / 3 = ", 27 / 3)
console.log("4 to the power of 3 = ", 4 ** 3)
console.log("19 mod 4 = ", 19 % 4)
5 + 3 =  8
7 - 3 =  4
8 * 2 =  16
28 / 3 =  9
4 to the power of 3 =  64
19 mod 4 =  3
```
__Note: The plus (+) operator is also used for string concatenation__. When using a + with both a number and a string, they both get treated as a string, and get concatenated rather than added.
```js
> "5"+2
'52'
```
Expressions are __read left to right__, so adding two numbers and then a string will interpret the first + as addition, and the second + as concatenation.

```js
console.log("5 + 3 = ", 5 + 3)
console.log("5 + \"3\" = ", 5 + "3")
console.log("5 + 5 + \"3\" = ", 5 + 5 + "3")
console.log("\"3\" + 5 + 5 = ", "3" + 5 + 5)
console.log("5 + 5 + \"3\" + 5 = ", 5 + 5 + "3" + 5)
5 + 3 =  8
5 + "3" =  53
5 + 5 + "3" =  103
"3" + 5 + 5 =  355
5 + 5 + "3" + 5 =  1035
```
### Assignment operators

`+=, -=, *=, /=, %=, **=`
example usage:
```js
x += 3
```

### Comparison Operators
- == operator checks if the operand on the left is of __equal value__ to the operand on right
- === operator checks if the operand on the left is of __equal value and equal type__ to the operand on right
- `!=` operator checks if the operand on the left is not __of equal value__ to the operand on right
- `>` operator checks if the operand on the left is greater than that on the right
- `<` operator checks if the operand on the left is lesser than that on the right
- `>=` operator checks if the operand on the left is greater than or equal to that on the right
- `<=` operator checks if the operand on the left is lesser than or equal to that on the right

```js
3 =="3"
true
3 ==="3"
false
3 != "3"
false
3 !== "3"
true
```
## Control FLow & Conditional Statements
### if else
```js
let time = 12;

if (time < 12) {
  document.getElementById("time message") = "Good Morning";
}
else if (time < 18) {
  document.getElementById("time message") = "Good Afternoon";
} else {
  document.getElementById("time message") = "Good Evening";
}
```
The ternary operator in JavaScript is a shorthand for an if-else statement. It is also known as the conditional operator because it evaluates a condition and returns one of two values based on whether the condition is true or false.
```js
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"
```
### switch 
break is necessary!
```js
let user_input = prompt('Enter a number between 1 to 7');
//Using logical OR operator to check if the input is a number and it is between 1 to 7
if(isNaN(user_input) || user_input< 1 || user_input>7) {
    console.log("Invalid input")
} else {
    user_input = parseInt(user_input)
    switch(user_input){
        case 1: console.log("Sunday"); break;
        case 2: console.log("Monday"); break;
        case 3: console.log("Tuesday"); break;
        case 4: console.log("Wednesday"); break;
        case 5: console.log("Thursday"); break;
        case 6: console.log("Friday"); break;
        case 7: console.log("Saturday"); break;
        default: console.log("Invalid entry");
    }
}
```

### while
```js
let count = 0;

while (count < 5) {
  console.log("Count is:", count);
  count++; // Increment the counter
}
```
### for loop
```js
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
```

## JS Array/List

https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769

### NEW
```JS
> list = [2,3,4,5]
undefined
> typeof(list)
'object'

> arr = new Array(0,2,3,4)
[ 0, 2, 3, 4 ]
> typeof(arr)
'object'
```
Array of objects
```js
const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];
```



### ARR LENGTH & GET ITEM
```JS
> arr.length
3
> arr.length()
Uncaught TypeError: arr.length is not a function

// get element of index 2
> arr[2]
3
```

### ITERATE
```js
let myArray = ["Jack","Jill",4,5,true,"John"]
myArray.forEach(element => {
    console.log(element)
})
```

To find the index position and the value, we can use the generic Object.entries method, which can be used with all collection objects. This maps each index position to the value.
```js
let myArray = ["Jack","Jill",4,5,true,"John"]
for (const [index, value] of Object.entries(myArray)) {
  console.log(index, " - ", value);
}
```

### PUSH & CONCAT 

```js
let arr = [1,2,3]
arr.push(4)  //[1,2,3,4]
```
```js
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = arr1.concat(arr2)  // [1,2,3,4,5,6]
```
Spread syntax (...): This syntax can be used to create a new array by combining existing arrays or adding new elements.
```js
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let arr3 = [...arr1, ...arr2]; // arr3 is [1, 2, 3, 4]
    let arr4 = [...arr1, 5, 6]; // arr4 is [1, 2, 5, 6]
```

### FILTER & FIND & INDEXOF & FINDIDEX & INCLUDES

___filter___ 
Returns __a new array__ with all elements that pass the test implemented by the provided function.
```JS
const list = [1, 2, 3, 4];
list.filter((el) => el % 2 === 0); // [2, 4]
```
___find___ 
Returns the __value of the first element in the array__ that satisfies the provided testing function. Otherwise `undefined` is returned.

```JS
> start_from=0 // defult value 0
0
> l = [1,3,2,3,3,3,4,5]
[
  1, 3, 2, 3,
  3, 3, 4, 5
]
> l.indexOf(3)
1
> l.indexOf(3, start_from)
1
> start_from = 2
2
> l.indexOf(3, start_from)
3

```

___indexOf___
__Returns the first index__ at which a given element can be found in the array, or `-1` if it is not present.

___lastIndexOf___:
```JS
> l = [1,2,3,3,4,6]
[ 1, 2, 3, 3, 4, 6 ]
> l.lastIndexOf(3, 1) // starting from value 2 and search left
-1
> l.lastIndexOf(3) // starting from the end and search left
3
> l.lastIndexOf(3,2) // starting from value 3 at 2nd index and search left 
2
```

___findIndex___
Returns the __index of the first element__ in the array that satisfies the provided testing function. Otherwise -1 is returned.
```js
> l = [{1:2}, {2:3}]
[ { '1': 2 }, { '2': 3 } ]  // NOTE: keys were converted to strings

> l.findIndex((e) => '2' in e && e['2'] === 3)
1
> l.findIndex((e) => '1' in e && e['1'] === 2)
0

```


### FILL
```JS
> const list = [1, 2, 3, 4, 5];
undefined
> list.fill(0); 
[ 0, 0, 0, 0, 0 ]

> list.fill(NaN); 
[ NaN, NaN, NaN, NaN, NaN ]
```

### COPY
changes on copied obj won't change the original obj. While in python, the original obj will be changed.
```JS
// given
> l = [3,4,6]
[ 3, 4, 6 ]
> a = l
[ 3, 4, 6 ]

// then
> a = a.map((x) => x+1)
[ 4, 5, 7 ]

// result
> l
[ 3, 4, 6 ]

```

### MAP & REDUCE
```JS
// map
> arr = [2, 3, 9, 8]
[ 2, 3, 9, 8 ]
> arr = arr.map((x) => x+1)
[ 3, 4, 10, 9 ]

// reduce
> start_from = 0
0
> arr.reduce((total, item) => total + item, start_from)
26
> start_from = 10
10
> arr.reduce((total, item) => total + item, start_from)
36
```

___Reduce___ has direction, the default is from left to right. To specify from right to left, use `reduceRight`:
```JS
> arr = ['o','l','l','e','h']
[ 'o', 'l', 'l', 'e', 'h' ]
> arr.reduce((res, i) => res + i, "form:")
'form:olleh'
> arr.reduceRight((res, i) => res + i, "form:")
'form:hello'
```

__What if the array is a mix of int and str?__
```JS
// map 
> arr = [2,'3', 9,8]
[ 2, '3', 9, 8 ]
> arr.map((x) => x+1)
[ 3, '31', 10, 9 ]

// reduce
> start_from = 0
0
> arr.reduce((total, item) => total + item, start_from)
'2398'
> start_from = 10
10
> arr.reduce((total, item) => total + item, start_from)
'12398'
```

## JS Objects & Map
```js
const dictLike = Object.create(null);
dictLike.key1 = 'value1';
dictLike[2] = 'value2';
console.log(dictLike); // Output: { key1: 'value1', '2': 'value2' }
```

```js

const inventory = {
    p1: { name: "p1", stock: 43 },
    p2: { name: "p2", stock: 22 },
    p3: { name: "p3", stock: 0 },
};

// Function to check if a product is in stock
let inStock = product => (product in inventory) && (inventory[product].stock > 0);

// Function to track stock levels of multiple products
let trackStockLevel = products => {
    products.forEach(product => {
        if (inStock(product)) {
            console.log(`Product ${product} is in stock`);
        } else {
            console.log(`Product ${product} is out of stock`);
        }
    });
};

// Test the function
trackStockLevel(["p1", "p3", "p4"]);

```

```js
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set(2, 'value2');
myMap.set({}, 'value3');

console.log(myMap.get('key1')); // Output: value1
console.log(myMap.size); // Output: 3

for (const [key, value] of myMap) {
  console.log(key, value);
}
// Output:
// key1 value1
// 2 value2
// {} value3

myMap.forEach((val,key) => {
    console.log(key, val)
})
```

Use Objects:
- When you need a simple structure with string keys and fast property access.

Use Maps:
- When you need to use keys of any data type, avoid prototype conflicts, or require frequent additions/removals of entries.

## Functions
```js
function myFunc(param1) {
    console.log("The parameter passed is " + param1)
}
```

### ES6 standard - the `=>`
```js
let printMyInputES6 = (user_input) => {
    console.log(user_input)
}
```
Since the function is passed __a single value__ and the __body of the function is a single line__, the brackets can be omitted. The code can also be written as below.
```js
let printMyInputES6Short = user_input => console.log(user_input)

// and it can be called like this
printMyInputES6Short(user_input="hua")
// or like this
printMyInputES6Short("hua")
```

### Anonymous Functions and IIFE

#### Anonymous Functions
An **anonymous function** is a function without a name. It is often used in situations where the function does not need to be reused.

Example 1: Assigning an Anonymous Function to a Variable
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("John")); // Output: Hello, John!
```

Example 2: Using an Anonymous Function with `setTimeout` as a Callback
```javascript
setTimeout(function() {
    console.log("This message is displayed after 2 seconds.");
}, 2000);
```

Example3: Anonymous func as event listerner
```js
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});
```

#### IIFE (Immediately Invoked Function Expression)
An IIFE is a function that is executed immediately after it is defined.

```js
(function() {
    console.log("This function runs immediately!");
})();


(function(name) {
    console.log(`Hello, ${name}!`);
})("John");
```

## JS Class & Interface & Inheritance

### Prototypes

A function prototype lets you easily define and add properties or methods to an object. Prototypes exist for all objects that can be created with the keyword”new”. All object constructors create objects that inherit properties and methods that are defined by the prototype. At instantiation objects inherit the current state of the prototype. Note however, that scripts can override prototype properties and functions. Following is an example of using a prototype to add a method to the Car class:
```js
function Car(make, model, year) {
 this.make = make;
 this.model = model;
 this.year = year;
}
Car.prototype.getName = function() {
 return this.make + ‘ ’ + this.model + ‘ ’ + this.year;
}
```
## JS Data & Time

```js
> var today = new Date(); // assign the current local time
undefined
> today
2025-04-06T15:27:44.087Z
```
checkout https://github.com/hualiu01/hualiu01-npm-dt 

### Time Zone

## JS I/O

### `console.log`

Embed variables
```js
const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];
for (let i = 0; i < orders.length; i++) {
  const itemTotal = orders[i].quantity * orders[i].price;
  grandTotal += itemTotal;
  console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
}
```

### work with files

### JS with JSON

## JS Error

### Error obj properties

- `message`
- `name`
  - ___Generic Error___: `throw new Error("Only values 1-10 are permitted")`
  - 6 ___Core Error___ Types in JS: 
    - TypeError, 
    - RangeError, 
    - URIError, 
    - EvalError, 
    - ReferenceError, 
    - SyntaxError

