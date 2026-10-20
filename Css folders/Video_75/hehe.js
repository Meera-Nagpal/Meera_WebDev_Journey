// alert('hello gurll');
let prom1 = new Promise((resolve, reject) => {

    let a = Math.random();

    if (a < 0.5) {
        resolve("It is not a fn")
    }

    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }

}) 
   
let prom2 = new Promise((resolve, reject) => {

    let a = Math.random();

    if (a < 0.5) {
        resolve("It is not a fn2")
    }

    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry2")
        }, 1000);
    }

}) 
let p3=Promise.any([prom1,prom2 ])
 p3 .then((a) => {
        console.log(a)
    })
.catch((err)=>{
    console.log(err)
})


