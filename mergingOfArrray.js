// Merging two sorted arrays 
function mergingOfArray(A,B,C){
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < A.length && j < B.length){
            if (A[i] < B[j]) {  // comparing the values of arrays, smaller value gets copied in the C 
                C[k++] = A[i++];
            }else{
                C[k++] = B[j++];
                
            }
        }
        // copy the remaining elements 
            while(i < A.length){
                C[k++] = A[i++]
            }
            while(j < B.length){
                C[k++] = B[j++]
            }
   
    return C;
}


const A = [1,3,11,121,125];
const B = [2,5,9,10,12];
const C = [];

const result = mergingOfArray(A,B,C);
console.log(result);