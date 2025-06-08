- [Node.js](#nodejs)
  - [Basics](#basics)
    - [Web server \<-\> application server \<-\> DB (server)](#web-server---application-server---db-server)
  - [Modules](#modules)
    - [Module and Package](#module-and-package)
    - [Module Specification (CommonJS and ES modules)](#module-specification-commonjs-and-es-modules)
    - [Mixed module specifications](#mixed-module-specifications)


# Node.js 

## Basics

Node.js runs on Google Chrome's V8 engine. The V8 engine also runs on the client's front-end browser.

- Node.js is a __Runtime environment__ for server-side JS applications
- Express is a __Server-side JS web framework__, which runs on top of Node.js

### Web server <-> application server <-> DB (server)

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


## Modules

### Module and Package
___module___
Modules can be a single file or a collection of multiple files and folders.

___package___
A directory with one or more modules bundled together is called a package.

### Module Specification (CommonJS and ES modules) 
___module specification___
Module specifications are the conventions and standards used to create packages in JavaScript code for Node.js applications. 

The most commonly used module specifications for Node.js applications are __CommonJS__ and __ES modules__. 

___CommonJs___

- module import: 
  ```js
  const express = require('express');
  const routes = require('./routes');
  const dotenv = require('dotenv');
  ```
  - The require statement can be called anywhere in the file. 
- module export: `module.exports = router;`
- module file has `.js` extension

___ES modules___

- default module import:  
  ```js
  import express from 'express';
  import routes from './routes.js';
  import dotenv from 'dotenv';
  ```
  - The import statement must be called at the beginning of the file.
- default module export: `export default router;`

- If module file has `.mjs` extension, then it's a ES module. But when a file has `.js` extension, but `package.json` has `{"type": "module"}` specification, it still is a ES module.

___{} ES module import and export___
- named export in `module.mjs`: `const a = 1; export {a as "myvalue"}`
- corresponding named import: `import { myvalue } from module.mjs`

___Note:___
express itself is still using CommonJS internally, but it can be imported via ESM because Node.js supports interop.

The named exports (like Router, json, urlencoded) are exposed on the default express export:
```js
import express from 'express';
const { Router } = express;
```

__Important Differences__
The `require` statement is dynamic and can be called anywhere, including within conditional statements and functions. In contrast, `import` is static and must be called at the beginning of the file. Errors in `require` are detected at runtime, while `import` binding errors are caught at compile time.

Require modules are synchronous, loading one at a time, while import modules are asynchronous, allowing simultaneous processing. Import is faster for large-scale applications with many modules.

### Mixed module specifications

Node allows mixing CommonJS and ESM, but with some restrictions:
- You can't require() an ESM module from a CommonJS module (without dynamic import workarounds).
- You can import() a CommonJS module from an ESM module, but it treats it as a default export.