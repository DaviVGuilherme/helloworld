const assert = require('node:assert/strict');
const { once } = require('node:events');
const { createServer } = require('node:http');
const { test } = require('node:test');

const handleRequest = require('../server');

test('GET / retorna hello world em texto puro', async (context) => {
  const server = createServer(handleRequest).listen(0, '127.0.0.1');
  context.after(() => new Promise((resolve) => server.close(resolve)));
  await once(server, 'listening');

  const response = await fetch(`http://127.0.0.1:${server.address().port}/`);

  assert.equal(response.status, 200);
  assert.equal(response.headers.get('content-type'), 'text/plain; charset=utf-8');
  assert.equal(await response.text(), 'hello world');
});
