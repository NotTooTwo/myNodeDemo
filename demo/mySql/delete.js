var mysql  = require('mysql');  

var connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  port     : '3306',
	  user     : 'root',
	  password : '',
	  database : 'nodesample'
	});

connection.connect();

var  userDelSql = 'DELETE FROM userinfo';
//删
connection.query(userDelSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        

       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();

