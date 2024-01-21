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
const listQuestionEleven = document.querySelector("#btn-kuis11");
const listQuestionTwelve = document.querySelector("#btn-kuis12");
const listQuestionThirteen = document.querySelector("#btn-kuis13");
const listQuestionFourteen = document.querySelector("#btn-kuis14");
const listQuestionFiveteen = document.querySelector("#btn-kuis15");
const listQuestionSixteen = document.querySelector("#btn-kuis16");
const listQuestionSeventeen = document.querySelector("#btn-kuis17");
const listQuestionEightteen = document.querySelector("#btn-kuis18");
const listQuestionNineteen = document.querySelector("#btn-kuis19");
const listQuestionTwenty = document.querySelector("#btn-kuis20");
const btnNextQuestionTwo = document.getElementById("btn-next");
const listButtonQuiz = document.getElementById("btn-kuis");
const dataSiswa = document.getElementById("list-data-siswa");
const nilaiEvaluasi = document.getElementById("nilai-evaluasi1");

// add data siswa ke dom
const user = JSON.parse(localStorage.getItem("user"));
dataSiswa.innerHTML = Object.keys(user)
  .filter((key) => {
    if (
      key === "email" ||
      key === "name" ||
      key === "sekolah" ||
      key === "kelas"
    ) {
      return key;
    }
  })
  .map((key) => {
    return `<li>${key}: ${user[key]}</li>`;
  })
  .join("\n");

const nilai = parseInt(localStorage.getItem("evaluasi1_1"));
nilaiEvaluasi.innerHTML = `<p>Nilai Evaluasi : ${nilai ? nilai : 0}</p>`;

let numberQuiz = 1;
btnStart.addEventListener("click", () => {
  startQuiz();
});
btnNextQuestionTwo.addEventListener("click", nextQuestion);
btnPrev.addEventListener("click", previousQuestion);

const selectedAnswers = Array.from({ length: 10 }, () => undefined); // To store selected answers for each question

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
  if (numberQuiz < 20) {
    const selectedOption = document.querySelector(
      `input[name="evaluasi1_${numberQuiz}"]:checked`
    );
    if (selectedOption) {
      selectedAnswers[numberQuiz - 1] = selectedOption.value;
    }

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
        taskResult(`evaluasi`);
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
              window.location.href = "./evaluasi.html";
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
  const selectedOption = document.querySelector(
    `input[name="evaluasi1_${numberQuiz}"]:checked`
  );
  if (selectedOption) {
    selectedAnswers[numberQuiz - 1] = selectedOption.value;
  }

  numberQuiz--;
  renderQuiz();
}

function renderQuiz() {
  let additionalHTML = "";
  const numberQuestion = document.querySelector("#nomor-kuis");
  const answerQuestion = document.getElementById("jawaban-kuis");

  const selectedAnswer = selectedAnswers[numberQuiz - 1];
  if (selectedAnswer) {
    const selectedOption = document.getElementById(selectedAnswer);
    if (selectedOption) {
      selectedOption.checked = true;
    }
  }

  // console.log("running quiz no ", numberQuiz);
  switch (numberQuiz) {
    case 1:
      btnPrev.classList.add("hidden");
      listQuestionOne.classList.add("bg-black", "text-white");
      listQuestionTwo.classList.remove("bg-black", "text-white");
      btnNextQuestionTwo.innerText = "Selanjutnya";
      numberQuestion.innerText =
        "1. Budi mempunyai koleki e-nam topi. Lambang bilangan e-nam adalah …";

      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/S1.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span><br />
           <div class="flex">
           <div>
           <input type="radio" id="a1" name="evaluasi1_1" value="a" />
           <label for="a1">a. 
            <img src="/assets/image/evaluasi/new/6.png" />
           </label><br />
           </div>
           <div>
           <input type="radio" id="b1" name="evaluasi1_1" value="b" />
           <label for="b1">b. 
           <img src="/assets/image/evaluasi/new/5.png" />
           </label><br />
           </div>
           <div>
           <input type="radio" id="c1" name="evaluasi1_1" value="c" />
           <label for="c1">c. 
           <img src="/assets/image/evaluasi/new/4.png" />
           </label><br />
           </div>
           </div>
            `;
      break;
    case 2:
      numberQuestion.innerText = "2. Nama lambang bilangan li-ma adalah …";
      btnPrev.classList.remove("hidden");
      listQuestionTwo.classList.add("bg-black", "text-white");
      listQuestionOne.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/S2.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
           <div class="flex">
           <div>
           <input type="radio" id="a2" name="evaluasi1_2" value="a" />
           <label for="a2">a. 
           <img src="/assets/image/evaluasi/new/4.png" />
           </label><br />
           </div>
           <div>
           <input type="radio" id="b2" name="evaluasi1_2" value="b" />
           <label for="b2">b. 
           <img src="/assets/image/evaluasi/new/5.png" />
           </label><br />
           </div>
            <div>
            <input type="radio" id="c2" name="evaluasi1_2" value="c" />
            <label for="c2">c. 
            <img src="/assets/image/evaluasi/new/6.png" />
            </label><br />
            </div>
           </div>
            `;
      break;
    case 3:
      numberQuestion.innerText =
        "3. Wina memelihara Iguana, Iguana Wina berjumlah em-pat. Lambang bilangan em-pat adalah …";
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionFour.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.add("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/S3.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
         <div class="flex">
         <div>
         <input type="radio" id="a3" name="evaluasi1_3" value="a" />
         <label for="a3">a. 
         <img src="/assets/image/evaluasi/new/2.png" />
         </label><br />
         </div>
         <div>
         <input type="radio" id="b3" name="evaluasi1_3" value="b" />
         <label for="b3">b. 
         <img src="/assets/image/evaluasi/new/3.png" />
         </label><br />
         </div>
        <div>
        <input type="radio" id="c3" name="evaluasi1_3" value="c" />
        <label for="c3">c. 
        <img src="/assets/image/evaluasi/new/4.png" />
        </label><br />
        </div>
         </div>
            `;
      break;
    case 4:
      numberQuestion.innerText = "4. Lambang bilangan 4 dibaca …";
      listQuestionOne.classList.remove("bg-black", "text-white");
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.remove("bg-black", "text-white");
      listQuestionFour.classList.add("bg-black", "text-white");
      listQuestionFive.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/S4.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
        <div class="flex gap-14">
        <div>
        <input type="radio" id="a4" name="evaluasi1_4" value="a" />
        <label for="a4">a. Em-pat </label><br />
        </div>
        <div>
        <input type="radio" id="b4" name="evaluasi1_4" value="b" />
        <label for="b4">b. Ti-ga</label><br />
        </div>
        <div>
        <input type="radio" id="c4" name="evaluasi1_4" value="c" />
        <label for="c4">c. Du-a</label><br />
        </div>
        </div>
          `;
      break;
    case 5:
      numberQuestion.innerText = "5. Lambang bilangan delapan adalah …";
      listQuestionFour.classList.remove("bg-black", "text-white");
      listQuestionFive.classList.add("bg-black", "text-white");
      listQuestionSix.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/S5.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
         <div class="flex">
         <div>
         <input type="radio" id="a5" name="evaluasi1_5" value="a" />
         <label for="a5">a. 
         <img src="/assets/image/evaluasi/new/7.png" />
         </label><br />
         </div>
         <div>
         <input type="radio" id="b5" name="evaluasi1_5" value="b" />
         <label for="b5">b. 
         <img src="/assets/image/evaluasi/new/8.png" />
         </label><br />
         </div>
         <div>
         <input type="radio" id="c5" name="evaluasi1_5" value="c" />
         <label for="c5">c. 
         <img src="/assets/image/evaluasi/new/9.png" />
         </label><br />
         </div>
         </div>
          `;
      break;
    case 6:
      numberQuestion.innerText =
        "6. Perhatikan gambar dibawah ini, berilah tanda kurang dari (<), lebih banyak (>), dan sama banyak (=).";
      listQuestionFive.classList.remove("bg-black", "text-white");
      listQuestionSix.classList.add("bg-black", "text-white");
      listQuestionSeven.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <div class="flex flex-col ">
          <div class="flex justify-center items-center content-center">
          <img src="/assets/image/evaluasi/new/11.png" width="40%"/>
          <p>. . . </p>
          <img src="/assets/image/evaluasi/new/12.png" width="40%"/>
          </div>
          <div class="flex ml-44 gap-24">
          <p>8</p>
          <p>. . . </p>
          <p>3</p>
          </div>
         </div>
         <span onclick="play('/assets/sounds/evaluasi/S6.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
         <p>Tanda yang cocok untuk lebih banyak diatas adalah …</p>
          <div class="flex gap-14">
          <div>
          <input type="radio" id="a6" name="evaluasi1_6" value="a" />
          <label for="a6">a. =</label><br />
          </div>
          <div>
          <input type="radio" id="b6" name="evaluasi1_6" value="b" />
          <label for="b6">b. <</label><br />
          </div>
          <div>
          <input type="radio" id="c6" name="evaluasi1_6" value="c" />
          <label for="c6">c. ></label><br />
          </div>
          </div>
          `;
      break;
    case 7:
      numberQuestion.innerText =
        "7. Perhatikan gambar dibawah ini, berilah tanda kurang dari (<), lebih banyak (>), dan sama banyak (=).";
      listQuestionSix.classList.remove("bg-black", "text-white");
      listQuestionSeven.classList.add("bg-black", "text-white");
      listQuestionEight.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <div class="flex flex-col ">
      <div class="flex justify-center items-center content-center">
      <img src="/assets/image/evaluasi/new/13.png" width="40%"/>
      <p>. . . </p>
      <img src="/assets/image/evaluasi/new/14.png" width="40%"/>
      </div>
      <div class="flex ml-44 gap-24">
      <p>3</p>
      <p>. . . </p>
      <p>5</p>
      </div>
     </div>
         <span onclick="play('/assets/sounds/evaluasi/S7.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> 
         <p>Tanda yang cocok untuk mengisi titik-titik di atas adalah . . .</p>
         <div class="flex gap-14">
         <div>
         <input type="radio" id="a7" name="evaluasi1_7" value="a" />
         <label for="a7">a. ></label><br />
         </div>
          <div>
          <input type="radio" id="b7" name="evaluasi1_7" value="b" />
          <label for="b7">b. =</label><br />
          </div>
          <div>
          <input type="radio" id="c7" name="evaluasi1_7" value="c" />
          <label for="c7">c. <</label><br />
          </div>
         </div>
          `;
      break;
    case 8:
      numberQuestion.innerText =
        "8. Perhatikan gambar di bawah ini, berilah tanda kurang dari (<), lebih dari (>) dan sama dengan (=) .";
      listQuestionSeven.classList.remove("bg-black", "text-white");
      listQuestionEight.classList.add("bg-black", "text-white");
      listQuestionNine.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <div class="flex flex-col ">
      <div class="flex justify-center items-center content-center">
      <img src="/assets/image/evaluasi/new/15.png" width="40%"/>
      <p>. . . </p>
      <img src="/assets/image/evaluasi/new/16.png" width="40%"/>
      </div>
      <div class="flex ml-44 gap-24">
      <p>4</p>
      <p>. . . </p>
      <p>2</p>
      </div>
     </div>
         <span onclick="play('/assets/sounds/evaluasi/S8.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> 
         <br />
         <p>Tanda yang cocok untuk mengisi titik-titik di atas adalah . . .</p>
         <div class="flex gap-14">
         <div>
         <input type="radio" id="a8" name="evaluasi1_8" value="a" />
         <label for="a8">a. =</label><br />
         </div>
         <div>
         <input type="radio" id="b8" name="evaluasi1_8" value="b" />
         <label for="b8">b. <</label><br />
         </div>
         <div>
         <input type="radio" id="c8" name="evaluasi1_8" value="c" />
         <label for="c8">c. ></label><br />
         </div>
         </div>
          `;
      break;
    case 9:
      numberQuestion.innerText =
        "9. Perhatikan gambar di bawah ini, berilah tanda kurang dari (<), lebih dari (>) dan sama dengan (=) .";
      listQuestionEight.classList.remove("bg-black", "text-white");
      listQuestionNine.classList.add("bg-black", "text-white");
      listQuestionTen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <div class="flex flex-col ">
      <div class="flex justify-center items-center content-center">
      <img src="/assets/image/evaluasi/new/17.png" width="40%"/>
      <p>. . . </p>
      <img src="/assets/image/evaluasi/new/18.png" width="40%"/>
      </div>
      <div class="flex ml-44 gap-24">
      <p>5</p>
      <p>. . . </p>
      <p>3</p>
      </div>
     </div>
         <span onclick="play('/assets/sounds/evaluasi/S9.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> 
          <br />
          <p>Tanda yang cocok untuk mengisi titik-titik di atas adalah . . .</p>
        <div class="flex gap-14">
        <div>
        <input type="radio" id="a9" name="evaluasi1_9" value="a" />
        <label for="a9">a. ></label><br />
        </div>
          <div>
          <input type="radio" id="b9" name="evaluasi1_9" value="b" />
          <label for="b9">b. <</label><br />
          </div>
         <div>
         <input type="radio" id="c9" name="evaluasi1_9" value="c" />
         <label for="c9">c. =</label><br />
         </div>
        </div>
          `;
      break;
    case 10:
      numberQuestion.innerText =
        "10. . Dibawah ini urutan bilangan yang benar dari terbesar ke terkecil adalah …";
      listQuestionTen.classList.add("bg-black", "text-white");
      listQuestionNine.classList.remove("bg-black", "text-white");
      listQuestionEleven.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/S10.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <br/>
         <div class="flex flex-col">
         <div>
         <input type="radio" id="a10" name="evaluasi1_10" value="a" />
          <label for="a10">a. 
          <img src="/assets/image/evaluasi/new/19.png" class="w-80"/>
          </label><br />
          </div>
          <div>
          <input type="radio" id="b10" name="evaluasi1_10" value="b" />
          <label for="b10">b. 
          <img src="/assets/image/evaluasi/new/20.png" class="w-80"/>
          </label><br />
          </div>
          <div>
          <input type="radio" id="c10" name="evaluasi1_10" value="c" />
          <label for="c10">c. 
          <img src="/assets/image/evaluasi/new/21.png" class="w-80"/>
          </label><br />   
          </div>
         </div>
          `;
      break;
    case 11:
      numberQuestion.innerText =
        "11. Dibawah ini urutan bilangan yang benar dari terkecil ke terbesar adalah …";
      listQuestionTen.classList.remove("bg-black", "text-white");
      listQuestionEleven.classList.add("bg-black", "text-white");
      listQuestionTwelve.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/S11.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
            <div class="flex flex-col">
            <div>
            <input type="radio" id="a11" name="evaluasi1_11" value="a" />
            <label for="a11">a. <img src="/assets/image/evaluasi/new/21.png" class="w-80"/> </label><br />
            </div>
            <div>
            <input type="radio" id="b11" name="evaluasi1_11" value="b" />
            <label for="b11">b. <img src="/assets/image/evaluasi/new/24.png" class="w-80"/> </label><br />
            </div>
            <div>
            <input type="radio" id="c11" name="evaluasi1_11" value="c" />
            <label for="c11">c. <img src="/assets/image/evaluasi/new/25.png" class="w-80"/> </label><br />
            </div>
            </div>
        `;
      break;
    case 12:
      numberQuestion.innerText =
        "12. Dibawah ini urutan bilangan yang benar dari terbesar ke terkecil, kecuali adalah …";
      listQuestionEleven.classList.remove("bg-black", "text-white");
      listQuestionTwelve.classList.add("bg-black", "text-white");
      listQuestionThirteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/S12.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
           <div class="flex flex-col">
           <div>
           <input type="radio" id="a12" name="evaluasi1_12" value="a" />
           <label for="a12">a. <img src="/assets/image/evaluasi/new/24.png" class="w-80"/> </label><br />
           </div>
          <div>
          <input type="radio" id="b12" name="evaluasi1_12" value="b" />
          <label for="b12">b. <img src="/assets/image/evaluasi/new/26.png" class="w-80"/> </label><br />
          </div>
           <div>
           <input type="radio" id="c12" name="evaluasi1_12" value="c" />
           <label for="c12">c. <img src="/assets/image/evaluasi/new/27.png" class="w-80"/> </label><br />
           </div>
           </div>
        `;
      break;
    case 13:
      numberQuestion.innerText =
        "13. Dibawah ini yang pasangan bilangan yang benar jika dijumlahkan menjadi bilangan baru hasilnya menjadi 4 kecuali adalah …";
      listQuestionTwelve.classList.remove("bg-black", "text-white");
      listQuestionThirteen.classList.add("bg-black", "text-white");
      listQuestionFourteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/S13.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
           <div class="flex">
           <div>
           <input type="radio" id="a13" name="evaluasi1_13" value="a" />
           <label for="a13">a. <img src="/assets/image/evaluasi/new/28.png" class="w-80"/> </label><br />
           </div>
            <div>
            <input type="radio" id="b13" name="evaluasi1_13" value="b" />
            <label for="b13">b. <img src="/assets/image/evaluasi/new/29.png" class="w-80"/> </label><br />
            </div>
            <div>
            <input type="radio" id="c13" name="evaluasi1_13" value="c" />
            <label for="c13">c. <img src="/assets/image/evaluasi/new/30.png" class="w-80"/> <br />
            </div>
           </div>
        `;
      break;
    case 14:
      numberQuestion.innerText =
        "14. Dibawah ini yang pasangan bilangan yang benar jika dijumlahkan menjadi bilangan baru hasilnya menjadi 10 adalah …";
      listQuestionThirteen.classList.remove("bg-black", "text-white");
      listQuestionFourteen.classList.add("bg-black", "text-white");
      listQuestionFiveteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/S14.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
           <div class="flex">
           <div>
           <input type="radio" id="a14" name="evaluasi1_14" value="a" />
           <label for="a14">a. <img src="/assets/image/evaluasi/new/31.png" class="w-80"/> </label><br />
           </div>
            <div>
            <input type="radio" id="b14" name="evaluasi1_14" value="b" />
            <label for="b14">b. <img src="/assets/image/evaluasi/new/32.png" class="w-80"/> </label><br />
            </div>
            <div>
            <input type="radio" id="c14" name="evaluasi1_14" value="c" />
            <label for="c14">c. <img src="/assets/image/evaluasi/new/33.png" class="w-80"/> </label><br />
            </div>
           </div>
        `;
      break;
    case 15:
      numberQuestion.innerText =
        "15. Dibawah ini yang pasangan benda dan bilangannya yang sama adalah ….";
      listQuestionFourteen.classList.remove("bg-black", "text-white");
      listQuestionFiveteen.classList.add("bg-black", "text-white");
      listQuestionSixteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/S15.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
            <div class="flex">
            <div>
            <input type="radio" id="a15" name="evaluasi1_15" value="a" />
            <label for="a15">a. <img src="/assets/image/evaluasi/new/34.png" class="w-80"/> </label><br />
            </div>
            <div>
            <input type="radio" id="b15" name="evaluasi1_15" value="b" />
            <label for="b15">b. <img src="/assets/image/evaluasi/new/35.png" class="w-80"/> </label><br />
            </div>
           <div>
           <input type="radio" id="c15" name="evaluasi1_15" value="c" />
           <label for="c15">c. <img src="/assets/image/evaluasi/new/36.png" class="w-80"/> </label><br />
           </div>
            </div>
        `;
      break;
    case 16:
      numberQuestion.innerText =
        "16. Dibawah ini yang bukan pasangan benda dn bilangan yang sama adalah …";
      listQuestionFiveteen.classList.remove("bg-black", "text-white");
      listQuestionSixteen.classList.add("bg-black", "text-white");
      listQuestionSeventeen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/S16.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
            <div class="flex">
            <div>
            <input type="radio" id="a16" name="evaluasi1_16" value="a" />
            <label for="a16">a. <img src="/assets/image/evaluasi/new/37.png" class="w-80"/> </label><br />
            </div>
            <div>
            <input type="radio" id="b16" name="evaluasi1_16" value="b" />
            <label for="b16">b. <img src="/assets/image/evaluasi/new/38.png" class="w-80"/> </label><br />
            </div>
            <div>
            <input type="radio" id="c16" name="evaluasi1_16" value="c" />
            <label for="c16">c. <img src="/assets/image/evaluasi/new/39.png" class="w-80"/> </label><br />
            </div>
            </div>
        `;
      break;
    case 17:
      numberQuestion.innerText = "17. Perhatikan cerita di bawah ini.";
      listQuestionSixteen.classList.remove("bg-black", "text-white");
      listQuestionSeventeen.classList.add("bg-black", "text-white");
      listQuestionEightteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <span onclick="play('/assets/sounds/evaluasi/S17.m4a')"><img
      src="/assets/image/sound.png"
      class="w-6 h-6 cursor-pointer select-none" /></span> <br />
      <div class="flex items-center justify-center content-center">
            <img class="w-48" src="/assets/image/evaluasi/new/40.png" />
            <p>+</p>
            <img class="w-48" src="/assets/image/evaluasi/new/41.png" />
            <p>=</p>
            <img class="w-48" src="/assets/image/evaluasi/new/42.png" />
         </div>
      <p>Ibu mempunyai 4 meja dirumahnya</p>
      <p>Kemudian ibu membeli 2 meja</p>
      <p>Maka berapakah semua meja ibu ...</p> <br />
      <p>Jawaban yang tepat untuk cerita diatas adalah …</p>
         <div class="flex gap-14">
         <div>
         <input type="radio" id="a17" name="evaluasi1_17" value="a" />
         <label for="a17">a. 4 + 2 = 6</label><br />
         </div>
         <div>
         <input type="radio" id="b17" name="evaluasi1_17" value="b" />
         <label for="b17">b. 2 + 4 = 8</label><br />
         </div>
         <div>
         <input type="radio" id="c17" name="evaluasi1_17" value="c" />
         <label for="c17">c. 8 + 2 = 10</label><br />
         </div>
         </div>
      `;
      break;
    case 18:
      numberQuestion.innerText = "18. Perhatikan cerita di bawah ini. ";
      listQuestionSeventeen.classList.remove("bg-black", "text-white");
      listQuestionEightteen.classList.add("bg-black", "text-white");
      listQuestionNineteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <span onclick="play('/assets/sounds/evaluasi/S18.m4a')"><img
      src="/assets/image/sound.png"
      class="w-6 h-6 cursor-pointer select-none" /></span> <br />
      <div class="flex items-center justify-center content-center">
            <img class="w-48" src="/assets/image/evaluasi/new/43.png" />
            <p>+</p>
            <img class="w-48" src="/assets/image/evaluasi/new/44.png" />
            <p>=</p>
            <img class="w-48" src="/assets/image/evaluasi/new/45.png" />
         </div>
         <p>Ibu memiliki 2 apel </p>
      <p>Kemudian ibu memakan 1 apel</p>
      <p>Maka sisa berapa apel ibu ...</p> <br />
      <p>Jawaban yang tepat untuk cerita diatas adalah …</p>
         <div class="flex gap-14">
         <div>
         <input type="radio" id="a18" name="evaluasi1_18" value="a" />
         <label for="a18">a. 2 − 1 = 1</label><br />
         </div>
          <div>
          <input type="radio" id="b18" name="evaluasi1_18" value="b" />
          <label for="b18">b. 1 − 1 = 0</label><br />
          </div>
         <div>
         <input type="radio" id="c18" name="evaluasi1_18" value="c" />
         <label for="c18">c. 3 − 3 = 0</label><br />
         </div>
         </div>
      `;
      break;
    case 19:
      numberQuestion.innerText = "19. Sepuluh dikurang dua sama dengan 8";
      listQuestionEightteen.classList.remove("bg-black", "text-white");
      listQuestionNineteen.classList.add("bg-black", "text-white");
      listQuestionTwenty.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/S19.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
        <div class="flex gap-14">
        <div>
        <input type="radio" id="a19" name="evaluasi1_19" value="a" />
        <label for="a19">a. 10 − 2 = 8</label><br />
        </div>
        <div>
        <input type="radio" id="b19" name="evaluasi1_19" value="b" />
        <label for="b19">b. 6 − 3 = 3</label><br />
        </div>
        <div>
        <input type="radio" id="c19" name="evaluasi1_19" value="c" />
        <label for="c19">c. 6 + 3 = 9</label><br />
        </div>
        </div>
        `;
      break;
    case 20:
      numberQuestion.innerText = "20. Enam ditambah satu sama dengan tujuh";
      listQuestionNineteen.classList.remove("bg-black", "text-white");
      listQuestionTwenty.classList.add("bg-black", "text-white");
      btnPrev.classList.add("hidden");
      btnNextQuestionTwo.innerText = "Selesaikan Evaluasi";

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/S20.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <br/>
        <div class="flex gap-14">
        <div>
        <input type="radio" id="a20" name="evaluasi1_20" value="a" />
         <label for="a20">a. 6 + 1 = 7</label><br />
        </div>
         <div>
         <input type="radio" id="b20" name="evaluasi1_20" value="b" />
         <label for="b20">b. 6 + 2 = 8</label><br />
         </div>
         <div>
         <input type="radio" id="c20" name="evaluasi1_20" value="c" />
         <label for="c20">c. 6 + 3 = 9</label><br />   
         </div>
        </div>
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
    let formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

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

function taskResult(type) {
  event.preventDefault();

  if (type === "evaluasi") {
    const kuisSets = "evaluasi1_20";
    let kuis_array = selectedAnswers;

    let setElements = document.getElementsByName(kuisSets);
    let setValue = getCheckedValue(setElements);
    console.log(setValue);
    kuis_array.splice(19, 1, setValue);
    console.log(kuis_array);

    const average = 20; //total soal

    const jawaban = [
      "a",
      "b",
      "c",
      "a",
      "b",
      "c",
      "c",
      "c",
      "c",
      "b",
      "b",
      "c",
      "c",
      "b",
      "b",
      "c",
      "a",
      "a",
      "a",
      "a",
    ]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, kuis_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("evaluasi1_1", total);
  } else {
    return null;
  }
  // totalPerSub();
}

function totalPerSub() {
  if (localStorage.getItem("evaluasi1_1")) {
    const evaluasi = parseInt(localStorage.getItem("evaluasi1_1"));

    localStorage.setItem("evaluasi1", evaluasi);
    setInterval(() => {
      localStorage.removeItem("evaluasi1_1");
    }, 1000);
  }
}

function getCheckedValue(elements) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
  return undefined; // Return undefined if no radio button is checked
}

function matchAdjacentElements(arr1, arr2) {
  // Check the length of arrays to ensure they are of the same length
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length");
  }

  // Array to store matching values
  const result = [];

  // Iterate through the arrays
  for (let i = 0; i < arr1.length; i++) {
    // Compare values at the current index
    if (arr1[i] === arr2[i]) {
      // If they match, add to the result array
      result.push(arr1[i]);
    }
  }

  return result;
}

const kuisData = JSON.parse(localStorage.getItem("kkm"));

// Function to check and display result for a specific name
function checkAndDisplayResultForName(name) {
  // Find the data object for the specified name
  const item = kuisData.find((data) => data.name === name);

  if (!item) {
    console.error(`No data found for name: ${name}`);
    return;
  }

  // Convert kkm and nilai to numbers
  const kkm = parseInt(item.kkm);
  const nilai = parseInt(localStorage.getItem("evaluasi1_1"));

  // Check if nilai is greater than or equal to kkm
  if (nilai >= kkm) {
    // If true, display "Selamat Anda Lulus Kuis"
    document.getElementById("kkm-evaluasi1").innerText =
      "Selamat Anda Lulus Kuis";
    document.getElementById("kkm-evaluasi1").style.color = "green";
  } else {
    // If false, display "Anda Belum Lulus Kuis"
    document.getElementById("kkm-evaluasi1").innerText =
      "Anda Belum Lulus Kuis";
    document.getElementById("kkm-evaluasi1").style.color = "red";
  }
}

// Simulate updating the HTML content with nilai values
// document.getElementById('kkm-kuis1').innerHTML = '<p id="evaluasi">80</p><p id="kuis 1">60</p><p id="kuis 2">85</p>';

// Call the function to check and display results for a specific name
checkAndDisplayResultForName("evaluasi");
