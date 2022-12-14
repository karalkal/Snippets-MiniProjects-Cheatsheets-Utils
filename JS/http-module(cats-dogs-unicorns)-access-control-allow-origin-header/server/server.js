const http = require("http");
let allCats = [{ name: 'Zelda', age: 3 }, { name: 'Tiger Lily', age: 10 }]
let allDogs = [{ name: 'Doggy1', age: 3 }, { name: 'Doggy2', age: 10 }]
let allUnicorns = [{ name: 'Uni1', age: 3 }, { name: 'Uni2', age: 10 }]

const requestListener = (req, res) => {
    let body;
    let statusCode;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, DELETE");

    switch (req.url) {
        case '/':
            body = { message: 'Hello from the other side!' };
            break;
        case `/cats`:
            if (req.method === 'GET') {
                body = { cats: allCats }
            } else if (req.method === 'DELETE') {
                allCats = [];
                statusCode = 204;
            }; break;
        case `/dogs`:
            if (req.method === 'GET') {
                body = { dogs: allDogs }
            } else if (req.method === 'DELETE') {
                allDogs = [];
                statusCode = 204;
            }; break;
        case `/unicorns`:
            if (req.method === 'GET') {
                body = { unicorns: allUnicorns }
            } else if (req.method === 'DELETE') {
                allUnicorns = [];
                statusCode = 204;
            }; break;

        default:
            statusCode = 404;
            body = { error: `Route ${req.url} does not exist` }
            break;
    }

    res.statusCode = statusCode || 200;
    body = body && JSON.stringify(body)
    res.end(body);
}

const server = http.createServer(requestListener)

const startServer = (port, host) => server.listen(port, host, () => console.log(`Yeah! Visit http://${host}:${port} for the good stuff!`));
const closeServer = cb => server.close(cb);

module.exports = { startServer, closeServer }
