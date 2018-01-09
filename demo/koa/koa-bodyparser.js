const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
// 相当于：
// const fn_router = require('koa-router');
// const router = fn_router();

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
			<form action="/sigin" method='post'>
				<p>Name: <input type="text" name='name' value='koa' /></p>
				<p>Password: <input type="password" name='password'/></p>
				<p><input type="submit" value='submit' /></p>
			</form>
    	`;
});
router.post('/sigin',async (ctx,next)=>{
	var name = ctx.request.body.name || '',
		password = ctx.request.body.password || '';
	console.log(`账号为：${name}，密码为：${password}`)
	console.log("name==='koa'" + (name==='koa'))
	console.log("'password'==='12345'" +(password==='12345'))
	if(name==='koa' && password==='12345'){
		ctx.response.body = `<h1>welcom,${name}</h1>`;
	}else{
		ctx.response.body = `<h1>login failed,<a href="/">重试</a></h1>`;
	}
})

// add router middleware:
app.use(bodyParser());
app.use(router.routes());


app.listen(8080);
console.log('app is listening at post 8080');