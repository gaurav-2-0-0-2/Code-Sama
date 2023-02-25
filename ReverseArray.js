//  Reversing an array using two pointer this gives answer in O(n) running time 

function reverseArray(arr){
  let left = 0;
  let right = arr.length-1;
  while(left < right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left += 1;
    right -= 1;
  }
  return arr;
}

A = [2,3,4,5,6,7,8]
const result = reverseArray(A)
console.log(result);
