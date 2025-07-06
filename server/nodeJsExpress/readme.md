<h1>Node.js</h1>

- [Basics](#basics)
  - [Web server, application server, and DB (server)](#web-server-application-server-and-db-server)
- [Modules](#modules)
  - [Module Specification (CommonJS and ES modules)](#module-specification-commonjs-and-es-modules)
    - [CommonJs](#commonjs)
    - [ES Modules (ESM)](#es-modules-esm)
    - [\*\*Important Differences between CommonJS and ESM](#important-differences-between-commonjs-and-esm)
    - [Mixed module specifications](#mixed-module-specifications)
    - [Dynamic Import](#dynamic-import)
  - [Module Types](#module-types)
    - [core](#core)
    - [local](#local)
    - [third-party](#third-party)
- [Node Package Manager (NPM)](#node-package-manager-npm)
  - [local install vs global install](#local-install-vs-global-install)
- [Node.js + Express](#nodejs--express)
  - [First Example](#first-example)
  - [Async I/O w Callback Programming](#async-io-w-callback-programming)
  - [Folder Structures](#folder-structures)
  - [Env conf for COMMON/DEV/STG/PROD](#env-conf-for-commondevstgprod)
  - [Secrets Storing](#secrets-storing)

# Basics

Node.js runs on Google Chrome's V8 engine. The V8 engine also runs on the client's front-end browser.

- Node.js is a __Runtime environment__ for server-side JS applications
- Express is a __Server-side JS web framework__, which runs on top of Node.js

## Web server, application server, and DB (server)

Web Server tools:
- Nginx
  - lightweight, high perfomance, reverse proxy and web server.
  - popular for handling static files and load balancing
- Apache HTTP server
  - one of the oldest and most widely used.
  - flexible with many modules.
- Caddy
  - modern web server with automatic HTTPS
  - configuration is simpler than Nginx/Apache

Application Server:
- Node.js
  - JS runtime, used with web app frameworks like Express or NestJS 
  - Great for real-time apps and microservices
- Spring Boot(Java)
  - Enterprise-level framework widely used in large applications
  - Handles web requests, APIs, and integrates easily with DBs
- Django (python)
  - High-level python framework
  - Includes ORM, admin panel, and strong security features.
- Honorable mentions: Ruby on Rails, ASP.NET Core

Database Server
- PostgreSQL
  - Open-source, relational database with advanced features (JSONB, indexing, etc.).
  - Known for reliability and performance.
- MySQL / MariaDB
  - Popular RDBMS; MariaDB is its open-source fork.
  - Used in many CMSs and legacy systems.
- MongoDB
  - NoSQL database storing data in flexible, JSON-like documents.
  - Good for rapid development and unstructured data.


# Modules

___module___
Modules can be a single file or a collection of multiple files and folders.

___package___
A directory with one or more modules bundled together is called a package.

## Module Specification (CommonJS and ES modules) 
___module specification___
Module specifications are the conventions and standards used to create packages in JavaScript code for Node.js applications. 

The most commonly used module specifications for Node.js applications are __CommonJS__ and __ES modules__. 

### CommonJs

If the module file has `.js` extension, and  `package.json` DOES NOT HAVE `{"type": "module"}` specification, then, it's a CommonJS module.

- module import: 
  ```js
  const express = require('express');
  const routes = require('./routes');
  const dotenv = require('dotenv');
  ```
  - The require statement can be called __anywhere__ in the file. 
- module export: `module.exports = router;`

### ES Modules (ESM)

If module file has `.mjs` extension, then it's a ES module. But when a file has `.js` extension, but `package.json` has `{"type": "module"}` specification, it still is a ES module.

- default module import:  
  ```js
  import express from 'express';
  import routes from './routes.js';
  import dotenv from 'dotenv';
  ```
  - The import statement __must be called at the beginning__ of the file.
- default module export: `export default router;`

___ES module "named" import and export___
- named export in `module.mjs`: `const a = 1; export {a as "myvalue"}`
- corresponding named import: `import { myvalue } from module.mjs`

___Note:___
express itself is still using CommonJS internally, but it can be imported via ESM because Node.js supports interop.

The named exports (like Router, json, urlencoded) are exposed on the default express export:
```js
import express from 'express';
const { Router } = express;
```
- `const { Router } = express` This uses ___destructuring assignment___ to extract the `Router` property from the express object. `Router` is a named export provided by `express`. It is used to create modular, mountable route handlers in 
Express applications.

### **Important Differences between CommonJS and ESM
The `require` statement is dynamic and can be called anywhere, including within conditional statements and functions. In contrast, `import` is static and must be called at the beginning of the file. Errors in `require` are detected at __runtime__, while `import` binding errors are caught at __compile time__.

__Require modules are synchronous, loading one at a time, while import modules are asynchronous__, allowing simultaneous processing. Import is faster for large-scale applications with many modules.

### Mixed module specifications

Node allows mixing CommonJS and ESM, but with some restrictions:
- You can't require() an ESM module from a CommonJS module (without dynamic import workarounds).
- You can import() a CommonJS module from an ESM module, but it treats it as a default export.

### Dynamic Import 

__In a CommonJS environment__ (without {"type": "module"}), you cannot directly use import to load ES modules. However, you can __use the dynamic import() function to load ES modules at runtime__. This is a workaround for mixing module specifications.
```js
(async () => {
    const { default: myModule } = await import('./myModule.mjs');
    console.log(myModule);
})();
```

## Module Types

### core

Core Node.js modules form a minimal library. They contain the minimal functionality needed to develop Node.js applications.

see `./examples/core-*` folders for examples.

### local

Local modules are the modules written by you and the development team as part of creating your Node.js application.

### third-party

Third-party modules are available online and have been created by the back-end Node.js community. 

Many third-party modules are either in the public domain, which does not require a license, or they are open source. Open source resources are usually governed by the "copyleft" license, which allows the developer to use and modify the code but also requires the developer to share their work under that same license.

| Aspect       | Copyright                          | Copyleft                          |
  |--------------|------------------------------------|------------------------------------|
  | Control      | Creator retains exclusive control. | Creator allows free use with conditions. |
  | Modification | Modifications may require permission. | Modifications must remain open-source. |
  | Distribution | Restricted without explicit permission. | Free distribution is encouraged. |
  | Philosophy   | Protects intellectual property.    | Promotes collaboration and openness. |


# Node Package Manager (NPM)

NPM uses the metadata in a `package.json` file to determine a package’s dependencies.

## local install vs global install

__local install__

`npm install <package_name>`

- local install is the default
- run the local instal cmd from the directory you what the package installed in

__global install__

`npm insatll -g <package_name>`

Global installs should be used judiciously because all projects on that computer will make use of that package and its dependencies. If you have different versions of a project on your machine, they will all use the globally installed package, which might break compatibility with other dependencies. 

# Node.js + Express

## First Example
```js
// app.js
const express = require("express");
const app = express();
app.use(express.json());  // to parse JSON bodies
app.get("/index", (req, res) => {
  res.json([{ title: "Learn Node", rating: 4 }]);  // return JSON response
});

// Visiting /users/123 sets req.params.id to "123"
app.get("/users/:id", (req, res) => {
    // Extract values from req
    const routeParam = req.params.id; // Route parameter
    const queryParam = req.query.title; // Query parameter
    const headerValue = req.headers["user-agent"]; // Header value

    console.log("Route Parameter:", routeParam);
    console.log("Query Parameter:", queryParam);
    console.log("Header Value:", headerValue);

    res.json({
        routeParam, // Equivalent to routeParam: routeParam
        queryParam,
        headerValue,
    });
});

// Visiting /books?author=JohnDoe sets req.query.author to "JohnDoe"
app.get('/books', (req, res) => {
  const author = req.query.author;  // extract ?author= value from query string
  res.send(`Filter by author: ${author}`);
});

// post: For JSON { "username": "aname", "password": "pwd123" }, 
// // req.body.username returns "aname"
app.post('/register', (req, res) => {
  const username = req.body.username;  // get value from request body
  res.send(`Username received: ${username}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```
- `app.use(express.json()); ` : This middleware is used to parse incoming JSON payloads in HTTP requests. It converts the JSON data in the request body into a JavaScript object and attaches it to `req.body`.

## Async I/O w Callback Programming
![](./rsc/nodejs%20http%20request%20pattern%201.png)
![](./rsc/nodejs%20http%20request%20pattern%202.png)
## Folder Structures


## Env conf for COMMON/DEV/STG/PROD

## Secrets Storing