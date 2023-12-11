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
      numberQuestion.innerText =
        "1. Dibawah ini yang termasuk pengertian dari lambang bilangan dan nama bilangan adalah?";

      answerQuestion.innerHTML = `
            <input type="radio" id="a1" name="kuis1" value="jawabanA" />
            <label for="a1">Simbol atau lambang yang di lambangkan melalui banyaknya benda.</label><br />
            <input type="radio" id="b1" name="kuis1" value="JawabanB" />
            <label for="b1">Simbol atau lambang yang di lambangkan melalui simbol >,< dan =.</label><br />
            <input type="radio" id="c1" name="kuis1" value="JawabanC" />
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
            <input type="radio" id="a2" name="kuis1" value="jawabanA" />
            <label for="a2">
                <span class="font-bold text-gray-300 bg-pink-500 border border-solid rounded-lg p-2 my-2">1</span>
                <span class="font-bold text-red-500 bg-gray-500 border border-solid rounded-full p-2 my-2">2</span>
                <span class="font-bold text-yellow-600 bg-blue-400 border border-solid rounded-l-lg p-2 my-2">3</span>
            </label><br />
            <input type="radio" id="b2" name="kuis1" value="jawabanB" />
            <label for="b2">
                <span class="font-bold text-gray-300 bg-pink-500 border border-solid rounded-lg p-2 my-2">1</span>
                <span class="font-bold">enam</span>
                <span class="font-bold bg-pink-500 border border-solid rounded-lg px-4 py-2 my-2"></span>
            </label><br />
            <input type="radio" id="c2" name="kuis1" value="jawabanC" />
            <label class="border border-solid rounded-full bg-black w-1/2 for="c2">
                <span class="font-bold text-white">Lima</span>
                <span class="font-bold text-white">Enam</span>
                <span class="font-bold text-white">Tujuh</span>
            </label><br />`;
      break;
    case 3:
      numberQuestion.innerText =
        "3. Di bawah ini yang termasuk dalam golongan nama bilangan adalah? ...";
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionFour.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.add("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
          <input type="radio" id="a3" name="kuis1" value="jawabanA" />
            <label for="a3">
                <span class="font-bold text-gray-300 bg-pink-500 border border-solid rounded-lg p-2 my-2">1</span>
                <span class="font-bold text-red-500 bg-gray-500 border border-solid rounded-full p-2 my-2">2</span>
                <span class="font-bold text-yellow-600 bg-blue-400 border border-solid rounded-l-lg p-2 my-2">3</span>
            </label><br />
            <input type="radio" id="b3" name="kuis1" value="jawabanB" />
            <label for="b3">
                <span class="font-bold text-gray-300 bg-pink-500 border border-solid rounded-lg p-2 my-2">1</span>
                <span class="font-bold">enam</span>
                <span class="font-bold bg-pink-500 border border-solid rounded-lg px-4 py-2 my-2"></span>
            </label><br />
            <input type="radio" id="c3" name="kuis1" value="jawabanC" />
            <label class="border border-solid rounded-full bg-black w-1/2 for="c3">
                <span class="font-bold text-white">Lima</span>
                <span class="font-bold text-white">Enam</span>
                <span class="font-bold text-white">Tujuh</span>
            </label><br />`;
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
          <input type="radio" id="a4" name="kuis1" value="jawabanA" />
          <label for="a4">Delapan (with icon sound)</label><br />
          <input type="radio" id="b4" name="kuis1" value="jawabanB" />
          <label for="b4">Lima</label><br />
          <input type="radio" id="c4" name="kuis1" value="jawabanC" />
          <label for="c4">Tiga</label><br />`;
      break;
    case 5:
      numberQuestion.innerText =
        "5. Beben mempunyai 10 Sepeda. Lambang bilangan dari sepuluh adalah?... (icon sound)";
      listQuestionFour.classList.remove("bg-black", "text-white");
      listQuestionFive.classList.add("bg-black", "text-white");
      listQuestionSix.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
          <input type="radio" id="a4" name="kuis1" value="jawabanA" />
          <label for="a4">10</label><br />
          <input type="radio" id="b4" name="kuis1" value="jawabanB" />
          <label for="b4">20</label><br />
          <input type="radio" id="c4" name="kuis1" value="jawabanC" />
          <label for="c4">9</label><br />`;
      break;
    case 6:
      numberQuestion.innerText =
        "6. Di bawah ini yang dimaksud pengertian dari membandingkan bilangan dalam benda adalah? (icon sound)";
      listQuestionFive.classList.remove("bg-black", "text-white");
      listQuestionSix.classList.add("bg-black", "text-white");
      listQuestionSeven.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
          <input type="radio" id="a4" name="kuis1" value="jawabanA" />
          <label for="a4">Suatu upaya untuk menentukan perbedaan atau persamaan jumlah antara satu buah bilangan, benda, dan lain sebagainya.</label><br />
          <input type="radio" id="b4" name="kuis1" value="jawabanB" />
          <label for="b4">Suatu upaya untuk menentukan perbedaan atau persamaan jumlah antara dua buah bilangan, benda, dan lain sebagainya.</label><br />
          <input type="radio" id="c4" name="kuis1" value="jawabanC" />
          <label for="c4">Suatu upaya untuk menentukan perbedaan atau persamaan jumlah antara tiga buah bilangan, benda, dan lain sebagainya.</label><br />`;
      break;
    case 7:
      numberQuestion.innerText =
        "7. Perhatikan gambar di bawah ini, tanda yang cocok untuk mengisi titik-titik diatas adalah?... (icon sound)";
      listQuestionSix.classList.remove("bg-black", "text-white");
      listQuestionSeven.classList.add("bg-black", "text-white");
      listQuestionEight.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
          <input type="radio" id="a4" name="kuis1" value="jawabanA" />
          <label for="a4">=</label><br />
          <input type="radio" id="b4" name="kuis1" value="jawabanB" />
          <label for="b4"><</label><br />
          <input type="radio" id="c4" name="kuis1" value="jawabanC" />
          <label for="c4">></label><br />`;
      break;
    case 8:
      numberQuestion.innerText =
        "8. Perhatikan gambar di bawah ini, manakah suatu bilangan dibawah ini yang berurut dari terkecil ke terbesar?... (icon sound)";
      listQuestionSeven.classList.remove("bg-black", "text-white");
      listQuestionEight.classList.add("bg-black", "text-white");
      listQuestionNine.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
          <input type="radio" id="c3" name="kuis1" value="jawabanC" />
            <label class="border border-solid rounded-full bg-black w-1/2 for="c3">
                <span class="font-bold text-white">Lima</span>
                <span class="font-bold text-white">Enam</span>
                <span class="font-bold text-white">Tujuh</span>
            </label><br />
          <input type="radio" id="c3" name="kuis1" value="jawabanC" />
            <label class="border border-solid rounded-full bg-black w-1/2 for="c3">
                <span class="font-bold text-white">Lima</span>
                <span class="font-bold text-white">Enam</span>
                <span class="font-bold text-white">Tujuh</span>
            </label><br />
          <input type="radio" id="c3" name="kuis1" value="jawabanC" />
            <label class="border border-solid rounded-full bg-black w-1/2 for="c3">
                <span class="font-bold text-white">Lima</span>
                <span class="font-bold text-white">Enam</span>
                <span class="font-bold text-white">Tujuh</span>
            </label><br />
          `;
      break;
    case 9:
      numberQuestion.innerText =
        "9. Perhatikan gambar di bawah ini, manakah suatu bilangan dibawah ini yang berurut dari terbesar ke terkecil?... (icon sound)";
      listQuestionEight.classList.remove("bg-black", "text-white");
      listQuestionNine.classList.add("bg-black", "text-white");
      listQuestionTen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
          <input type="radio" id="c3" name="kuis1" value="jawabanC" />
            <label class="border border-solid rounded-full bg-black w-1/2 for="c3">
                <span class="font-bold text-white">Lima</span>
                <span class="font-bold text-white">Enam</span>
                <span class="font-bold text-white">Tujuh</span>
            </label><br />
          <input type="radio" id="c3" name="kuis1" value="jawabanC" />
            <label class="border border-solid rounded-full bg-black w-1/2 for="c3">
                <span class="font-bold text-white">Lima</span>
                <span class="font-bold text-white">Enam</span>
                <span class="font-bold text-white">Tujuh</span>
            </label><br />
          <input type="radio" id="c3" name="kuis1" value="jawabanC" />
            <label class="border border-solid rounded-full bg-black w-1/2 for="c3">
                <span class="font-bold text-white">Lima</span>
                <span class="font-bold text-white">Enam</span>
                <span class="font-bold text-white">Tujuh</span>
            </label><br />
          `;
      break;
    case 10:
      numberQuestion.innerText =
        "10. Di bawah ini yang dimaksud pengertian dari pasangkan bilangan adalah? (icon sound)";
      listQuestionTen.classList.add("bg-black", "text-white");
      listQuestionNine.classList.remove("bg-black", "text-white");
      btnPrev.classList.add("hidden");
      btnNextQuestionTwo.innerText = "Selesaikan Kuis";

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
          <input type="radio" id="a4" name="kuis1" value="jawabanA" />
          <label for="a4">Suatu upaya untuk menentukan perbedaan atau persamaan jumlah antara satu buah bilangan, benda, dan lain sebagainya.</label><br />
          <input type="radio" id="b4" name="kuis1" value="jawabanB" />
          <label for="b4">Suatu upaya untuk menentukan perbedaan atau persamaan jumlah antara dua buah bilangan, benda, dan lain sebagainya.</label><br />
          <input type="radio" id="c4" name="kuis1" value="jawabanC" />
          <label for="c4">Suatu upaya untuk menentukan perbedaan atau persamaan jumlah antara tiga buah bilangan, benda, dan lain sebagainya.</label><br />`;
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
