var b=10;
console.log(b);
//function
//1.Name function
function namefun(){
    console.log("namefunction called");
}
namefun();
//2.function expression
var funcexp = function(){
    console.log("function expression");
}
funcexp();
//3.Arrow funtion(E56)
let arrow = ()=>{
    console.log("Arrow Function");
}
arrow();
//4.CallBack Funtion and Iife(Identicaaly invaloed function expression)
()=>{
    
}