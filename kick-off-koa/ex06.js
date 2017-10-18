const Koa = require('koa');
const app = new Koa();

const responseTime = async (ctx, next) => {
  const requestTime = new Date();
  await next();
  ctx.set('X-Response-Time', new Date() - requestTime);
};

const upperCase = async (ctx, next) => {
  await next();
  ctx.body = ctx.body.toUpperCase();
};

app.use(responseTime);
app.use(upperCase);
app.use(async (ctx) => {
  ctx.body = 'hello koa';
});

app.listen(process.argv[2]);
