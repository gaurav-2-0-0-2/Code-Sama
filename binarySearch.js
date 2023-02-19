// Iterative Approach 

// function binarySearch(arr, l, h, key) {

// 	while (l <= h) {
// 		x = (l + h) / 2
// 		mid = Math.floor(x)

// 		if (key == arr[mid]) {
// 			return mid
// 		}
// 		else if (key < arr[mid]) {
// 			h = mid - 1
// 		}
// 		else {
// 			l = mid + 1
// 		}
// 	}
// 	return -1;
// }

// A = [2, 3, 4, 5, 6, 7, 8, 12, 45, 67, 90, 234, 565]
// // console.log(A.length);
// result = binarySearch (A, 0, (A.length)-1, 17)

// if (result == -1) {
// 	console.log("Element not found")
// }
// else {
// 	console.log("Element found")
// }


// Recursive Binary Search 
function rBinSrch(A, l, h, key) {



	if (l <= h) {
		x = (l + h) / 2;
		mid = Math.floor(x);
		if (key == A[mid]) {
			return mid;
		}
		else if (key < A[mid]) {
			return rBinSrch(A, l, mid - 1, key);
		}
		else {
			return rBinSrch(A, mid + 1, h, key);
		}
	} else {
		return -1;
	}



}

A = [1, 3, 5, 6, 7, 56, 78, 89, 98, 234, 2367, 2990]

const result = rBinSrch(A, 0, (A.length) - 1, 123)


if (result == -1) {
	console.log("Element not found");
} else {
	console.log("Element is here");
}