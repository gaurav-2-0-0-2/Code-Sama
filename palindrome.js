// if 121 --> 121 then 121 is a palindrome

// function palindrome(x) {

//     let reversedNum;

//     for( let i = x.length - 1; i >= 0; i-- ){
//         reversedNum += x[i];
//     }

//     return reversedNum;
// }


// console.log(palindrome(123))


var isPalindrome = function(x) {
    if ( x < 0 ) 
      return false;
    
    let div = 1 
    while (x >= 10 * div){
        div = div * 10;
    }

    while (x){
        let right = x % 10;
        let left = Math.floor(x / div);

        if(right != left){
            return false;
        }
        
        x = Math.floor((x % div) / 10);
        div = div / 100
        
    }

    return true;
};