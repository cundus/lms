let userCredential = JSON.parse(sessionStorage.getItem("user-credential"));
let userInfo = JSON.parse(sessionStorage.getItem("user-info"));

let emailUserLog = document.getElementById("user-email");
let nameUserLog = document.getElementById("user-name");
let phoneUserLog = document.getElementById("user-phone");
let signOutButton = document.getElementById("account-signOut");

let logOut = () => {
  sessionStorage.removeItem("user-credential");
  sessionStorage.removeItem("user-info");
  window.location.href = "../auth/login.html";
};

let CheckUser = () => {
  if (!sessionStorage.getItem("user-credential")) {
    window.location.href = "../auth/login.html";
  } else {
    emailUserLog.innerText = `user with email "${userCredential.email}" logged in`;
    nameUserLog.innerText = `Hello ${userInfo.name} happy learning!`;
  }
};

window.addEventListener("load", CheckUser);
signOutButton = addEventListener("click", logOut);
