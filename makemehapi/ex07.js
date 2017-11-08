const path = require('path');
const Hapi = require('hapi');
const Vision = require('vision');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.register(Vision, error => {
  if (error) throw error;
});

server.views({
  engines: {
    html: require('handlebars'),
  },
  path: path.join(__dirname, 'templates'),
  helpersPath: path.join(__dirname, 'helpers'),
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index-helper.html',
  },
});

server.start(error => {
  if (error) throw error;
  console.log('Server running at: ', server.info.url);
});
