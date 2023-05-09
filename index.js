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
  descripcionError.textContent = descripcionValue ? "" : "descripcion required";
});
