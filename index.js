//slider
const sliderActives1 = document.querySelectorAll("#sliderActive1");
const sliderActives2 = document.querySelectorAll("#sliderActive2");
const sliderActives3 = document.querySelectorAll("#sliderActive3");
const cakesChange = document.querySelector("#cakesChange");

sliderActives1.forEach((sliderActive1) => {
  sliderActive1.addEventListener("click", () => {
    sliderActive1.classList.add("active");
    sliderActives2.forEach((sliderActive2) => {
      sliderActive2.classList.remove("active");
    });
    sliderActives3.forEach((sliderActive3) => {
      sliderActive3.classList.remove("active");
    });
    cakesChange.src = "./images/image2.png";
  });
});

sliderActives2.forEach((sliderActive2) => {
  sliderActive2.addEventListener("click", () => {
    sliderActive2.classList.add("active");
    sliderActives1.forEach((sliderActive1) => {
      sliderActive1.classList.remove("active");
    });
    sliderActives3.forEach((sliderActive3) => {
      sliderActive3.classList.remove("active");
    });
    cakesChange.src = "./images/cakeslider2.svg";
  });
});

sliderActives3.forEach((sliderActive3) => {
  sliderActive3.addEventListener("click", () => {
    sliderActive3.classList.add("active");
    sliderActives2.forEach((sliderActive2) => {
      sliderActive2.classList.remove("active");
    });
    sliderActives1.forEach((sliderActive1) => {
      sliderActive1.classList.remove("active");
    });
    cakesChange.src = "./images/cakeslider3.svg";
  });
});

//formlario
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const descripcionInput = document.querySelector("#descripcion");
const buttonEnviarEl = document.querySelector("#buttonEnviar");

let nameValue = "";
nameInput.addEventListener("input", (event) => {
  nameValue = event.target.value;
});

let emailValue = "";
emailInput.addEventListener("input", (event) => {
  emailValue = event.target.value;
});

let descripcionValue;
descripcionInput.addEventListener("input", (event) => {
  descripcionValue = event.target.value;
});

const validateCharacters = ["@", ".", "com"];

buttonEnviarEl.addEventListener("click", (click) => {
  const nameError = document.querySelector("#nameError");
  nameError.textContent = nameValue ? "" : "name required";

  const emailError = document.querySelector("#emailError");
  const isEmailOk = validateCharacters.every((character) =>
    emailValue.includes(character)
  );
  emailError.textContent = emailValue && isEmailOk ? "" : "email required";

  const descripcionError = document.querySelector("#descripcionError");
  descripcionError.textContent = descripcionValue ? "" : "description required";
});
