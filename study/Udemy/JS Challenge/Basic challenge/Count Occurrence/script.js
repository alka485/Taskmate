function countOccurrences(str , char) {
    let newStr = str.split('');
    let count = 0;
   for(let i = 0; i < newStr.length; i++) {
        if (newStr[i] === char){
            count++;
        } 

        //console.log(count);

    }

    console.log(count);

}

countOccurrences('hello','z');