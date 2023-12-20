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
  if (numberQuiz < 20) {
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
        "1. Suatu bilangan yang mewakili banyaknya benda yang di lambangkan melalui angka 1,2,3,4,5 disebut . . .";

      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/E1.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span><br />
            <input type="radio" id="a1" name="kuis1" value="jawabanA" />
            <label for="a1">a. Lambang Bilangan.</label><br />
            <input type="radio" id="b1" name="kuis1" value="JawabanB" />
            <label for="b1">b. Nama Bilangan.</label><br />
            <input type="radio" id="c1" name="kuis1" value="JawabanC" />
            <label for="c1">c. Membandingkan Bilangan.</label><br />
            `;
      break;
    case 2:
      numberQuestion.innerText =
        "2. Suatu nama yang mewakili banyaknya suatu angka disebut . . .";
      btnPrev.classList.remove("hidden");
      listQuestionTwo.classList.add("bg-black", "text-white");
      listQuestionOne.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/E2.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
            <input type="radio" id="a2" name="kuis1" value="jawabanA" />
            <label for="a2">a. Lambang Bilangan.</label><br />
            <input type="radio" id="b2" name="kuis1" value="JawabanB" />
            <label for="b2">b. Nama Bilangan.</label><br />
            <input type="radio" id="c2" name="kuis1" value="JawabanC" />
            <label for="c2">c. Membandingkan Bilangan.</label><br />
            `;
      break;
    case 3:
      numberQuestion.innerText =
        "3. Wina memelihara Iguana. Iguana Wina berjumlah empat. Lambang bilangan dari empat adalah . . .";
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionFour.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.add("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/E3.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
         <input type="radio" id="a3" name="kuis1" value="jawabanA" />
         <label for="a3">a. 2</label><br />
         <input type="radio" id="b3" name="kuis1" value="JawabanB" />
         <label for="b3">b. 3</label><br />
         <input type="radio" id="c3" name="kuis1" value="JawabanC" />
         <label for="c3">c. 4</label><br />
            `;
      break;
    case 4:
      numberQuestion.innerText =
        "4. Apabila di tuliskan nama bilangan 4 adalah . . .";
      listQuestionOne.classList.remove("bg-black", "text-white");
      listQuestionTwo.classList.remove("bg-black", "text-white");
      listQuestionThree.classList.remove("bg-black", "text-white");
      listQuestionFour.classList.add("bg-black", "text-white");
      listQuestionFive.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/E4.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
         <input type="radio" id="a4" name="kuis1" value="jawabanA" />
         <label for="a4">a. Empat </label><br />
         <input type="radio" id="b4" name="kuis1" value="JawabanB" />
         <label for="b4">b. Tiga</label><br />
         <input type="radio" id="c4" name="kuis1" value="JawabanC" />
         <label for="c4">c. Dua</label><br />
          `;
      break;
    case 5:
      numberQuestion.innerText = "5. Lambang bilangan 8 adalah . . .";
      listQuestionFour.classList.remove("bg-black", "text-white");
      listQuestionFive.classList.add("bg-black", "text-white");
      listQuestionSix.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/E5.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
         <input type="radio" id="a5" name="kuis1" value="jawabanA" />
         <label for="a5">a. 6</label><br />
         <input type="radio" id="b5" name="kuis1" value="JawabanB" />
         <label for="b5">b. 8</label><br />
         <input type="radio" id="c5" name="kuis1" value="JawabanC" />
         <label for="c5">c. 7</label><br />
          `;
      break;
    case 6:
      numberQuestion.innerText =
        "6. Suatu upaya menentukan perbedaan dengan menggunakan simbol perbandingan bilangan > lebih dari, < kurang dari, dan = sama dengan disebut ? . . .";
      listQuestionFive.classList.remove("bg-black", "text-white");
      listQuestionSix.classList.add("bg-black", "text-white");
      listQuestionSeven.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/E6.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> <br />
          <input type="radio" id="a6" name="kuis1" value="jawabanA" />
          <label for="a6">a. Lambang Bilangan.</label><br />
          <input type="radio" id="b6" name="kuis1" value="jawabanB" />
          <label for="b6">b. Nama Bilangan.</label><br />
          <input type="radio" id="c6" name="kuis1" value="jawabanC" />
          <label for="c6">c. Membandingkan Bilangan.</label><br />`;
      break;
    case 7:
      numberQuestion.innerText =
        "7. Perhatikan gambar di bawah ini, berilah tanda kurang dari (<), lebih dari (>) dan sama dengan (=) .";
      listQuestionSix.classList.remove("bg-black", "text-white");
      listQuestionSeven.classList.add("bg-black", "text-white");
      listQuestionEight.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/E7.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> 
         <img class="w-auto" src="/assets/image/evaluasi/Soal 7.png" /><br />
         <p>Tanda yang cocok untuk mengisi titik-titik di atas adalah . . .</p>
          <input type="radio" id="a7" name="kuis1" value="jawabanA" />
          <label for="a7">a. ></label><br />
          <input type="radio" id="b7" name="kuis1" value="jawabanB" />
          <label for="b7">b. =</label><br />
          <input type="radio" id="c7" name="kuis1" value="jawabanC" />
          <label for="c7">c. <</label><br />
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
         <span onclick="play('/assets/sounds/evaluasi/E8.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> 
         <img class="w-auto" src="/assets/image/evaluasi/Soal 8.png" />
         <br />
         <p>Tanda yang cocok untuk mengisi titik-titik di atas adalah . . .</p>
          <input type="radio" id="a8" name="kuis1" value="jawabanA" />
          <label for="a8">a. =</label><br />
          <input type="radio" id="b8" name="kuis1" value="jawabanB" />
          <label for="b8">b. <</label><br />
          <input type="radio" id="c8" name="kuis1" value="jawabanC" />
          <label for="c8">c. ></label><br />
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
         <span onclick="play('/assets/sounds/evaluasi/E9.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span> 
         <img class="w-auto" src="/assets/image/evaluasi/Soal 9.png" />
          <br />
          <p>Tanda yang cocok untuk mengisi titik-titik di atas adalah . . .</p>
         <input type="radio" id="a9" name="kuis1" value="jawabanA" />
          <label for="a9">a. ></label><br />
          <input type="radio" id="b9" name="kuis1" value="jawabanB" />
          <label for="b9">b. <</label><br />
          <input type="radio" id="c9" name="kuis1" value="jawabanC" />
          <label for="c9">c. =</label><br />
          `;
      break;
    case 10:
      numberQuestion.innerText =
        "10. Suatu bilangan yang menentukan lebih besar atau lebih kecil bilangan disebut . . .";
      listQuestionTen.classList.add("bg-black", "text-white");
      listQuestionNine.classList.remove("bg-black", "text-white");
      listQuestionEleven.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/E10.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <br/>
         <input type="radio" id="a10" name="kuis1" value="jawabanA" />
          <label for="a10">a. Membandingkan Bilangan.</label><br />
          <input type="radio" id="b10" name="kuis1" value="jawabanB" />
          <label for="b10">b. Nama Bilangan. </label><br />
          <input type="radio" id="c10" name="kuis1" value="jawabanC" />
          <label for="c10">c. Mengurutkan Bilangan.</label><br />   
          `;
      break;
    case 11:
      numberQuestion.innerText =
        "11. Perhatikan gambar di bawah ini, manakah suatu bilangan ini yang menyatakan suatu bilangan berurut dari terbesar ke terkecil . . .";
      listQuestionTen.classList.remove("bg-black", "text-white");
      listQuestionEleven.classList.add("bg-black", "text-white");
      listQuestionTwelve.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/E11.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
            <input type="radio" id="a11" name="kuis1" value="jawabanA" />
            <label for="a11">a. <img w="50%" src="/assets/image/evaluasi/Soal 11a.png" /> </label><br />
            <input type="radio" id="b11" name="kuis1" value="jawabanB" />
            <label for="b11">b. <img w="50%" src="/assets/image/evaluasi/Soal 11b.png" /></label><br />
            <input type="radio" id="c11" name="kuis1" value="jawabanC" />
            <label for="c11">c. <img w="50%" src="/assets/image/evaluasi/Soal 11c.png" /></label><br />
        `;
      break;
    case 12:
      numberQuestion.innerText =
        "12. Perhatikan gambar di bawah ini, manakah suatu bilangan ini yang menyatakan suatu bilangan berurut dari terkecil ke terbesar . . . ";
      listQuestionEleven.classList.remove("bg-black", "text-white");
      listQuestionTwelve.classList.add("bg-black", "text-white");
      listQuestionThirteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/12.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
            <input type="radio" id="a12" name="kuis1" value="jawabanA" />
            <label for="a12">a. <img width="50%" src="/assets/image/evaluasi/Soal 12a.png" /></label><br />
            <input type="radio" id="b12" name="kuis1" value="jawabanB" />
            <label for="b12">b. <img width="50%" src="/assets/image/evaluasi/Soal 12b.png" /></label><br />
            <input type="radio" id="c12" name="kuis1" value="jawabanC" />
            <label for="c12">c. <img width="50%" src="/assets/image/evaluasi/Soal 12c.png" /></label><br />
        `;
      break;
    case 13:
      numberQuestion.innerText =
        "13. Dua bilangan jika di pasangkan jika dijumlahkan akan menghasilkan bilangan angka baru disebut . . .";
      listQuestionTwelve.classList.remove("bg-black", "text-white");
      listQuestionThirteen.classList.add("bg-black", "text-white");
      listQuestionFourteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/E13.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
            <input type="radio" id="a13" name="kuis1" value="jawabanA" />
            <label for="a13">a. Membandingkan Bilangan.</label><br />
            <input type="radio" id="b13" name="kuis1" value="jawabanB" />
            <label for="b13">b. Pasangkan Bilangan.</label><br />
            <input type="radio" id="c13" name="kuis1" value="jawabanC" />
            <label for="c13">c. Mengurutkan Bilangan.</label><br />
        `;
      break;
    case 14:
      numberQuestion.innerText =
        "14. Di bawah ini yang merupakan pasangan bilangan jika dua angka dijumlahkan menjadi angka baru yang hasilnya menjadi 10 adalah . . .";
      listQuestionThirteen.classList.remove("bg-black", "text-white");
      listQuestionFourteen.classList.add("bg-black", "text-white");
      listQuestionFiveteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/E14.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
            <input type="radio" id="a14" name="kuis1" value="jawabanA" />
            <label for="a14">a. <img width="50%" src="/assets/image/evaluasi/Soal 14a.png" /></label><br />
            <input type="radio" id="b14" name="kuis1" value="jawabanB" />
            <label for="b14">b. <img width="50%" src="/assets/image/evaluasi/Soal 14b.png" /></label><br />
            <input type="radio" id="c14" name="kuis1" value="jawabanC" />
            <label for="c14">c. <img width="50%" src="/assets/image/evaluasi/Soal 14c.png" /></label><br />
        `;
      break;
    case 15:
      numberQuestion.innerText =
        "15. Di bawah ini yang pasangan benda dan bilangannya yang sama adalah . . .";
      listQuestionFourteen.classList.remove("bg-black", "text-white");
      listQuestionFiveteen.classList.add("bg-black", "text-white");
      listQuestionSixteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/E15.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
            <input type="radio" id="a15" name="kuis1" value="jawabanA" />
            <label for="a15">a. <img width="50%" src="/assets/image/evaluasi/Soal 15a.png" /></label><br />
            <input type="radio" id="b15" name="kuis1" value="jawabanB" />
            <label for="b15">b. <img width="50%" src="/assets/image/evaluasi/Soal 15b.png" /></label><br />
            <input type="radio" id="c15" name="kuis1" value="jawabanC" />
            <label for="c15">c. <img width="50%" src="/assets/image/evaluasi/Soal 15c.png" /></label><br />
        `;
      break;
    case 16:
      numberQuestion.innerText = "16. Ayo perhatikan cerita di bawah ini";
      listQuestionFiveteen.classList.remove("bg-black", "text-white");
      listQuestionSixteen.classList.add("bg-black", "text-white");
      listQuestionSeventeen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/E16.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
        <img width="50%" src="/assets/image/evaluasi/Soal 16.png" />
        <p>Ibu mempunyai 4 meja makan di rumah.</p>
        <p>Kemudian ibu membeli lagi 2 meja makan di pasar</p>
        <p>Maka berapakah jumlah semua meja makan yang ibu miliki ? . . .</p> <br />
        <p>Jawaban yang tepat untuk cerita penjumlahan di atas adalah . . .</p>
            <input type="radio" id="a16" name="kuis1" value="jawabanA" />
            <label for="a16">a. 4 + 2 = 6</label><br />
            <input type="radio" id="b16" name="kuis1" value="jawabanB" />
            <label for="b16">b. 2 + 6 = 8</label><br />
            <input type="radio" id="c16" name="kuis1" value="jawabanC" />
            <label for="c16">c. 8 + 2 = 10</label><br />
        `;
      break;
    case 17:
      numberQuestion.innerText =
        "17. Ayo perhatikan cerita di bawah ini!";
      listQuestionSixteen.classList.remove("bg-black", "text-white");
      listQuestionSeventeen.classList.add("bg-black", "text-white");
      listQuestionEightteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <span onclick="play('/assets/sounds/evaluasi/E17.m4a')"><img
      src="/assets/image/sound.png"
      class="w-6 h-6 cursor-pointer select-none" /></span> <br />
      <img width="50%" src="/assets/image/evaluasi/Soal 17.png" />
      <p>Ibu mempunyai 2 potong semangka</p>
      <p>Kemudian ibu memakan 1 potong semangka tersebut.</p>
      <p>Maka sisa berapakah semangka potong ibu? . . .</p> <br />
      <p>Jawaban yang tepat untuk cerita pengurangan di atas adalah . . .</p>
          <input type="radio" id="a17" name="kuis1" value="jawabanA" />
          <label for="a17">a. 2 - 1 = 1</label><br />
          <input type="radio" id="b17" name="kuis1" value="jawabanB" />
          <label for="b17">b. 1 - 1 = 0</label><br />
          <input type="radio" id="c17" name="kuis1" value="jawabanC" />
          <label for="c17">c. 1 + 1 = 2</label><br />
      `;
      break;
    case 18:
      numberQuestion.innerText =
        "18. Sepuluh di kurang dua sama dengann delapan . . .";
      listQuestionSeventeen.classList.remove("bg-black", "text-white");
      listQuestionEightteen.classList.add("bg-black", "text-white");
      listQuestionNineteen.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
      <span onclick="play('/assets/sounds/evaluasi/E18.m4a')"><img
      src="/assets/image/sound.png"
      class="w-6 h-6 cursor-pointer select-none" /></span> <br />
          <input type="radio" id="a18" name="kuis1" value="jawabanA" />
          <label for="a18">a. 10 – 2 = 8</label><br />
          <input type="radio" id="b18" name="kuis1" value="jawabanB" />
          <label for="b18">b. 6 – 3 = 3</label><br />
          <input type="radio" id="c18" name="kuis1" value="jawabanC" />
          <label for="c18">c. 3 – 3 = 0</label><br />
      `;
      break;
    case 19:
      numberQuestion.innerText =
        "19. Enam di tambah satu sama dengan tujuh . . .";
      listQuestionEightteen.classList.remove("bg-black", "text-white");
      listQuestionNineteen.classList.add("bg-black", "text-white");
      listQuestionTwenty.classList.remove("bg-black", "text-white");

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
        <span onclick="play('/assets/sounds/evaluasi/E19.m4a')"><img
        src="/assets/image/sound.png"
        class="w-6 h-6 cursor-pointer select-none" /></span> <br />
        <input type="radio" id="a19" name="kuis1" value="jawabanA" />
        <label for="a19">a. 6 + 1 = 7</label><br />
        <input type="radio" id="b19" name="kuis1" value="jawabanB" />
        <label for="b19">b. 6 + 2 = 8 </label><br />
        <input type="radio" id="c19" name="kuis1" value="jawabanC" />
        <label for="c19">c. 6 + 3 = 9</label><br />
        `;
      break;
    case 20:
      numberQuestion.innerText =
        "20. Sembilan di kurang sama dengn tiga sama dengan enam . . .";
      listQuestionNineteen.classList.remove("bg-black", "text-white");
      listQuestionTwenty.classList.add("bg-black", "text-white");
      btnPrev.classList.add("hidden");
      btnNextQuestionTwo.innerText = "Selesaikan Evaluasi";

      // Output kode HTML yang diberikan
      answerQuestion.innerHTML = `
         <span onclick="play('/assets/sounds/evaluasi/E20.m4a')"><img
         src="/assets/image/sound.png"
         class="w-6 h-6 cursor-pointer select-none" /></span>
         <br/>
         <input type="radio" id="a20" name="kuis1" value="jawabanA" />
          <label for="a20">a. 9 – 3 = 6</label><br />
          <input type="radio" id="b20" name="kuis1" value="jawabanB" />
          <label for="b20">b. 6 – 3 = 3</label><br />
          <input type="radio" id="c20" name="kuis1" value="jawabanC" />
          <label for="c20">c. 3 – 3 = 0</label><br />   
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
