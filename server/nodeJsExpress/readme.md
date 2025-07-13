<h1>Node.js</h1>

- [Basics](#basics)
  - [Web server, application server, and DB (server)](#web-server-application-server-and-db-server)
- [Modules](#modules)
  - [Module Specification (CommonJS and ES modules)](#module-specification-commonjs-and-es-modules)
    - [CommonJs](#commonjs)
    - [ES Modules (ESM)](#es-modules-esm)
    - [Important Differences between CommonJS and ESM](#important-differences-between-commonjs-and-esm)
    - [Mixed module specifications](#mixed-module-specifications)
    - [Dynamic Import](#dynamic-import)
  - [Module Types](#module-types)
    - [core](#core)
    - [local](#local)
    - [third-party](#third-party)
- [Node Package Manager (NPM)](#node-package-manager-npm)
  - [local install vs global install](#local-install-vs-global-install)
- [Node.js - Callbacks \& Promises](#nodejs---callbacks--promises)
  - [Async I/O w Callback Programming](#async-io-w-callback-programming)
    - [callback examples](#callback-examples)
  - [Promises](#promises)
    - [Promise Simple Example](#promise-simple-example)
    - [Chained Promises Simple Example](#chained-promises-simple-example)
  - [Promises w Async/await](#promises-w-asyncawait)
    - [Why use Async/awairt syntax?](#why-use-asyncawairt-syntax)
    - [Just async with no await](#just-async-with-no-await)
  - [Axios](#axios)
- [Node + TypeScript + Express](#node--typescript--express)
  - [Hello World Single File App Example](#hello-world-single-file-app-example)
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
___module specification___ - Module specifications are the conventions and standards used to create packages in JavaScript code for Node.js applications. 

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



### Important Differences between CommonJS and ESM
- ___LOCATION___: 
  - The `require` statement is dynamic and can be __called anywhere__, including within conditional statements and functions. 
  - In contrast, `import` is static and __must be called at the beginning__ of the file. 
- ___ERROR___: 
  - Errors in `require` are detected at __runtime__.
  - While `import` binding errors are caught at __compile time__.
- ___ASYNC & SYNC___: 
  - `require` modules are __synchronous__, loading one at a time
  - `import` modules are __asynchronous__, allowing simultaneous processing. Import is faster for large-scale applications with many modules.

### Mixed module specifications

Node allows mixing CommonJS and ESM, but with some restrictions:
- You can't require() an ESM module from a CommonJS module (without dynamic import workarounds).
- You can import() a CommonJS module from an ESM module, but it treats it as a default export.

### Dynamic Import 

__In a CommonJS environment__ (i.e. `.js` file without {"type": "module"}), you cannot directly use import to load ES modules. However, you can __use the dynamic import() function to load ES modules at runtime__. This is a workaround for mixing module specifications.
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

# Node.js - Callbacks & Promises
---
✅ Use callbacks when:
- You’re working with __older Node.js APIs__ (e.g., fs.readFile, http.request) that are callback-based by default.

- You want __low-level control over asynchronous flow__.

- You’re writing __small, simple asynchronous functions__ and don’t expect chaining or composition.

⚠️ Downsides of callbacks:
- ___Callback Hell___: Deep nesting when multiple async operations depend on one another.

- __Error handling__ is manual and repetitive (e.g., if (err) return callback(err)).

- Harder to compose or __chain async logic__ cleanly.

---

✅ Use promises when:
- You need to __chain multiple async__ operations (e.g., .then().then().catch()).

- You want to use __modern syntax like `async/await`__.

- You're working with __newer APIs__ or using a library that supports/returns Promises (e.g., fs.promises, axios, fetch).

- Your logic benefits from cleaner error handling with .catch() or try/catch.

⭐ Advantages of promises:
- Composable (e.g., .then() chaining)

- Can be converted to async/await, making code more synchronous-like and easier to follow.

- More readable and maintainable for complex flows.

## Async I/O w Callback Programming
![](./rsc/nodejs%20http%20request%20pattern%201.png)
![](./rsc/nodejs%20http%20request%20pattern%202.png)

### callback examples

see `function call_back_on_http_resp(resultCallback)` from [here](./nodeJsExamples/src/core_http/low_level_request.js).

## Promises

A promise is an object that is returned by an asynchronous method.

__How to define a Promise?__
- A __method can be defined to return a promise object__, if you know it is going to take time for execution and thereby block resources. 
- When you __call a method that returns a promise, a promise object is created__. 

__States/Lifecycle of a promise object__
- The initial state of the promise is the ___pending state___. It is in this state until the operation is __complete or some error has caused the operation to abort__.
- When the operation is complete, the promise is said to be ___resolved___. When there is an error, the promise is said to be ___rejected___.

### Promise Simple Example

```js
//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

//Console log after calling the promise
  console.log("After calling promise");
```
```
Before calling promise
After calling promise
From Callback Promise resolved
```

### Chained Promises Simple Example
```js
let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1 resolved")
    }, 6000)
})

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2 resolved")
    }, 3000)
})

console.log("Before calling promise1");

myPromise1.then((successMessage1) => {
    console.log("promise1 resolved with " + successMessage1)

    console.log("Before calling promise2");
    myPromise2.then((successMessage2) => {
        console.log("promise2 resolved with " + successMessage2)
        console.log("try to access promise1 successMessage1 from promise2 callback " + successMessage1)
    })
    console.log("After calling promise2");
})

console.log("After calling promise1");
```

```
Before calling promise1
After calling promise1
promise1 resolved with promise1 resolved
Before calling promise2
After calling promise2
promise2 resolved with promise2 resolved
try to access promise1 successMessage1 from promise2 callback promise1 resolved
```

## Promises w Async/await

An `async` function __always returns a Promise__. Inside the async function, you can use the await keyword to pause execution until a Promise is resolved or rejected.

### Why use Async/awairt syntax?

🌀 Without async/await (Using Promises)
```js
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: 'Alice' }), 1000);
  });
}

function getOrders(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(['order1', 'order2']), 1000);
  });
}

// Promise chaining
getUser()
  .then(user => {
    console.log('User:', user);
    return getOrders(user.id);
  })
  .then(orders => {
    console.log('Orders:', orders);
  })
  .catch(err => {
    console.error('Error:', err);
  });
```
✅ With async/await — Cleaner & More Synchronous-Looking

```js
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: 'Alice' }), 1000);
  });
}

function getOrders(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(['order1', 'order2']), 1000);
  });
}

// Async function using await
async function showUserAndOrders() {
  try {
    const user = await getUser();
    console.log('User:', user);

    const orders = await getOrders(user.id);
    console.log('Orders:', orders);
  } catch (err) {
    console.error('Error:', err);
  }
}

showUserAndOrders();
```
✨ Why This Is Easier to Read:
- Looks like synchronous code, but it's async.

- No deeply nested .then() calls.

- Easier to add logic between steps.

- try/catch is standard and familiar for error handling.

### Just async with no await

What happens under the hood
```js
async function myAsyncFunction() {
  return "done";
}
```
is roughly equivalent to writing:
```js
function myAsyncFunction() {
  return Promise.resolve("done");
}
```
And
```js
async function myAsyncFunction() {
  throw new Error("fail");
}
```
is like:
```js
function myAsyncFunction() {
  return Promise.reject(new Error("fail"));
}
```

## Axios
---
Axios is a Promise-based HTTP client for browser and Node.js.

It simplified the process to send async http request to REST endpoints.

Support CRUD.

Transfer JSON data automatically with clean and simple API.

---

__Simple Axios GET Example__

```js
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Title:', response.data.title);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

```
---

__Simple Axios POST Example__

```js
const axios = require('axios');

// The `userId` field represents the ID of the user creating the post.
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Hello World',
  body: 'This is a test post',
  userId: 1
})
.then(response => {
  console.log('Created Post:', response.data);
})
.catch(error => {
  console.error('Error:', error.message);
});

```

---

__Axios with Chained up Get and Post Using `async/await`__
```js
async function run() {
  try {
    const getResponse = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('GET title:', getResponse.data.title);

    const postResponse = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Another Post',
      body: 'Body text here',
      userId: 2
    });
  } catch (err) {
    console.error('Request failed:', err.message);
    console.error('Error stack:', err.stack);
  }
  }
}

run();
```

---

__Axios with Parallel up Get and Post Using `async/await`__

```js
async function run() {
  try {
    const [getResponse, postResponse] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts/1'),
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Another Post',
        body: 'Body text here',
        userId: 2,
      }),
    ]);
    
    console.log('GET title:', getResponse.data.title);
    console.log('POST result:', postResponse.data);
  } catch (err) {
    console.error('Request failed:', err.message);
  }
}

run();

```

# Node + TypeScript + Express

⚠️ ___Note___: express itself is still using CommonJS internally, but it can be imported via ESM because Node.js supports interop.

The named exports (like Router, json, urlencoded) are exposed on the default express export:
```js
import express from 'express';
const { Router } = express;
```
- `const { Router } = express` This uses ___destructuring assignment___ to extract the `Router` property from the express object. `Router` is a named export provided by `express`. It is used to create modular, mountable route handlers in 
Express applications.

## Hello World Single File App Example
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

## Folder Structures


## Env conf for COMMON/DEV/STG/PROD

## Secrets Storing