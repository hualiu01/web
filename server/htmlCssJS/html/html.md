# Hypertext Markup Language(HTML_ Background 

HTML stands for Hypertext Markup Language, which can be thought of as “the language of the Internet.” It is a markup language that was originally designed for sharing scientific documents.

HTML has been in continuous evolution since it was introduced to the Internet in the early 1990s by CERN: The European Organization for Nuclear Research and the IETF: Internet Engineering Task Force. The World Wide Web Consortium (W3C) made a number of recommendations to the HTML standards over the years.

___HTML Elements___ are the building blocks of an HTML page.


## The Objective of HTML5
 The HTML5 specification 
 - defines a single language called HTML5 that can be written in HTML or XML syntax.
 - improves the markup for documents. 
 - includes markup and APIs for idioms, such as web storage, video, and audio content. 


When speaking about about creating web pages, developers may use the terms HTML and HTML5 interchangeably.

# Get started
```
<!DOCTYPE html>
<html>
    <head>
        <title>My First HTML Document</title>
        <scripts></scripts>
        <style></style>
        <link></link>
        <meta></meta>
        <base></base>
    </head>
    <body>I successfully created my first document</body>
</html>
```
- The `<!DOCTYPE>` declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in. Although this declaration is not required, it should be the first line of the HTML code if the developer decides to include it. 
- The `<html>` tag is the root element of this tree.
  - The `<link>` tag is the "style sheet links"
  - The `<meta>` tag is meta information. example: "Charset=UTF-8"
  - The `<base>` tag is browser support information and other initialization functions

## HTML DOM tree

HTML user agents, commonly known as browsers, parse the markup, turning it into a DOM (Document Object Model) tree. A DOM tree is an __in-memory representation of a document__. DOM trees contain nodes, which define the type of document and its structure, such as headers and paragraphs, text nodes, and comment nodes.

## XML

![](./resources/img/xml_example.png)

Extensible Markup Language (XML) documents look similar to HTML documents, except __they have an XML tag on the first line__. In addition, with XML documents, the __Content-type must be specified as an XML media type such as application or xml__. When a document is transmitted with an XML content type, it is treated as an XML document by a web browser and __an XML processor parses the document__. 


## XHTML VS HTML
 Both HTML and XHTML use the same semantic or tags. However, XHTML tags all need to be in __lowercase__, while the case used does not matter in HTML. In addition, XHTML __must be well-formed. Every element must have an end tag__. All attributes must have __a value and double or single quotation marks__ must surround __all attribute values__. __If an XML parser encounters a situation where the syntax is not well-formed, it stops processing__. In HTML, different case, unmatched quotation marks, and non-terminated and uncontained elements are allowed and commonplace. In this regard, __HTML syntax is less rigorous than XHTML syntax__.

# References

Here is a list of resources that may be helpful as you continue your learning journey.

HTML Elements Reference (Mozilla)

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

The Form Element (Mozilla)

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

What is the Document Object Model? (W3C)

https://www.w3.org/TR/WD-DOM/introduction.html

ARIA in HTML (W3C via Github)

https://w3c.github.io/html-aria/

ARIA Authoring Practices  (W3C)

https://www.w3.org/TR/wai-aria-practices-1.2/