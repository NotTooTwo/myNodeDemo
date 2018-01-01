
function user (id,name,age) {
	// body... 
	this.id=id;
	this.name=name;
	this.age=age;
	this.enter=function(){
		console.log(this.name+this.id +this.age+'come in room')
	}
}
module.exports={
	user:user
}