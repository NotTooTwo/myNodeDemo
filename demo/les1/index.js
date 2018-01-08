const http = require('http');
const otherFun = require('./other/otherFun');
const user = require('./other/user.js')
var Teacher = require('./other/teacher.js')

var count = 0;
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'})
	if(req.url!=='/favicon.ico'){
		var User=user.user;
		var myUser =new User('butaier',998,22);
		myUser.enter();
		var teacher = new Teacher('butaier',998,22);
		teacher.teach(res);
		res.end();
	}else{
		res.end();	
	}
}).listen(8888);
console.log('server is running at http://127.0.0.1:8888');
function fun1(res){
	console.log('fun1 is running')
	// res.write('this is fun1')
}