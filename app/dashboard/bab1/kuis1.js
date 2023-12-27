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
const nilaiKuis = document.getElementById("nilai-kuis1")
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

const nilai = parseInt(localStorage.getItem("kuis1"))
nilaiKuis.innerHTML = `<p>Nilai Kuis 1 : ${nilai ? nilai : 0}</p>`

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

  selectedAnswers.fill(undefined);
}

function nextQuestion() {
  if (numberQuiz < 10) {
    const selectedOption = document.querySelector(
      `input[name="kuis1_${numberQuiz}"]:checked`
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
        "1. Dibawah ini yang termasuk pengertian dari lambang bilangan dan nama bilangan adalah?";

      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K1.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
            <input type="radio" id="a1" name="kuis1_1" value="a" />
            <label for="a1">Simbol atau lambang yang di lambangkan melalui banyaknya benda.</label><br />
            <input type="radio" id="b1" name="kuis1_1" value="b" />
            <label for="b1">Simbol atau lambang yang di lambangkan melalui simbol >,< dan =.</label><br />
            <input type="radio" id="c1" name="kuis1_1" value="c" />
            <label for="c1">Simbol atau lambang suatu bilangan yang mewakili banyaknya benda yang di lambangkan melalui angka.</label><br />`;
      break;
    case 2:
      numberQuestion.innerText =
        "2. Di bawah ini yang termasuk dalam golongan lambang bilangan adalah?";
      btnPrev.classList.remove("hidden");
      listQuestionTwo.classList.add("bg-black", "text-white");
      listQuestionOne.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K2.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
         <div>
         <input type="radio" id="a2" name="kuis1_2" value="a" />
         a. <img src="/assets/image/bab_1/kuis_1/1.jpg" width="75%"/><br />
         </div>
         <div>
         <input type="radio" id="b2" name="kuis1_2" value="b" />
         b. <img src="/assets/image/bab_1/kuis_1/2.jpg" width="75%"/><br />
         </div>
         <div>
         <input type="radio" id="c2" name="kuis1_2" value="c" />
         c. <img src="/assets/image/bab_1/kuis_1/3.jpg" width="75%"/><br />
         </div>
      </div>
            `;
      break;
    case 3:
      numberQuestion.innerText =
        "3. Di bawah ini yang termasuk dalam golongan nama bilangan adalah? ...";
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionFour.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.add("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K3.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
            <div>
            <input type="radio" id="a3" name="kuis1_3" value="a" />
            a. <img src="/assets/image/bab_1/kuis_1/5.jpg" width="75%"/><br />
            </div>
            <div>
            <input type="radio" id="b3" name="kuis1_3" value="b" />
            b. <img src="/assets/image/bab_1/kuis_1/6.jpg" width="75%"/><br />
            </div>
            <div>
            <input type="radio" id="c3" name="kuis1_3" value="c" />
            c. <img src="/assets/image/bab_1/kuis_1/4.jpg" width="75%"/><br />
            </div>
         </div>
            `;
      break;
    case 4:
      numberQuestion.innerText =
        "4. Apabila dituliskan nama bilangan 8 adalah? ...";
      listQuestionOne.classList.remove("bg-black", "text-white");
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.remove("bg-black", "text-white");
      listQuestionFour.classList.add("bg-black", "text-white");
      listQuestionFive.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K4.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
          <input type="radio" id="a4" name="kuis1_4" value="a" />
          a. <label for="a4">Delapan </label><br />
          <input type="radio" id="b4" name="kuis1_4" value="b" />
          b. <label for="b4">Lima</label><br />
          <input type="radio" id="c4" name="kuis1_4" value="c" />
          c. <label for="c4">Tiga</label><br />`;
      break;
    case 5:
      numberQuestion.innerText =
        "5. Beben mempunyai 10 Sepeda. Lambang bilangan dari sepuluh adalah?...";
      listQuestionFour.classList.remove("bg-black", "text-white");
      listQuestionFive.classList.add("bg-black", "text-white");
      listQuestionSix.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K5.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
            <div>
            <input type="radio" id="a5" name="kuis1_5" value="a" />
            a. <img src="/assets/image/bab_1/kuis_1/10.jpg" width="75%"/><br />
            </div>
            <div>
            <input type="radio" id="b5" name="kuis1_5" value="b" />
            b. <img src="/assets/image/bab_1/kuis_1/11.jpg" width="75%"/><br />
            </div>
            <div>
            <input type="radio" id="c5" name="kuis1_5" value="c" />
            c. <img src="/assets/image/bab_1/kuis_1/12.jpg" width="75%"/><br />
         </div>
      </div>
          `;
      break;
    case 6:
      numberQuestion.innerText =
        "6. Di bawah ini yang dimaksud pengertian dari membandingkan bilangan dalam benda adalah?";
      listQuestionFive.classList.remove("bg-black", "text-white");
      listQuestionSix.classList.add("bg-black", "text-white");
      listQuestionSeven.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K6.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
          <input type="radio" id="a4" name="kuis1_6" value="a" />
          <label for="a4">Suatu upaya untuk menentukan perbedaan atau persamaan jumlah antara satu buah bilangan, benda, dan lain sebagainya.</label><br />
          <input type="radio" id="b4" name="kuis1_6" value="b" />
          <label for="b4">Suatu upaya untuk menentukan perbedaan atau persamaan jumlah antara dua buah bilangan, benda, dan lain sebagainya.</label><br />
          <input type="radio" id="c4" name="kuis1_6" value="c" />
          <label for="c4">Suatu upaya untuk menentukan perbedaan atau persamaan jumlah antara tiga buah bilangan, benda, dan lain sebagainya.</label><br />`;
      break;
    case 7:
      numberQuestion.innerText =
        "7. Perhatikan gambar di bawah ini, tanda yang cocok untuk mengisi titik-titik diatas adalah?...";
      listQuestionSix.classList.remove("bg-black", "text-white");
      listQuestionSeven.classList.add("bg-black", "text-white");
      listQuestionEight.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K7.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
            <div>
            <img src="/assets/image/bab_1/kuis_1/13.jpg" width="40%"/><br />
            </div>
            
            <div>
            <img src="/assets/image/bab_1/kuis_1/14.jpg" width="40%"/><br />
            </div>
         </div>
          <input type="radio" id="a4" name="kuis1_7" value="a" />
          <label for="a4">=</label><br />
          <input type="radio" id="b4" name="kuis1_7" value="b" />
          <label for="b4"><</label><br />
          <input type="radio" id="c4" name="kuis1_7" value="c" />
          <label for="c4">></label><br />
          `;
      break;
    case 8:
      numberQuestion.innerText =
        "8. Perhatikan gambar di bawah ini, manakah suatu bilangan dibawah ini yang berurut dari terkecil ke terbesar?...";
      listQuestionSeven.classList.remove("bg-black", "text-white");
      listQuestionEight.classList.add("bg-black", "text-white");
      listQuestionNine.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K8.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
         <div>
         <input type="radio" id="a8" name="kuis1_8" value="a" />
         a. <img src="/assets/image/bab_1/kuis_1/16.jpg" width="75%"/><br />
         </div>
         <div>
         <input type="radio" id="b8" name="kuis1_8" value="b" />
         b. <img src="/assets/image/bab_1/kuis_1/15.jpg" width="75%"/><br />
         </div>
         <div>
         <input type="radio" id="c8" name="kuis1_8" value="c" />
         c. <img src="/assets/image/bab_1/kuis_1/17.jpg" width="75%"/><br />
      </div>
          `;
      break;
    case 9:
      numberQuestion.innerText =
        "9. Perhatikan gambar di bawah ini, manakah suatu bilangan dibawah ini yang berurut dari terbesar ke terkecil?...";
      listQuestionEight.classList.remove("bg-black", "text-white");
      listQuestionNine.classList.add("bg-black", "text-white");
      listQuestionTen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K9.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <div class="flex">
         <div>
         <input type="radio" id="a9" name="kuis1_9" value="a" />
         a. <img src="/assets/image/bab_1/kuis_1/16.jpg" width="75%"/><br />
         </div>
         <div>
         <input type="radio" id="b9" name="kuis1_9" value="b" />
         b. <img src="/assets/image/bab_1/kuis_1/15.jpg" width="75%"/><br />
         </div>
         <div>
         <input type="radio" id="c9" name="kuis1_9" value="c" />
         c. <img src="/assets/image/bab_1/kuis_1/17.jpg" width="75%"/><br />
      </div>
          `;
      break;
    case 10:
      numberQuestion.innerText =
        "10. Di bawah ini yang dimaksud pengertian dari pasangkan bilangan adalah?";
      listQuestionTen.classList.add("bg-black", "text-white");
      listQuestionNine.classList.remove("bg-black", "text-white");
      btnPrev.classList.add("hidden");
      btnNextQuestionTwo.innerText = "Selesaikan Kuis";

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/bab_1/Kuis 1/K10.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
          <input type="radio" id="a4" name="kuis1_10" value="a" />
          a. <label for="a4">Memasangkan bilangan adalah upaya untuk menentukan suatu
          bilangan dalam mengurutkan dua bilangan dalam bilangan yang sama
          angkanya.</label><br />
          <input type="radio" id="b4" name="kuis1_10" value="b" />
          b. <label for="b4">Suatu upaya untuk menentukan suatu bilangan dalam mengurutkan
          dua bilangan dalam bilangan yang sama angkanya.
          </label><br />
          <input type="radio" id="c4" name="kuis1_10" value="c" />
          c. <label for="c4">Dua angka yang di pasangkan yang apabila dijumlahkan akan
          menghasilkan angka baru.</label><br />`;
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

  if (type === "kuis") {
    const kuisSets = "kuis1_10";
    let kuis_array = selectedAnswers;

    let setElements = document.getElementsByName(kuisSets);
    let setValue = getCheckedValue(setElements);
    console.log(setValue);
    kuis_array.splice(9, 1, setValue);
    console.log(kuis_array);

    const average = 10; //total soal

    const jawaban = ["c", "a", "c", "a", "a", "b", "c", "b", "c", "c"]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, kuis_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("kuis1_1", total);
  } else {
    return null;
  }
  totalPerSub();
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
