const dev = true;
const port = 3000;

const express = require('express');
const app = express();
const { parse } = require('url');
const { handleRequest } = require('./handler');

app.get('/', async (req, res, next) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;
  try {
    const data = await handleRequest(query.url);
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(port, err => {
  if (err) throw err;

  console.log(`> Ready on http://localhost:${port} : ${dev ? 'dev' : 'prod'}`);
});
