let userCredential = JSON.parse(sessionStorage.getItem("user-credential"));
let userInfo = JSON.parse(localStorage.getItem("user"));
const signOutButton = document.getElementById("signOut");

const titleBeranda = document.getElementById("title-beranda");
let logOut = () => {
   localStorage.removeItem("user");
   window.location.href = "/auth/login.html?role=siswa";
};

let CheckUser = () => {
   if (!userInfo.name) {
      window.location.href = "/auth/login.html?role=siswa";
   } else {
      titleBeranda.innerHTML = `Selamat Datang ${userInfo.name}`;
   }
};

window.addEventListener("DOMContentLoaded", CheckUser);
signOutButton.addEventListener("click", logOut);
