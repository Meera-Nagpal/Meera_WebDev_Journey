// function main(){
// let arr = [1, 4, 3, 4, 5, 6, 6, 7]
// let arr1=[]
// let i=0;
// let j=0;
// while(i<8){
//     arr1[j++]=arr[i]
//     arr1[j++]=arr[i]
//     i++
// }

// console.log(arr1)
// }
// main()
// function reverse(){
//     let str="Bhoomika"
//     let result=""
//     let n=str.length
//     for(let i=n-1;i>=0;i--){
//         result+=str[i]
//     }
//     return result
// }
// function main(){
//     let data=reverse()
//     console.log(data)
// }
// function pass() {
//     let m = "pasSword9"
//     if (m.length < 8) {
//         console.log("Invalid length of pass")
//         return false
//     }
//         let hasUpper = false;
//         let hasLower = false;
//         let hasDigit = false;
//         for (let i = 0; i < m.length; i++) {
//         let ch=m[i]
//         if(ch>='a'&&ch<='z')hasLower=true;
//         else if(ch>='A'&& ch<='Z')hasUpper=true;
//         else if(ch>='0' && ch<='9')hasDigit=true;
//         }
//         if(hasUpper && hasLower && hasDigit){
//             return true;
//         }


// else {
//     console.log("invalid password")
//     return false;
// }
// }

// function sum() {
//     let sum = 0
//     let arr = [1, 2, 3, 4, 5, 6, -7, 8, 8, 9]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i]
//         }
//         else {
//             return sum
//         }
//     }
//     return sum
// }
// function Vowel() {
//     let v = "Meera Nagpal"
//     let count=0
//     let vowels = "aeiouAEIOU"

//     for (let i = 0; i < v.length; i++) {
//         let ch = v[i]
//         if (vowels.includes(ch)) {
//             count++
//         }

//     }
//     return count
// }
// function Notes(note) {
//     localStorage.setItem("note", note)
// }
// let note = localStorage.getItem("note")
// document.write(note)
// document.querySelector("button").addEventListener
//     ("click", () => {
//         let note= prompt("Enter your note")
//         localStorage.setItem( note)
//         document.write(note)


//     })
// function random(){
//     let min=1000;
//     let max=5000;
//     let randomdelay=Math.floor(Math.random()*(max-min+1))+min;
// }

// async function Coffee(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>
//             resolve("Your Coffee is Ready!!"),Math.random()*5000);
//     })
// }
//  function Filter () {
//     let arr=prompt("Enter ur array")
//     let arr1=[]
//     for(let i=0;i<arr.length;i++){
//         let ch=arr[i];
//         if((ch>='A'&& ch<='Z') || ( ch>='0'&& ch<='9')){
//             arr1.push(ch)
//         }
//     }
//     return arr1


function Products() {
    let input = prompt("Enter your product object in JSON Format")
    try {
        return Array.isArray(parsed) ? parsed : [parsed];
    }
    catch (e) {
        alert("Invalid input method")
        return {};
    }
}
function Criterion() {
    let pass = prompt("Enter critierion for pass")
    try {
        return JSON.parse(pass)
    }
    catch (e) {
        alert("Error in JSON format")
        return {}
    }
}
let meera=`udhiwc ufh $geera`

function filterProducts(products, criterion) {
    return products.filter(product => {
        for (let key in criterion) {
            if (product[key] !== criterion[key])
                return false;
        }
        return true;
    });

}
let products = Products()
let criterion = Criterion()
console.log("Filtered Products", filterProducts(products, criterion));


function main() {
    let data = filterProducts(products,criterion)
    console.log(data)
}
main()