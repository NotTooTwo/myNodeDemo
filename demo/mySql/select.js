var mysql = require('mysql');
var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  port     : '3306',
	  user     : 'root',
	  password : '',
	  database : 'nodesample'
	});
connection.connect();

var userGetSql = 'SELECT * FROM userinfo';

connection.query(userGetSql,function(err,res){
	if(err){
		console.log('[SELECT ERROR] - ',err);
		return;
	}
	console.log('------------------SELECT------------------')
	console.log('SELECT :',res);
	console.log('------------------------------------------')
})