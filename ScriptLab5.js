// Задание 1
//№1
/*
function counter(n) {
	let timer = setInterval(()=> {
		if(n>-1){
			console.log(n)
			n--
		}
		else {
			clearInterval(timer)
		}
		}, 1000)
}
counter(10)
*/
//№2
/*
function createCounter(n) {
	let counter = n;
	let timer;
	const start = () => {
		clearInterval(timer);
		timer = setInterval(() => {
		console.log(counter);
		counter--;
		}, 1000);
	};
	const pause = () => {
		clearInterval(timer);
	};
	const stop = () => {
		clearInterval(timer);
		counter = n;
	};
	return {
		start,
		pause,
		stop
	};
}
const counter = createCounter(10);
counter.start();
*/
//Задание 2
//№1
/*
function counter(n) {
	while(n>0){
		console.log(n)
		n--
		delay(1000) //delay is not defined :)
	}	
}
counter(10)
*/
// Задание 3 
//Пока оставляю
/*
