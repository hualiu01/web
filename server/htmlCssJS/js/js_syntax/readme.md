

- [Java Script Syntax](#java-script-syntax)
  - [Intro](#intro)
  - [JS build](#js-build)
  - [JS Primitive Data types](#js-primitive-data-types)
    - [Primitive Types](#primitive-types)
    - [Wrapper Objects of Primitive Types](#wrapper-objects-of-primitive-types)
    - [undefined](#undefined)
    - [null](#null)
    - [NAN](#nan)
      - [Key Points About `NaN`:](#key-points-about-nan)
      - [Examples](#examples)
    - [CONST](#const)
  - [Variables](#variables)
    - [`var` `let` and `const`](#var-let-and-const)
    - [naming](#naming)
  - [Control FLow \& Conditional Statements](#control-flow--conditional-statements)
  - [JS Data \& Time](#js-data--time)
    - [Time Zone](#time-zone)
  - [JS I/O](#js-io)
    - [`console.log`](#consolelog)
    - [work with files](#work-with-files)
    - [JS with JSON](#js-with-json)
  - [JS Error](#js-error)
    - [Error obj properties](#error-obj-properties)
  - [JS Array/List](#js-arraylist)
    - [NEW](#new)
    - [ARR LENGTH \& GET ITEM](#arr-length--get-item)
    - [FILTER \& FIND \& INDEXOF \& FINDIDEX \& INCLUDES](#filter--find--indexof--findidex--includes)
    - [FILL](#fill)
    - [COPY](#copy)
    - [MAP \& REDUCE](#map--reduce)
  - [JS Objects \& Map](#js-objects--map)
  - [JS Class \& Interface \& Inheritance](#js-class--interface--inheritance)

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
- string (double or single quotation mark)
  - "hi"
  - 'hi'
- boolean
  - true of false
  - JS is case-sensitive, thus, True or False won't work
- null
  - Represented by null
- undefined
  - __A data type has not been assigned, or the variable does not exist__
- all other non primitive data types are objects.

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

### undefined
Declared but not assigned a value
```js
let x;
```

### null

```js
let emptyValue = null;
```

### NAN

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
   - Use the `isNaN()` function to check if a value is `NaN`.
   - Example:
     ```javascript
     console.log(isNaN(NaN)); // true
     console.log(isNaN("abc")); // true
     console.log(isNaN(123)); // false
     ```

5. **`Number.isNaN()`**:
   - A more reliable way to check for `NaN` because it doesn't coerce the value.
   - Example:
     ```javascript
     console.log(Number.isNaN(NaN)); // true
     console.log(Number.isNaN("abc")); // false
     console.log(Number.isNaN(123)); // false
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

### `var` `let` and `const`
- var
  - function level scope
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

### naming
- ok to start with `$` such as `let $price;`
- not ok to start with number
- ok to have `_` but not `-`


## Control FLow & Conditional Statements

## JS Data & Time

```js
> var today = new Date();
undefined
> today
2025-04-06T15:27:44.087Z
```

### Time Zone

## JS I/O

### `console.log`

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
```

Use Objects:
When you need a simple structure with string keys and fast property access.
Use Maps:
When you need to use keys of any data type, avoid prototype conflicts, or require frequent additions/removals of entries.

## JS Class & Interface & Inheritance

