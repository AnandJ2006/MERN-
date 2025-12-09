// // //1. Tag Selector
// // let heading1 = document.getElementsByTagName("h1");
// // //HTML Collection Array 
// // console.log(heading1[1]);

// // //2.Class Selector
// // let cl = document.getElementsByClassName("a");
// // //HTML Collection Array
// // console.log(cl[1]);   

// // //3. ID Selector
// // let idd = document.getElementById("b");
// // //it will return single element and the first element
// // console.log(idd);

// // //4. QuerySelector ( it works on all the three selectors)
// // let sel = document.querySelector("#b");
// // //it will return single element and the first element
// // console.log(sel);

// // //5. Query Selector All
// // let d = document.querySelectorAll("#b");
// // //NodeList Array
// // console.log(d);

// // // Read Operation 
// // let head = document.querySelector("p");
// // console.log(head.textContent);  

// // //write operation
// // let div = document.querySelector("div");
// // div.innerHTML = "<p>Hello From anand</p>";
// // div.textContent="<p>Hello  From anand</p>";
// // console.log(div.textContent);
// // console.log(div.innerHTML);


// //add,remove,toggle class
// let head = document.querySelector("h1");
// console.log(head);

// head.classList.add("color");
// head.classList.remove("border")
// head.classList.toggle("background");

// //styling
// let p=document.querySelector("p");
// p.style.color ="red";
// p.style.backgroundColor = "green";

// //creating element
// let ul = document.createElement("ul");
// let lii = document.createElement("li");
// lii.textContent = " item 1";
// let li1 = document.createElement("li");
// li1.textContent ="item 2";
// ul.appendChild(lii);
// ul.appendChild(li1);

// document.body.appendChild(ul);
// let arr = ["Apple","Banana","Mango"];
// arr.forEach((element)=>{
//     let lo = document.createElement("li");
//     lo.textContent = element;
//     ul.appendChild(lo);
// });
let a=10;
console.log(this.a);

var aw = {
    name:"Amrit",
    b:20,
};

console.log(this);
var funf=function(aa,jk){
    console.log(this.name,aa,jk);
};

//funf(300);

//can apply bind

//bind
let boundedfn=funf.bind(Object,500,"kl");
boundedfn();
//return a new function

//call
funf.call(Object,400,900);

//apply
funf.apply(Object,[600,900]);
