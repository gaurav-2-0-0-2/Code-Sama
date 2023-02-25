function rotateArray(arr){
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i+1]
        arr[arr.length-1] = arr[0] 
    }
    return arr;
}

A = [2,3,4,5,6,7,8,9]
const result = rotateArray(A)
console.log(result);