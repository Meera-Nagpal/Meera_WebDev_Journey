console.log("Scripting a file...")

let boxes=document.querySelector(".container").children
// let boxes=document.getElementsByClassName(".box")

function getRandomcolor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{
   e.style.backgroundColor=getRandomcolor();
   e.style.color=getRandomcolor();
})
