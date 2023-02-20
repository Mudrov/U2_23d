"use strict"
//et nL = '';
//const length = 10;

//for (let i = 1; i < length; i++){
//    
//    for(let j = 0; j < i; j++){
//        nL += "--";
//    }

//  nL = '\n';
//    console.log(nL);
//}
//console.log(nL);
//for (let i = 5; i <= 10; i++){
  //  console.log(i);
//}

//for (let i =20; i > 10; i--){
//    console.log(i);
//    if (i == 13) {
//        break;
//    }
//}
  
/* for (let i = 2; i<=10; i++){
    if (i%2 !== 0){
        continue;
    }
    console.log("i=", i);
} */

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}
