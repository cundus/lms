/**
 * Function and Script for config firebase
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqc1dPg6B4qACoe8lJ7RUzHLT3rcOeqh4",
  authDomain: "lmsweb-4acb4.firebaseapp.com",
  projectId: "lmsweb-4acb4",
  storageBucket: "lmsweb-4acb4.appspot.com",
  messagingSenderId: "203175399654",
  appId: "1:203175399654:web:861a93c0b302194a26ab27",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let nisnInput = document.getElementById("nisn-signUp");
let emailInput = document.getElementById("email-signUp");
let passwordInput = document.getElementById("password-signUp");
let nameInput = document.getElementById("name-signUp");
let sekolahInput = document.getElementById("sekolah-signUp");
let kelasInput = document.getElementById("kelas-signUp");
let signUpForm = document.getElementById("registerForm");

let registerUser = (e) => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((credentials) => {
      set(ref(db, "UserAuthList/" + credentials.user.uid), {
        nisn: nisnInput.value,
        name: nameInput.value,
        email: emailInput.value,
        sekolahInput: sekolahInput.value,
        kelasInput: kelasInput.value,
      }).then(() => {
        // Redirect to login page after successful registration
        window.location.href = "./login.html";
      });
      console.log(credentials);
      alert(`register success ${credentials.user.email}`);
    })
    .catch((error) => {
      alert(error.message);
      console.error(error.code);
      console.error(error.message);
    });
};
signUpForm.addEventListener("submit", registerUser);

/**
 * Function and Script for Dom Element
 */
// const form = document.querySelector(".input-validation-required");

// Wait for controls to be defined before attaching form listeners
// await Promise.all([
//   customElements.whenDefined("sl-button"),
//   customElements.whenDefined("sl-checkbox"),
//   customElements.whenDefined("sl-input"),
//   customElements.whenDefined("sl-option"),
//   customElements.whenDefined("sl-select"),
//   customElements.whenDefined("sl-textarea"),
// ]).then(() => {
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     alert("All fields are valid!");
//   });
// });
