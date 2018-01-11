var fn_index = async (ctx , next) => {
	ctx.response.body =`<h1>Index</h1>
		<form action="/signin" method="post">
			<p>Name: <input type="text" name="name" value=""/></p>
			<p>Password: <input type="password" name="password" value=""/></p>
			<p><input type="submit" value="submit"/></p>
		</form>`;
}

var fn_signin = async (ctx , next) => {
	var name = ctx.request.body.name ||'',
		password = ctx.request.body.password || '';
	if(name === 'koa' && password === '12345'){
		// ctx.response.body = `<h1> welcome , ${name}</h1>`;
		ctx.render('sigin-ok.html',{
			title:'Sign In Ok',
			name:'Mr Node'
		})
	}else{
		// ctx.response.body = `<h1>login failed!</h1>
			// <p><a href="/">try again</a></p>`
		ctx.render('signin-failed.html',{
			title:'Sign In Failed'
		})
	}
}

module.exports = {
	'GET /':fn_index,
	'POST /signin':fn_signin
}