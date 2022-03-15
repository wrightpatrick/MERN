//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"


// const rotateString = (str, num) => {
// 	let newString = "";
// 	for (var i = 0; i < str.length; i++){
// 		newString = newString + str[(i + (str.length -num)) % str.length];
// 	}
// 	 return newString;
// }
const rotateString=(str,num) =>{
    var newStr=""
        var temp1 = str.slice(str.length-num+1)
        var temp2 = str.slice(0,str.length-num+1)
        str.slice(str.length-num+1)
        console.log(str)
        newStr= temp1.concat(temp2)
    return newStr
    }



// let testString = "012345";
// console.log(rotateString(testString, 3));
// let shoes = "Did I shine my shoes today?";
// console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
	if(str1.length === str2.length){
		for(i=0; i<str1.length; i++){
			if(rotateString(str1,i) === str2){
				return true
			}
		}
	}
	return false
};

rotateString("Hello my name is Patrick", 5);
console.log(rotateString("Hello my name is Patrick", 5));
console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));