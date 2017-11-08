const fs = require('fs');
const path = require('path');
const Hapi = require('hapi');
const rot13 = require('rot13-transform');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    const responseStream = fs.createReadStream(path.join(__dirname, 'rot.txt'))
      .pipe(rot13());
    reply(responseStream);
  },
});

server.start(error => {
  if (error) throw error;
  console.log('Server running at: ', server.info.url);
});
