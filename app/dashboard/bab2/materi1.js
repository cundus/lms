var totals = [];

function updateTotal(questionNumber) {
  // Find the corresponding question options, total elements, and response elements
  var option1 = parseInt(
    document.getElementById("question" + questionNumber + "Option1").value
  );
  var option2 = parseInt(
    document.getElementById("question" + questionNumber + "Option2").value
  );
  var totalElement = document.getElementById("totalQuestion" + questionNumber);
  var responseElementOption1 = document.getElementById(
    "responseOption1Question" + questionNumber
  );
  var responseElementOption2 = document.getElementById(
    "responseOption2Question" + questionNumber
  );

  responseElementOption1.style.display = "none";
  responseElementOption2.style.display = "none";

  // Perform the calculation
  var total = option1 + option2;

  // If the question number is in the range 6-10, subtract the total
  if (questionNumber >= 6 && questionNumber <= 10) {
    total = option1 - option2;
  }

  // Update the total and store it in the totals array
  totalElement.innerText = total;
  totals[questionNumber] = total;

  // Check if the selected options are correct
  const correctAnswer1 = getCorrectAnswerOption1(questionNumber); // Implement this function
  const correctAnswer2 = getCorrectAnswerOption2(questionNumber); // Implement this function

  // Display the responses for option1 and option2 with colors
  if (!isNaN(option1) && option1 === correctAnswer1) {
    responseElementOption1.innerText = "Kamu benar!";
    responseElementOption1.style.color = "green"; // Green for correct answers
  } else {
    responseElementOption1.innerText = "Kamu salah!";
    responseElementOption1.style.color = "red"; // Red for incorrect answers
  }

  if (!isNaN(option2) && option2 === correctAnswer2) {
    responseElementOption2.innerText = "Kamu benar!";
    responseElementOption2.style.color = "green"; // Green for correct answers
  } else {
    responseElementOption2.innerText = "Kamu salah!";
    responseElementOption2.style.color = "red"; // Red for incorrect answers
  }

  console.log(totals);
}

// Add these functions to get the correct answers for option1 and option2
function getCorrectAnswerOption1(questionNumber) {
  const correctAnswersOption1 = [1, 3, 6, 6, 9, 10, 8, 4, 8, 6];
  return correctAnswersOption1[questionNumber - 1];
}

function getCorrectAnswerOption2(questionNumber) {
  const correctAnswersOption2 = [3, 4, 3, 3, 1, 2, 3, 2, 2, 3];
  return correctAnswersOption2[questionNumber - 1];
}

function taskResult(type) {
  event.preventDefault();

  if (type === "berlatih") {
    let berlatih_array = totals;

    if (berlatih_array.length === 11) {
      berlatih_array.splice(0, 1);
    }

    const average = 10; //total soal

    const jawaban = [4, 7, 9, 9, 10, 8, 5, 2, 6, 3]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, berlatih_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub2_1", total);

    let responseOption1Question1 = document.getElementById(
      "responseOption1Question1"
    );
    let responseOption1Question2 = document.getElementById(
      "responseOption1Question2"
    );
    let responseOption1Question3 = document.getElementById(
      "responseOption1Question3"
    );
    let responseOption1Question4 = document.getElementById(
      "responseOption1Question4"
    );
    let responseOption1Question5 = document.getElementById(
      "responseOption1Question5"
    );
    let responseOption1Question6 = document.getElementById(
      "responseOption1Question6"
    );
    let responseOption1Question7 = document.getElementById(
      "responseOption1Question7"
    );
    let responseOption1Question8 = document.getElementById(
      "responseOption1Question8"
    );
    let responseOption1Question9 = document.getElementById(
      "responseOption1Question9"
    );
    let responseOption1Question10 = document.getElementById(
      "responseOption1Question10"
    );
    let responseOption2Question1 = document.getElementById(
      "responseOption2Question1"
    );
    let responseOption2Question2 = document.getElementById(
      "responseOption2Question2"
    );
    let responseOption2Question3 = document.getElementById(
      "responseOption2Question3"
    );
    let responseOption2Question4 = document.getElementById(
      "responseOption2Question4"
    );
    let responseOption2Question5 = document.getElementById(
      "responseOption2Question5"
    );
    let responseOption2Question6 = document.getElementById(
      "responseOption2Question7"
    );
    let responseOption2Question7 = document.getElementById(
      "responseOption2Question7"
    );
    let responseOption2Question8 = document.getElementById(
      "responseOption2Question8"
    );
    let responseOption2Question9 = document.getElementById(
      "responseOption2Question9"
    );
    let responseOption2Question10 = document.getElementById(
      "responseOption2Question10"
    );

    responseOption1Question1.style.display = "";
    responseOption1Question2.style.display = "";
    responseOption1Question3.style.display = "";
    responseOption1Question4.style.display = "";
    responseOption1Question5.style.display = "";
    responseOption1Question6.style.display = "";
    responseOption1Question7.style.display = "";
    responseOption1Question8.style.display = "";
    responseOption1Question9.style.display = "";
    responseOption1Question10.style.display = "";
    responseOption2Question1.style.display = "";
    responseOption2Question2.style.display = "";
    responseOption2Question3.style.display = "";
    responseOption2Question4.style.display = "";
    responseOption2Question5.style.display = "";
    responseOption2Question6.style.display = "";
    responseOption2Question7.style.display = "";
    responseOption2Question8.style.display = "";
    responseOption2Question9.style.display = "";
    responseOption2Question10.style.display = "";
    // komunikasi("/app/dashboard/bab2/materi1.html?page=2");
  } else {
    return null;
  }
  // Swal.fire({
  //   icon: "success",
  //   text: `Silahkan lanjut ke berikutnya!`,
  // });
  // totalPerSub();
}

// function totalPerSub() {
//   if (localStorage.getItem("sub2_1_1")) {
//     const berlatih = parseInt(localStorage.getItem("sub2_1_1"));

//     localStorage.setItem("sub2_1", berlatih);
//     setInterval(() => {
//       localStorage.removeItem("sub2_1_1");
//     }, 1000);
//   }
// }

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
