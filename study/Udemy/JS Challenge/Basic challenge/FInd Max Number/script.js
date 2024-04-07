function findMaxNumber (array) {
     //console.log(array);

     let max = array[0];

     for(let i = 1; i < array.length; i++) {

        if(array[i] > max) {

            max = array[i];

           // console.log(max);

        }

     }
     console.log(max);



}

findMaxNumber([1,10,3,4,5]);