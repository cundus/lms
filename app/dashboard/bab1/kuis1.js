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
  rulesQuiz.classList.add("hidden");
  dataStudent.classList.add("hidden");
  showQuiz.classList.remove("hidden");
  numbQuiz.classList.remove("hidden");
  //   btnPrev.classList.add("hidden");
  //   listQuestionOne.classList.add("bg-black", "text-white");

  renderQuiz();
  startCountdown();
});
// btnNextQuestionThree.addEventListener("click", questionThree);
btnNextQuestionTwo.addEventListener("click", nextQuestion);
btnPrev.addEventListener("click", previousQuestion);
// listButtonQuiz.addEventListener("click", renderQuiz);

function nextQuestion() {
  if (numberQuiz < 3) {
    numberQuiz++;
    renderQuiz();
  } else {
    alert("Content sudah habis");
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

  console.log("running quiz no ", numberQuiz);
  switch (numberQuiz) {
    case 1:
      btnPrev.classList.add("hidden");
      listQuestionOne.classList.add("bg-black", "text-white");
      listQuestionTwo.classList.remove("bg-black", "text-white");
      numberQuestion.innerText = "1. Apa yang dikenal oleh TypeScript?";

      answerQuestion.innerHTML = `
  <input type="radio" id="html1" name="fav_language1" value="HTML" />
  <label for="html1">HTML</label><br />
  <input type="radio" id="css1" name="fav_language1" value="CSS" />
  <label for="css1">CSS</label><br />
  <input type="radio" id="javascript1" name="fav_language1" value="JavaScript" />
  <label for="javascript1">JavaScript</label><br />
  <input type="radio" id="python1" name="fav_language1" value="python" />
  <label for="python1">Python</label>`;
      break;
    case 2:
      numberQuestion.innerText = "2. Apa yang dikenal oleh CSS?";
      btnPrev.classList.remove("hidden");
      listQuestionTwo.classList.add("bg-black", "text-white");
      listQuestionOne.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
  <input type="radio" id="html2" name="fav_language2" value="HTML" />
  <label for="html2">Style</label><br />
  <input type="radio" id="css2" name="fav_language2" value="CSS" />
  <label for="css2">CSS</label><br />
  <input type="radio" id="javascript2" name="fav_language2" value="JavaScript" />
  <label for="javascript2">Gaya</label><br />
  <input type="radio" id="python2" name="fav_language2" value="python" />
  <label for="python2">DLL</label>`;
      break;
    case 3:
      numberQuestion.innerText = "3. HTML adalah?";
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.add("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
  <input type="radio" id="html3" name="fav_language2" value="HTML" />
  <label for="html2">Hyper Text Markup Language</label><br />
  <input type="radio" id="css2" name="fav_language2" value="CSS" />
  <label for="css2">HypertText Maksa Language</label><br />
  <input type="radio" id="javascript2" name="fav_language2" value="JavaScript" />
  <label for="javascript2">Height Thing Make Long</label><br />
  <input type="radio" id="python2" name="fav_language2" value="python" />
  <label for="python2">Bahasa Pemrograman</label>`;
      break;
    default:
      break;
  }
}

/**
 * & Function Question
 */
// ! Function Question One
function questionOne() {
  rulesQuiz.classList.add("hidden");
  dataStudent.classList.add("hidden");
  showQuiz.classList.remove("hidden");
  numbQuiz.classList.remove("hidden");
  btnPrev.classList.add("hidden");
  listQuestionOne.classList.add("bg-black", "text-white");

  // ^ Create Element
  const numberQuestion = document.querySelector("#nomor-kuis");
  const answerQuestion = document.getElementById("jawaban-kuis");

  numberQuestion.innerText = "1. Apa yang dikenal oleh TypeScript?";

  // Output kode HTML yang diberikan
  const additionalHTML = `
  <input type="radio" id="html1" name="fav_language1" value="HTML" />
  <label for="html1">HTML</label><br />
  <input type="radio" id="css1" name="fav_language1" value="CSS" />
  <label for="css1">CSS</label><br />
  <input type="radio" id="javascript1" name="fav_language1" value="JavaScript" />
  <label for="javascript1">JavaScript</label><br />
  <input type="radio" id="python1" name="fav_language1" value="python" />
  <label for="python1">Python</label>`;

  answerQuestion.innerHTML = additionalHTML;
  document.getElementById("btn-next").addEventListener("click", questionTwo);
}
// ! End Function Question One

// ! Function Question Two
function questionTwo() {
  btnPrev.classList.remove("hidden");
  listQuestionOne.classList.remove("bg-black", "text-white");
  listQuestionTwo.classList.add("bg-black", "text-white");
  // ^ Create Element
  const numberQuestion2 = document.querySelector("#nomor-kuis");
  const answerQuestion2 = document.getElementById("jawaban-kuis");

  numberQuestion2.innerText = "2. Apa yang dikenal oleh CSS?";

  // Output kode HTML yang diberikan
  const additionalHTML2 = `
  <input type="radio" id="html2" name="fav_language2" value="HTML" />
  <label for="html2">Style</label><br />
  <input type="radio" id="css2" name="fav_language2" value="CSS" />
  <label for="css2">CSS</label><br />
  <input type="radio" id="javascript2" name="fav_language2" value="JavaScript" />
  <label for="javascript2">Gaya</label><br />
  <input type="radio" id="python2" name="fav_language2" value="python" />
  <label for="python2">DLL</label>`;

  answerQuestion2.innerHTML = additionalHTML2;

  function btnBackToOne() {
    rulesQuiz.classList.add("hidden");
    dataStudent.classList.add("hidden");
    showQuiz.classList.remove("hidden");
    numbQuiz.classList.remove("hidden");
    btnPrev.classList.add("hidden");
    listQuestionOne.classList.add("bg-black", "text-white");
    listQuestionTwo.classList.remove("bg-black", "text-white");

    // ^ Create Element
    const numberQuestion1 = document.querySelector("#nomor-kuis");
    const answerQuestion1 = document.getElementById("jawaban-kuis");

    numberQuestion1.innerText = "1. Apa yang dikenal oleh TypeScript?";

    // Output kode HTML yang diberikan
    const additionalHTML1 = `
  <input type="radio" id="html1" name="fav_language1" value="HTML" />
  <label for="html1">HTML</label><br />
  <input type="radio" id="css1" name="fav_language1" value="CSS" />
  <label for="css1">CSS</label><br />
  <input type="radio" id="javascript1" name="fav_language1" value="JavaScript" />
  <label for="javascript1">JavaScript</label><br />
  <input type="radio" id="python1" name="fav_language1" value="python" />
  <label for="python1">Python</label>`;

    answerQuestion1.innerHTML = additionalHTML1;
  }
  document
    .getElementById("btn-previous")
    .addEventListener("click", btnBackToOne);
}
// ! End Function Question Two

// ! Function Question Three
function questionThree() {
  //   btnPrev.classList.remove("hidden");
  listQuestionOne.classList.remove("bg-black", "text-white");
  listQuestionTwo.classList.remove("bg-black", "text-white");
  listQuestionThree.classList.add("bg-black", "text-white");
  // ^ Create Element
  const numberQuestion3 = document.querySelector("#nomor-kuis");
  const answerQuestion3 = document.getElementById("jawaban-kuis");

  numberQuestion3.innerText = "3. HTML adalah?";

  // Output kode HTML yang diberikan
  const additionalHTML3 = `
  <input type="radio" id="html3" name="fav_language2" value="HTML" />
  <label for="html2">Hyper Text Markup Language</label><br />
  <input type="radio" id="css2" name="fav_language2" value="CSS" />
  <label for="css2">HypertText Maksa Language</label><br />
  <input type="radio" id="javascript2" name="fav_language2" value="JavaScript" />
  <label for="javascript2">Height Thing Make Long</label><br />
  <input type="radio" id="python2" name="fav_language2" value="python" />
  <label for="python2">Bahasa Pemrograman</label>`;

  answerQuestion3.innerHTML = additionalHTML3;

  function backToQuestionTwo() {
    // rulesQuiz.classList.add("hidden");
    // dataStudent.classList.add("hidden");
    // showQuiz.classList.remove("hidden");
    // numbQuiz.classList.remove("hidden");
    btnPrev.classList.remove("hidden");
    listQuestionOne.classList.remove("bg-black", "text-white");
    listQuestionTwo.classList.add("bg-black", "text-white");
    listQuestionThree.classList.remove("bg-black", "text-white");

    // ^ Create Element
    const numberQuestion2 = document.querySelector("#nomor-kuis");
    const answerQuestion2 = document.getElementById("jawaban-kuis");

    numberQuestion2.innerText = "2. Apa yang dikenal oleh CSS?";

    // Output kode HTML yang diberikan
    const additionalHTML2 = `
  <input type="radio" id="html2" name="fav_language2" value="HTML" />
  <label for="html2">Style</label><br />
  <input type="radio" id="css2" name="fav_language2" value="CSS" />
  <label for="css2">CSS</label><br />
  <input type="radio" id="javascript2" name="fav_language2" value="JavaScript" />
  <label for="javascript2">Gaya</label><br />
  <input type="radio" id="python2" name="fav_language2" value="python" />
  <label for="python2">DLL</label>`;

    answerQuestion2.innerHTML = additionalHTML2;
  }
  document
    .getElementById("btn-previous")
    .addEventListener("click", backToQuestionTwo);
}
// ! End Function Question Three

// & End Function for Button Start DOM Show or Hide Question

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
document.getElementById("btn-start").addEventListener("click", startCountdown);
/**
 * & End Function to count down
 */
