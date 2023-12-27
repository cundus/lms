const assets = [
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/enam.png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/tujuh.png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/Soal  (5).png",
  },
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/enam.png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/tujuh.png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/Soal  (5).png",
  },
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/tiga.png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/Soal  (5).png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/lima.png",
  },
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/Soal  (5).png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/sembilan.png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/delapan.png",
  },
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/empat.png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/tiga.png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/Soal  (5).png",
  },
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/tujuh.png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/Soal  (5).png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/lima.png",
  },
  {
    image1: "/assets/image/bab_1/sub_3/Ayo Mengamati/Soal  (5).png",
    image2: "/assets/image/bab_1/sub_3/Ayo Mengamati/satu.png",
    image3: "/assets/image/bab_1/sub_3/Ayo Mengamati/dua.png",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const bodyTable = document.getElementById("body-table");

  for (let index = 0; index < 7; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.innerHTML = `
   <div class="flex gap-5">
    <img
        src="${assets[index].image1}"
        alt="Image 1"
        class="w-24 h-24"
    />
    <img
        src="${assets[index].image2}"
        alt="Image 2"
        class="w-24 h-24"
    />
    <img
        src="${assets[index].image3}"
        class="w-24 h-24"
    />
   </div>
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
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (4).png', 'dropdownButton${id}', 'dropdownMenu${id}', 'a' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (4).png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Nol
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (3).png', 'dropdownButton${id}', 'dropdownMenu${id}', 'b' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (3).png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Satu
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (2).png', 'dropdownButton${id}', 'dropdownMenu${id}', 'c' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (2).png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Dua
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/4.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'd' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/4.png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Empat
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (8).png', 'dropdownButton${id}', 'dropdownMenu${id}', 'e' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (8).png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Enam
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (7).png', 'dropdownButton${id}', 'dropdownMenu${id}', 'f' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (7).png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Delapan
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (6).png', 'dropdownButton${id}', 'dropdownMenu${id}', 'g' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (6).png"
                                                     alt="Image 1"
                                                     class="w-12 h-12 mr-2 rounded-full"
                                                  />
                                                  Sembilan
                                               </a>
                                               <a
                                                  href="#"
                                                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (5).png', 'dropdownButton${id}', 'dropdownMenu${id}', 'h' , ${id})"
                                               >
                                                  <img
                                                     src="/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (5).png"
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
    <img src="${optionText}" alt="Image 1" class="mr-2 " />`;

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
  const correctAnswers = ['f', 'f', 'd', 'h', 'c', 'e', 'a'];

  // Compare the selected value with the correct answer
  return selectedValue === correctAnswers[index];
}

function displayResult(isCorrect, index) {
  const resultContainer = document.getElementById(`result-container-${index}`);

  if (isCorrect) {
    resultContainer.innerHTML = 'Kamu Benar';
    resultContainer.style.color = 'green';
  } else {
    resultContainer.innerHTML = 'Kamu Salah';
    resultContainer.style.color = 'red';
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
      console.log(setElements);
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
    correctOption: "3",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "3",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "3",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "2",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a",
      "/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a",
    ],
  },
  {
    correctOption: "2",
    options: ["1", "2", "3"],
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
for (var i = 0; i < questions.length; i++) {
  generateOptions(i + 1, questions[i]);
}

let box1data = [
  "",
  "1",
  "2",
  "",
  "...",
  "4",
  "...",
  "6",
  "",
  "7",
  "...",
  "",
  "9",
  "",
  "",
  "10",
];

let box1 = document.getElementById("box1");

for (i = 0; i < box1data.length; i++) {
  if (box1data[i] === "") {
    box1.innerHTML += `
      <div class="" style="width:40px; height: 40px;">
      </div>
      `;
  } else if (box1data[i] === "...") {
    const uniqueId = `box1select${i}`;
    const uniqueName = `box1select${i}`;

    box1.innerHTML += `
      <div class="bg-red-300" style="width:40px; height: 40px;">
        <p class="text-center">
          <select name="${uniqueName}" id="${uniqueId}" class="bg-red-300">
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
      <div class="bg-red-300 " style="width:40px; height: 40px;">
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
