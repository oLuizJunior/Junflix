// eslint-disable-next-line no-undef
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});