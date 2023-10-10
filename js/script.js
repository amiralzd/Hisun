function showburgerMenu(){
  let x = document.getElementById("burger-Menu");
  x.classList.add("burgerMenu-show");
}

function hideBurgerMenu(){
  let x = document.getElementById("burger-Menu");
  x.classList.remove("burgerMenu-show");
}

function MahsolatIcon(){
  let d = document.getElementById("mahsolat-icon");
  d.classList.toggle("mahsolat-show")
}