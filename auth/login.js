// import { loginUserGuru, loginUserSiswa } from "../util/js/db.js"

// const isLoggedIn = localStorage.getItem("user")
// console.log(isLoggedIn)
// if (isLoggedIn) {
//   window.location.href = "/app/beranda.html"
// }

// let passwordInput = document.getElementById("password-signIn")
// let signInForm = document.getElementById("loginForm")

// let LoginUser = async (e) => {
//   e.preventDefault()
//   const urlParams = new URLSearchParams(window.location.search)
//   const role = urlParams.get("role")

//   let loginUser = null
//   if (role === "guru") {
//     const user = {
//       nip: document.getElementById("nip-signIn").value,
//       password: passwordInput.value,
//     }
//     loginUser = await loginUserGuru(user)
//   } else if (role === "siswa") {
//     const user = {
//       nisn: document.getElementById("nisn-signIn").value,
//       password: passwordInput.value,
//     }
//     loginUser = await loginUserSiswa(user)
//   }

//   if (loginUser === null || loginUser.password !== passwordInput.value) {
//     return Swal.fire({
//       icon: "error",
//       title: "Gagal!",
//       text: "NIP / NISN / Password salah!",
//     })
//   }

//   // simpan user login untuk penggunaan selanjutnya
//   localStorage.setItem("user", JSON.stringify(loginUser))

//   Swal.fire({
//     icon: "success",
//     text: `Login Berhasil`,
//   }).then(() => {
//     if (role === "siswa") {
//       window.location.href = "/app/beranda.html"
//     } else if (role === "guru") {
//       window.location.href = "/app/guru/dashboard.html"
//     }
//   })
// }
// signInForm.addEventListener("submit", LoginUser)

// /**
//  * Function and Script for DOM Event
//  */
// // ambil role dari url
// const urlParams = new URLSearchParams(window.location.search)
// const role = urlParams.get("role")

// if (role === "guru") {
//   const textTitle = document.getElementById("textTitle")
//   textTitle.innerHTML = "Login sebagai Guru"

//   const roleContainer = document.getElementById("roleLogin")
//   const roleNavigate = document.createElement("a")

//   roleNavigate.href = `./login.html?role=siswa`
//   roleNavigate.classList = "text-dark font-semibold"
//   roleNavigate.innerText = "siswa"
//   roleContainer.appendChild(roleNavigate)

//   // if role as guru, add field input for nisn
//   const nomorInduk = document.getElementById("nomorInduk")
//   const nomorIndukLabel = document.createElement("label")
//   const nomorIndukInput = document.createElement("input")

//   nomorIndukLabel.for = "nip"
//   nomorIndukLabel.innerText = "NIP:"
//   nomorIndukLabel.className = "text-white"

//   nomorIndukInput.type = "text"
//   nomorIndukInput.id = "nip-signIn"
//   nomorIndukInput.name = "nip"
//   nomorIndukInput.autocomplete = "off"
//   nomorIndukInput.required
//   nomorIndukInput.className = "bg-white bg-opacity-70 px-4 py-2 rounded-md w-full"

//   nomorInduk.appendChild(nomorIndukLabel)
//   nomorInduk.appendChild(nomorIndukInput)
// } else if (role === "siswa") {
//   const textTitle = document.getElementById("textTitle")
//   textTitle.innerHTML = "Login sebagai Siswa"

//   const roleContainer = document.getElementById("roleLogin")
//   const roleNavigate = document.createElement("a")

//   roleContainer.innerHTML = "atau masuk sebagai "
//   roleNavigate.href = `./login.html?role=guru`
//   roleNavigate.classList = "text-dark font-semibold"
//   roleNavigate.innerText = "guru"
//   roleContainer.appendChild(roleNavigate)

//   // if role as guru, add field input for nisn
//   const nomorInduk = document.getElementById("nomorInduk")
//   const nomorIndukLabel = document.createElement("label")
//   const nomorIndukInput = document.createElement("input")

//   nomorIndukLabel.for = "nisn"
//   nomorIndukLabel.innerText = "NISN:"
//   nomorIndukLabel.className = "text-white"

//   nomorIndukInput.type = "text"
//   nomorIndukInput.id = "nisn-signIn"
//   nomorIndukInput.name = "nisn"
//   nomorIndukInput.autocomplete = "off"
//   nomorIndukInput.required
//   nomorIndukInput.className = "bg-white bg-opacity-70 px-4 py-2 rounded-md w-full"

//   nomorInduk.appendChild(nomorIndukLabel)
//   nomorInduk.appendChild(nomorIndukInput)
// }
