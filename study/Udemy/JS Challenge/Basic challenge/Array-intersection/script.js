function arrayIntersection (arr1 , arr2) {

    let arr3 =[];

    for(let i = 0 ; i < arr1.length ; i++) {
        if(arr2.includes(arr1[i])){
            arr3.push(arr1[i]);
        }
    }

    console.log(arr3);

}

arrayIntersection([1,2,3,4,5],[5,4,3,2,1]);