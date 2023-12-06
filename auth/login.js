/**
 * Function for login user with firebase config
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  get,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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
const dbRef = ref(db);

let emailInput = document.getElementById("email-signIn");
let passwordInput = document.getElementById("password-signIn");
let signInForm = document.getElementById("loginForm");

let LoginUser = (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((credentials) => {
      console.log(credentials);
      get(child(dbRef, "UserAuthList/" + credentials.user.uid)).then(
        (snapshot) => {
          if (snapshot.exists) {
            sessionStorage.setItem(
              "user-info",
              JSON.stringify({
                name: snapshot.val().name,
                email: snapshot.val().email,
              })
            );
            sessionStorage.setItem(
              "user-credential",
              JSON.stringify(credentials.user)
            );
            window.location.href = "../app/beranda.html";
          }
        }
      );
      console.log(credentials);
      alert(`You are logged in as: ${credentials.user.email}`);
    })
    .catch((error) => {
      alert(error.message);
      console.error(error.code);
      console.error(error.message);
    });
};
signInForm.addEventListener("submit", LoginUser);

/**
 * Function and Script for DOM Event
 */
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const role = urlParams.get("role");

  if (role === "guru") {
    const textTitle = document.getElementById("textTitle");
    textTitle.innerHTML = "Login sebagai Guru";

    const roleContainer = document.getElementById("roleLogin");
    const roleNavigate = document.createElement("a");

    roleNavigate.href = `./login.html?role=siswa`;
    roleNavigate.classList = "text-dark font-semibold";
    roleNavigate.innerText = "siswa";
    roleContainer.appendChild(roleNavigate);

    // if role as guru, add field input for nisn
    const nomorInduk = document.getElementById("nomorInduk");
    const nomorIndukLabel = document.createElement("label");
    const nomorIndukInput = document.createElement("input");

    nomorIndukLabel.for = "nip";
    nomorIndukLabel.innerText = "NIP:";
    nomorIndukLabel.className = "text-white";

    nomorIndukInput.type = "text";
    nomorIndukInput.id = "nip-signIn";
    nomorIndukInput.name = "nip";
    nomorIndukInput.required;
    nomorIndukInput.className =
      "bg-white bg-opacity-70 px-4 py-2 rounded-md w-full";

    nomorInduk.appendChild(nomorIndukLabel);
    nomorInduk.appendChild(nomorIndukInput);
  } else if (role === "siswa") {
    const textTitle = document.getElementById("textTitle");
    textTitle.innerHTML = "Login sebagai Siswa";

    const roleContainer = document.getElementById("roleLogin");
    const roleNavigate = document.createElement("a");

    roleContainer.innerHTML = "atau masuk sebagai ";
    roleNavigate.href = `./login.html?role=guru`;
    roleNavigate.classList = "text-dark font-semibold";
    roleNavigate.innerText = "guru";
    roleContainer.appendChild(roleNavigate);

    // if role as guru, add field input for nisn
    const nomorInduk = document.getElementById("nomorInduk");
    const nomorIndukLabel = document.createElement("label");
    const nomorIndukInput = document.createElement("input");

    nomorIndukLabel.for = "nisn";
    nomorIndukLabel.innerText = "NISN:";
    nomorIndukLabel.className = "text-white";

    nomorIndukInput.type = "text";
    nomorIndukInput.id = "nisn-signIn";
    nomorIndukInput.name = "nisn";
    nomorIndukInput.required;
    nomorIndukInput.className =
      "bg-white bg-opacity-70 px-4 py-2 rounded-md w-full";

    nomorInduk.appendChild(nomorIndukLabel);
    nomorInduk.appendChild(nomorIndukInput);
  }
});
