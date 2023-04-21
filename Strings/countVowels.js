// finding vowels in a string
// A = 65 ----- Z = 90
// a = 97 ----- z = 122

let b = 'Hubert Blaine Wolfe­schlegel­stein­hausen­berger­dorff';
let vCount = 0;
let cCount = 0;

// Iterate through the string

for(let i = 0; i < b.length; i++){
    if(b[i] == 'a' || b[i] == 'e' ||  b[i] == 'i' ||  b[i] == 'o'|| b[i] == 'u' ||
       b[i] == 'A' || b[i] == 'E' ||  b[i] == 'I' ||  b[i] == 'O'|| b[i] == 'U' 
    ){
          vCount++;
    }else if( b[i] >= 'a' && b[i] <= 'z' || b[i] >= 'A' && b[i] <= 'Z'){
         cCount++;
    }
}

console.log("Total vowels in b are: " + vCount);

console.log("Total consonants in b are: " + cCount);


