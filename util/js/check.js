import {
  createBerlatih,
  createEvaluasi,
  createKuis,
  createMateri,
  createMenalar,
  createMencoba,
  createMengamati,
  getBerlatih,
  getEvaluasi,
  getKuis,
  getMateri,
  getMenalar,
  getMencoba,
  getMengamati,
} from "./db.js";

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

// async function insertSub() {
//   try {
//     if (sub1_1 && sub1_2 && sub1_3 && sub1_4) {
//       const materi1 = (sub1_1 + sub1_2 + sub1_3 + sub1_4) / 4;

//       const data = {
//         nisn: siswa.nisn,
//         name: siswa.name,
//         kelas: siswa.kelas,
//         materi: "Materi 1",
//         nilai: materi1,
//         sekolah: siswa.sekolah,
//         waktu: new Date(),
//       };

//       await createMateri(data, data.materi).catch("error mengirim ke db!");
//     }
//     if (sub2_1 && sub2_2 && sub2_3) {
//       const materi2 = (sub2_1 + sub2_2 + sub2_3) / 3;

//       const data = {
//         nisn: siswa.nisn,
//         name: siswa.name,
//         kelas: siswa.kelas,
//         materi: "Materi 2",
//         nilai: materi2,
//         sekolah: siswa.sekolah,
//         waktu: new Date(),
//       };

//       await createMateri(data, data.materi).catch("error mengirim ke db!");
//     }
//   } catch (error) {
//     console.error();
//   }
// }

// async function insertKuis() {
//   try {
//     if (kuis1) {
//       const data = {
//         nisn: siswa.nisn,
//         name: siswa.name,
//         kelas: siswa.kelas,
//         kuis: "Kuis 1",
//         nilai: kuis1,
//         sekolah: siswa.sekolah,
//         waktu: new Date(),
//       };

//       await createKuis(data, data.kuis).catch("error mengirim ke db!");
//     }

//     if (kuis2) {
//       const data = {
//         nisn: siswa.nisn,
//         name: siswa.name,
//         kelas: siswa.kelas,
//         kuis: "Kuis 2",
//         nilai: kuis2,
//         sekolah: siswa.sekolah,
//         waktu: new Date(),
//       };

//       await createKuis(data, data.kuis).catch("error mengirim ke db!");
//     }
//   } catch (error) {
//     console.error();
//   }
// }

// async function insertEvaluasi() {
//   try {
//     if (evaluasi1) {
//       const data = {
//         nisn: siswa.nisn,
//         name: siswa.name,
//         kelas: siswa.kelas,
//         evaluasi: "Evaluasi 1",
//         nilai: evaluasi1,
//         sekolah: siswa.sekolah,
//         hari: new Date().toLocaleDateString("id-ID"),
//         waktu: new Date().toLocaleTimeString("id-ID"),
//       };

//       await createEvaluasi(data, data.evaluasi).catch("error mengirim ke db!");
//     }
//   } catch (error) {
//     console.error();
//   }
// }

export async function insertBerlatih(bab, sub, nilai) {
  let res = parseInt(localStorage.getItem(`${nilai}`));
  if (res) {
    try {
      const data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        bab: bab,
        sub: sub,
        nilai: res,
        sekolah: siswa.sekolah,
        hari: new Date().toLocaleDateString("id-ID"),
        waktu: new Date().toLocaleTimeString("id-ID"),
      };

      await createBerlatih(data).catch("error mengirim ke db!");
    } catch (error) {
      console.error();
    }
  }
}

insertBerlatih("Bab 1", "Menulis Nama Bilangan", "sub1_menulis");
insertBerlatih("Bab 1", "Menulis Banyak Benda & Bilangan", "sub1_menghitung");
insertBerlatih("Bab 1", "Ayo Berlatih 1", "sub1_1_2");
insertBerlatih("Bab 1", "Ayo Berlatih 2", "sub1_2_2");
insertBerlatih("Bab 1", "Ayo Berlatih 3", "sub3_berlatih");
insertBerlatih("Bab 1", "Ayo Berlatih 4", "sub4_berlatih");
insertBerlatih("Bab 2", "Ayo Berlatih 1", "sub2_1");
insertBerlatih("Bab 2", "Ayo Berlatih 2", "sub2_2_1");
insertBerlatih("Bab 2", "Ayo Berlatih 3", "sub2_2_2");
insertBerlatih("Bab 2", "Ayo Berlatih 4", "sub2_3");

export async function insertMenalar(bab, sub, nilai, jawaban) {
  let jawab = JSON.parse(localStorage.getItem(`${jawaban}`));
  let res = parseInt(localStorage.getItem(`${nilai}`));
  let data;
  try {
    if (jawab) {
      data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        bab: bab,
        sub: sub,
        nilai: res,
        jawaban1: jawab[0],
        jawaban2: jawab[1],
        jawaban3: jawab[2],
        jawaban4: jawab[3],
        jawaban5: jawab[4],
        jawaban6: jawab[5],
        jawaban7: jawab[6],
        jawaban8: jawab[7],
        sekolah: siswa.sekolah,
        hari: new Date().toLocaleDateString("id-ID"),
        waktu: new Date().toLocaleTimeString("id-ID"),
      };
    } else {
      data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        bab: bab,
        sub: sub,
        nilai: res,
        sekolah: siswa.sekolah,
        hari: new Date().toLocaleDateString("id-ID"),
        waktu: new Date().toLocaleTimeString("id-ID"),
      };
    }

    await createMenalar(data).catch("error mengirim ke db!");
  } catch (error) {
    console.error();
  }
}

insertMenalar("Bab 1", "Ayo Menalar 1", "sub1_menalar", "sub1_menalar_jawaban");
insertMenalar("Bab 1", "Ayo Menalar 2", "sub2_menalar", "");
insertMenalar("Bab 1", "Ayo Menalar 3", "sub3_menalar", "");

export async function insertMengamati(bab, sub, nilai) {
  let res = parseInt(localStorage.getItem(`${nilai}`));
  if (res) {
    try {
      const data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        bab: bab,
        sub: sub,
        nilai: res,
        sekolah: siswa.sekolah,
        hari: new Date().toLocaleDateString("id-ID"),
        waktu: new Date().toLocaleTimeString("id-ID"),
      };

      await createMengamati(data).catch("error mengirim ke db!");
    } catch (error) {
      console.error();
    }
  }
}

insertMengamati("Bab 1", "Ayo Mengamati 1", "sub1_2_1");
insertMengamati("Bab 1", "Ayo Mengamati 2", "sub3_mengamati");

export async function insertMencoba(bab, sub, nilai) {
  let res = parseInt(localStorage.getItem(`${nilai}`));
  if (res) {
    try {
      const data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        bab: bab,
        sub: sub,
        nilai: res,
        sekolah: siswa.sekolah,
        hari: new Date().toLocaleDateString("id-ID"),
        waktu: new Date().toLocaleTimeString("id-ID"),
      };

      await createMencoba(data).catch("error mengirim ke db!");
    } catch (error) {
      console.error();
    }
  }
}

insertMencoba("Bab 1", "Ayo Mencoba 1", "sub2_mencoba");

export async function insertKuis(bab, sub, nilai) {
  let res = parseInt(localStorage.getItem(`${nilai}`));
  if (res) {
    try {
      const data = {
        nisn: siswa.nisn,
        name: siswa.name,
        kelas: siswa.kelas,
        bab: bab,
        sub: sub,
        nilai: res,
        sekolah: siswa.sekolah,
        hari: new Date().toLocaleDateString("id-ID"),
        waktu: new Date().toLocaleTimeString("id-ID"),
      };

      await createKuis(data).catch("error mengirim ke db!");
    } catch (error) {
      console.error();
    }
  }
}

insertKuis("Bab 1", "Kuis 1", "kuis1_1");
insertKuis("Bab 2", "Kuis 2", "kuis2_1");

export async function insertEvaluasi(bab, sub, nilai) {
  let res = parseInt(localStorage.getItem(`${nilai}`));
  try {
    const data = {
      nisn: siswa.nisn,
      name: siswa.name,
      kelas: siswa.kelas,
      bab: bab,
      sub: sub,
      nilai: res,
      sekolah: siswa.sekolah,
      hari: new Date().toLocaleDateString("id-ID"),
      waktu: new Date().toLocaleTimeString("id-ID"),
    };

    await createEvaluasi(data).catch("error mengirim ke db!");
  } catch (error) {
    console.error();
  }
}

insertEvaluasi("Evaluasi", "Evaluasi", "evaluasi1_1");

console.log("Berlatih: ", await getBerlatih());
console.log("Menalar: ", await getMenalar());
console.log("Mengamati: ", await getMengamati());
console.log("Mencoba: ", await getMencoba());
console.log("Kuis: ", await getKuis());
console.log("Evaluasi: ", await getEvaluasi());

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
    window.location.href = "/"; // Redirect to the home page
  } else {
    // User is not logged in or does not have the required role
    // console.log(`Access denied. User must have the role "${role}". Redirecting to home...`);
    localStorage.removeItem("user");
    window.location.href = "/"; // Redirect to the home page
  }
}

// Example usage of the protected route with redirection
const siswaRedirectUrl = "/auth/login.html?role=siswa"; // Replace with the actual login URL for "siswa"
protectedRoute();

export function testFunction() {
  console.log("Testing function in materi1.js");
}
