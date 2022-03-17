//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
	let newStr = ''
	for(i = 0, counter = 1; i < str.length -1; i++){
		// str[i]===str[i+1]? counter++ : newStr += str[i] + counter;
		if(str[i]===str[i+1]){
			counter++
		} else {
			newStr += str[i] + counter;
			counter --;
		}
	}
	return newStr;
}

console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffgggg"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
	
}

// console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));

// console.log(parseInt("432"));
// console.log(parseInt2("432"));