const Koa = require('koa');
const app = new Koa();

const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'internal server error';
  }
};

app.use(errorHandler);

app.use(async (ctx, next) => {
  if (ctx.path === '/error') throw new Error('oops');
  ctx.body = 'OK';
});

app.listen(process.argv[2]);
