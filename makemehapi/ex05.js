const path = require('path');
const Hapi = require('hapi');
const Vision = require('Vision');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.register(Vision, (error) => {
  if (error) {
    throw error;
  }
});

server.views({
  engines: {
    html: require('handlebars'),
  },
  path: path.join(__dirname, 'templates'),
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index.html',
  },
});

server.start(error => {
  if (error) throw error;
  console.log('Server running at: ', server.info.url);
});
