// The "query" function call in Url module in Node.js is Syncronous 
// and is used to parse URLs into an object, 
// which can be useful for extracting query parameters and other 
// components of the URL. The URL module provides a more modern and 
// flexible way to work with URLs, especially with the introduction 
// of the URL class in Node.js. 

import { parse } from 'url';

let webAddress = 'http://localhost:8080/api/user?lastName=Kent&firstName=Clark';
let qry = parse(webAddress, true);
let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //outputs Clark


// Modern alternative using URL and URLSearchParams
let myUrl = new URL(webAddress);
let params = myUrl.searchParams; // returns a URLSearchParams object
console.log(params.get('firstName')); // outputs Clark          
console.log(params.get('lastName')); // outputs Kent

