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
  })
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
  var messageElement = document.getElementById('resultMessage' + rowNumber);
  if (result === 'benar') {
      messageElement.textContent = 'Kamu Benar!';
      messageElement.style.color = "green";
    } else if (result === 'salah') {
      messageElement.textContent = 'Kamu Salah!';
      messageElement.style.color = "red";
  }
}

const assets = [
  {
    image: "/assets/image/bab_1/sub_4/Ayo Mencoba/1.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_4/Ayo Mencoba/2.png",
    sound: "",
  },
  {
    image: "/assets/image/bab_1/sub_4/Ayo Mencoba/3.png",
    sound: "",
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const bodyTable = document.getElementById("body-table");

  for (let index = 0; index < 3; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.innerHTML = `
    <img
        src="${assets[index].image}"
        alt="Image 1"
        class=""
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
  const correctAnswers = ['c', 'a', 'b'];

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