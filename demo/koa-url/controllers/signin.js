// sign in:
module.exports = {
    'POST /signin': async (ctx, next) => {
        var
            mysql =require('mysql'),
            email = ctx.request.body.email || '',
            password = ctx.request.body.password || '',
            pool  = mysql.createPool({
              host     : '127.0.0.1',
              post     : '3306',
              user     : 'root',
              password : '',
              database : 'nodesample'
            });
        var rightPassword = pool.getConnection(function(err,connection){
            if(err){
                console.log(err)
                return
                // ctx.response.status = 500;
            }
            var sql = 'SELECT UserPass FROM userinfo WHERE UserName = ?';
            var data = [email];
            connection.query(sql ,data , function(err, result) {
                console.log("result:",result[0].UserPass);
                connection.release();
                if (password === result[0].UserPass) {
                        console.log('signin ok!');
                        var data={
                            title: 'Sign In OK',
                            name: email
                        };
                        ctx.render('signin-ok.html', {data:data});
                    } else {
                        console.log('signin failed!');
                        ctx.render('signin-failed.html', {
                            title: 'Sign In Failed'
                        });
                    }
            });   
        })
        
    }
};