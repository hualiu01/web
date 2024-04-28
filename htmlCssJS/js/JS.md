# Java Script

1. JS is both an Object Oriented language and an Event Oriented language.
    - event example: click, movement, typing ...

2. Java Script and PHP: JS can not call PHP function directly and vice versa.
This is because JS is client side code and PHP is server side.
But, with Http as middleman, JS can induces a call to a URL witch ends
in a php file that executes a PHP function.

3. Dom code is executed from top to bottom.
    - So if your JS code is manipulating DOM,
    put your JS code __in the end__ of the HTML. Or there is a programming
    way to solve this: <script>window.onload = function {JS code}</script>
    - Also DOM is using __blocking calls__ to render the page.
    So be mindful when you embed calls, it could slow down the loading of the
    whole page, if there were something wrong with the code.

4. Downside of factoring JS files into a single file instead of putting it
in html?
    - It means __More http calls !__. Thus, the speed of loading the page
    further slows down! Note, for the second and third time of loading this
    page, this JS is very likely to have been cached. But for the first time
    this indeed will slow down the loading.