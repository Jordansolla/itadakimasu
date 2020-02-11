/*

var saisie = document.querySelector(".btn1");
var ul = document.querySelector("ul");
var bouton = document.querySelector(".btn1");
saisie.value = "RAMEN SAUMON"; 
bouton.parentElement.querySelector(h6)
function toDo() {
    console.log(this);
    
    var li = document.createElement("li"); 
    li.classList.add("list-group-item");
    li.appendChild(document.createTextNode(saisie.value)); 
    ul.appendChild(li); 

}
//for of sur bouton

//dans le forof, faire le addevent mais l'itérateur/item
bouton.addEventListener("click",toDo);


*/


var saisie = document.querySelector(".btn1");
var ul = document.querySelector("ul");
var bouton = document.querySelectorAll(".btn1");
saisie.nodeValue = "";

for (let item of bouton) { 
 item.addEventListener("click",toDo);
}
 function toDo() {
    console.log(this);
var li = document.createElement("li"); 
    li.classList.add("list-group-item");
    li.appendChild(document.createTextNode(this.parentElement.querySelector("h5").textContent));
    li.appendChild(document.createTextNode(' '+this.parentElement.querySelector("h6").textContent));
    ul.appendChild(li); 
    localStorage.setItem('panier', this.parentElement.querySelector("h5").textContent+this.parentElement.querySelector("h6").textContent)

}

var li = document.createElement("li"); 
    li.classList.add("list-group-item");
    li.appendChild(document.createTextNode(localStorage.getItem('panier'))); 
    ul.appendChild(li); 

console.log(localStorage.getItem('panier'))





































