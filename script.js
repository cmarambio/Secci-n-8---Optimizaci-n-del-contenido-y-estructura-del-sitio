function showAlert() {
  alert("Te dije que no hicieras clic tarado!!");
}

const form = document.getElementById("myForm")

form.addEventListener("submit", function(lala){
  lala.prevemtDefault()
  validateForm();
})



document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".nav-links").
      classList.toggle("nav-links-responsive")
  })