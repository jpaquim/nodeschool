const Koa = require('koa');
const app = new Koa();

app.keys = ['secret', 'keys'];
app.use(async (ctx, next) => {
  const numViews = Number(ctx.cookies.get('view', { signed: true }) || 0) + 1;
  ctx.cookies.set('view', numViews, { signed: true });
  ctx.body = `${numViews} views`;
})

app.listen(process.argv[2]);
