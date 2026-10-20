// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(456)
//         }, 3400);
//     })
// }

// console.log("Load Data")
// async function getData() {
//     let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))")
//     let data=await x.json()
//     console.log(data )
//     return 455 
// }
// async function main() {
//     let Data = await getData();
//     console.log(Data)
//     // Data.then((v) => {
//         console.log("This is bakchodi time")
//         console.log("This is bakchodi time 2")
//     }
//     main()


async function getData(){
  let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data=await x.json()
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    console.log(data)
    return 455
    
    }
    async function main() {
    
let data=await getData();
    console.log(data);
}
  
main()

    