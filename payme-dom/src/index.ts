import { Card } from "./user/card.js";
import { User } from "./user/user.js";
import { UserService } from "./service/user-service.js";
import { CardService } from "./service/card-service.js";

/* SignUp inputs  */
const inputSignUpName: HTMLInputElement = document.querySelector(".inputSignUpName")!;
const inputSignUpSurname: HTMLInputElement = document.querySelector(".inputSignUpSurname")!;
const inputSignUpNumber: HTMLInputElement = document.querySelector(".inputSignUpNumber")!;
const inputSignUpPassword: any = document.querySelector(".inputSignUpPassword")!;
const signUpBtn: HTMLButtonElement = document.querySelector("#signUp")!;

const inputSignInNumber: HTMLInputElement = document.querySelector(".inputSignInNumber")!;
const inputSignInPassword: HTMLInputElement = document.querySelector(".inputSignInPassword")!;
const signInBtn: HTMLButtonElement = document.querySelector("#signIn")!;
/*  Modals div */
const container: HTMLDivElement = document.querySelector(".container")!;
const cardRegisterContainer: HTMLDivElement = document.querySelector(".card-register-container")!;
const name: HTMLElement = document.querySelector("#name")!;
const surname: HTMLSpanElement = document.querySelector("#surname")!;
const signUpNumberText: HTMLParagraphElement = document.querySelector("#signUpNumberText")!;
const logOut: HTMLElement = document.querySelector(".log-out")!;

/* Add cards inputs */
const yourName: HTMLInputElement = document.querySelector(".yourName")!;
const yourSurname: HTMLInputElement = document.querySelector(".yourSurname")!;
const cardType: HTMLInputElement = document.querySelector(".cardType")!;
const cardNumber: HTMLInputElement = document.querySelector(".cardNumber")!;
const cardPassword: any = document.querySelector(".cardPassword")!;
const cardDate: HTMLInputElement = document.querySelector(".cardDate")!;
const cardAddBtn: HTMLButtonElement = document.querySelector(".add-btn")!;
const addCardText: HTMLParagraphElement = document.querySelector("#addCardText")!;

/* card abaut name and other.... */
const cardTypes: HTMLElement = document.querySelector(".cardTypes")!;
const cardNumbers: HTMLParagraphElement = document.querySelector(".cardNumbers")!;
const cardDates: HTMLParagraphElement = document.querySelector(".cardDates")!;
const usersName: HTMLElement = document.querySelector(".usersName")!;
const usersSurname: HTMLElement = document.querySelector(".usersSurname")!;

/* Function createUser */
const userService = new UserService();
const cardservice = new CardService();

function createUser() {
  const user = new User(inputSignUpName.value, inputSignUpSurname.value, inputSignUpNumber.value, inputSignUpPassword.value);
  userService.create(user);
  console.log(userService.getList());

  if (inputSignUpName.value === "" || inputSignUpSurname.value === "" || inputSignUpNumber.value === "" || inputSignUpPassword.value === "") {
    signUpNumberText.textContent = "Please fill in the information";
    signUpNumberText.style.color = "red";

    const text = setTimeout(() => {
      signUpNumberText.textContent = "";
    }, 3000);
  } else {
    container.style.display = "none";
    cardRegisterContainer.style.display = "block";
    name.textContent = inputSignUpName.value;
    surname.textContent = inputSignUpSurname.value;
  }

  for (let user of userService.getList()) {
    if (user.phoneNumber !== inputSignInNumber.value || user.password !== inputSignUpPassword.value) {
      container.style.display = "none";
      cardRegisterContainer.style.display = "block";

      cardTypes.textContent = "----";
      cardNumbers.textContent = "xxxx-xxxx-xxxx-xxxx";
      cardDates.textContent = "00/00";
      usersName.textContent = "Name";
      usersSurname.textContent = "surname";
    }
  }

  inputSignUpName.value = "";
  inputSignUpSurname.value = "";
  inputSignUpNumber.value = "";
  inputSignUpPassword.value = "";
}

signUpBtn.addEventListener("click", createUser);

/* Function logOutFn */
function logOutFn() {
  cardRegisterContainer.style.display = "none";
  container.style.display = "block";
  container.style.display = "flex";
}

logOut.addEventListener("click", logOutFn);

const formCard = document.getElementById("addcard-form") as HTMLFormElement;

formCard.addEventListener("submit", (e) => {
  e.preventDefault();
  formCard.reset();
});

function addCard() {
  const card = new Card(yourName.value, yourSurname.value, cardType.value, cardNumber.value, cardPassword.value, cardDate.value);
  cardservice.create(card);
  console.log(card);

  if (cardDate.value === "" || cardNumber.value === "" || cardPassword.value === "" || cardType.value === "" || yourName.value === "" || yourSurname.value === "") {
    addCardText.textContent = "Please fill in the information";
    addCardText.style.color = "red";
    
    setInterval(() =>{
      addCardText.textContent = "";
    })
  } else {
    cardTypes.textContent = cardType.value;
    cardNumbers.textContent = cardNumber.value;
    cardDates.textContent = cardDate.value;
    usersName.textContent = yourName.value;
    usersSurname.textContent = yourSurname.value;
  }
}

cardAddBtn.addEventListener("click", addCard);

/* Function signIn  */
function signIn() {
  let currentUsr;
  for (let user of userService.getList()) {
    if (user.phoneNumber === inputSignInNumber.value && user.password === inputSignInPassword.value) {
      container.style.display = "none";
      currentUsr = user;
      cardRegisterContainer.style.display = "block";
      console.log(userService.getID());
    }
  }
  
  const card = new Card(yourName.value, yourSurname.value, cardType.value, cardNumber.value, cardPassword.value, cardDate.value);
  cardservice.create(card);
  console.log(card);
  
  
  console.log(currentUsr);
  name.textContent = currentUsr.firstName;
  surname.textContent = currentUsr.lastName;
  cardType.textContent = card.cardType;
  cardNumber.textContent = card.cardNumber;
  cardDate.textContent = card.cardDate;
  yourName.textContent = card.firsName;
  yourSurname.textContent = card.lastName;

}

signInBtn.addEventListener("click", signIn);

// import { Card } from "./user/card.js";
// import { User } from "./user/user.js";
// import { UserService } from "./service/user-service.js";
// import { CardService } from "./service/card-service.js";
