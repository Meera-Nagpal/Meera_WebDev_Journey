async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (455)
        },1000);
        }
    )
}
(async function main(){
// let a=await sleep();
// console.log(a)
// let b=await sleep();
// console.log(b)
// })()
let [x,y,...rest]=[5,6,4,2,2,1,875,1,1]
console.log(x,y,rest)
let obj={
    a:2,
    b:9,
    c:45,
}
let{a,b}=obj
console.log(a,b)
let arr=[24,67,45,90]
console.log(arr[0]+arr[1]+arr[2]+arr[3])
console.log(sum(...arr))
})()