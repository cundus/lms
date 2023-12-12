const user = JSON.parse(localStorage.getItem("user"));
const namaSiswa = document.getElementById("nama-siswa");
namaSiswa.innerHTML = user.name;
