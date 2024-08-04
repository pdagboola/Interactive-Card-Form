const cardholderName = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expMonth = document.getElementById("mm");
const expYear = document.getElementById("yy");
const cvc = document.getElementById("cvc");
const cardNumberCard = document.getElementById("card-number-card");
const nameExp = document.getElementById("name-exp");
const mmNew = document.getElementById("mm-new");
const yyNew = document.getElementById("yy-new");
const cvcCard = document.getElementById("cvc-card");
const right = document.getElementById("right");
const form = document.getElementById("form");

cardNumber.addEventListener("input", (e) => {
  const inputValue = e.target.value.replace(/\s+/g, "").substring(0, 16);
  let newInputValue = inputValue;
  console.log(newInputValue);
  if (inputValue.length > 12) {
    newInputValue = `${inputValue.substring(0, 4)} ${inputValue.substring(
      4,
      8
    )} ${inputValue.substring(8, 12)} ${inputValue.substring(12)}`;
  } else if (inputValue.length > 8) {
    newInputValue = `${inputValue.substring(0, 4)} ${inputValue.substring(
      4,
      8
    )} ${inputValue.substring(8)}`;
  } else if (inputValue.length > 4) {
    newInputValue = `${inputValue.substring(0, 4)} ${inputValue.substring(4)}`;
  }

  e.target.value = newInputValue;

  const value = e.target.value;
  cardNumberCard.innerHTML = `<div id="card-number-card" class="card-number-card-new">
          <h1>${value}</h1>
        </div>`;
});
cardholderName.addEventListener("input", (e) => {
  const value = e.target.value;
  nameExp.innerHTML = `<div id="name-exp-new" class="name-exp-new">
          <p class="name-on-card">${value}</p>
         
        </div>`;
});
expMonth.addEventListener("input", (e) => {
  const value = e.target.value.substring(0, 2);
  mmNew.innerText = `${value}/`;
});
expYear.addEventListener("input", (e) => {
  const value = e.target.value;
  yyNew.innerText = `${value}`;
});
cvc.addEventListener("input", (e) => {
  const value = e.target.value;
  cvcCard.innerText = `${value}`;
});
form.addEventListener("submit", (e) => {
  e.preventDefault;
  right.innerHTML = `<div class="form-container-new" >
  <img src="/images/icon-complete.svg" />
  <h1>THANK YOU!</h1>
  <p>We've added your card details</p>
  <button>Continue</button></div>`;
  return right.innerHTML;
});
