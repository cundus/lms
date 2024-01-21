function taskResult(type) {
  event.preventDefault();

  if (type === "berlatih") {
    const berlatihSets = [
      "berlatih1",
      "berlatih2",
      "berlatih3",
      "berlatih4",
      "berlatih5",
    ];
    let berlatih_array = [];

    berlatihSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName);
      let setValue = getCheckedValue(setElements);
      berlatih_array.push(setValue);
    });

    const average = 5; //total soal

    const jawaban = ["a", "a", "c", "a", "c"]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, berlatih_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub1_4_2", total);
  } else {
    return null;
  }
  Swal.fire({
    icon: "success",
    text: `Silahkan lanjut ke berikutnya!`,
  });
  totalPerSub();
}

function totalPerSub() {
  if (localStorage.getItem("sub1_4_2")) {
    const berlatih = parseInt(localStorage.getItem("sub1_4_2"));

    localStorage.setItem("sub1_4", berlatih);
    setInterval(() => {
      localStorage.removeItem("sub1_4_2");
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

function handleRadioButtonClick(rowNumber, result) {
  var messageElement = document.getElementById("resultMessage" + rowNumber);
  if (result === "benar") {
    messageElement.textContent = "Kamu Benar!";
    messageElement.style.color = "green";
  } else if (result === "salah") {
    messageElement.textContent = "Kamu Salah!";
    messageElement.style.color = "red";
  }
}

const assets = [
  {
    image: "/assets/image/bab_1/sub_4/Ayo Mencoba/27.png",
    sound:
      "/assets/sounds/bab_1/sub_4/Ayo Mencoba/Nadia mempunyai 8 pensil.m4a",
  },
  {
    image: "/assets/image/bab_1/sub_4/Ayo Mencoba/28.png",
    sound: "/assets/sounds/bab_1/sub_4/Ayo Mencoba/Ruben mempunyai 7 bola.m4a",
  },
  {
    image: "/assets/image/bab_1/sub_4/Ayo Mencoba/29.png",
    sound: "/assets/sounds/bab_1/sub_4/Ayo Mencoba/9 kunci.m4a",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const bodyTable = document.getElementById("body-table");

  for (let index = 0; index < 3; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.innerHTML = `
    <span
                  onclick="play('${assets[index].sound}')"
                >
                  <img
                    src="/assets/image/sound.png"
                    class="w-6 h-6 cursor-pointer select-none"
                  />
                </span>
    <img
        src="${assets[index].image}"
        alt="Image 1"
        class="w-max"
    />
    
    `;

    td2.innerHTML = `
<div id="image-dropdown-${index}"></div>
<div id="result-container-${index}" class="mt-2"></div>
`;
    tr.appendChild(td1);
    tr.appendChild(td2);

    bodyTable.appendChild(tr);
  }

  const dropdownsPlaceholders = document.querySelectorAll(
    "[id^=image-dropdown]"
  );
  dropdownsPlaceholders.forEach((dropdownPlaceholder, id) => {
    dropdownPlaceholder.innerHTML = `
         <div class="relative inline-block text-left">
                                          <div>
                                             <button
                                                id="dropdownButton${id}"
                                                type="button"
                                                class="flex items-center justify-center w-40 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                             >
                                                Pilih lambang bilangan
                                                <svg
                                                   class="w-4 h-4 ml-2"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   viewBox="0 0 24 24"
                                                   xmlns="http://www.w3.org/2000/svg"
                                                >
                                                   <path
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M19 9l-7 7-7-7"
                                                   ></path>
                                                </svg>
                                             </button>
                                          </div>

                                          <div
                                             id="dropdownMenu${id}"
                                             class="hidden absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg"
                                          >
                                             <div class="max-h-60 overflow-y-auto">
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_4/Ayo Mencoba/6.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'a' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_4/Ayo Mencoba/6.png"
                                                      alt="Image 1"
                                                      class=" mr-2 rounded-full"
                                                   />
                                                   
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_4/Ayo Mencoba/4.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'b' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_4/Ayo Mencoba/4.png"
                                                      alt="Image 1"
                                                      class=" mr-2 rounded-full"
                                                   />
                                                   
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_4/Ayo Mencoba/5.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'c' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_4/Ayo Mencoba/5.png"
                                                      alt="Image 1"
                                                      class=" mr-2 rounded-full"
                                                   />
                                                   
                                                </a>
                                             </div>
                                          </div>
                                       </div>
        `;
  });
});

const selectedValues = [];

function selectOption2(optionText, buttonId, menuId, selectedValue, index) {
  var dropdownButton = document.getElementById(buttonId);
  dropdownButton.innerHTML = `
    <img src="${optionText}" alt="Image 1" class="" />`;

  // Store the selected value in a data attribute
  dropdownButton.setAttribute("data-selected-value", selectedValue);

  // Add or update the selected value in the array based on the index
  selectedValues[index] = selectedValue;

  // Check if the selected value is correct
  const isCorrect = checkCorrectness(selectedValues[index], index);

  // Display "Kamu Benar" or "Kamu Salah" in the next row's cell
  displayResult(isCorrect, index);

  var dropdownMenu = document.getElementById(menuId);
  dropdownMenu.classList.add("hidden");
}

function checkCorrectness(selectedValue, index) {
  // Assuming the correct answers are stored in an array
  const correctAnswers = ["c", "a", "b"];

  // Compare the selected value with the correct answer
  return selectedValue === correctAnswers[index];
}

function displayResult(isCorrect, index) {
  const resultContainer = document.getElementById(`result-container-${index}`);

  if (isCorrect) {
    resultContainer.innerHTML = "Kamu Benar";
    resultContainer.style.color = "green";
  } else {
    resultContainer.innerHTML = "Kamu Salah";
    resultContainer.style.color = "red";
  }
}

const mencobaContainer = document.getElementById("table-mencoba");

console.log(mencobaContainer);

mencobaContainer.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
  var dropdownMenus = document.querySelectorAll('[id^="dropdownMenu"]');
  var dropdownButtons = document.querySelectorAll('[id^="dropdownButton"]');

  for (let index = 0; index < dropdownButtons.length; index++) {
    document
      .getElementById("dropdownButton" + index)
      .addEventListener("click", function (e) {
        e.preventDefault();
        var dropdownMenu = document.getElementById("dropdownMenu" + index);
        dropdownMenu.classList.toggle("hidden");
      });
  }

  for (var i = 0; i < dropdownMenus.length; i++) {
    if (
      !dropdownMenus[i].contains(event.target) &&
      event.target !== dropdownButtons[i]
    ) {
      dropdownMenus[i].classList.add("hidden");
    }
  }
});

function komunikasi(url) {
  Swal.fire({
    icon: "success",
    title: "Success",
  }).then(() => {
    window.location.href = url;
  });
}

// Data for each question including the correct answer and sound
var questions = [
  {
    correctOption: "benar",
    options: ["benar", "salah"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "benar",
    options: ["benar", "salah"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "benar",
    options: ["benar", "salah"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "benar",
    options: ["benar", "2"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "salah",
    options: ["benar", "salah"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
];

// Function to generate options for a given row
// function generateOptions(row, question) {
//   var optionsContainer = document.getElementById("options" + row);

//   question.options.forEach(function (option, index) {
//     // Create a new div for each option and sound button pair
//     var optionContainer = document.createElement("div");

//     // Create the option element
//     var optionElement = document.createElement("span");
//     optionElement.className = "option";
//     optionElement.textContent = option;
//     optionElement.setAttribute(
//       "data-correct",
//       option === question.correctOption
//     ); // Add data attribute for correct option
//     optionElement.onclick = function () {
//       selectOption2(row, index);
//     };

//     // Create the sound button using innerHTML
//     var soundButton = document.createElement("span");
//     soundButton.className = "audio-button";
//     soundButton.innerHTML = `<img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" onclick="play('${question.soundPaths[index]}')">`;

//     // Add classes for styling
//     optionContainer.className = "option-container";
//     optionElement.className = "option";
//     soundButton.className = "audio-button";

//     // Append both option and sound button to the optionContainer
//     optionContainer.appendChild(optionElement);
//     optionContainer.appendChild(soundButton);

//     // Append the optionContainer to the optionsContainer
//     optionsContainer.appendChild(optionContainer);
//   });
// }

// Function to handle option selection
function selectOption(row, index) {
  var optionsContainer = document.getElementById("options" + row);
  var options = optionsContainer.getElementsByClassName("option");

  // Remove the click event listener from all options to prevent further clicks
  for (var i = 0; i < options.length; i++) {
    options[i].removeAttribute("onclick");
  }

  // Reset the background color of all options
  for (var i = 0; i < options.length; i++) {
    options[i].style.backgroundColor = "";
  }

  // Highlight the selected option
  options[index].style.backgroundColor = "#e0e0e0";

  // Get the check span element for this row
  var checkSpan = document.getElementById("check" + row);

  // Check if the selected option is correct
  if (options[index].getAttribute("data-correct") === "true") {
    checkSpan.textContent = "Kamu Benar!";
    checkSpan.style.color = "green";
  } else {
    checkSpan.textContent = "Kamu Salah!";
    checkSpan.style.color = "red";
  }

  // Add click event listeners back to options for the next attempt
  for (var i = 0; i < options.length; i++) {
    options[i].setAttribute("onclick", "selectOption2(" + row + ", " + i + ")");
  }
}

// Dynamically generate options for each question
// for (var i = 0; i < questions.length; i++) {
//   generateOptions(i + 1, questions[i]);
// }

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

function kirimBerlatih() {
  let providedArray = [
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
  ]; // Replace this with your provided array
  let trueCount = 0;

  for (let i = 2; i < 6; i++) {
    let berlatih = document.getElementById(`resultMessage${i}`);
    let res = berlatih.textContent;

    // if (berlatih.textContent !== null && berlatih.textContent !== "") {
    //   berlatih.style.display = "block";
    // }

    if (berlatihArr.length < 4) {
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

  localStorage.setItem("sub4_berlatih", (trueCount / 4) * 100);

  // Optionally, you can return the trueCount value
  komunikasi("/app/dashboard/bab1/materi4.html?page=1");
}
