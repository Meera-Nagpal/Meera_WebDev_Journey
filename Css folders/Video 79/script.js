let a=prompt("Enter a")
let b=prompt("Enter b")
if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("SOrry not allowed")
}
let sum=parseInt(a)+parseInt(b);
console.log(sum)