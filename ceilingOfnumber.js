// let low = 0;
// let high = 5;
// x = (low + high) / 2;
// mid = Math.floor(x);
// Smallest number which is greater than or equal to target is known as a ceiling number.
function ceilingOfNumber(arr, l, h, key) {


    while (l <= h) {
        x = (l + h) / 2;
        mid = Math.floor(x);
        if (key == A[mid]) {
            return mid;
        } else if (key > A[mid]) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
    return arr[l];

}

A = [2,3,5,9,14,16,18];
result = ceilingOfNumber(A, 0, (A.length)-1, 15);
console.log(result);

