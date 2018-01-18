var mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
  host     : '127.0.0.1',
  post     : '3306',
  user     : 'root',
  password : '',
  database : 'nodesample'

});

//监听connection事件
pool.on('connection', function(connection) {  
    connection.query('SET SESSION auto_increment_increment=1'); 
    console.log('连接池说：有一个链接进来了~')
});

// 连接池可以直接使用，也可以共享一个连接或管理多个连接（引用官方示例）

// 直接使用 异步
// pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });

//共享
pool.getConnection(function(err, connection) {
  if (err) throw err;
  // connected! (unless `err` is set)
  connection.query( 'SELECT * FROM userinfo;', function(err, result) {
        console.log(result);
        connection.release();
    });

    connection.query( 'SELECT * FROM userinfo;', function(err, result) {
        // return
        console.log(result);
        connection.release();

    });
    connection.query( 'SELECT * FROM userinfo;', function(err, result) {
        // return
        console.log(result);
        // connection.release();

    });
});
// 其它连接池配置选项

// 　　waitForConnections

//  　　当连接池没有连接或超出最大限制时，设置为true且会把连接放入队列，设置为false会返回error

// 　　connectionLimit

//  　　连接数限制，默认：10

// 　　queueLimit

//  　　最大连接请求队列限制，设置为0表示不限制，默认：0

// 　　释放

// 　　调用connection.release()方法，会把连接放回连接池，等待其它使用者使用!