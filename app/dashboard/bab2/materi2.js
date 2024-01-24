function taskResult(type) {
  event.preventDefault();

  if (type === "berlatih1") {
    const mengamatiSets = [
      "berlatih1_1",
      "berlatih1_2",
      "berlatih1_3",
      "berlatih1_4",
      "berlatih1_5",
      "berlatih1_6",
      "berlatih1_7",
      "berlatih1_8",
      "berlatih1_9",
      "berlatih1_10",
      "berlatih1_11",
      "berlatih1_12",
      "berlatih1_13",
      "berlatih1_14",
      "berlatih1_15",
    ];
    let mengamati_array = [];

    mengamatiSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName);
      let setValue = getCheckedValue(setElements);
      mengamati_array.push(parseInt(setValue));
    });

    const average = 15; //total soal

    const jawaban = [4, 4, 8, 6, 4, 10, 2, 3, 5, 5, 5, 10, 4, 5, 9]; // jawaban per soal + harus urut
    const resultArray = matchAdjacentElements(jawaban, mengamati_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub2_2_1", total);
    komunikasi("/app/dashboard/bab2/materi2.html?page=2");
  } else if (type === "berlatih2") {
    const berlatihSets = [
      "berlatih2_1",
      "berlatih2_2",
      "berlatih2_3",
      "berlatih2_4",
      "berlatih2_5",
    ];
    let berlatih_array = [];

    berlatihSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName);
      let setValue = getCheckedValue(setElements);
      berlatih_array.push(parseInt(setValue));
    });

    const average = 5; //total soal

    const jawaban = [5, 8, 2, 5, 2]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, berlatih_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub2_2_2", total);
    komunikasi("/app/dashboard/bab2/materi2.html?page=4");
  } else {
    return null;
  }
  // Swal.fire({
  //   icon: "success",
  //   text: `Silahkan lanjut ke berikutnya!`,
  // });
  // totalPerSub();
}

function totalPerSub() {
  if (localStorage.getItem("sub2_2_1") && localStorage.getItem("sub2_2_2")) {
    const mengamati = parseInt(localStorage.getItem("sub2_2_1"));
    const berlatih = parseInt(localStorage.getItem("sub2_2_2"));
    const rata = (mengamati + berlatih) / 2;

    localStorage.setItem("sub2_2", rata);
    setInterval(() => {
      localStorage.removeItem("sub2_2_1");
      localStorage.removeItem("sub2_2_2");
    }, 1000);
  }
}

function getCheckedValue(elements) {
  for (let i = 0; i < elements.length; i++) {
    return elements[i].value;
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

function checkAnswer(questionNumber, setNumber) {
  // Get selected option
  var selectedOption = document.getElementById(
    "berlatih" + setNumber + "_" + questionNumber
  ).value;

  // Get the correct answer for the current question
  var correctAnswer =
    setNumber === 1
      ? correctAnswers1[questionNumber - 1]
      : correctAnswers2[questionNumber - 1];

  // Get the <p> element for displaying response
  var responseElement = document.getElementById(
    "response" + setNumber + "_" + questionNumber
  );

  // Check if selected option is correct
  if (selectedOption === correctAnswer.toString()) {
    responseElement.textContent = "Kamu benar!";
    responseElement.style.color = "green";
  } else {
    responseElement.textContent = "Kamu salah!";
    responseElement.style.color = "red";
  }
}

// Define the correct answers arrays
var correctAnswers1 = [
  4,
  4,
  8,
  "6",
  "4",
  "10",
  "2",
  "3",
  "5",
  "5",
  "5",
  "10",
  "4",
  "5",
  "9",
];
var correctAnswers2 = ["5", "8", "2", "5", "2"];

// Add event listeners for each select element using a loop
for (var i = 1; i <= 15; i++) {
  document.getElementById("berlatih1_" + i).addEventListener(
    "change",
    (function (questionNumber) {
      return function () {
        checkAnswer(questionNumber, 1);
      };
    })(i)
  );
}

for (var i = 1; i <= 5; i++) {
  document.getElementById("berlatih2_" + i).addEventListener(
    "change",
    (function (questionNumber) {
      return function () {
        checkAnswer(questionNumber, 2);
      };
    })(i)
  );
}

function komunikasi(url) {
  Swal.fire({
    icon: "success",
    title: "Success",
  }).then(() => {
    window.location.href = url;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the page number from the query parameter or default to 1
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = parseInt(urlParams.get("page")) || 1;

  // Display the current page
  showPage(currentPage);

  // Update the current page number and page numbers list in the HTML
  updatePageNumbers(currentPage);
});

function showPage(pageNumber) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });

  // Show the selected page
  const selectedPage = document.getElementById(`page${pageNumber}`);
  if (selectedPage) {
    selectedPage.style.display = "block";
  }

  // Update the current page number in the "currentPage" span
  document.getElementById("currentPage").textContent = pageNumber;
}

function nextPage() {
  const totalPages = document.querySelectorAll(".page").length;
  let currentPage = parseInt(
    document.getElementById("currentPage").textContent
  );

  if (currentPage < totalPages) {
    currentPage++;
    updatePage(currentPage);
  }
}

function prevPage() {
  let currentPage = parseInt(
    document.getElementById("currentPage").textContent
  );

  if (currentPage > 1) {
    currentPage--;
    updatePage(currentPage);
  }
}

function updatePage(pageNumber) {
  // Update the query parameter
  window.history.pushState({}, "", `?page=${pageNumber}`);

  // Display the new page
  showPage(pageNumber);

  // Update the page numbers list in the HTML
  updatePageNumbers(pageNumber);
}

function updatePageNumbers(currentPage) {
  const totalPages = document.querySelectorAll(".page").length;
  const pageNumbersContainer = document.getElementById("pageNumbers");
  const pageNumbersContainer2 = document.getElementById("pageNumbers2");
  let pageNumbersHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      pageNumbersHTML += `<strong>${i}</strong> `;
    } else {
      pageNumbersHTML += `<a href="?page=${i}" onclick="updatePage(${i}); return false;">${i}</a> `;
    }
  }

  pageNumbersContainer.innerHTML = pageNumbersHTML;
  pageNumbersContainer2.innerHTML = pageNumbersHTML;
}
