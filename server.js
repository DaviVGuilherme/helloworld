const { createServer } = require('node:http');

function handleRequest(request, response) {
  const [pathname] = request.url.split('?', 1);
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (request.method === 'GET' && pathname === '/') {
    response.end('hello world');
    return;
  }

  response.writeHead(404);
  response.end('Not Found');
}

if (require.main === module) {
  const host = process.env.HOST ?? '127.0.0.1';
  const port = Number(process.env.PORT ?? 3000);
  const server = createServer(handleRequest);

  server.listen(port, host, () => {
    console.log(`Servidor ouvindo em http://${host}:${server.address().port}`);
  });
}

module.exports = handleRequest;
