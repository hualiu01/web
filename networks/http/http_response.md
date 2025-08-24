# Http Resonse Status Code

4. https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

5. Remember these ones:
    - 1XX Informational 
      - 100 Continue - The server received the reques headers and should continue to send the request body
      - 101 Switching Protocols - The client has requested the server to switch protocols and the server has agreed to do so.
    - 2XX Successful
      - 200 OK
      - 201 Created
      - 202 Accepted - The server accepted the request for processing but the __processing has not yet been completed__.
      - 204 No Content - The server successfully processed the request but is __not returning any content__.
    - 3XX Redirection
      - 301 Moved Permanently - This request and all future requests should be sent to the returned location.
      - 302 Found - This request should be sent to the returned location. Moved temporary.
    - 4XX Client Error
      - 400 Bad Request - The server cannot process the request due to a client error, e.g., invalid request or __transmitted data is too large__.
      - 401 Unauthorized - The client making the request is unauthorized and should authenticate.
      - 403 Forbidden - The request was valid but the server is refusing to process it. This is usually returned due to the client having insufficient permissions for the website, e.g., requesting an administrator action but the user is not an administrator.
      - 404 Not Found - The server did not find the requested resource.
      - 405 Method Not Allowed - The web server does not support the HTTP method used.
    - 5XX Server Error
      - 500 Internal Server Error - A generic error status code given when an unexpected error or condition occurred while processing the request.
      - 502 Bad Gateway - that the server, while acting as a gateway or proxy, received an invalid response from the upstream server.
      - 503 Service Unavailable - The web server cannot process the request.

# HTTP Response Headers( which is Optional)
Common response headers are:

```
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html
```
The `Date` header specifies the date and time the HTTP response was generated.

The `Server` header describes the web server software used to generate the response.

The `Content-Length` header describes the length of the response.

The `Content-Type` header describes the media type of the resource returned (e.g. HTML document, image, video).

# HTTP Response Body/ i.e. "Payload"
The payload is the data in the body of a response being transported from a server to the client due to an API request.

Following the HTTP response headers is the HTTP response body. This is the main content of the HTTP response.

This can contain images, video, HTML documents and other media types.