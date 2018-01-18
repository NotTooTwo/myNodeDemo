var mysql = require('mysql');
var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  port     : '3306',
	  user     : 'root',
	  password : '',
	  database : 'nodesample'
	});
connection.connect();

var userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(2,?,?)';
var userAddSql_Params = ['NotTooTwo','125'];

connection.query(userAddSql,userAddSql_Params,function(err,res){
	if(err){
		console.log('[INSERT ERROR] - ',err);
		return;
	}
	console.log('------------------INSERT------------------')
	console.log('INSERT ID:',res);
	console.log('------------------------------------------')
})

// INSERT ID: OkPacket {
//   fieldCount: 0,
//   affectedRows: 1,//受影响的行数
//   insertId: 1,//插入的主键ID
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0 
// }
connection.end();