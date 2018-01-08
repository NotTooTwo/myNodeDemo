function router (res,req) {
	// body... 
	this.res=res;
	this.req=req;
	this.jump=function(path){
		console.log(path)
	}
}
module.exports = router;