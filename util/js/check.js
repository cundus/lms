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

      await createMateri(data).catch("error mengirim ke db!");

      setInterval(() => {
        localStorage.removeItem("sub1_1");
        localStorage.removeItem("sub1_2");
        localStorage.removeItem("sub1_3");
        localStorage.removeItem("sub1_4");
      }, 3000);
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

      await createMateri(data).catch("error mengirim ke db!");

      setInterval(() => {
        localStorage.removeItem("sub2_1");
        localStorage.removeItem("sub2_2");
        localStorage.removeItem("sub2_3");
      }, 3000);
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

      await createKuis(data);

      setInterval(() => {
        localStorage.removeItem("kuis1");
      }, 3000);
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

      await createKuis(data).catch("error mengirim ke db!");

      setInterval(() => {
        localStorage.removeItem("kuis2");
      }, 3000);
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

      await createEvaluasi(data).catch("error mengirim ke db!");

      setInterval(() => {
        localStorage.removeItem("evaluasi1");
      }, 3000);
    }
  } catch (error) {
    console.error();
  }
}

insertEvaluasi();
insertKuis();
insertSub();