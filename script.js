let btn = document.getElementById("button")
let navcontents = document.getElementById("navcontents")
let xmark = document.getElementById("xmark")

btn.addEventListener("click",()=> {
    navcontents.classList.add("move")
    btn.classList.add("scale")
})

xmark.addEventListener("click",()=>{
    navcontents.classList.remove("move")
    xmark.classList.toggle("rotate")
    btn.classList.remove("scale")
})