const path = require('path');
const Hapi = require('hapi');
const H2o2 = require('h2o2');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.register(H2o2, (error) => {
  if (error) {
    throw error;
  }
});

server.route({
  method: 'GET',
  path: '/proxy',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: 65535,
    },
  },
});

server.start(error => {
  if (error) throw error;
  console.log('Server running at: ', server.info.url);
});
