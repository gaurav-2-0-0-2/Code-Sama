// Biggest number which is smaller than or equal to target is floor number

function floorOfNumber(A, l, h, key) {




    while (l <= h) {

        let x = (l + h) / 2;
        mid = Math.floor(x);
        if (key == A[mid]) {
            return mid;
        }
        else if (key > A[mid]) {
            l = mid + 1;

        } else {
            h = mid - 1;
        }
    }
    return A[h];


}

A = [2, 3, 5, 9, 14, 16, 18];
result = floorOfNumber(A, 0, (A.length) - 1, 15);
console.log(result);