// let num=prompt("Enter the number you want factorial of")
// let ans=1
// for(let i=num;i>=1;i--){
//     ans=ans*i
// }
// console.log(ans)
let a=7
function Factorial(number){
    let arr=Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
        
    })
    console.log(c)

}
Factorial(a)