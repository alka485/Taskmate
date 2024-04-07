function titleCase (str) {

    let words = str.toLowerCase().split(" ");
    console.log(words);

    for(let i = 0; i < words.length; i++) {

        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

    }

    console.log(words.join(' '));

}

titleCase("hello alka")