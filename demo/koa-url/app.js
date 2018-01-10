const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const controller = require('./controller.js');

var app = new Koa()

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(bodyParser());
app.use(controller())
app.listen(8080)
console.log('app is listening at post 8080');