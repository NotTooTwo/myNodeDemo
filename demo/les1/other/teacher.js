var User = require('./user');
function teacher (id,name,age) {
	// body... 
	User.user.apply(this,[id,name,age])
	this.teach = function(res){
		res.write(this.name+' is teaching')
	}
}
module.exports=teacher;