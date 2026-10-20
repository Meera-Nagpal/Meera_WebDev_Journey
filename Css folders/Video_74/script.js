let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    // alert("I was clicked.Yayy!!")
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked </b> Enjoy your click!"
})
document.querySelector(".child").addEventListener("click",()=> {
    alert("Dont hack us by clicking right on your mouse!!")
})
function getRandomcolor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
setInterval(()=>{ 
document.querySelector(".child").style.background=getRandomcolor()},1000);