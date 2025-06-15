let http = require('http');

const handleRequest = (req, res) => {
    const routes = {
        '/api/user': () => {
            const url = new URL(req.url, `http://${req.headers.host}`);
            const firstname = url.searchParams.get('firstName');
            const lastname = url.searchParams.get('lastName');
            if (firstname && lastname) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ firstname, lastname }));
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Missing firstname or lastname query parameters');
            }
        },
        '/': () => {
            res.write('hello from server'); // write a response to the client
            res.end(); // end of response from server
        }
    };

    const routeHandler = Object.keys(routes).find(route => req.url.startsWith(route));
    if (routeHandler) {
        routes[routeHandler]();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
};

http.createServer(handleRequest).listen(8080);//the server instance listens for http requests on port 6000
