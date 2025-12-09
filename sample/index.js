// var b=10;
// console.log(b);
//function
//1.Name function
// function namefun(){
//     console.log("namefunction called");
// }
// namefun();
//2.function expression
// var funcexp = function(){
//     console.log("function expression");
// }
// funcexp();
//3.Arrow funtion(E56)
// let arrow = ()=>{
//     console.log("Arrow Function");
// }
// arrow();
//4.Callback Function and 5.IIFE(Immediately Invoked Function Expression)

// (()=>{
//     console.log("Callback and IIFE function called");
// })();

//program to add two numbers
// var a = false;

// const addTwoNumbers = (parameter1 ,parameter2)=>{
//     console.log(parameter1,parameter2);

//     let num1 = parameter1 || 10;
//     let num2 = parameter2 || 20;
//     let sum = num1 + num2;
//     console.log("The sum of two numbers is: ",sum);

// };
// addTwoNumbers(10,20);
// addTwoNumbers(890,28);
// addTwoNumbers(5690,54);
// addTwoNumbers();
// console.log(typeof(a))
 

let arr = [1,2,3,4,5];
//for loop
// for(let i=0;i<arr.length;i++){
//     console.log(i,arr[i]);
// }
//for Each
// arr.forEach((element,index)=>{
//     console.log(element,index);
// });

// let aa = arr.map((el,ind)=>{
//     return el+ind;
// });
// console.log(aa);

// let aa2 = arr.map((el,ind) => el*ind);
// console.log(aa2)

//filter:truthy Value
// let b = arr.filter((el,ind) => {
//     return ind>2;
// });
// console.log(b);

// reduce: return single value,k
//  let c = arr.reduce((acc,el,ind) => {
//     console.log(acc,el);
//     return acc + el;

//  },200);
//  console.log(c);
// let c = arr.filter((el) => {
//     return el.id % 2 == 0;
// });

