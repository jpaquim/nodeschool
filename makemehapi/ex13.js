const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.register(require('hapi-auth-basic'), err => {
  server.auth.strategy('simple', 'basic', {
    validateFunc(request, username, password, callback) {
      let isValid = false;
      if (username === 'hapi' && password === 'auth') {
        isValid = true;
      }
      return callback(null, isValid, { username });
    },
  });
  server.route({
    method: 'GET',
    path: '/',
    config: {
      auth: 'simple',
      handler(request, reply) {
        reply();
      },
    },
  })
});

server.start(error => {
  if (error) throw error;
});
