let mengamati_array = [];

function taskResult() {
  event.preventDefault();

  const mengamatiSets = [
    "berlatih1",
    "berlatih2",
    "berlatih3",
    "berlatih4",
    "berlatih5",
    "berlatih6",
    "berlatih7",
  ];

  mengamatiSets.forEach((setName) => {
    let setElements = document.getElementsByName(setName);
    let setValue = getCheckedValue(setElements);
    mengamati_array.push(parseInt(setValue));
  });

  console.log(mengamati_array);

  const average = 7; //total soal

  const jawaban = [7, 5, 7, 6, 4, 5, 2]; // jawaban per soal + harus urut
  const resultArray = matchAdjacentElements(jawaban, mengamati_array);
  const resultCount = resultArray.length;
  const total = (resultCount / average) * 100;
  localStorage.setItem("sub2_3_1", total);
  selesaiBerlatih();
  komunikasi("/app/dashboard/bab2/materi3.html?page=3");
  // Swal.fire({
  //   icon: "success",
  //   text: `Silahkan lanjut ke berikutnya!`,
  // });
  // totalPerSub();
}

function totalPerSub() {
  if (localStorage.getItem("sub2_3_1")) {
    const mengamati = parseInt(localStorage.getItem("sub2_3_1"));

    localStorage.setItem("sub2_3", mengamati);
    setInterval(() => {
      localStorage.removeItem("sub2_3_1");
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
  var selectedOption = document.getElementById("berlatih" + setNumber).value;

  // Convert the selected option to a number
  var selectedOptionNumber = parseInt(selectedOption, 10);
  console.log(selectedOptionNumber);

  // Get the correct answer for the current question
  var correctAnswer = correctAnswers1[questionNumber - 1];
  console.log(correctAnswer);

  // Get the <p> element for displaying response
  var responseElement = document.getElementById(
    "response" + 1 + "_" + questionNumber
  );

  // Check if selected option is correct
  if (selectedOptionNumber === correctAnswer) {
    responseElement.textContent = "Kamu benar!";
    responseElement.style.color = "green";
  } else {
    responseElement.textContent = "Kamu salah!";
    responseElement.style.color = "red";
  }
}

// Define the correct answers arrays
var correctAnswers1 = [7, 5, 7, 6, 4, 5, 2];

// Add event listeners for each select element using a loop
for (let i = 1; i <= 7; i++) {
  document.getElementById("berlatih" + i).addEventListener(
    "change",
    (function (questionNumber) {
      return function () {
        // Extract the setNumber from the select element's ID
        var setNumber = this.id.replace("berlatih", "");
        checkAnswer(questionNumber, setNumber);
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

let berlatihArr = [];

function selesaiBerlatih() {
  let providedArray = [
    "Kamu benar!",
    "Kamu benar!",
    "Kamu benar!",
    "Kamu benar!",
    "Kamu benar!",
    "Kamu benar!",
    "Kamu benar!",
  ]; // Replace this with your provided array
  let trueCount = 0;

  for (let i = 1; i < 8; i++) {
    let berlatih = document.getElementById(`response1_${i}`);
    let res = berlatih.textContent;

    if (berlatih.textContent !== null && berlatih.textContent !== "") {
      berlatih.style.display = "block";
    }

    if (berlatihArr.length < 8) {
      berlatihArr.push(res);
    } else {
      berlatihArr = [];
      berlatihArr.push(res);
    }
  }

  console.log("berlatihArr:", berlatihArr);

  // Compare berlatihArr with providedArray and count true matches
  for (let i = 0; i < berlatihArr.length; i++) {
    if (berlatihArr[i] === providedArray[i]) {
      trueCount++;
    }
  }

  console.log("Count of true matches:", trueCount);

  localStorage.setItem("sub2_3", (trueCount / 7) * 100);

  // Optionally, you can return the trueCount value
  komunikasi("/app/dashboard/bab2/materi3.html?page=3");
}
