//Write a program to print first 10 fibnocci numbers

// var fibo=[0,1];
// for(var i=2;i<=10;i++){
//     fibo=fibo[i-1]+fibo[i-2];
//     console.log(fibo);
// }

let a=0;
let b=1;
let next;
for (var i=0;i<10;i++){
    next=a+b;
    
    a=b;
    b=next;
    console.log(a);
}