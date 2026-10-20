let random=Math.random()
let first,second,third
if(random<.33){
    first="Crazy"
}
else if(random<.66 && random>.33){
    first="Amazing"
}
else{
    first="Fire"
}
 random=Math.random()
if(random<.33){
    second="Engine"
}
else if(random<.66 && random>.33){
    second="Food"
}
else{
    second="Garments"
}
 random=Math.random()
if(random<.33){
    third="Bros"
}
else if(random<.66 && random>.33){
    third="Limited"
}
else{
    third="Hub"
}

console.log(`${first} ${second} ${third}`)