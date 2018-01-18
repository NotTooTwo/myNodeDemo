var mysql = require('mysql');
var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  port     : '3306',
	  user     : 'root',
	  password : '',
	  database : 'nodesample'
	});
connection.connect();

var userModSql = 'UPDATE userinfo set UserName = ?,UserPass = ? WHERE Id =?';
var userModSql_Params = ['cyx125','224',1];

connection.query(userModSql,userModSql_Params,function(err,res){
	if(err){
		console.log('[UPDATA ERROR] - ',err);
		return;
	}
	console.log('------------------UPDATE------------------')
	console.log('UPDATE :',res);
	console.log('------------------------------------------')
})