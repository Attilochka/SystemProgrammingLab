//Задание 1
/*
const arr = [1, 6, -1, 22, 13];
console.log(Math.min(...arr))
console.log(Math.max(...arr))
*/
//Задание 2
//№1
/*
const str = "!тевирП";
console.log(str.split('').reverse().join(''))
*/
//№2
/*
const str = prompt()
console.log(str.split('').reverse().join(''))
*/
//Задание 3
/*
let arr = [3, 5, 8, 13, 21, 42];
let sumSqrt = arr.reduce((accum, current)=> {
	if(current%2 == 0){
		return accum + current*current
	}
	return accum
},0)
console.log(sumSqrt)
*/
//Задание 4
/*
function anagram(strOne, strTwo) {
	strOne = strOne.toLowerCase()
	strTwo = strTwo.toLowerCase()
	let sortStrOne = strOne.split('').sort().join()
	let sortStrTwo = strTwo.split('').sort().join()
	return sortStrOne == sortStrTwo
}
console.log(anagram("Лунь", "нуль")) // true
console.log(anagram("Лунь", "ноль")) // false
*/
//Задание 5
/*
function palindrome(str){
	str = str.toLowerCase()
	let newStr = str.replaceAll(' ','')
	str = str.replaceAll(' ','')
	return str === newStr.split('').reverse().join('')
}
console.log(palindrome("Не гни папин ген")) // true
console.log(palindrome("123")) // false)
*/
//Задание 6
/*
function Fibonacci(n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	return Fibonacci(n - 1) + Fibonacci(n - 2);
}
let n = 0
let timer = setInterval(()=> {
		console.log(Fibonacci(n))
		n++
	},1000)
*/
//Задание 7
/*
function delay(n) {
	return new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
		}, n * 1000);
	});
}
*/
//Задание 8
/*
function intersect(arrOne, arrTwo) {
	let arrTemp = []
	for (let i = 0; i < arrOne.length; i++) {
		let current = arrOne[i]
		if (arrTwo.includes(current)) {
			arrTemp.push(current)
		}
	}
	return arrTemp
}
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [4, 5, 6, 7, 8]
let result = intersect(arr1, arr2)
console.log(result)
//Задание 9
*/
//Задание 10
/*
let i;
for(i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Код выводит 4 
// Исправлено : 
for(let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
*/