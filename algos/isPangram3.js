let LETTER_REGEX = /^[A-Za-z]$/; //regex to check if char is a letter

const isPangram = (str) => {
    let letters = {a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
    for(let i=0;i<str.length;i++){
        if(str[i].match(LETTER_REGEX)){
            letters[str[i].toLowerCase()] && delete letters[str[i].toLowerCase()];
        }
    }
    return (Object.keys(letters).length ? false : true);
}

const isPerfectPangram = (str) => {
    let letters = {a:1,b:1,c:1,d:1,e:1,f:1,g:1,h:1,i:1,j:1,k:1,l:1,m:1,n:1,o:1,p:1,q:1,r:1,s:1,t:1,u:1,v:1,w:1,x:1,y:1,z:1}
    for(let i=0;i<str.length;i++){
        if(str[i].match(LETTER_REGEX)){
            letters[str[i].toLowerCase()]===1 ? delete letters[str[i].toLowerCase()] : letters[str[i].toLowerCase()]=-1
        }
    }
    return (Object.keys(letters).length ? false : true);
}