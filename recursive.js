var result = 0;

function recursive(arr) {

    if(arr.length > 0){
        // console.log(arr);
        result += arr[arr.length-1];
        recursive(arr.splice(0,arr.length-1));
    }
 return result;
};


console.log(recursive([10, 6, 8, 3, 7]));