var ul = document.querySelector(".ulpanier");

var li = document.createElement("li"); 
    li.classList.add("list-group-item");
    li.appendChild(document.createTextNode(localStorage.getItem('panier'))); 
    ul.appendChild(li); 

console.log(localStorage.getItem('panier'))