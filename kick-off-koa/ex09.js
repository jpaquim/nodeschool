const Koa = require('koa');
const session = require('koa-session');

const app = new Koa();

app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(async (ctx, next) => {
  const numViews = Number(ctx.session.numViews || 0) + 1;
  ctx.session.numViews = numViews;
  ctx.body = `${numViews} views`;
})

app.listen(process.argv[2]);
