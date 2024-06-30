
- [Declaration block](#declaration-block)
- [CSS selector types](#css-selector-types)
  - [basic - Element Selectors (h1, p, ...)](#basic---element-selectors-h1-p-)
  - [basic - ID Selectors (id="" ; #)](#basic---id-selectors-id--)
  - [basic - Class Selectors (class="; .)](#basic---class-selectors-class-)
  - [intermediate - Element with Class Selector](#intermediate---element-with-class-selector)
  - [intermediate - Descendant Selector](#intermediate---descendant-selector)
  - [intermediate - Child Selector (\>)](#intermediate---child-selector-)
  - [advanced - Pseudo-Class Selector](#advanced---pseudo-class-selector)
- [Text and Color in CSS](#text-and-color-in-css)
  - [Color](#color)
    - [Color Formats](#color-formats)
    - [Predefined colors in morden browsers](#predefined-colors-in-morden-browsers)
  - [Font](#font)
    - [property](#property)
    - [Font - `text-decoration` attr](#font---text-decoration-attr)


# Declaration block

When you create a CSS rule, the part inside the curly brackets is called the: ___Declaration block___

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
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

# Text and Color in CSS

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
  font-size: 12px;
  text-transform: uppercase; /* uppercase,  lowercase,  capitalize  and none(default value). */
  text-decoration: underline; /* underline, strikethrough */
}
```
### Font - `text-decoration` attr
To set color, thickness and styling. 
- Option 1:
```css
/* css */
text-decoration: underline red solid 5px;
```
- Option 2:
```css
/* css */
text-decoration-line: underline;  /* underline, overline, line-through and none */
text-decoration-color: red;
text-decoration-style: solid;   /* solid,  double,  dotted,  dashed  and  wavy */
text-decoration-thickness: 5px;
```
__The `text-decoration-style` property requires the decoration line to be defined.__ 

___[Some common font families including math and emoji](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#some_common_font_families)___