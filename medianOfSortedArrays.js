function findMedianSortedArrays(nums1, nums2) {
    let nums3 = [];
    let n1 = nums1.length;
    let n2 = nums2.length;
    var i = 0,j = 0,k = 0;
    while(i < n1 && j < n2){
        if(nums1[i] < nums2[j]){
            nums3[k++] = nums1[i++];
        }else{
            nums3[k++] = nums2[j++];        }
    }
    while(i < n1){
        nums3[k++] = nums1[i++]
    }
    while(j < n2){
          nums3[k++] = nums2[j++];
    }

    let median;
    if(nums3.length % 2 === 0){
        let midIndex = nums3.length / 2;
        median = (nums3[midIndex] + nums3[midIndex-1]) / 2;
    }else{
        let midIndex = Math.floor(nums3.length / 2);
        median = nums3[midIndex];
    }

    return median;

    

};


A=[1,2];  
B=[3,4];
const result = findMedianSortedArrays(A,B);
console.log(result);
