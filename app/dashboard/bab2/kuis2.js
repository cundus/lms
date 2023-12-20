/**
 * ! DOM for Show or Hidden
 * & Function for Button Start DOM Show or Hide Question
 */
const btnStart = document.querySelector("#btn-start"); // ^ Button For Trigger Class Show or Hide Element this below
const showQuiz = document.querySelector("#soal-kuis"); // ^ Default Hide Element
const numbQuiz = document.querySelector("#nomor-soal"); // ^ Default Hide Element
const rulesQuiz = document.querySelector("#petunjuk-kuis"); // ^ Default Show Element
const dataStudent = document.querySelector("#data-siswa"); // ^ Default Show Element
const btnPrev = document.querySelector("#btn-previous"); // ^ DOM Button Previous Question
const listQuestionOne = document.querySelector("#btn-kuis1");
const listQuestionTwo = document.querySelector("#btn-kuis2");
const listQuestionThree = document.querySelector("#btn-kuis3");
const listQuestionFour = document.querySelector("#btn-kuis4");
const listQuestionFive = document.querySelector("#btn-kuis5");
const listQuestionSix = document.querySelector("#btn-kuis6");
const listQuestionSeven = document.querySelector("#btn-kuis7");
const listQuestionEight = document.querySelector("#btn-kuis8");
const listQuestionNine = document.querySelector("#btn-kuis9");
const listQuestionTen = document.querySelector("#btn-kuis10");
const btnNextQuestionTwo = document.getElementById("btn-next");
const listButtonQuiz = document.getElementById("btn-kuis");
const dataSiswa = document.getElementById("list-data-siswa");
// add data siswa ke dom
const user = JSON.parse(localStorage.getItem("user"));
dataSiswa.innerHTML = Object.keys(user)
   .filter((key) => {
      if (key === "email" || key === "name" || key === "sekolah" || key === "kelas") {
         return key;
      }
   })
   .map((key) => {
      return `<li>${key}: ${user[key]}</li>`;
   })
   .join("\n");

let numberQuiz = 1;
btnStart.addEventListener("click", () => {
   startQuiz();
});
btnNextQuestionTwo.addEventListener("click", nextQuestion);
btnPrev.addEventListener("click", previousQuestion);

function startQuiz() {
   Swal.fire({
      title: "Apakah kamu yakin ingin memulai kuis ini?",
      text: "Kamu tidak bisa keluar dan masuk kembali sebelum menekan tombol selesaikan kuis di akhir kuis ini, jika kamu keluar, maka nilai kamu 0!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Saya yakin ingin memulai kuis ini",
   }).then((result) => {
      if (result.isConfirmed) {
         Swal.fire({
            title: "Akan tertutup otomatis",
            html: "Proses menyiapkan kuis dalam waktu <b></b> milidetik.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
               Swal.showLoading();
               const timer = Swal.getPopup().querySelector("b");
               timerInterval = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
               }, 5);
            },
            willClose: () => {
               clearInterval(timerInterval);
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Selamat Mengerjakan",
                  showConfirmButton: false,
                  timer: 1500,
               });
               rulesQuiz.classList.add("hidden");
               dataStudent.classList.add("hidden");
               showQuiz.classList.remove("hidden");
               numbQuiz.classList.remove("hidden");
               startCountdown();
               renderQuiz();
            },
         }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
               console.log("I was closed by the timer");
            }
         });
      }
   });
}

function nextQuestion() {
   if (numberQuiz < 10) {
      numberQuiz++;
      renderQuiz();
   } else {
      Swal.fire({
         title: "Apakah kamu yakin ingin menyelesaikan kuis ini?",
         text: "Kamu tidak bisa mengubahnya kembali!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Ya, Saya yakin ingin menyelesaikan kuis ini",
      }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire({
               title: "Akan tertutup otomatis",
               html: "Proses menyelesaikan dalam waktu <b></b> milidetik.",
               timer: 3000,
               timerProgressBar: true,
               didOpen: () => {
                  Swal.showLoading();
                  const timer = Swal.getPopup().querySelector("b");
                  timerInterval = setInterval(() => {
                     timer.textContent = `${Swal.getTimerLeft()}`;
                  }, 100);
               },
               willClose: () => {
                  Swal.fire({
                     position: "center",
                     icon: "success",
                     title: "Terima kasih telah mengerjakan kuis ini",
                     showConfirmButton: false,
                     timer: 1500,
                  });
                  clearInterval(timerInterval);
                  window.setTimeout(function () {
                     window.location.href = "./kuis2.html";
                  }, 1500);
               },
            }).then((result) => {
               /* Read more about handling dismissals below */
               if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
               }
            });
         }
      });
   }
}

function previousQuestion() {
   numberQuiz--;
   renderQuiz();
}

function renderQuiz() {
   let additionalHTML = "";
   const numberQuestion = document.querySelector("#nomor-kuis");
   const answerQuestion = document.getElementById("jawaban-kuis");

   // console.log("running quiz no ", numberQuiz);
   switch (numberQuiz) {
      case 1:
         btnPrev.classList.add("hidden");
         listQuestionOne.classList.add("bg-black", "text-white");
         listQuestionTwo.classList.remove("bg-black", "text-white");
         btnNextQuestionTwo.innerText = "Selanjutnya";
         numberQuestion.innerText = "1. Perhatikan cerita di bawah ini!";

         answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K1.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <table>
            <tbody>
                <tr>
                    <td><p>Ibu membeli 8 pisang di pasar</p></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 1 (3).png"/></td>
                </tr>
                <tr>
                    <td><p>Saat sampai di rumah 1 pisang di makan oleh adik.</p></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 1 (1).png"/></td>
                </tr>
                <tr>
                    <td><p>Maka sisa pisang yang d miliki ibu sekarang adalah ?</p></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 1 (2).png"/></td>
                </tr>
            </tbody>
         </table>
         <br/>
         <p>Banyak pisang yang di miliki – pisang yang di makan banyak <br />
          . . . . − . . . . = . . . .</p> <br />
            <input type="radio" id="a1" name="kuis1" value="jawabanA" />
            <label for="a1">a. 8 – 2 = 6</label><br />
            <input type="radio" id="b1" name="kuis1" value="JawabanB" />
            <label for="b1">b. 8 – 1 = 7</label><br />
            <input type="radio" id="c1" name="kuis1" value="JawabanC" />
            <label for="c1">c. 8 – 0 = 8</label><br />
            `;
         break;
      case 2:
         numberQuestion.innerText = "2. Perhatikan cerita di bawah ini!";
         btnPrev.classList.remove("hidden");
         listQuestionTwo.classList.add("bg-black", "text-white");
         listQuestionOne.classList.remove("bg-black", "text-white");
         listQuestionThree.classList.remove("bg-black", "text-white");

         // Output kode HTML yang diberikan
         answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K2.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <table>
            <tbody>
                <tr>
                    <td><p>Dini memiliki banyak koleksi boneka beruang.
                    Salah satu boneka beruang berwarna cokelat Dini ada 5.</p></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 2 (1).png"/></td>
                </tr>
                <tr>
                    <td><p>Lalu Dini ke mal bersama ibunya membeli lagi boneka
                    beruang berwarna pink sebanyak 5.</p></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 2 (2).png"/></td>
                </tr>
                <tr>
                    <td><p>Maka berapa banyak koleksi boneka beruang
                    berwarna pink di miliki Dini sekarang ?</p></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 2 (3).png"/></td>
                </tr>
            </tbody>
         </table>
         <br/>
         <p>Banyak boneka beruang berwarna pink ditambah banyak boneka beruang warna pink yang baru di beli <br />
         . . . . + . . . . = . . . .
         </p>
            <input type="radio" id="a2" name="kuis1" value="jawabanA" />
            <label for="a2">a. 5 + 5 = 10 </label><br />
            <input type="radio" id="b2" name="kuis1" value="JawabanB" />
            <label for="b2">b. 5 + 4 = 9</label><br />
            <input type="radio" id="c2" name="kuis1" value="JawabanC" />
            <label for="c2">c. 5 + 3 = 8</label><br />
            `;
         break;
      case 3:
         numberQuestion.innerText = "3. Sepuluh dikurang enam sama dengan empat . . .";
         listQuestionTwo.classList.remove("bg-black", "text-white");
         listQuestionFour.classList.remove("bg-black", "text-white");
         listQuestionThree.classList.add("bg-black", "text-white");

         // Output kode HTML yang diberikan
         answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K3.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <input type="radio" id="a3" name="kuis1" value="jawabanA" />
         <label for="a3">a. 10 – 6 = 4</label><br />
         <input type="radio" id="b3" name="kuis1" value="JawabanB" />
         <label for="b3">b. 4 – 6 = 10</label><br />
         <input type="radio" id="c3" name="kuis1" value="JawabanC" />
         <label for="c3">c. 6 – 4 = 2</label><br />
            `;
         break;
      case 4:
         numberQuestion.innerText = "4. Empat ditambah enam sama dengan sepuluh . . .";
         listQuestionOne.classList.remove("bg-black", "text-white");
         listQuestionTwo.classList.remove("bg-black", "text-white");
         listQuestionThree.classList.remove("bg-black", "text-white");
         listQuestionFour.classList.add("bg-black", "text-white");
         listQuestionFive.classList.remove("bg-black", "text-white");

         // Output kode HTML yang diberikan
         answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K4.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <input type="radio" id="a4" name="kuis1" value="jawabanA" />
         <label for="a4">a. 4 + 6 = 10</label><br />
         <input type="radio" id="b4" name="kuis1" value="JawabanB" />
         <label for="b4">b. 6 – 3 = 9</label><br />
         <input type="radio" id="c4" name="kuis1" value="JawabanC" />
         <label for="c4">c. 6 + 1 = 7</label><br />
          `;
         break;
      case 5:
         numberQuestion.innerText =
            "5. Perhatikan gambar di bawah ini. Lengkapilah jawaban berikut . . .";
         listQuestionFour.classList.remove("bg-black", "text-white");
         listQuestionFive.classList.add("bg-black", "text-white");
         listQuestionSix.classList.remove("bg-black", "text-white");

         // Output kode HTML yang diberikan
         answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K5.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex flex-col items-center">
            <img class="w-auto" src="/assets/image/bab_2/Kuis 2/No 5.png" />
            <p>+</p>
            <img class="w-auto" src="/assets/image/bab_2/Kuis 2/No 5 (2).png" />
            <p>=</p>
            <img class="w-auto" src="/assets/image/bab_2/Kuis 2/No 5 (3).png" />
         </div>
         <p>Terdapat ada berapakah jumlah kucing berwarna orange . . . . .</p>
         <p>Terdapat ada berapakah jumlah kucing berwarna abu-abu . . . . .</p>
         <p>Maka berapakah jumlah semua kucing orange dan abu-abu . . . . .</p>
            <div>
            <input type="radio" id="a5" name="kuis1" value="jawabanA" />
            <p>a. Orange : 3</p>  
            <p>Abu-abu : 4</p>  
            <p>3 + 4 = 7</p>  
            </div>
            <div>
            <input type="radio" id="b5" name="kuis1" value="jawabanB" />
            <p>b. Orange : 3</p>  
            <p>Abu-abu : 3</p>  
            <p>3 + 3 = 6</p>  
            </div>
            <div>
            <input type="radio" id="c5" name="kuis1" value="jawabanC" />
            <p>c. Orange : 3</p>  
            <p>Abu-abu : 5</p>  
            <p>3 + 5 = 8</p>  
         </div>
          `;
         break;
      case 6:
         numberQuestion.innerText =
            "6. Perhatikan gambar di bawah. Manakah operasi pengurangan yang benar. . .";
         listQuestionFive.classList.remove("bg-black", "text-white");
         listQuestionSix.classList.add("bg-black", "text-white");
         listQuestionSeven.classList.remove("bg-black", "text-white");

         // Output kode HTML yang diberikan
         answerQuestion.innerHTML = `
         <div class="flex flex-col items-center">
            <img class="w-auto" src="/assets/image/bab_2/Kuis 2/No 6.png" />
            <p>+</p>
            <img class="w-auto" src="/assets/image/bab_2/Kuis 2/No 6 (2).png" />
            <p>=</p>
            <img class="w-auto" src="/assets/image/bab_2/Kuis 2/No 6 (3).png" />
         </div>
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K6.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <p>. . . . .   +   . . . . .   =   . . . . . </p> <br />
          <input type="radio" id="a6" name="kuis1" value="jawabanA" />
          <label for="a6">a. 2 - 1 = 1</label><br />
          <input type="radio" id="b6" name="kuis1" value="jawabanB" />
          <label for="b6">b. 1 -1 = 0</label><br />
          <input type="radio" id="c6" name="kuis1" value="jawabanC" />
          <label for="c6">c. 3 - 2 = 2</label><br />`;
         break;
      case 7:
         numberQuestion.innerText =
            "7. Perhatikan gambar dibawa. Manakah operasi perjumlahan yang benar . . .";
         listQuestionSix.classList.remove("bg-black", "text-white");
         listQuestionSeven.classList.add("bg-black", "text-white");
         listQuestionEight.classList.remove("bg-black", "text-white");

         // Output kode HTML yang diberikan
         answerQuestion.innerHTML = `
         <div class="flex flex-col items-center">
            <img class="w-auto" src="/assets/image/bab_2/Kuis 2/Soal 7 (3).png" />
            <p>+</p>
            <img class="w-auto" src="/assets/image/bab_2/Kuis 2/Soal 7 (1).png" />
            <p>=</p>
            <img class="w-auto" src="/assets/image/bab_2/Kuis 2/Soal 7 (2).png" />
         </div>
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K7.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <p>. . . . .   +   . . . . .   =   . . . . . </p> <br />
          <input type="radio" id="a7" name="kuis1" value="jawabanA" />
          <label for="a7">a. 4 + 5 = 9</label><br />
          <input type="radio" id="b7" name="kuis1" value="jawabanB" />
          <label for="b7">b. 4 + 4 = 8</label><br />
          <input type="radio" id="c7" name="kuis1" value="jawabanC" />
          <label for="c7">c. 5 + 2 = 7</label><br />
          `;
         break;
      case 8:
         numberQuestion.innerText =
            "8. Perhatikan gambar dibawah. Manakah operasi pengurangan yang benar . . .";
         listQuestionSeven.classList.remove("bg-black", "text-white");
         listQuestionEight.classList.add("bg-black", "text-white");
         listQuestionNine.classList.remove("bg-black", "text-white");

         // Output kode HTML yang diberikan
         answerQuestion.innerHTML = `
         <div class="flex flex-col items-center">
         <img class="w-auto" src="/assets/image/bab_2/Kuis 2/Soal 8 (3).png" />
         <p>+</p>
         <img class="w-auto" src="/assets/image/bab_2/Kuis 2/Soal 8 (1).png" />
         <p>=</p>
         <img class="w-auto" src="/assets/image/bab_2/Kuis 2/Soal 8 (2).png" />
         </div>
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K8.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <p>. . . . .   +   . . . . .   =   . . . . . </p> <br />
          <input type="radio" id="a8" name="kuis1" value="jawabanA" />
          <label for="a8">a. 5 - 3 = 2</label><br />
          <input type="radio" id="b8" name="kuis1" value="jawabanB" />
          <label for="b8">b. 3 - 2 = 1</label><br />
          <input type="radio" id="c8" name="kuis1" value="jawabanC" />
          <label for="c8">c. 4 - 1 = 3</label><br />
          `;
         break;
      case 9:
         numberQuestion.innerText =
            "9. Perhatikan gambar di bawah ini. Lengkapilah jawaban berikut.";
         listQuestionEight.classList.remove("bg-black", "text-white");
         listQuestionNine.classList.add("bg-black", "text-white");
         listQuestionTen.classList.remove("bg-black", "text-white");

         // Output kode HTML yang diberikan
         answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K9 part 1.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <table>
            <tbody>
                <tr>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 9 (2).png"/></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 9 (3).png"/></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 9 (1).png"/></td>
                </tr>
                <tr>
                    <td>Ibu membeli telur di pasar
                    sebanyak 9 butir
                    <span onclick="play('/assets/sounds/bab_2/Kuis 2/K9 part 1.m4a')"><img
                        src="/assets/image/sound.png"
                        class="w-6 h-6 cursor-pointer select-none" /></span>
                    </td>
                    <td>Akan tetapi ketika di
                    jalan ingin pulang 9
                    telur ibu 4 pecah di
                    jalan.
                    <span onclick="play('/assets/sounds/bab_2/Kuis 2/K9 part 2.m4a')"><img
                        src="/assets/image/sound.png"
                        class="w-6 h-6 cursor-pointer select-none" /></span>
                    </td>
                    <td>Maka sisa berapakah
                    telur ibu saat sampai di
                    rumah . . . . .
                    <span onclick="play('/assets/sounds/bab_2/Kuis 2/K9 part 3.m4a')"><img
                        src="/assets/image/sound.png"
                        class="w-6 h-6 cursor-pointer select-none" /></span>
                    </td>
                </tr>
            </tbody>
         </table>
         <br/>
         <input type="radio" id="a9" name="kuis1" value="jawabanA" />
          <label for="a9">a. 5</label><br />
          <input type="radio" id="b9" name="kuis1" value="jawabanB" />
          <label for="b9">b. 4</label><br />
          <input type="radio" id="c9" name="kuis1" value="jawabanC" />
          <label for="c9">c. 3</label><br />
          `;
         break;
      case 10:
         numberQuestion.innerText =
            "10. Perhatikan gambar di bawah ini. Lengkapilah jawaban berikut.";
         listQuestionTen.classList.add("bg-black", "text-white");
         listQuestionNine.classList.remove("bg-black", "text-white");
         btnPrev.classList.add("hidden");
         btnNextQuestionTwo.innerText = "Selesaikan Kuis";

         // Output kode HTML yang diberikan
         answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_2/Kuis 2/K9 part 1.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <table>
            <tbody>
                <tr>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 10 (1).png"/></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 10 (2).png"/></td>
                    <td><img src="/assets/image/bab_2/Kuis 2/No 10 (3).png"/></td>
                </tr>
                <tr>
                    <td>Santi memiliki kesukaan
                    dalam mengoleksi barang,
                    salah satunya santi
                    mengoleksi 3 payung.
                    <span onclick="play('/assets/sounds/bab_2/Kuis 2/K10 part 1.m4a')"><img
                        src="/assets/image/sound.png"
                        class="w-6 h-6 cursor-pointer select-none" /></span>
                    </td>
                    <td>Ketika Santi ingin membuka
                    ketiga payungnya akan tetapi
                    1 koleksi payung Santi rusak.
                    <span onclick="play('/assets/sounds/bab_2/Kuis 2/K10 part 2.m4a')"><img
                        src="/assets/image/sound.png"
                        class="w-6 h-6 cursor-pointer select-none" /></span>
                    </td>
                    <td>Maka sisa berapakah
                    koleksi payung Santi
                    sekarang di miliki . . . . .
                    <span onclick="play('/assets/sounds/bab_2/Kuis 2/K10 part 3.m4a')"><img
                        src="/assets/image/sound.png"
                        class="w-6 h-6 cursor-pointer select-none" /></span>
                    </td>
                </tr>
            </tbody>
         </table>
         <br/>
         <input type="radio" id="a10" name="kuis1" value="jawabanA" />
          <label for="a10">a. 1</label><br />
          <input type="radio" id="b10" name="kuis1" value="jawabanB" />
          <label for="b10">b. 2</label><br />
          <input type="radio" id="c10" name="kuis1" value="jawabanC" />
          <label for="c10">c. 3</label><br />   
          `;
         break;
      default:
         break;
   }
}

/**
 * & Function to count down
 */
function startCountdown() {
   let countdownElement = document.getElementById("countdown");
   let countdownTime = 30 * 60; // 30 menit dalam detik

   // * Start Count down
   let countdownInterval = setInterval(function () {
      let minutes = Math.floor(countdownTime / 60);
      let seconds = countdownTime % 60;

      // * Format waktu ke dalam jam:menit:detik
      let formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      // * Tampilkan waktu pada elemen countdown
      countdownElement.innerText = formattedTime;

      // * Kurangi waktu
      countdownTime--;

      // * Hentikan countdown jika waktu habis
      if (countdownTime < 0) {
         clearInterval(countdownInterval);
         countdownElement.innerText = "Waktu Habis!";
      }
   }, 1000);
}

// * Tambahkan event listener untuk tombol Start
// document.getElementById("btn-start").addEventListener("click", startCountdown);
document.getElementById("btn-start").addEventListener("click", startQuiz);
/**
 * & End Function to count down
 */
