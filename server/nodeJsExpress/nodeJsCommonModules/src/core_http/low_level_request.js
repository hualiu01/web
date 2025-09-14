// NOTE: Using http.request() is not preferred for most modern 
// applications, whether on the client-side/frontend or 
// server-side/backend. While http.request() is a low-level API 
// provided by Node.js for making HTTP requests, there are better 
// alternatives available that simplify the process and provide 
// additional features.

// Why Not http.request():
// http.request() requires 
// more boilerplate code for handling requests and responses.
// It does not provide features like automatic JSON parsing, 
// request retries, or timeout handling, which are common in 
// higher-level libraries.

import { request } from 'http';
import AbortController from 'node-abort-controller'; // Import AbortController

function simple_example() {
    console.log("example 1 ------------- simple_example()");
    // Define options for the HTTP request
    const options = {
        hostname: 'localhost', // Host defined in server.js
        port: 8080,            // Port defined in server.js
        path: '/api/user?firstName=John&lastName=Doe', // API endpoint with query parameters
        method: 'GET',         // HTTP method
    };

    // Make the HTTP request
    const req = request(options, (res) => {
        let data = '';

        // Collect response data
        res.on('data', (chunk) => {
            console.log('example 1 Received chunk on data event:', chunk.toString());
            data += chunk;
        });

        // Handle end of response
        res.on('end', () => {
            console.log('example 1 data on end evnet =', data);
        });
    });

    // Handle errors
    req.on('error', (error) => {
        console.error('example 1 Error:', error.message);
    });

    // End the request
    req.end();
}


simple_example();
// This code demonstrates how to make a low-level HTTP request
// using Node.js's built-in http module. It sends a GET request to
// the specified API endpoint, collects the response data, and logs it to the console.
// The request includes query parameters for firstName and lastName,
// and it handles both the response data and any potential errors that may occur during the request.

function call_back_on_http_resp(resultCallback) {
    const controller = new AbortController(); // Create an AbortController instance
    const signal = controller.signal; // Get the AbortSignal

    // Define options for the HTTP request
    const options = {
        hostname: 'localhost', // Host defined in server.js
        port: 8080,            // Port defined in server.js
        path: '/api/user?firstName=John&lastName=Doe', // API endpoint with query parameters
        method: 'GET',         // HTTP method
        signal,                // Attach the AbortSignal to the request
    };

    // Set up the timeout
    const timeoutId = setTimeout(() => {
        console.log('example 2 on timeout');
        controller.abort(); // Abort the request
    }, 5000); // Timeout in milliseconds

    // Make the HTTP request
    const req = request(options, (res) => {
        let data = '';

        // Collect response data
        res.on('data', (chunk) => {
            console.log('example 2 Received chunk on data event:', chunk.toString());
            data += chunk;
        });

        // Handle end of response
        res.on('end', () => {
            clearTimeout(timeoutId); // Clear the timeout when the request completes
            if (res.statusCode < 200 || res.statusCode >= 300) {
                // Pass an error to the callback if the status code is not successful
                return resultCallback(new Error(`example 2 HTTP Error: ${res.statusCode} - ${res.statusMessage}`), null);
            }
            // Pass the result to the callback
            console.log('example 2 data on end event =', data);
            resultCallback(null, data);
        });
    });

    // Handle request errors
    req.on('error', (error) => {
        clearTimeout(timeoutId); // Clear the timeout when an error occurs
        if (error.name === 'AbortError') {
            resultCallback(new Error('example 2 Request Aborted'), null); // Handle abort error
        } else {
            resultCallback(error, null); // Pass other errors to the callback
        }
    });

    // End the request
    req.end();
}

// Example usage of error_handling_example
// const userResponse = question('Press any key to continue on example 2...');

call_back_on_http_resp((error, result) => {

    console.log("example 2 ------------- call_back_on_http_resp()")
    
    if (error) {
        console.error('example 2 Error:', error.message);
    } else {
        try {
            const parsedResult = JSON.parse(result); // Parse the result as JSON
            parsedResult.my_field = 'my_value'; // Add a custom field to the parsed result
            console.log('example 2 Modified Final JSON Response:', parsedResult);
        } catch (parseError) {
            console.error('example 2 Failed to parse result as JSON:', parseError.message);
        }
    }
});