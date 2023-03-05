// These are the code for rotating the array with O(n) and O(1)  
/////////////////////////// O(n) approach  //////////////////////////////////////
// A = [1,2,3,4,5]
// shift elements by some value k 
// e.g., let k == 2
// on first rotation [5,1,2,3,4]
// on second rotation  [4,5,1,2,3] <-- the result/answer

// function rotateArray(A,n,k) {
  

//     k = k % n;  

//     for(i = 0; i < n ; i++){
//        if (i < k) {
//           console.log(A[n+i-k]);  // these are the rightmost elements 
//        }
//        else{
//          console.log(A[i-k]);  // these are the 
//        }
//     }
    
// }

// const A = [1,2,3,4,5];
// rotateArray(A,A.length,1);


////////////////////////////// Another approach which is more optimal O(1) //////////////////////////

// Algo
// reverse the whole arrray 
// reverse the array from 0 to k 
// reverse the array of remaining elements that is from k to A.length-1


// function rotateArray(A,n,k) {

    
//     k = k % n; // rotation factor 

//     // reversing the whole array 
//     var l = 0;
//     var r = n-1;
//     while(l < r){
//         let temp = A[l];
//         A[l] = A[r];
//         A[r] = temp; 
//         l += 1;
//         r -= 1;
//     }

//     // reversing the first k elements 
//     var l = 0;
//     var r = k-1;
//     while(l < r){
//         let temp = A[l];
//         A[l] = A[r];
//         A[r] = temp; 
//         l += 1;
//         r -= 1;
//     }

//     // reversing the remaining elements 
//     var l = k; 
//     var r = n-1;
//     while(l < r){
//         let temp = A[l];
//         A[l] = A[r];
//         A[r] = temp; 
//         l += 1;
//         r -= 1;
//     }

//     return A;

// }

// const A = [1,2,3,4,5];
// const result = rotateArray(A,A.length,2);
// console.log(result);