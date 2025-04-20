# Client Side JS

- [Client Side JS](#client-side-js)
  - [Common JS APIs](#common-js-apis)
    - [DOM - get element](#dom---get-element)
    - [DOM - create element](#dom---create-element)
    - [Element updates](#element-updates)
    - [Window object Methods and Events](#window-object-methods-and-events)
    - [XMLHttpRequest](#xmlhttprequest)


## Common JS APIs

![common js apis](./resource/common_js_apis.png)

### DOM - get element

__document.getElementById__
- get __one specific__ HTML or XML element based on the id attribute in the node

__document.getElementsByTagName__
- get a __NodeList__ of elements with a specified tag name
- tagName parameter can be the literal name of the HTML tag. example(retrieving all images):
    ```
    var imgSet = document.getElementsByTagName("img");
    imgSrcStr = ""
    for(var i=0; i<imgSet.length; i++) {
        imgSrcStr += "<p>Img src: "
        imgSrcStr += imgSet[i].src;
        imgSrcStr += "<\p>"
    }
    document.write(output)
    ```

### DOM - create element

__document.createElement(tagName)__

Example: createElement and insertBefore
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example: createElement and insertBefore</title>
</head>
<body>
    <div id="container">
        <p id="first">This is the first paragraph.</p>
        <p>This is the second paragraph.</p>
    </div>

    <script>
        // Step 1: Create a new element
        var newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a new paragraph inserted before the first one.";

        // Step 2: Get the parent element and the reference element
        var container = document.getElementById("container");
        var firstParagraph = document.getElementById("first");

        // Step 3: Insert the new element before the reference element
        container.insertBefore(newParagraph, firstParagraph);
    </script>
</body>
</html>
```
Example: createElement, appendChild, and replaceChild
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example: createElement, appendChild, and replaceChild</title>
</head>
<body>
    <div id="container">
        <p id="first">This is the first paragraph.</p>
        <p id="second">This is the second paragraph.</p>
    </div>

    <script>
        // Step 1: Create a new element
        var newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a new paragraph added to the container.";

        // Step 2: Append the new element to the container
        var container = document.getElementById("container");
        container.appendChild(newParagraph);

        // Step 3: Create another new element to replace an existing one
        var replacementParagraph = document.createElement("p");
        replacementParagraph.textContent = "This paragraph has replaced the second paragraph.";

        // Step 4: Replace the second paragraph with the new one
        var secondParagraph = document.getElementById("second");
        container.replaceChild(replacementParagraph, secondParagraph);
    </script>
</body>
</html>
```
Tip: to get hold of the document root itself as the "parent" to append, use `document.body.appendChild`.

### Element updates

__element.innerHTML__
- __retrieves or sets__ the contents within an HTML element
- returns __ALL CHILD__ elements as a __text string__

__element.style__
- update the style of an element

__element.setAttribute(attrName, attrValue)__
```js
document.getElementById("theImageId").setAttribute("src", "another.gif")
```

__element.removeAttribute(attrName)__
- Removes an attribure from an element

__element.getAttribute(attrName)__
- get the attribute value __if it exists__

### Window object Methods and Events

<mark>See the <a href="./demo-window-open-onload-scrollto.html">./demo-window-open-onload-scrollto.html.html</a> for an example </mark>

__window.open__
open another window, where you can specify attributes like the size of the window

__window.onload__
Do something when the __entire page (including all resources like images)__ has fully loaded.

__window.scrollTo__


### XMLHttpRequest

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

<mark>See the <a href="./demo-ajax_xml_http_request.html">./demo-ajax_xml_http_request.html.html</a> for an example </mark>


