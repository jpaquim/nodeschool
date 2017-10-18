const Koa = require('koa');
const app = new Koa();
const parse = require('co-body');

app.use(async (ctx, next) => {
  if (ctx.method !== 'POST' || ctx.path !== '/') return next();
  const body = await parse(ctx);
  if (!body.name) ctx.throw(400, '.name required');
  ctx.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);
