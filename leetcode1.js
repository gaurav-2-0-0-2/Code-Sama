
// Finding duplicate elements in an array
var findDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if(nums[i]==nums[j]){
               return true;
            }
            
        }
        
    }return false;
}



