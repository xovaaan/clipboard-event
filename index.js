let input = document.querySelector("input");
let p = document.querySelector("p");
input.addEventListener("copy", function(){
    p.innerHTML = ("you have copied");
    console.log("you have copied");
})
input.addEventListener("cut", function(){
    console.log("you have cut a text");
})
input.addEventListener("paste", function(){
    console.log("you have pasted");
})