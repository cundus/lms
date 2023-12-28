import { createEvaluasi, createKuis, createMateri } from "./db.js";

const sub1_1 = parseInt(localStorage.getItem("sub1_1"));
const sub1_2 = parseInt(localStorage.getItem("sub1_2"));
const sub1_3 = parseInt(localStorage.getItem("sub1_3"));
const sub1_4 = parseInt(localStorage.getItem("sub1_4"));
const sub2_1 = parseInt(localStorage.getItem("sub2_1"));
const sub2_2 = parseInt(localStorage.getItem("sub2_2"));
const sub2_3 = parseInt(localStorage.getItem("sub2_3"));
// const sub2_4 = parseInt(localStorage.getItem("sub2_4"))
const kuis1 = parseInt(localStorage.getItem("kuis1"));
const kuis2 = parseInt(localStorage.getItem("kuis2"));

const evaluasi1 = parseInt(localStorage.getItem("evaluasi1"));

const siswa = JSON.parse(localStorage.getItem("user"));

async function insertSub() {
  try {
    if (sub1_1 && sub1_2 && sub1_3 && sub1_4) {
      const materi1 = (sub1_1 + sub1_2 + sub1_3 + sub1_4) / 4;

      const data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        materi: "Materi 1",
        nilai: materi1,
        sekolah: siswa.sekolah,
        waktu: new Date(),
      };

      await createMateri(data, data.materi).catch("error mengirim ke db!");
    }
    if (sub2_1 && sub2_2 && sub2_3) {
      const materi2 = (sub2_1 + sub2_2 + sub2_3) / 3;

      const data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        materi: "Materi 2",
        nilai: materi2,
        sekolah: siswa.sekolah,
        waktu: new Date(),
      };

      await createMateri(data, data.materi).catch("error mengirim ke db!");
    }
  } catch (error) {
    console.error();
  }
}

async function insertKuis() {
  try {
    if (kuis1) {
      const data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        kuis: "Kuis 1",
        nilai: kuis1,
        sekolah: siswa.sekolah,
        waktu: new Date(),
      };

      await createKuis(data, data.kuis).catch("error mengirim ke db!");
    }

    if (kuis2) {
      const data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        kuis: "Kuis 2",
        nilai: kuis2,
        sekolah: siswa.sekolah,
        waktu: new Date(),
      };

      await createKuis(data, data.kuis).catch("error mengirim ke db!");
    }
  } catch (error) {
    console.error();
  }
}

async function insertEvaluasi() {
  try {
    if (evaluasi1) {
      const data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        evaluasi: "Evaluasi 1",
        nilai: evaluasi1,
        sekolah: siswa.sekolah,
        waktu: new Date(),
      };

      await createEvaluasi(data, data.evaluasi).catch("error mengirim ke db!");
    }
  } catch (error) {
    console.error();
  }
}

insertEvaluasi();
insertKuis();
insertSub();


// Sample user object with a 'role' property
const currentUser = localStorage.getItem("user");
console.log(currentUser);

const user = JSON.parse(currentUser);
console.log(user);

// Function to check if the user has the required role
// function isUserAllowed(role) {
//   return user && user.role === role;
// }

// Example of a protected route with redirection
function protectedRoute() {

  if (currentUser && user.role === "siswa") {
    // User has the required role, allow access
    // console.log(`Access granted for "${role}" role.`);
  } else if (currentUser && user.role === "guru") {
    localStorage.removeItem("user");
    window.location.href = '/'; // Redirect to the home page
  } else {
    // User is not logged in or does not have the required role
    // console.log(`Access denied. User must have the role "${role}". Redirecting to home...`);
    localStorage.removeItem("user");
    window.location.href = '/'; // Redirect to the home page
  }
}

// Example usage of the protected route with redirection
const siswaRedirectUrl = '/auth/login.html?role=siswa'; // Replace with the actual login URL for "siswa"
protectedRoute();