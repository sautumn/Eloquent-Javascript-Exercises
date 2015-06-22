function range(start,end,step){
	var numbers = [];
	var increm = step || 1;
	for (var i=start; i<=end; i+=increm){
		numbers.push(i);
	}
	console.log(numbers);
	sum(numbers);
}

function sum(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	console.log('Sum =',sum);
}

range(1,10);
range(1,10,2);
