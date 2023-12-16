// import funcction dari file db.js

import { getUser, createUser } from "../util/js/db.js";

let nisnInput = document.getElementById("nisn-signUp");
let emailInput = document.getElementById("email-signUp");
let passwordInput = document.getElementById("password-signUp");
let nameInput = document.getElementById("name-signUp");
let sekolahInput = document.getElementById("sekolah-signUp");
let kelasInput = document.getElementById("kelas-signUp");
let signUpForm = document.getElementById("registerForm");
let registerUser = async (e) => {
   e.preventDefault();
   const data = await getUser(nisnInput.value);
   console.log(data);
   if (data !== null) {
      return Swal.fire({
         icon: "error",
         title: "Gagal!",
         text: "NISN sudah terdaftar!",
      });
   }

   const user = {
      nisn: nisnInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      name: nameInput.value,
      sekolah: sekolahInput.value,
      kelas: kelasInput.value,
      role: "siswa",
   };
   const creatingUser = await createUser(user);

   Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: `Pendaftaran berhasil`,
   }).then((confirm) => {
      if (confirm) {
         signUpForm.reset();
         window.location.href = "./login.html";
      }
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
