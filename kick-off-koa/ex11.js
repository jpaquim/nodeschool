const Koa = require('koa');
const parse = require('co-body');
const session = require('koa-session');

const form = `
<form action="/login" method="POST">
  <input name="username" type="text" value="username">
  <input name="password" type="password" placeholder="The password is">
  <button type="submit">Submit</button>
</form>
`;

const app = new Koa();

app.keys = ['secret1', 'secret2', 'secret3'];

app.use(session(app));

app.use(async (ctx, next) => {
  if (ctx.path !== '/') return next();
  if (!ctx.session.authenticated) return ctx.status = 401;
  ctx.body = 'hello world';
});

app.use(async (ctx, next) => {
  if (ctx.path !== '/login') return next();
  if (ctx.method === 'GET') return ctx.body = form;
  if (ctx.method !== 'POST') return next();
  const { username, password } = await parse(ctx);
  if (username !== 'username'
    || password !== 'password') return ctx.status = 400;
  ctx.session.authenticated = true;
  ctx.redirect('/');
});

app.use(async (ctx, next) => {
  if (ctx.path !== '/logout') return next();
  ctx.session.authenticated = false;
  ctx.redirect('/login');
});

app.listen(process.argv[2]);
