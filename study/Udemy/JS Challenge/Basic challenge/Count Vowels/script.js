function countVowels(str) {

   let newStr = str.toLowerCase();

   let count = 0;

   
    for (let i = 0; i < newStr.length; i++) {

        const char = newStr[i];

        if (
            char === 'a' || char === 'e' || char === 'i' ||
            char === 'o' || char === 'u') 
        {
            count++;
        }

       

    }

    console.log(count);


}

countVowels('why');