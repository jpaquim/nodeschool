const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.route({
  method: 'POST',
  path: '/upload',
  handler(request, reply) {
    let fileData = '';
    request.payload.file.on('data', data => fileData += data);
    request.payload.file.on('end', () => {
      reply(JSON.stringify({
        description: request.payload.description,
        file: {
          data: fileData,
          filename: request.payload.file.hapi.filename,
          headers: request.payload.file.hapi.headers,
        },
      }));
    });
  },
  config: {
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data',
    },
  },
})

server.start(error => {
  if (error) throw error;
});
