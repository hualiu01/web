# Request Line + Request Header + Request Body

## Q: What are the three components of a HTTP request line?
A: 
1) HTTP method: GET PUT PATCH DELETE POST 
2) the requested resource
3) HTTP protocol version

## Q: What's the difference between POST and PUT?
A: PUT needs to be idempotent, Ptypically used to update existing resources, or to create new resources __at a specified, known URL__. On the other hand, POST is mainly used to create new resources, with the server providing the new URL.

In simple words, whether you know the item id or not? know=>put; otherwise post

## Q: Common http headers:
A: 
The `Host` header specifies the host of the server and indicates where the resource is requested from.

The `User-Agent` header informs the web server of the application that is making the request. It often includes the operating system (Windows, Mac, Linux), version and application vendor.

The `Accept` header informs the web server what type of content the client will accept as the response.

The `Accept-Language` header indicates the language and optionally the locale that the client prefers.

The `Content-type` header indicates the type of content being transmitted in the __request__ body.
