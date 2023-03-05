
function mergingOfArray(A,B,C){
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < A.length && j < B.length){
            if (A[i] < B[j]) {
                C[k++] = A[i++];
                console.log(A);
            }else{
                C[k++] = B[j++];
                console 
            }
    }
    return C;
}


const A = [1,2,3,4,5];
const B = [6,7,8,9,10];
const C = [];

const result = mergingOfArray(A,B,C);
console.log(result);