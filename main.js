// function printTimeout(str, n) { 

// 	setTimeout(function(){
// 		console.log(str)
// 	}, n * 1000);
// }


// printTimeout('hello', 1);










// function sumAll(n) { 
// 	if( n != 1) {
// 		return n + sumAll(n-1)
// 	} else {
// 		return n;
// 	}

// }














// function bombTimer(str, time) { 

// 	let currentTime = time;
// 	setInterval(function(){
// 		if(currentTime > 0){
// 			console.log(currentTime);
// 			currentTime--;
// 		} else {
// 			console.log(str) ;
// 		}
// 	}, 1000);


// }


// bombTimer('Boooom', 3);











// function factorial(n) { 
// 	if( n !== 1 ){
// 		return n * factorial((n) - 1);
// 	} else {
// 		return n;
// 	}
// }







// function bombTimer(str, time) { 

// 	if(time < 1){
// 		console.log(str);
// 	} else {
// 		setTimeout(function(){
// 			console.log(time);
// 			bombTimer(str, (time - 1));
// 		}, 1000)
// 	}
	
// } 

// bombTimer('ssdsg', 5);










// function filterNumbers(arr, maxNumber){
// 	let newArr = [];
// 	for (var i = 0; i < arr.length ; i++) {
// 		if(arr[i] < maxNumber){
// 			newArr.push(arr[i]);
// 		}
// 	}

// filterNumbers([4,5,1], 4);