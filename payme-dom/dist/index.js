
import { Card } from "./user/card.js";
import { User } from "./user/user.js";
import { UserService } from "./service/user-service.js";
import { CardService } from "./service/card-service.js";

/* SignUp inputs  */
const inputSignUpName = document.querySelector(".inputSignUpName");
const inputSignUpSurname = document.querySelector(".inputSignUpSurname");
const inputSignUpNumber = document.querySelector(".inputSignUpNumber");
const inputSignUpPassword = document.querySelector(".inputSignUpPassword");
const signUpBtn = document.querySelector("#signUp");
const inputSignInNumber = document.querySelector(".inputSignInNumber");
const inputSignInPassword = document.querySelector(".inputSignInPassword");
const signInBtn = document.querySelector("#signIn");
/*  Modals div */
const container = document.querySelector(".container");
const cardRegisterContainer = document.querySelector(".card-register-container");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const signUpNumberText = document.querySelector("#signUpNumberText");
const logOut = document.querySelector(".log-out");
/* Add cards inputs */
const yourName = document.querySelector(".yourName");
const yourSurname = document.querySelector(".yourSurname");
const cardType = document.querySelector(".cardType");
const cardNumber = document.querySelector(".cardNumber");
const cardPassword = document.querySelector(".cardPassword");
const cardDate = document.querySelector(".cardDate");
const cardAddBtn = document.querySelector(".add-btn");
const addCardText = document.querySelector("#addCardText");
/* card abaut name and other.... */
const cardTypes = document.querySelector(".cardTypes");
const cardNumbers = document.querySelector(".cardNumbers");
const cardDates = document.querySelector(".cardDates");
const usersName = document.querySelector(".usersName");
const usersSurname = document.querySelector(".usersSurname");
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
    }
    else {
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
const formCard = document.getElementById("addcard-form");
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
        setInterval(() => {
            addCardText.textContent = "";
        });
    }
    else {
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
