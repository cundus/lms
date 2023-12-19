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
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (4).png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (3).png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (2).png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (8).png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (7).png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (6).png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                  onclick="selectOption('/assets/image/bab_1/sub_3/Ayo Mengamati/Jawaban (5).png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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

function selectOption(optionText, buttonId, menuId) {
  var dropdownButton = document.getElementById(buttonId);
  dropdownButton.innerHTML = `
            <img src="${optionText}" alt="Image 1" class="mr-2 " />`;

  var dropdownMenu = document.getElementById(menuId);
  dropdownMenu.classList.add("hidden");
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
   { correctOption: '3', options: ['1', '2', '3'], soundPaths: ['/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a'] },
   { correctOption: '3', options: ['1', '2', '3'], soundPaths: ['/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a'] },
   { correctOption: '3', options: ['1', '2', '3'], soundPaths: ['/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a'] },
   { correctOption: '2', options: ['1', '2', '3'], soundPaths: ['/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a'] },
   { correctOption: '2', options: ['1', '2', '3'], soundPaths: ['/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 1.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 2.m4a', '/assets/sounds/bab_1/sub_3/Ayo Menalar/Jumlah 3.m4a'] },
];

// Function to generate options for a given row
function generateOptions(row, question) {
  var optionsContainer = document.getElementById("options" + row);

  question.options.forEach(function (option, index) {
    var optionElement = document.createElement('span');
    optionElement.className = 'option';
    optionElement.textContent = option;
    optionElement.setAttribute('data-correct', option === question.correctOption); // Add data attribute for correct option
    optionElement.onclick = function() {
      selectOption(row, index);
    };

    // Create sound button using innerHTML
    var soundButton = document.createElement('span');
    soundButton.className = 'audio-button';
    soundButton.innerHTML = `<img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" onclick="play('${question.soundPaths[index]}')">`;

    // Append both option and sound button to the container
    optionsContainer.appendChild(optionElement);
    optionsContainer.appendChild(soundButton);
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
  if (options[index].getAttribute('data-correct') === 'true') {
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