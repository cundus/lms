const assets = [
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/enam.png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/tujuh.png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/Soal  (5).png",
  },
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/new/tiga.png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/tujuh.png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/new/lima.png",
  },
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/tiga.png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/new/sembilan.png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/new/delapan.png",
  },
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/new/empat.png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/new/tiga.png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/delapan.png",
  },
];

function insertContent(row, col, content) {
  var table = document.getElementById("table-mencoba");
  var cell = table.rows[row - 1].cells[col - 1];
  cell.innerHTML = content;
}

window.addEventListener("DOMContentLoaded", () => {
  const bodyTable = document.getElementById("body-table");

  for (let index = 0; index < 4; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerHTML = `
    <img
        src="${assets[index].image1}"
        alt="Image 1"
        class="w-24 h-24"
    />
   `;

    td2.innerHTML = `
    <img
    src="${assets[index].image2}"
    alt="Image 2"
    class="w-24 h-24"
/>
    `;

    td3.innerHTML = `
    <img
    src="${assets[index].image3}"
    class="w-24 h-24"
/>
    `;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    bodyTable.appendChild(tr);
  }
  insertContent(
    2,
    3,
    '<div><div id="image-dropdown-1"></div><div id="result-container-0" style="display:none" class="mt-2"></div></div>'
  );
  insertContent(
    3,
    2,
    '<div><div id="image-dropdown-2"></div><div id="result-container-1" style="display:none" class="mt-2"></div></div>'
  );
  insertContent(
    4,
    1,
    '<div><div id="image-dropdown-3"></div><div id="result-container-2" style="display:none" class="mt-2"></div></div>'
  );
  insertContent(
    5,
    3,
    '<div><div id="image-dropdown-4"></div><div id="result-container-3" style="display:none" class="mt-2"></div></div>'
  );

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
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/nol.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'a' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/nol.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Nol
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/satu.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'b' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/satu.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Satu
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/dua.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'c' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/dua.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Dua
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/tiga.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'd' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/tiga.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Tiga
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/empat.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'e' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/empat.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Empat
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/lima.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'f' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/lima.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Lima
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/enam.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'g' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/enam.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Enam
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/tujuh.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'h' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/tujuh.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Tujuh
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/delapan.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'i' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/delapan.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Delapan
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/sembilan.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'j' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/sembilan.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Sembilan
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/new/sepuluh.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'k' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/new/sepuluh.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Sepuluh
                                               </a>
                                            </div>
                                         </div>
                                      </div>
       `;
  });
});

const selectedValues = [];

function selectOption(optionText, buttonId, menuId, selectedValue, index) {
  var dropdownButton = document.getElementById(buttonId);
  dropdownButton.innerHTML = `
    <img src="${optionText}" alt="Image 1" class="mr-2 w-24 h-24" />`;

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
  const correctAnswers = ["i", "e", "k", "c"];

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
  console.log(selectedValues);
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

function taskResult(type) {
  event.preventDefault();

  if (type === "mengamati") {
    let mengamati_array = selectedValues;

    const average = 7; //total soal

    const jawaban = ["f", "f", "d", "h", "c", "e", "a"]; // jawaban per soal + harus urut
    const resultArray = matchAdjacentElements(jawaban, mengamati_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub1_3_1", total);
  } else if (type === "berlatih") {
    clearAllInputs("box1");
    clearAllInputs("box2");
    clearAllInputs("box3");
    const berlatihSets = [
      "box1select4",
      "box1select6",
      "box1select10",
      "box2select1",
      "box2select3",
      "box2select6",
      "box2select7",
      "box3select1",
      "box3select3",
      "box3select6",
      "box3select7",
      "berlatih4",
      "berlatih5",
    ];
    let berlatih_array = [];

    berlatihSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName);
      let setValue = getCheckedValue(setElements);
      berlatih_array.push(setValue);
    });

    const average = 13; //total soal

    const jawaban = [
      "3",
      "5",
      "8",
      "2",
      "4",
      "7",
      "8",
      "9",
      "7",
      "4",
      "3",
      "a",
      "a",
    ]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, berlatih_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub1_3_2", total);
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
  if (localStorage.getItem("sub1_3_1") && localStorage.getItem("sub1_3_2")) {
    const mengamati = parseInt(localStorage.getItem("sub1_3_1"));
    const berlatih = parseInt(localStorage.getItem("sub1_3_2"));
    const rata = (mengamati + berlatih) / 2;

    localStorage.setItem("sub1_3", rata);
    setInterval(() => {
      localStorage.removeItem("sub1_3_1");
      localStorage.removeItem("sub1_3_2");
    }, 1000);
  }
}

function getCheckedValue(elements) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type === "radio" && elements[i].checked) {
      return elements[i].value;
    } else if (elements[i].tagName.toLowerCase() === "select") {
      return elements[i].value;
    }
  }
  return undefined; // Return undefined if no radio button is checked or no option is selected
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

// Data for each question including the correct answer and sound
var questions = [
  {
    correctOption: "salah",
    options: ["benar", "salah"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "1",
    options: ["benar", "salah"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "1",
    options: ["benar", "salah"],
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
function generateOptions(row, question) {
  var optionsContainer = document.getElementById("options" + row);

  question.options.forEach(function (option, index) {
    // Create a new div for each option and sound button pair
    var optionContainer = document.createElement("div");

    // Create the option element
    var optionElement = document.createElement("span");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.setAttribute(
      "data-correct",
      option === question.correctOption
    ); // Add data attribute for correct option
    optionElement.onclick = function () {
      selectOption2(row, index);
    };

    // Create the sound button using innerHTML
    var soundButton = document.createElement("span");
    soundButton.className = "audio-button";
    soundButton.innerHTML = `<img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" onclick="play('${question.soundPaths[index]}')">`;

    // Add classes for styling
    optionContainer.className = "option-container";
    optionElement.className = "option";
    soundButton.className = "audio-button";

    // Append both option and sound button to the optionContainer
    optionContainer.appendChild(optionElement);
    optionContainer.appendChild(soundButton);

    // Append the optionContainer to the optionsContainer
    optionsContainer.appendChild(optionContainer);
  });
}

// Function to handle option selection
function selectOption2(row, index) {
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

let box1data = ["1", "2", "...", "4", "...", "6", "7", "...", "9", "10"];

let box1 = document.getElementById("box1");

for (i = 0; i < box1data.length; i++) {
  if (box1data[i] === "...") {
    const uniqueId = `box1select${i}`;
    const uniqueName = `box1select${i}`;

    box1.innerHTML += `
    <div class="bg-green-300 rounded-t-full" style="width:60px; height: 40px;">
    <p class="text-center">
    <select name="${uniqueName}" id="${uniqueId}" class="bg-green-300 rounded-t-full">
       <option value="">...</option>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="8">8</option>
       <option value="9">9</option>
       <option value="10">10</option>
    </select>
    </p>
 </div>
   `;
  } else {
    box1.innerHTML += `
      <div class="bg-green-300 rounded-t-full" style="width:60px; height: 40px;">
          <p class="text-center">${box1data[i]}</p>
       </div>
  `;
  }
}

let box2data = ["1", "...", "3", "...", "5", "6", "...", "...", "9", "10"];

let box2 = document.getElementById("box2");

for (i = 0; i < box2data.length; i++) {
  if (box2data[i] === "") {
    box2.innerHTML += `
       <div class="rounded-t-full" style="width:60px; height: 40px;">
       </div>
       `;
  } else if (box2data[i] === "...") {
    const uniqueId = `box2select${i}`;
    const uniqueName = `box2select${i}`;
    box2.innerHTML += `
       <div class="bg-green-300 rounded-t-full" style="width:60px; height: 40px;">
          <p class="text-center">
          <select name="${uniqueName}" id="${uniqueId}" class="bg-green-300 rounded-t-full">
             <option value="">...</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
          </select>
          </p>
       </div>
    `;
  } else {
    box2.innerHTML += `
       <div class="bg-green-300 rounded-t-full" style="width:60px; height: 40px;">
          <p class="text-center">${box2data[i]}</p>
       </div>
   `;
  }
}

let box3data = ["10", "...", "8", "...", "6", "5", "...", "...", "2", "1"];

let box3 = document.getElementById("box3");

for (i = 0; i < box3data.length; i++) {
  if (box3data[i] === "") {
    box3.innerHTML += `
       <div class="rounded-t-full" style="width:60px; height: 40px;">
       </div>
       `;
  } else if (box3data[i] === "...") {
    const uniqueId = `box3select${i}`;
    const uniqueName = `box3select${i}`;
    box3.innerHTML += `
      <div class="bg-green-300 rounded-t-full" style="width:60px; height: 40px;">
         <p class="text-center">
         <select name="${uniqueName}" id="${uniqueId}" class="bg-green-300 rounded-t-full">
             <option value="">...</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7</option>
             <option value="8">8</option>
             <option value="9">9</option>
             <option value="10">10</option>
          </select>
          </p>
       </div>
    `;
  } else {
    box3.innerHTML += `
       <div class="bg-green-300 rounded-t-full" style="width:60px; height: 40px;">
          <p class="text-center">${box3data[i]}</p>
       </div>
   `;
  }
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

let responsesArray = [];

function displayResponse(boxId, index, isCorrect) {
  const box = document.getElementById(boxId);
  const responseElement = document.getElementById(`response-${boxId}-${index}`);

  if (isCorrect) {
    responseElement.innerHTML = '<p class="text-green-500">kamu benar!</p>';
    responsesArray.push("Kamu Benar!");
  } else {
    responseElement.innerHTML = '<p class="text-red-500">kamu salah!</p>';
    responsesArray.push("");
  }
}

function checkAnswer(boxId, correctValues) {
  const box = document.getElementById(boxId);
  const selects = box.querySelectorAll("select");

  selects.forEach((select, index) => {
    select.addEventListener("change", () => {
      // Remove previous responses
      const responseElement = document.getElementById(
        `response-${boxId}-${index}`
      );
      responseElement.innerHTML = "";
    });
  });

  // const submitButton = document.getElementById("submit-button"); // Add an id to your submit button
  // submitButton.addEventListener("click", () => {
  // Trigger response check when submit button is clicked
  selects.forEach((select, index) => {
    const selectedValue = select.value;
    const correctValue = correctValues[index];

    displayResponse(boxId, index, selectedValue === correctValue);
  });
  // });
}

function clearAllInputs(boxId) {
  const box = document.getElementById(boxId);
  const selects = box.querySelectorAll("select");
  const radios = box.querySelectorAll("input[type='radio']");
  const responseElements = box.querySelectorAll(".response");

  selects.forEach((select) => {
    select.value = "";
  });

  radios.forEach((radio) => {
    radio.checked = false;
  });

  responseElements.forEach((responseElement) => {
    responseElement.innerHTML = "";
  });
}

// const clearAllButton = document.getElementById("clear-all-button");
// clearAllButton.addEventListener("click", () => {
//   clearAllInputs("box1");
//   clearAllInputs("box2");
//   clearAllInputs("box3");

//   // Clear radio inputs
//   const radioInputs = document.querySelectorAll("input[type='radio']");
//   radioInputs.forEach((radio) => {
//     radio.checked = false;
//   });

//   const allResponseElements = document.querySelectorAll(".response");
//   allResponseElements.forEach((responseElement) => {
//     responseElement.innerHTML = "";
//   });
// });

// Call the function for each box with the correct values
function kirimBerlatih() {
  const res1 = document.getElementById("resultMessage1").textContent;
  const res2 = document.getElementById("resultMessage2").textContent;

  responsesArray = [];

  checkAnswer("box1", ["3", "5", "8"]);
  checkAnswer("box2", ["2", "4", "7", "8"]);
  checkAnswer("box3", ["9", "7", "4", "3"]);

  responsesArray.push(res1);
  responsesArray.push(res2);

  let providedArray = [
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
  ]; // Replace this with your provided array
  let trueCount = 0;

  console.log("responsesArray:", responsesArray);

  // Compare mengamatiArr with providedArray and count true matches
  for (let i = 0; i < responsesArray.length; i++) {
    if (responsesArray[i] === providedArray[i]) {
      trueCount++;
    }
  }

  console.log("Count of true matches:", trueCount);

  localStorage.setItem("sub3_berlatih", (trueCount / 13) * 100);

  console.log(responsesArray);
  resultMessage1.style.display = "block";
  resultMessage2.style.display = "block";

  // komunikasi("/app/dashboard/bab1/materi3.html?page=2");
}

function komunikasi(url) {
  Swal.fire({
    icon: "success",
    title: "Success",
  }).then(() => {
    window.location.href = url;
  });
}

function menalar() {
  // Function to check if the user's input is in the correct order for a specific table
  function checkTable(tableId, isAscending, id) {
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
      const inputs = rows[i].getElementsByTagName("input");
      const userAnswers = Array.from(inputs).map((input) =>
        parseInt(input.value, 10)
      );

      // Checking if the user's input matches the correct order
      const correctOrder = isAscending
        ? [...userAnswers].sort((a, b) => a - b)
        : [...userAnswers].sort((a, b) => b - a);

      if (!userAnswers.every((value, index) => value === correctOrder[index])) {
        // If the answers are incorrect, display "Kamu Salah!" below the respective table
        displayResponse("Jawaban Salah!", table, "red", id);
        return;
      }
    }

    // If all answers are correct, display "Kamu Benar!" below the respective table
    displayResponse("Jawaban Benar!", table, "green", id);
  }

  // Function to display or replace the response below the respective table using <p> element
  function displayResponse(message, targetTable, color, id) {
    // Check if there is an existing response paragraph
    const existingResponse = targetTable.nextSibling;

    if (existingResponse && existingResponse.tagName === "P") {
      // If an existing response is found, replace its text content and color
      existingResponse.id = id;
      existingResponse.textContent = message;
      existingResponse.style.color = color;
    } else {
      // If no existing response, create a new response paragraph and append it
      const responseParagraph = document.createElement("p");
      responseParagraph.id = id;
      responseParagraph.textContent = message;
      responseParagraph.style.color = color;

      // Append or replace the response below the respective table
      targetTable.parentNode.insertBefore(
        responseParagraph,
        targetTable.nextSibling
      );
    }
  }

  // Checking answers for each table separately
  checkTable("table1", false, "1"); // Assuming the first table is for ascending order
  checkTable("table2", false, "2"); // Assuming the second table is for ascending order
  checkTable("table3", false, "3"); // Assuming the third table is for ascending order
  checkTable("table4", true, "4"); // Assuming the fourth table is for descending order
  checkTable("table5", true, "5"); // Assuming the fifth table is for descending order

  kirimMenalar();
}

function getMenalar() {}

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

let mengamatiArr = [];

function kirimMengamati() {
  let providedArray = ["Kamu Benar", "Kamu Benar", "Kamu Benar", "Kamu Benar"]; // Replace this with your provided array
  let trueCount = 0;

  for (let i = 0; i < 4; i++) {
    let mengamati = document.getElementById(`result-container-${i}`);
    let res = mengamati.textContent;

    if (mengamati.textContent !== null && mengamati.textContent !== "") {
      mengamati.style.display = "block";
    }

    if (mengamatiArr.length < 4) {
      mengamatiArr.push(res);
    } else {
      mengamatiArr = [];
      mengamatiArr.push(res);
    }
  }

  console.log("mengamatiArr:", mengamatiArr);

  // Compare mengamatiArr with providedArray and count true matches
  for (let i = 0; i < mengamatiArr.length; i++) {
    if (mengamatiArr[i] === providedArray[i]) {
      trueCount++;
    }
  }

  console.log("Count of true matches:", trueCount);

  localStorage.setItem("sub3_mengamati", (trueCount / 4) * 100);

  // Optionally, you can return the trueCount value
  // komunikasi("/app/dashboard/bab1/materi3.html?page=1");
}

let menalarArr = [];

function kirimMenalar() {
  let providedArray = [
    "Jawaban Benar!",
    "Jawaban Benar!",
    "Jawaban Benar!",
    "Jawaban Benar!",
  ]; // Replace this with your provided array
  let trueCount = 0;

  for (let i = 1; i < 5; i++) {
    let menalar = document.getElementById(`${i}`);
    let res = menalar.textContent;

    if (menalar.textContent !== null && menalar.textContent !== "") {
      menalar.style.display = "block";
    }

    if (menalarArr.length < 4) {
      menalarArr.push(res);
    } else {
      menalarArr = [];
      menalarArr.push(res);
    }
  }

  console.log("menalarArr:", menalarArr);

  // Compare menalarArr with providedArray and count true matches
  for (let i = 0; i < menalarArr.length; i++) {
    if (menalarArr[i] === providedArray[i]) {
      trueCount++;
    }
  }

  console.log("Count of true matches:", trueCount);

  localStorage.setItem("sub3_menalar", (trueCount / 4) * 100);

  // Optionally, you can return the trueCount value
  // komunikasi("/app/dashboard/bab1/materi3.html?page=3");
}

let resultMessage1 = document.getElementById("resultMessage1");
let resultMessage2 = document.getElementById("resultMessage2");
