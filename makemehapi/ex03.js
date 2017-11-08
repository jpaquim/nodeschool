const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();

server.register(Inert, error => {
  if (error) throw error;
})

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    file: path.join(__dirname, 'index.html'),
  },
});

server.start(error => {
  if (error) throw error;
  console.log('Server running at: ', server.info.url);
});
