import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref, child, get } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
   apiKey: "AIzaSyDqc1dPg6B4qACoe8lJ7RUzHLT3rcOeqh4",
   authDomain: "lmsweb-4acb4.firebaseapp.com",
   projectId: "lmsweb-4acb4",
   storageBucket: "lmsweb-4acb4.appspot.com",
   databaseURL: "https://lmsweb-4acb4-default-rtdb.asia-southeast1.firebasedatabase.app/",
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
