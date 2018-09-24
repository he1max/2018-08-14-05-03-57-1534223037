module.exports = function main(a) {
	let sum=0;
	for(let i=0;i<a.length;i++){
		sum+=parseInt(a[i]);                    //字符串求和
	}
	return sum;
};
