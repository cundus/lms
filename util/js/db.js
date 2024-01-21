import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  child,
  get,
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
  databaseURL:
    "https://lmsweb-4acb4-default-rtdb.asia-southeast1.firebasedatabase.app/",
  messagingSenderId: "203175399654",
  appId: "1:203175399654:web:861a93c0b302194a26ab27",
};

const app = initializeApp(firebaseConfig);

const db = ref(getDatabase(app));

export const getUser = async (id) => {
  try {
    const snapshot = await get(child(db, `users/` + id));

    if (snapshot.exists()) {
      return snapshot.val();
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};

export const getAllUsers = async () => {
  try {
    const snapshot = await get(child(db, `users/`));

    if (snapshot.exists()) {
      const allUsers = snapshot.val();
      const siswaUsers = Object.values(allUsers).filter(
        (user) => user.role === "siswa"
      );
      return siswaUsers;
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};

export const createUser = async (data) => {
  await set(child(db, `users/` + data.nisn), data);
};

export const loginUserGuru = async (data) => {
  const snapshot = await get(child(db, `users/` + data.nip));

  if (snapshot.exists()) {
    return snapshot.val();
  }

  return null;
};

export const loginUserSiswa = async (data) => {
  const snapshot = await get(child(db, `users/` + data.nisn));

  if (snapshot.exists()) {
    return snapshot.val();
  }

  return null;
};

export const getAllQuestion = async () => {
  try {
    const snapshot = await get(child(db, `question/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};

export const getAllCommunication = async () => {
  try {
    const snapshot = await get(child(db, `communication/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};

export const getAllKKM = async () => {
  try {
    const snapshot = await get(child(db, `kkm/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};

export const createKKM = async (data) => {
  await set(child(db, `kkm/` + data.name), data);
};

export const createMateri = async (data) => {
  await set(child(db, `materi/` + (data.nisn + data.bab + data.sub)), data);
};

export const createEvaluasi = async (data) => {
  await set(child(db, `evaluasi/` + (data.nisn + data.bab + data.sub)), data);
};

export const createBerlatih = async (data) => {
  await set(child(db, `berlatih/` + (data.nisn + data.bab + data.sub)), data);
};

export const createMenalar = async (data) => {
  await set(child(db, `menalar/` + (data.nisn + data.bab + data.sub)), data);
};

export const createMengamati = async (data) => {
  await set(child(db, `mengamati/` + (data.nisn + data.bab + data.sub)), data);
};

export const createMencoba = async (data) => {
  await set(child(db, `mencoba/` + (data.nisn + data.bab + data.sub)), data);
};

export const createKuis = async (data) => {
  await set(child(db, `kuis/` + (data.nisn + data.bab + data.sub)), data);
};

export const kkmKuis1 = async () => {
  try {
    const snapshot = await get(child(db, `kkm/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};

localStorage.setItem("kkm", JSON.stringify(await kkmKuis1()));

console.log(await kkmKuis1());

export const getMencoba = async () => {
  try {
    const snapshot = await get(child(db, `mencoba/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};

export const getMengamati = async () => {
  try {
    const snapshot = await get(child(db, `mengamati/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};
export const getBerlatih = async () => {
  try {
    const snapshot = await get(child(db, `berlatih/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};
export const getMenalar = async () => {
  try {
    const snapshot = await get(child(db, `menalar/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};

export const getMateri = async () => {
  try {
    const snapshot = await get(child(db, `materi/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};
export const getKuis = async () => {
  try {
    const snapshot = await get(child(db, `kuis/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};
export const getEvaluasi = async () => {
  try {
    const snapshot = await get(child(db, `evaluasi/`));

    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }

    return null;
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
  }
};

export async function deleteUser(nisn) {
  try {
    // Reference to the user data
    const userRef = child(db, `users/` + nisn);

    // Check if the user exists
    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      // Delete the user
      await set(userRef, null);
      Swal.fire({
        icon: "success",
        text: `Delete User Berhasil`,
      }).then(() => {
        window.location.href = "/app/guru/dashboard.html";
      });
    } else {
      return "User not found";
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
    return "Error deleting user";
  }
}

window.deleteUser = deleteUser;

export async function deleteMateri(nisn, materi) {
  try {
    const userRef = child(db, `materi/` + (nisn + materi));

    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      await set(userRef, null);
      Swal.fire({
        icon: "success",
        text: `Delete Materi Berhasil`,
      }).then(() => {
        window.location.href = "/app/guru/materi.html";
      });
    } else {
      return "User not found";
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
    return "Error deleting user";
  }
}

window.deleteMateri = deleteMateri;

export async function deleteKuis(uri) {
  try {
    const userRef = child(db, `kuis/` + uri);

    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      await set(userRef, null);
      Swal.fire({
        icon: "success",
        text: `Delete Kuis Berhasil`,
      }).then(() => {
        window.location.href = "/app/guru/kuis.html";
      });
    } else {
      return "User not found";
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
    return "Error deleting user";
  }
}

window.deleteKuis = deleteKuis;

export async function deleteEvaluasi(uri) {
  try {
    const userRef = child(db, `evaluasi/` + uri);

    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      await set(userRef, null);
      Swal.fire({
        icon: "success",
        text: `Delete Evaluasi Berhasil`,
      }).then(() => {
        window.location.href = "/app/guru/evaluasi.html";
      });
    } else {
      console.log("no data");
      return "User not found";
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
    return "Error deleting user";
  }
}

window.deleteEvaluasi = deleteEvaluasi;

export async function deleteKKM(id) {
  try {
    const userRef = child(db, `kkm/` + id);

    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      await set(userRef, null);
      Swal.fire({
        icon: "success",
        text: `Delete kmm Berhasil`,
      }).then(() => {
        window.location.href = "/app/guru/kkm.html";
      });
    } else {
      console.log("no data");
      return "kkm not found";
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
    return "Error kkm user";
  }
}

window.deleteKKM = deleteKKM;

export async function deleteBerlatih(uri) {
  try {
    const userRef = child(db, `berlatih/` + uri);

    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      await set(userRef, null);
      Swal.fire({
        icon: "success",
        text: `Delete Berlatih Berhasil`,
      }).then(() => {
        window.location.href = "/app/guru/berlatih.html";
      });
    } else {
      return "berlatih not found";
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
    return "Error deleting berlatih";
  }
}

window.deleteBerlatih = deleteBerlatih;

export async function deleteMencoba(uri) {
  try {
    const userRef = child(db, `mencoba/` + uri);

    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      await set(userRef, null);
      Swal.fire({
        icon: "success",
        text: `Delete Mencoba Berhasil`,
      }).then(() => {
        window.location.href = "/app/guru/mencoba.html";
      });
    } else {
      return "mencoba not found";
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
    return "Error deleting mencoba";
  }
}

window.deleteMencoba = deleteMencoba;

export async function deleteMengamati(uri) {
  try {
    const userRef = child(db, `mengamati/` + uri);

    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      await set(userRef, null);
      Swal.fire({
        icon: "success",
        text: `Delete Mengamati Berhasil`,
      }).then(() => {
        window.location.href = "/app/guru/mengamati.html";
      });
    } else {
      return "mengamati not found";
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
    return "Error deleting mengamati";
  }
}

window.deleteMengamati = deleteMengamati;

export async function deleteMenalar(uri) {
  try {
    const userRef = child(db, `menalar/` + uri);

    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
      await set(userRef, null);
      Swal.fire({
        icon: "success",
        text: `Delete Menalar Berhasil`,
      }).then(() => {
        window.location.href = "/app/guru/menalar.html";
      });
    } else {
      return "menalar not found";
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      message: "Error",
      text: error.message,
    });
    return "Error deleting menalar";
  }
}

window.deleteMenalar = deleteMenalar;
