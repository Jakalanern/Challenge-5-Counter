// VARIABLES
let count = document.querySelector(".count");
let addBtn = document.querySelector(".add_btn");
let subBtn = document.querySelector(".sub_btn");
let resetBtn = document.querySelector(".reset_btn");
let counter = 0;
// MAIN

addBtn.addEventListener("click", addCount);
subBtn.addEventListener("click", subCount);
resetBtn.addEventListener("click", reset);

// FUNCTIONS
function addCount() {
  counter++;
  count.innerHTML = counter;
}
function subCount() {
  if (counter > 0) {
    counter--;
    count.innerHTML = counter;
  }
}

function reset() {
  counter = 0;
  count.innerHTML = counter;
}
