const http = require('http');
const url = require('url');
var Router = require('./router')

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'})
	if(req.url!=='/favicon.ico'){
		var pathname = url.parse(req.url).pathname
		pathname = pathname.replace(/\//,'')
		console.log(pathname)
		var myRouter = new Router(res,req);
		myRouter.jump(pathname);
		res.end();
	}else{
		res.end();	
	}
}).listen(8888);
console.log('server is running at http://127.0.0.1:8888');
