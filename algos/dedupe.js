const dedupe = (str) => {
    const letters = {};
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        if(!letters[str[i]]){
            console.log(`found new letter: ${str[i]}`);
            newStr = str[i] + newStr;
            letters[str[i]] = true;
        }
        else{
            console.log(`found old letter: ${str[i]}`);
        }
    }
    console.log(letters);
    return newStr;
}

console.log(dedupe("Snaps! crackles! pops!"));