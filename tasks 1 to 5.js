//Write  a program to check whether a number is plaindrome or not?(yazar)

//Write a program to  find numbers which are multiples of  both 5 and 25 between 1000 and 1500(Ayush)



for(let num=1000;num<1500;num++){
    if(num%5==0 && num%25==0){
        console.log(num);
    }
}

//Find the sum of even numbers within a range.(javed)

let sum=0;
for(let i=0;i<=10;i++){
    if(i%2==0){
     sum=sum+i;
    }
    
}
console.log(sum);


//Find the Factorial of a Number(prztly)

let num=5;
let fact=1;
let i=1;
while(i<=num){
   fact=fact*i;
    i++;

}
console.log(`factorial of ${num} is ${fact}`);

//Write a program which prints the multiples of 3 in between 0-100(ananthu)


for(m=0;m<=100;m++){
    if(m%3==0){
        console.log(m);
    }
}

