function otherFun (res) {
	// body... 
	res.write('this is otherFun');
	console.log('this is otherFun');
}
module.exports ={
	otherFun:otherFun
};