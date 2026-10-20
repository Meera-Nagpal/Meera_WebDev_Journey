let random=Math.random()
let a=prompt("Enter your 1st number")
let b=prompt("Enter your 2nd number")
let c=prompt("Enter operation you want to perform")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random<0.1)
alert( `The result is${eval(`${a} ${c} ${b}`)}`)

else{    
c=obj[c]
alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}