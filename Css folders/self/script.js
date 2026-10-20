let arr = document.getElementsByClassName("container");

// Access the first element with that class
// let table=document.querySelector("table");
// let trow=table.querySelectorAll("t.body.container");

// console.log(trow);
// let span=document.getElementsByTagName("div");
// console.log(span);
let radios = document.getElementsByName("gender");
console.log(radios); // Both radio buttons
let button = document.querySelector("button");

if (button.matches(".primary")) {
  console.log("The button has class 'primary'");
}
let btn = document.querySelector("button");

console.log(btn); // <button>Click Me</button>
console.dir(btn); // { innerHTML: "Click Me", onclick: ..., etc. }
// let div = document.querySelector("table");
// console.log(div.tagName);  // "DIV"
// console.log(div.nodeName); // "DIV"

// let text = div.firstChild;
// console.log(text.nodeName); // "#text"
let div = document.querySelector(".container");
// let ThirChild=div.children[0];
// let ForChild=div.children[0];

console.log(div.textContent);  
// Shows only content inside <div>...</div>

// console.log( ForChild.outerHTML);  
// // Shows <div>...</div> including the div itself
let elem=document.getElementsByClassName("container")[0];
elem.hidden=true;
elem.hidden=false;
let user=document.querySelector("#user");
console.log(user.dataset.id);
console.log(user.dataset.role);
console.log(user.dataset.ghu);
let heera=document.createElement("div");
heera.className="alert";
heera.innerHTML="<span>Jaiko</span>";
// document.body.after(heera);
user.insertAdjacentHTML("afterBegin","<p>Helloo</p>")
user.insertAdjacentHTML("beforeEnd","<span>Helloo</span>")
