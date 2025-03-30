- [Get Started](#get-started)
  - [Apply CSS to HTML](#apply-css-to-html)
    - [1. Highest Priority - inline css](#1-highest-priority---inline-css)
    - [2. Secondary Priority - Internal css](#2-secondary-priority---internal-css)
    - [3. Lowest Priority - External css](#3-lowest-priority---external-css)
    - [priority](#priority)
  - [Base Styles](#base-styles)
  - [CSS layout types](#css-layout-types)
- [CSS Frameworks](#css-frameworks)
  - [utility-first framework](#utility-first-framework)
  - [component framework](#component-framework)
- [CSS selector types](#css-selector-types)
  - [basic - Element Selectors (h1, p, ...)](#basic---element-selectors-h1-p-)
  - [basic - ID Selectors (id="" ; #)](#basic---id-selectors-id--)
  - [basic - Class Selectors (class="; .)](#basic---class-selectors-class-)
  - [intermediate - Element with Class Selector](#intermediate---element-with-class-selector)
  - [intermediate - Descendant Selector](#intermediate---descendant-selector)
  - [intermediate - Child Selector (\>)](#intermediate---child-selector-)
  - [advanced - Pseudo-Class Selector](#advanced---pseudo-class-selector)
- [Advanced CSS Properties](#advanced-css-properties)
  - [Common to all elements](#common-to-all-elements)
  - [Color](#color)
    - [Color Formats](#color-formats)
    - [Predefined colors in morden browsers](#predefined-colors-in-morden-browsers)
  - [Font](#font)
    - [property](#property)
    - [Font - `text-decoration` attr](#font---text-decoration-attr)


# Get Started 
## Apply CSS to HTML
### 1. Highest Priority - inline css
- used for single html element
- html doc get mesay quickly
- inset the `style` attr inside any html element
  - example 
  ```html
  <p style="color:red;">a red paragraph.</p>
  <h1 style="font-family: Cursive; font-size:70px; color:rgb(139,0,0)">Solar System</h1>
  <body style="background-color:wheat">
  ```
  a full example of a complete html page
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Inline CSS Example</title>
  </head>
  <body>
      <h1 style="color: blue; text-align: center;">This is a Heading</h1>
      <p style="font-size: 18px; color: green;">This paragraph is styled using inline CSS.</p>
  </body>
  </html>
  ```

### 2. Secondary Priority - Internal css
- used for a single page
- increases load time
- Add a `<style>` tag to your html doc
  - example 
  ```html
  <head>
    <title>Solar System</title>
    <style>
        table,th,td {
            border: 2px solid black;
        }
        body {
          background-color: yellow;
        }
    </style>
  </head>
  ```
  
### 3. Lowest Priority - External css 
- used to style an entire website
- can be linked to from other pages
- add a `link` tag to the `<head>` tag

```html
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

### priority

highest | inline > internal > external | lowest priority

## Base Styles

an example of base style
```
Body
{
  background-color: #EEEEEE; // black
  color: #000000; 
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 100%; 
  font-family: sans-serif;
}
```
- `font-size: 100%;` sets the font size to the browser default font size 

__See [this section here](#advanced-css-properties) for advanced css properites.__


__common basic guideline__
- color: RBG hex-values. [see more at section Color](#color)
- size: pixels (`5px`), cm, or a percentage
- text: aligned left, right, or center
- Floats: left or right
  -  the float property is used to position an element to the left or right within its containing element, allowing text and inline elements to wrap around it. Modern CSS layout techniques like Flexbox and CSS Grid are often preferred for creating responsive and flexible layouts.
-  vertical alignments must be top, middle, or bottom

## CSS layout types

One of the most important decisions you must make when you are determining the design of your website is whether to use a fluid or a fixed layout: 
- __A fluid layout__: is a layout in which the height and width of elements is flexible and can expand or contract based on the browser window, the operating system, and other user preferences. __You specify these elements mostly by using percentages and ems__. 
- __A fixed layout__: is a layout where you specify the height and width of elements, and those values remain the same regardless of which operating system or browser you use to access the website. __You specify these elements mostly by using pixels When determining the layout__, 

consider also the pros and cons for fluid and fixed layouts The type of layout you choose depends on the type and amount of content and the target audience of the website.

# CSS Frameworks

![types of css frameworks](./resources/types%20-%20css%20frameworks.png)

## utility-first framework

an example of utility-first framework

```css
text-align: center; // css property
text-center // utility class
```

NOTE: using utility frameworks often involves adding several classes to HTML markup. Thus, may increase html download size and slows down web pages.

__tools__

1. ___Tailwind CSS___
  example
    - vanila css
      ```css
      a {
        color: red;
        text-decoration: underline;
      }
      a: hover {
        color: rgb(185, 28, 28)
      }
      ```
    - tailwind css
      ```html
      <a href="..." class="underlinetext-red-500 hover:text-red-700"> Dangerouse Link</a>
      ```

## component framework

provides pre-styled components and templates. 
But would includes overhead code from unused components.

__tools__

1. ___Bootstrap___
  example
    - vanila css
      ```css
      a {
        color: red;
        text-decoration: underline;
      }
      a: hover {
        color: rgb(185, 28, 28)
      }
      ```
    - bootstrap
      ```html
      <a href="..." class="link-danger"> Dangerouse Link</a>
      ```

# CSS selector types

## basic - Element Selectors (h1, p, ...)
The element selector allows developers to select HTML elements based on their element type.

## basic - ID Selectors (id="" ; #)
__The id is unique within a webpage__
The id selectors take presedence of the element selectors(like `h1 {}`). 

__But it only OVERRIDES the same attr!!! for the attrs defined in elements selectors that didn't not have a conflicting definitions in is selectors, it applys to the item with the id.__

## basic - Class Selectors (class="; .)

## intermediate - Element with Class Selector
example
```html
<!-- html -->
 <p class="introduction"></p>
```
```css
/* css */
p.introduction {
    margin: 2px
}
```

## intermediate - Descendant Selector
Descendant selectors are useful if you need to select HTML elements that are contained within another selector.

```html
<!-- html -->
<div id="blog">
  <h1>Latest News</h1> <!-- selected by "#blog h1"-->
  <div>
    <h1>Today's Weather</h1> <!-- selected "#blog h1"-->
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
<div>
  <h1>Archives</h1> <!-- not selected "#blog h1"-->
</div>
```

```css
/* css */
#blog h1 {
  color: blue;
}
```

__Multiple descendants can also be selected__. For example, to select all h1 elements that are descendants of div elements which are descendants of the blog element, the selector is specified as follows.
```css
/* css */
#blog div h1 {
  color: blue;
}
```


## intermediate - Child Selector (>)
Child selectors are more specific than descendant selectors. They only select elements that are immediate descendants (children) of a selector (the parent).

```html
<!-- html -->
<div id="blog">
  <h1>Latest News</h1> <!-- selected by "#blog > h1"-->
  <h1>Latest News 2</h1> <!-- also selected by "#blog > h1"-->
  <div>
    <h1>Today's Weather</h1> <!-- not selected "#blog > h1"-->
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
<div>
  <h1>Archives</h1> <!-- not selected "#blog > h1"-->
</div>
```

```css
/* css */
#blog > h1 {
  color: blue;
}
```

## advanced - Pseudo-Class Selector
Allows developers to select elements __based on their state__.

In the following example, adding :hover  to the `<a>` element will change the color of the hyperlink to orange when it is hovered over.


```html
<!-- html -->
<a href="https://www.udacity.com">Udacity</a>
```

```css
/* css */
a:hover {
  color: orange;
}
```

# Advanced CSS Properties

[See above for basic properties](#base-styles)

## Common to all elements

```css
/* margin sets the space around an element */
margin: 20px; /* auto, length (e.g., 20px), 
percentage (a margin relative to the 
containing element's width) */

/* padding sets the space inside an element, 
between its content and its border */
padding: 10px; /* length, percentage */

/* float specifies whether an element should 
float to the left or right of its container */
float: left; /* none, left, right */

/* Defines the radius of the corners of an 
element's border box, creating rounded corners. */
border-radius: 10px; /* length, percentage */

width: 200px; 
height: 100px; /* auto, length, percentage */

/* position specifies the type of positioning 
method used for an element. Positioning determines 
how an element is placed within its containing 
block and how it interacts with other elements. */
position: relative; /* relative sets the element's 
position relative to its normal position. */
/*
static: The default positioning.
relative: Positioned relative to its normal position. 
absolute: Positioned relative to the nearest 
positioned ancestor. 
fixed: Positioned relative to the browser window. 
sticky: Switches between relative and fixed based 
on the scroll position.
*/
```

## Color

### Color Formats

- RGB 
  - example `p {color: rgb(255, 0, 0)}`
- RGBA
  - `A` stands for _alpha channel_. It represents the opacity, or transparency
  - example: `p {color: rgba(255, 0, 0, 0,8)}`
- HSL
  - `H` _Hue_ : The Hue value is the degree value on this circle, from 0 degrees to 360 degrees. __0 is red, 120 is green and 240 is blue__.
  - `S` _Saturation_ : Saturation is the distance from the center of the circle to its edge. The saturation value is represented by a percentage from __0% to 100% where 0% is the center of the circle and 100% is its edge__. For example, 0% will mean that the color is more grey and 100% represents the full color.
  <img src=./resources/css-hue-wheel.png width=400>
  - `L` _Lightnexx_ :  Think of it as turning the circle into a 3D cylinder where the bottom of the cylinder is more black and toward the top is more white. Therefore, __lightness is the distance from the bottom of the cylinder to the top__. Again, lightness is represented by a percentage from 0% to 100% where 0% is the bottom of the cylinder and 100% is its top. In other words, __0% will mean that the color is more black and 100% is white.__
  - example: `p {color: hsl(0, 100%, 50%)}`
- Hex value
  - Colors specified using hexadecimal are prefixed with a `#` symbol followed by the RGB value in hexadecimal format.
  -  RGB 255,0,0 would be written as hexadecimal #FF0000. (FF === 16*15 + 15 == 255)
-  

### Predefined colors in morden browsers
Some of the all 140 predefined color names:
```
black
silver
gray
white
maroon
red
purple
fuchsia
green
lime
olive
yellow
navy
blue
teal
aqua
```
For all of them see; https://www.w3schools.com/tags/ref_colornames.asp

## Font

### property

Since computers vary in what fonts they have installed, it is recommended to include several fonts when using the `font-family` property. 

```css
/* css */
p {
  color: rgb(225, 0, 0);
  font-family: "Courier New", monospace;
  font-weight: bold; /* normal, bold, bolder(bolder than parent element), lighter(lighter than parent element), 100-900(100 is the thinnest) */
  font-size: 12px;
  
  text-transform: uppercase; /* uppercase,  lowercase,  capitalize  and none(default value). */
  text-decoration: underline; /* underline, strikethrough */
}
```
- ___[Some common font families including math and emoji](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#some_common_font_families)___

### Font - `text-decoration` attr
To set color, thickness and styling. This property can enhance the visual emphasis of text or indicate a change in text state (like a link being visited).
- Option 1:
```css
/* css */
text-decoration: underline red solid 5px;
```
- "underline" applies an underline to text
- Option 2:
```css
/* css */
text-decoration-line: underline;  /* underline, overline, line-through and none */
text-decoration-color: red;
text-decoration-style: solid;   /* solid,  double,  dotted,  dashed  and  wavy */
text-decoration-thickness: 5px;
```
__The `text-decoration-style` property requires the decoration line to be defined.__


