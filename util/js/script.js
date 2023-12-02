document.addEventListener("DOMContentLoaded", function () {
  const guruButton = document.getElementById("guru");
  const siswaButton = document.getElementById("siswa");

  guruButton.addEventListener("click", function () {
    navigateToLoginPage("guru");
  });

  siswaButton.addEventListener("click", function () {
    navigateToLoginPage("siswa");
  });

  function navigateToLoginPage(role) {
    // Tentukan URL login page berdasarkan role
    const loginPageURL = `./auth/login.html?role=${role}`;
    window.location.href = loginPageURL;
  }
});
