const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.route({
  method: 'GET',
  path: '/chickens/{breed}',
  handler() {},
  config: {
    validate: {
      params: {
        breed: Joi.string().required(),
      },
    },
  },
});

server.start(error => {
  if (error) throw error;
})
