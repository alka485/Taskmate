function removeDuplicates (arr) {

    let uniqueArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }

    }

    console.log(uniqueArr);

}

removeDuplicates([1,3,1,1,2])