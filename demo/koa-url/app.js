const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const controller = require('./controller.js');
const templating = require('./templating');
var app = new Koa();

// 开发环境判断
const isProduction = process.env.NODE_ENV === 'production';

// 记录URL以及页面执行时间：
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// 在开发的时候，环境变量应该设置为'development'，而部署到服务器时，环境变量应该设置为'production'
// 生产环境上必须配置环境变量NODE_ENV = 'production'，而开发环境不需要配置，实际上NODE_ENV可能是undefined，所以判断的时候，不要用NODE_ENV === 'development'。
// 在生产环境下，静态文件是由部署在最前面的反向代理服务器（如Nginx）处理的，
// Node程序不需要处理静态文件。
// 而在开发环境下 koa能顺带处理静态文件，否则，就必须手动配置一个反向代理服务器，这样会导致开发环境非常复杂。
// 处理静态文件：
if (! isProduction) {
    let staticFiles = require('./static-files');
    console.log('引入static-files')
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// 解析post请求：
app.use(bodyParser());

// 使用Nunjcks：
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// 处理路由：
app.use(controller())

app.listen(8080)
console.log('app is listening at post 8080');