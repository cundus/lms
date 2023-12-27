const assets = [
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Sepeda.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Kursi.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Ayunan.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Jungatjungit.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Buku.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Bola.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Perosotan.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Layang-layang.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Balon.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Keleker.png",
    sound: "",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const bodyTable = document.getElementById("body-table");

  for (let index = 0; index < 10; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.innerHTML = `
    <img
        src="${assets[index].image}"
        alt="Image 1"
        class="w-24 h-24"
    />`;

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
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 1.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'a' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 1.png"
                                                      alt="Image 1"
                                                      class="w-12 h-12 mr-2 rounded-full"
                                                   />
                                                   Satu
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 2.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'b' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 2.png"
                                                      alt="Image 1"
                                                      class="w-12 h-12 mr-2 rounded-full"
                                                   />
                                                   Dua
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 3.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'c' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 3.png"
                                                      alt="Image 1"
                                                      class="w-12 h-12 mr-2 rounded-full"
                                                   />
                                                   Tiga
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilanngan 4.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'd' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilanngan 4.png"
                                                      alt="Image 1"
                                                      class="w-12 h-12 mr-2 rounded-full"
                                                   />
                                                   Empat
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 5.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'e' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 5.png"
                                                      alt="Image 1"
                                                      class="w-12 h-12 mr-2 rounded-full"
                                                   />
                                                   Lima
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 6.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'f' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 6.png"
                                                      alt="Image 1"
                                                      class="w-12 h-12 mr-2 rounded-full"
                                                   />
                                                   Enam
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 7.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'g' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 7.png"
                                                      alt="Image 1"
                                                      class="w-12 h-12 mr-2 rounded-full"
                                                   />
                                                   Tujuh
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 8.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'h' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 8.png"
                                                      alt="Image 1"
                                                      class="w-12 h-12 mr-2 rounded-full"
                                                   />
                                                   Delapan
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 9.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'i' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 9.png"
                                                      alt="Image 1"
                                                      class="w-12 h-12 mr-2 rounded-full"
                                                   />
                                                   Sembilan
                                                </a>
                                                <a
                                                   href="#"
                                                   class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                   onclick="selectOption2('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 10.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'j' , ${id})"
                                                >
                                                   <img
                                                      src="/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 10.png"
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

function selectOption2(optionText, buttonId, menuId, selectedValue, index) {
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
  const correctAnswers = ['d', 'e', 'b', 'a', 'f', 'j', 'c', 'g', 'h', 'i'];

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

// Data for each question including the correct answer and sound
var questions = [
  {
    correctOption: "1",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_1/ayo_menalar/1.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/2.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/3.m4a",
    ],
  },
  {
    correctOption: "2",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_1/ayo_menalar/1.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/2.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/3.m4a",
    ],
  },
  {
    correctOption: "1",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_1/ayo_menalar/1.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/2.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/3.m4a",
    ],
  },
  {
    correctOption: "2",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_1/ayo_menalar/1.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/2.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/3.m4a",
    ],
  },
  {
    correctOption: "2",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_1/ayo_menalar/1.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/2.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/3.m4a",
    ],
  },
  {
    correctOption: "1",
    options: ["1", "2", "3"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_1/ayo_menalar/1.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/2.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/3.m4a",
    ],
  },
  {
    correctOption: "10",
    options: ["10", "9", "8"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_1/ayo_menalar/10.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/9.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/8.m4a",
    ],
  },
  {
    correctOption: "10",
    options: ["10", "9", "8"],
    soundPaths: [
      "/assets/sounds/bab_1/sub_1/ayo_menalar/10.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/9.m4a",
      "/assets/sounds/bab_1/sub_1/ayo_menalar/8.m4a",
    ],
  },
  // Add more questions as needed
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
      selectOption(row, index);
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
    options[i].setAttribute("onclick", "selectOption(" + row + ", " + i + ")");
  }
}

// Dynamically generate options for each question
for (var i = 0; i < questions.length; i++) {
  generateOptions(i + 1, questions[i]);
}

function taskResult(type) {
  event.preventDefault();

  if (type === "mengamati") {
    const mengamatiSets = ["mengamati1", "mengamati2", "mengamati3"];
    let mengamati_array = [];

    mengamatiSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName);
      let setValue = getCheckedValue(setElements);
      mengamati_array.push(setValue);
    });

    const average = 3; //total soal

    const jawaban = ["benar", "benar", "salah"]; // jawaban per soal + harus urut
    const resultArray = matchAdjacentElements(jawaban, mengamati_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub1_1_1", total);
    
  } else if (type === "berlatih") {
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

    const jawaban = ["b", "c", "a", "b", "a"]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, berlatih_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub1_1_2", total);
  } else {
    return null;
  }
  Swal.fire({
    icon: "success",
    text: `Silahkan lanjut ke berikutnya!`,
  })
  totalPerSub()
}

function totalPerSub() {
  if (localStorage.getItem("sub1_1_1") && localStorage.getItem("sub1_1_2")) {
    const mengamati = parseInt(localStorage.getItem("sub1_1_1"));
    const berlatih = parseInt(localStorage.getItem("sub1_1_2"));
    const rata = (mengamati + berlatih) / 2;

    localStorage.setItem("sub1_1", rata);
    setInterval(() => {
      localStorage.removeItem("sub1_1_1");
      localStorage.removeItem("sub1_1_2");
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
  var messageElement = document.getElementById('resultMessage' + rowNumber);
  if (result === 'benar') {
      messageElement.textContent = 'Kamu Benar!';
      messageElement.style.color = "green";
    } else if (result === 'salah') {
      messageElement.textContent = 'Kamu Salah!';
      messageElement.style.color = "red";
  }
}
