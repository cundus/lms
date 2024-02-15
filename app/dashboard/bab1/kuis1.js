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
const nilaiKuis = document.getElementById("nilai-kuis1");
let hasilkuis = document.getElementById("hasil-kuis");
const dataSiswa2 = document.getElementById("list-data-siswa2");
let sidebar = document.getElementById("sidebar");

// add data siswa ke dom
const nilai = parseInt(localStorage.getItem("kuis1_1"));
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

// Customizable keys and their display names
const customKeys = [
  { key: "email", displayName: "Email" },
  { key: "name", displayName: "Nama" },
  { key: "sekolah", displayName: "Sekolah" },
  { key: "kelas", displayName: "Kelas" },
  { key: "nilaiKuis", displayName: "Nilai Kuis 1" }, // Add the new key-value pair for nilaiKuis
];

// Insert nilaiKuis into user object
user.nilaiKuis = nilai ? nilai : 0;

// Display nilaiKuis
nilaiKuis.innerHTML = `<p>Nilai Kuis 1 : ${user.nilaiKuis}</p>`;

// Display user data
dataSiswa2.innerHTML = customKeys
  .map(({ key, displayName }) => {
    // Map custom keys and values to HTML list items
    return `<li>${displayName} : ${user[key]}</li>`;
  })
  .join("\n");

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
          sidebar.remove();
          hasilkuis.remove();
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }
  });

  selectedAnswers.fill(undefined);
}

// Find the "Selesai" button by its id
const selesaiButton = document.querySelector("#selesai-button");

// Add an event listener to the button
selesaiButton.addEventListener("click", function () {
  // Execute the else block directly
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
      taskResult(`kuis`);
      console.log(selectedAnswers);
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
            window.location.href = "./kuis1.html";
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
});

function nextQuestion() {
  console.log(selectedAnswers);
  if (numberQuiz < 10) {
    const selectedOption = document.querySelector(
      `input[name="kuis1_${numberQuiz}"]:checked`
    );
    if (selectedOption) {
      selectedAnswers[numberQuiz - 1] = selectedOption.value;
    }

    numberQuiz++;
    renderQuiz();

    restoreSelectedAnswer();
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
        taskResult(`kuis`);
        console.log(selectedAnswers);
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
              window.location.href = "./kuis1.html";
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
    `input[name="kuis1_${numberQuiz}"]:checked`
  );
  if (selectedOption) {
    selectedAnswers[numberQuiz - 1] = selectedOption.value;
  }

  numberQuiz--;
  renderQuiz();

  restoreSelectedAnswer();
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

  for (let i = 1; i <= 10; i++) {
    const questionButton = document.querySelector(`#btn-kuis${i}`);
    if (questionButton) {
      questionButton.classList.remove("bg-black", "text-white");
    }
  }

  // Highlight the active question button
  const activeQuestionButton = document.querySelector(`#btn-kuis${numberQuiz}`);
  if (activeQuestionButton) {
    activeQuestionButton.classList.add("bg-black", "text-white");
  }

  // console.log("running quiz no ", numberQuiz);
  switch (numberQuiz) {
    case 1:
      btnPrev.classList.add("hidden");
      listQuestionOne.classList.add("bg-black", "text-white");
      listQuestionTwo.classList.remove("bg-black", "text-white");
      btnNextQuestionTwo.style.backgroundColor = "blue";
      btnNextQuestionTwo.innerText = "Selanjutnya";
      numberQuestion.innerText =
        "1. Beben mempunyai sepuluh sepeda. Lambang bilangan sepuluh adalah …";

      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S1.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
           <div class="flex">
           <div>
           <input type="radio" id="a1" name="kuis1_1" value="a" />
           <label for="a1">a. 
           <img src="/assets/image/bab_1/kuis_1/new/7.png" />
           </label><br />
           </div>
            <div>
            <input type="radio" id="b1" name="kuis1_1" value="b" />
            <label for="b1">b. 
            <img src="/assets/image/bab_1/kuis_1/new/8.png" />
            </label><br />
            </div>
            <div>
            <input type="radio" id="c1" name="kuis1_1" value="c" />
            <label for="c1">c. 
            <img src="/assets/image/bab_1/kuis_1/new/9.png" />
            </label><br />
            </div>
            </div>
            `;
      break;
    case 2:
      numberQuestion.innerText =
        "2. Dibawah ini termasuk dalam nama bilangan adalah …";
      btnPrev.classList.remove("hidden");
      listQuestionTwo.classList.add("bg-black", "text-white");
      listQuestionOne.classList.remove("bg-black", "text-white");
      btnNextQuestionTwo.style.backgroundColor = "blue";
      btnNextQuestionTwo.innerText = "Selanjutnya";
      listQuestionThree.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S2.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
         <div>
         <input type="radio" id="a2" name="kuis1_2" value="a" />
         a. <img src="/assets/image/bab_1/kuis_1/new/1.png"/><br />
         </div>
         <div>
         <input type="radio" id="b2" name="kuis1_2" value="b" />
         b. <img src="/assets/image/bab_1/kuis_1/new/2.png"/><br />
         </div>
         <div>
         <input type="radio" id="c2" name="kuis1_2" value="c" />
         c. <img src="/assets/image/bab_1/kuis_1/new/3.png"/><br />
         </div>
      </div>
            `;
      break;
    case 3:
      numberQuestion.innerText =
        "3. Dibawah ini termasuk dalam lambang bilangan adalah …";
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionFour.classList.remove("bg-black", "text-white");
      btnNextQuestionTwo.style.backgroundColor = "blue";
      btnNextQuestionTwo.innerText = "Selanjutnya";
      listQuestionThree.classList.add("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S3.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
            <div>
            <input type="radio" id="a3" name="kuis1_3" value="a" />
            a. <img src="/assets/image/bab_1/kuis_1/new/4.png"/><br />
            </div>
            <div>
            <input type="radio" id="b3" name="kuis1_3" value="b" />
            b. <img src="/assets/image/bab_1/kuis_1/new/5.png"/><br />
            </div>
            <div>
            <input type="radio" id="c3" name="kuis1_3" value="c" />
            c. <img src="/assets/image/bab_1/kuis_1/new/6.png"/><br />
            </div>
         </div>
            `;
      break;
    case 4:
      numberQuestion.innerText =
        "4. Berilah tanda kurang dari (<), lebih banyak (>), dan sama banyak (=)";
      listQuestionOne.classList.remove("bg-black", "text-white");
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.remove("bg-black", "text-white");
      listQuestionFour.classList.add("bg-black", "text-white");
      btnNextQuestionTwo.style.backgroundColor = "blue";
      btnNextQuestionTwo.innerText = "Selanjutnya";
      listQuestionFive.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <div class="flex flex-col ">
          <div class="flex justify-center items-center content-center">
          <img src="/assets/image/bab_1/kuis_1/new/10.png" width="40%"/>
          <p>. . . </p>
          <img src="/assets/image/bab_1/kuis_1/new/11.png" width="40%"/>
          </div>
          <div class="flex ml-44 gap-24">
          <p>8</p>
          <p>. . . </p>
          <p>3</p>
          </div>
         </div>
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S4.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <p>Tanda yang cocok untuk lebih banyak diatas adalah …</p>
         <br/>
          <input type="radio" id="a4" name="kuis1_4" value="a" />
          a. <label for="a4">></label><br />
          <input type="radio" id="b4" name="kuis1_4" value="b" />
          b. <label for="b4"><</label><br />
          <input type="radio" id="c4" name="kuis1_4" value="c" />
          c. <label for="c4">=</label><br />`;
      break;
    case 5:
      numberQuestion.innerText =
        "5. Berilah tanda kurang dari (<), lebih banyak (>), dan sama banyak (=)";
      listQuestionFour.classList.remove("bg-black", "text-white");
      listQuestionFive.classList.add("bg-black", "text-white");
      btnNextQuestionTwo.style.backgroundColor = "blue";
      btnNextQuestionTwo.innerText = "Selanjutnya";
      listQuestionSix.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <div class="flex flex-col ">
          <div class="flex justify-center items-center content-center">
          <img src="/assets/image/bab_1/kuis_1/new/12.png" width="40%"/>
          <p>. . . </p>
          <img src="/assets/image/bab_1/kuis_1/new/13.png" width="40%"/>
          </div>
          <div class="flex ml-44 gap-24">
          <p>5</p>
          <p>. . . </p>
          <p>6</p>
          </div>
         </div>
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S5.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <p>Tanda yang cocok untuk kurang diatas adalah …</p>
         <br/>
            <div>
            <input type="radio" id="a5" name="kuis1_5" value="a" />
            a. <label for="a5">></label><br />
            </div>
            <div>
            <input type="radio" id="b5" name="kuis1_5" value="b" />
            b. <label for="b5"><</label><br />
            </div>
            <div>
            <input type="radio" id="c5" name="kuis1_5" value="c" />
            c. <label for="c5">=</label><br />
         </div>
      </div>
          `;
      break;
    case 6:
      numberQuestion.innerText =
        "6. Berilah tanda kurang dari (<), lebih banyak (>), dan sama banyak (=)";
      listQuestionFive.classList.remove("bg-black", "text-white");
      listQuestionSix.classList.add("bg-black", "text-white");
      btnNextQuestionTwo.style.backgroundColor = "blue";
      btnNextQuestionTwo.innerText = "Selanjutnya";
      listQuestionSeven.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <div class="flex flex-col ">
      <div class="flex justify-center items-center content-center">
      <img src="/assets/image/bab_1/kuis_1/new/23.png" width="40%"/>
      <p>. . . </p>
      <img src="/assets/image/bab_1/kuis_1/new/24.png" width="40%"/>
      </div>
      <div class="flex ml-44 gap-24">
      <p>10</p>
      <p>. . . </p>
      <p>10</p>
      </div>
     </div>
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S6.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <p>Tanda yang cocok untuk sama banyak diatas adalah …</p>
         <br/>
          <input type="radio" id="a6" name="kuis1_6" value="a" />
          a. <label for="a6">></label><br />
          <input type="radio" id="b6" name="kuis1_6" value="b" />
          b. <label for="b6"><</label><br />
          <input type="radio" id="c6" name="kuis1_6" value="c" />
          c. <label for="c6">=</label><br />
          `;
      break;
    case 7:
      numberQuestion.innerText =
        "7. Urutan bilangan dibawah ini yang benar dari urutan terkecil ke terbesar adalah …";
      listQuestionSix.classList.remove("bg-black", "text-white");
      listQuestionSeven.classList.add("bg-black", "text-white");
      btnNextQuestionTwo.style.backgroundColor = "blue";
      btnNextQuestionTwo.innerText = "Selanjutnya";
      listQuestionEight.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S7.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
          <div class="flex">
          <div>
          <input type="radio" id="a7" name="kuis1_7" value="a" />
          <label for="a7">a.
          <img src="/assets/image/bab_1/kuis_1/new/17.png" />
          </label><br />
          </div>
          <div>
          <input type="radio" id="b7" name="kuis1_7" value="b" />
          <label for="b7">b.
          <img src="/assets/image/bab_1/kuis_1/new/18.png" />
          </label><br />
          </div>
          <div>
          <input type="radio" id="c7" name="kuis1_7" value="c" />
          <label for="c7">c.
          <img src="/assets/image/bab_1/kuis_1/new/25.png" width="1700px" class="mt-5" />
          </label><br />
          </div>
          </div>
          `;
      break;
    case 8:
      numberQuestion.innerText =
        "8. Urutan bilangan dibawah ini yang benar dari urutan terbesar ke terkecil adalah …";
      listQuestionSeven.classList.remove("bg-black", "text-white");
      listQuestionEight.classList.add("bg-black", "text-white");
      btnNextQuestionTwo.style.backgroundColor = "blue";
      btnNextQuestionTwo.innerText = "Selanjutnya";
      listQuestionNine.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S8.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
         <div>
         <input type="radio" id="a8" name="kuis1_8" value="a" />
         <label for="a8">a.
         <img src="/assets/image/bab_1/kuis_1/new/17.png" />
         </label><br />
         </div>
         <div>
         <input type="radio" id="b8" name="kuis1_8" value="b" />
         <label for="b8">b.
         <img src="/assets/image/bab_1/kuis_1/new/18.png" />
         </label><br />
         </div>
         <div>
         <input type="radio" id="c8" name="kuis1_8" value="c" />
         <label for="c8">c.
          <img src="/assets/image/bab_1/kuis_1/new/25.png" width="1700px" class="mt-5" />
          </label><br />
      </div>
          `;
      break;
    case 9:
      numberQuestion.innerText =
        "9. Di bawah ini yang pasangan item dan bilangannya sama adalah …";
      listQuestionEight.classList.remove("bg-black", "text-white");
      listQuestionNine.classList.add("bg-black", "text-white");
      btnNextQuestionTwo.style.backgroundColor = "blue";
      btnNextQuestionTwo.innerText = "Selanjutnya";
      listQuestionTen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S9.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
         <div>
         <input type="radio" id="a9" name="kuis1_9" value="a" />
         <label for="a9">a.
         <img src="/assets/image/bab_1/kuis_1/new/21.png" />
         </label><br />
         </div>
         <div>
         <input type="radio" id="b9" name="kuis1_9" value="b" />
         <label for="b9">b.
         <img src="/assets/image/bab_1/kuis_1/new/20.png" />
         </label><br />
         </div>
         <div>
         <input type="radio" id="c9" name="kuis1_9" value="c" />
         <label for="c9">c.
         <img src="/assets/image/bab_1/kuis_1/new/19.png" />
         </label><br />
      </div>
          `;
      break;
    case 10:
      numberQuestion.innerText =
        "10. Di bawah ini yang bukan pasangan item dan bilangannya sama adalah …";
      listQuestionTen.classList.add("bg-black", "text-white");
      listQuestionNine.classList.remove("bg-black", "text-white");
      // btnPrev.classList.add("hidden");
      btnNextQuestionTwo.innerText = "Selesaikan Kuis";
      btnNextQuestionTwo.style.backgroundColor = "green";

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/S10.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
         <div>
         <input type="radio" id="a10" name="kuis1_10" value="a" />
         <label for="a10">a.
         <img src="/assets/image/bab_1/kuis_1/new/20.png" />
         </label><br />
         </div>
         <div>
         <input type="radio" id="b10" name="kuis1_10" value="b" />
         <label for="b10">b.
         <img src="/assets/image/bab_1/kuis_1/new/22.png" />
         </label><br />
         </div>
         <div>
         <input type="radio" id="c10" name="kuis1_10" value="c" />
         <label for="c10">c.
         <img src="/assets/image/bab_1/kuis_1/new/19.png" />
         </label><br />
      </div>`;
      break;
    default:
      break;
  }
}

// Add event listeners to track changes in the selected answer
document.querySelectorAll("button[id^='btn-kuis']").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove styling from all buttons
    document.querySelectorAll("button[id^='btn-kuis']").forEach((btn) => {
      btn.classList.remove("bg-black", "text-white");
    });
    // Add styling to the clicked button
    this.classList.add("bg-black", "text-white");
  });
});

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

  if (type === "kuis") {
    const kuisSets = "kuis1_10";
    let kuis_array = selectedAnswers;

    let setElements = document.getElementsByName(kuisSets);
    let setValue = getCheckedValue(setElements);
    console.log(setValue);
    kuis_array.splice(9, 1, setValue);
    console.log(kuis_array);

    const average = 10; //total soal

    const jawaban = ["a", "c", "b", "a", "c", "b", "a", "c", "b", "a"]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, kuis_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("kuis1_1", total);
  } else {
    return null;
  }
  // totalPerSub();
}

function totalPerSub() {
  if (localStorage.getItem("kuis1_1")) {
    const kuis = parseInt(localStorage.getItem("kuis1_1"));

    localStorage.setItem("kuis1", kuis);
    setInterval(() => {
      localStorage.removeItem("kuis1_1");
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
  const nilai = parseInt(localStorage.getItem("kuis1_1"));

  // Check if nilai is greater than or equal to kkm
  if (nilai >= kkm && nilai !== null) {
    // If true, display "Selamat Anda Lulus Kuis"
    document.getElementById("kkm-kuis1").innerText =
      "Selamat, anda lulus Kuis 1, silahkan melanjutkan ke materi berikutnya";
    document.getElementById("kkm-kuis1").style.color = "green";
  } else {
    // If false, display "Anda Belum Lulus Kuis"
    document.getElementById("kkm-kuis1").innerText =
      "Nilai dari hasil kuis anda di bawah KKM, silahkan tekan 'Kembali ke Materi' untuk mengulang materi kembali. Lalu coba kembali kuis dengan menekan 'Mulai Kuis'";
    document.getElementById("kkm-kuis1").style.color = "red";
  }
}

// Simulate updating the HTML content with nilai values
// document.getElementById('kkm-kuis1').innerHTML = '<p id="evaluasi">80</p><p id="kuis 1">60</p><p id="kuis 2">85</p>';

// Call the function to check and display results for a specific name
checkAndDisplayResultForName("kuis 1");

listQuestionOne.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(1);
  restoreSelectedAnswer();
});
listQuestionTwo.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(2);
  restoreSelectedAnswer();
});
listQuestionThree.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(3);
  restoreSelectedAnswer();
});
listQuestionFour.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(4);
  restoreSelectedAnswer();
});
listQuestionFive.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(5);
  restoreSelectedAnswer();
});
listQuestionSix.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(6);
  restoreSelectedAnswer();
});
listQuestionSeven.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(7);
  restoreSelectedAnswer();
});
listQuestionEight.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(8);
  restoreSelectedAnswer();
});
listQuestionNine.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(9);
  restoreSelectedAnswer();
});
listQuestionTen.addEventListener("click", () => {
  saveCurrentAnswer();
  switchQuestion(10);
  restoreSelectedAnswer();
});

// Function to switch to a specific question
function switchQuestion(questionNumber) {
  // Save the current answer before switching
  saveCurrentAnswer();

  // Set the new question number
  numberQuiz = questionNumber;

  // Render the new question
  renderQuiz();

  restoreSelectedAnswer();
}

function saveCurrentAnswer() {
  const selectedOption = document.querySelector(
    `input[name="kuis1_${numberQuiz}"]:checked`
  );
  if (selectedOption) {
    selectedAnswers[numberQuiz - 1] = selectedOption.value;
  }
}

function restoreSelectedAnswer() {
  const selectedAnswer = selectedAnswers[numberQuiz - 1];
  if (selectedAnswer !== undefined) {
    const selectedOption = document.querySelector(
      `input[name="kuis1_${numberQuiz}"][value="${selectedAnswer}"]`
    );
    if (selectedOption) {
      selectedOption.checked = true;
    }
  } else {
    // If there is no stored answer, uncheck all radio buttons for this question
    const options = document.querySelectorAll(
      `input[name="kuis1_${numberQuiz}"]`
    );
    options.forEach((option) => {
      option.checked = false;
    });
  }
}

document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.type === "radio") {
    const questionNumber = clickedElement.name.split("_")[1];
    console.log("Clicked radio button for question:", questionNumber);

    const selectedOption = document.querySelector(
      `input[name="kuis1_${questionNumber}"]:checked`
    );
    if (selectedOption) {
      selectedAnswers[questionNumber - 1] = selectedOption.value;
    }
    console.log(selectedAnswers);
  }
});
