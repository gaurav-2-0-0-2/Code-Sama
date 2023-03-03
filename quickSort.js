// this is binary search 

function binarySearch(A,left,right,key) {

    let x = (left + right) / 2;
    let mid = Math.floor(x);
    if(key == mid){
        return mid;
    }
    else if (key < mid){
       h = mid - 1; 
    }else {
        l = mid + 1;
    }
    
}