const Hapi = require('hapi');
const Boom = require('boom');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.state('session', {
  path: '/',
  domain: 'localhost',
  encoding: 'base64json',
  ttl: 10,
  isHttpOnly: false,
  isSameSite: false,
  isSecure: false,
});

server.route({
  method: 'GET',
  path: '/set-cookie',
  handler(request, reply) {
    reply('success').state('session', { key: 'makemehapi' });
  },
  config: {
    state: {
      parse: true,
      failAction: 'log',
    },
  },
});

server.route({
  method: 'GET',
  path: '/check-cookie',
  handler(request, reply) {
    if (!request.state.session) {
      return reply(Boom.unauthorized('Missing authentication'));
    }
    reply({ user: 'hapi' });
  },
});

server.start(error => {
  if (error) throw error;
});
