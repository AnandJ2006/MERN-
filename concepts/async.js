// setTimeout(()=>{
//     console.log("SetTimeOut Function 1");
// },0);
// //callback fun and timer
// console.log("Hello World");

//callback Hell
//nested callbacks
// setTimeout(()=>{
//     console.log("SetTimeOut Function 2");
//     setTimeout(()=>{
//         console.log("SetTimeOut Function 3");
//         setTimeout(()=>{
//             console.log("SetTimeOut Function 4");
//             setTimeout(()=>{
//                 console.log("SetTimeOut Function 4");
//             },2000);
//         },2000);
//     },2000);
// },2000);

//promises
// 3 state
// 1.pending
// 2.fulfilled
// 3.rejected

let mypromise = new Promise((res,rej)=>{
    let marks = 70;
    if(marks>=60){
        res("Student is Passed");
    } else {
        rej("Student is Failed");
    }
});
// way to call a Promise
// .then and .catch
mypromise.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
});

//Async and await 
//no error handling 
let handlePromise = async()=>{

}
//Async with api
// let fetchData = () =>{
//     fetch("https://jsonplaceholder.typicode.com/todos")
//      .then((res)=>{
//         console.log(res);
//         return res.json();
//      })
//      .then((data)=>{
//         console.log("value is ",data);
//      })
//      .catch((err)=>{
//         console.log(err);
//      });
// };

let fetchData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
        const data =await response.json();
        localStorage.setItem("responseData",JSON.stringify(data));
        console.log("Value is",data);
    }catch(err){
        console.log(err);
    }
};
localDat=JSON.parse(localStorage.getItem("responceData"))|| [];

if(localDat.length <=0){
fetchData();
}

//  const pr1 = Promise.resolve('Hello World');
//  const pr2 = 10;
//  const pr3 = new Promise((res,rej)=>
//  setTimeout(resolve,2000,'Goodbye'));
//  Promise.all([pr1,pr2,pr3]).then((v)=>{
//      console.log(v);
//  });




