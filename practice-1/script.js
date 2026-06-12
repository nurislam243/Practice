let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let countOutput = document.querySelector(".count-output");


addBtn.addEventListener("click", function(){
  countOutput.innerText = parseInt(countOutput.innerText) + 1;
  
})

removeBtn.addEventListener("click", function(){
  if(parseInt(countOutput.innerText) > 0 ) {
    countOutput.innerText = parseInt(countOutput.innerText) - 1;
  }
  
})