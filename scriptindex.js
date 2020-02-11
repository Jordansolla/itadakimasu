var saisie = document.querySelector(".valid");
var ul = document.querySelector("button");
var bouton = document.querySelectorAll(".valid");
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
