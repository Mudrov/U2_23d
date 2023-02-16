"use strict"
let nL = '';
const length = 10;

for (let i = 1; i < length; i++){
    
    for(let j = 0; j < i; j++){
        nL += "*";
    }

    nL = '\n';
}
console.log(nL);