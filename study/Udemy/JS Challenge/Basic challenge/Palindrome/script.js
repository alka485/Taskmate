function isPalindrome (str) {

    const reversedStr = str.split('').reverse().join("");
    //console.log(reversedStr);

    if(reversedStr === str) {
        console.log("palindrome");
    } else {
        console.log("not palindrome");
    }



}

isPalindrome ("madam");