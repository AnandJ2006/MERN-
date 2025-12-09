let changetxt = document.querySelector(".changetxt");
let changebgcob = document.querySelector(".changebgcob");
let hidebox = document.querySelector(".hideBox");
let showbox = document.querySelector(".showbox");

changetxt.addEventListener("click",()=>{
    box.textContent = "Text Has Been Changed";
}) ;         
changebgcob.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = randomColor;
});
hidebox.addEventListener("click",()=>{
    box.style.display = "none";
});
showbox.addEventListener("click",()=>{
    box.style.display="block";
});
let ul = document.createElement("#list");
let li=document.createElement("li");
li.textContent = document.getElementById("#itemInput");
ul.appendChild(li);


