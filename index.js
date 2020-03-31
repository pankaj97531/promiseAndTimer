//https://stackoverflow.com/questions/42352146/understanding-javascript-promise-used-with-settimeout-and-setinterval
var intervalID = 0;

/* var wait = 
    ms => new Promise(
        r => setTimeout(r, ms)
    );
 */
var wait=ms=>{
	return new Promise(function(res,rej){
		 setTimeout(res("bbbbbbb"), ms)
	})
} 
var repeat = function repeat(ms, func) {
  return new Promise(function (res, rej) {
    return intervalID = setInterval(func, ms), wait(ms).then(res=>{
		console.log(res);
	//	return res;
	});
  });
};

var myfunction = function myfunction() {
  return new Promise(function (r) {
    return r(console.log('repeating...',new Date()));
  });
  console.log("hhhhhhhhh");
};

var stopAfter5Secs = function stopAfter5Secs() {
  return new Promise(function (r) {
    return r(setTimeout(function () {
      clearInterval(intervalID);
      console.log('repeat end');
    }, 5000));
  });
};

repeat(1000,()=>Promise.all([myfunction()]) ) // 1000 miliseconds = 1 second
.then(stopAfter5Secs())  // starts timer to end repetitions
.then(console.log('repeat start'));