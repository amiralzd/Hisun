function showProducts(){
    let Products = document.getElementById("Products-show-hide");
    Products.classList.toggle("show-Products")
}

function burgermenu(){
    let x = document.getElementById("burgermenu");
    x.classList.add("burgerMenu-show");
}

function closeburgerMenu(){
    let x = document.getElementById("burgermenu");
    x.classList.remove("burgerMenu-show");
}