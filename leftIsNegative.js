// All the -ve numbers should be on the left side of the array 
// we are using two pointer approach 
// [-2,3,4,-1,-5,6,7,-9,-11]
// Algoithm /////////////////////////////////////////////////////
// i = 0, j = length-1
// while(i<j){
// while(A[i]<0){i++}
// while(A[j]>=0){j++}
// if(i<j){swap(A[i],A[j])}
// }

// Working Code ////////////////////////////////////////////////////////////////////
function leftIsNegative(arr,left,right){

     while(left <= right){
        
        if(A[left]<0 && A[right]<0){
            left++;
        }
        else if(arr[left] > 0 && arr[right] < 0){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        else if(A[left] >0 && A[right] >0){
          right--;
        }
        else{
            left++;
            right--;
        }
     }

     console.log(arr);
    
}

// function display(arr,n){
//     for (let i = 0; i < n ; i++) {
//         console.log(arr[i]);
//     }
// } 

const A = [-2,-12,3,4,5,-6,7,-14,8,9];
leftIsNegative(A,0,A.length-1);

// leftIsNegative(A,0,A.length-1);
// display(A,A.length);



