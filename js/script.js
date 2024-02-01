var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const button = document.getElementById("submit-button");

button.addEventListener("click", function () {
  let nama = inputName.value;
  let email = inputEmail.value;

  console.log({ nama, email });

  if (!nama) {
    const nameError = document.getElementById("name-error");
    nameError.classList.add("pesan-error");
    nameError.innerText = "Nama harus diisi";
  }

  if (!email) {
    const emailError = document.getElementById("email-error");
    emailError.classList.add("pesan-error");
    emailError.innerText = "Email harus diisi";
  }
});


