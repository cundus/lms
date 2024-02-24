const assets = [
  {
    image1: "/assets/image/bab_1/sub_2/Ayo Mencoba/17_1.png",
    image2: "/assets/image/bab_1/sub_2/Ayo Mencoba/17_2.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Mencoba/rambutan.m4a",
  },
  {
    image1: "/assets/image/bab_1/sub_2/Ayo Mencoba/18_1.png",
    image2: "/assets/image/bab_1/sub_2/Ayo Mencoba/18_2.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Mencoba/sepeda.m4a",
  },
  {
    image1: "/assets/image/bab_1/sub_2/Ayo Mencoba/19_1.png",
    image2: "/assets/image/bab_1/sub_2/Ayo Mencoba/19_2.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Mencoba/gelas.m4a",
  },
  {
    image1: "/assets/image/bab_1/sub_2/Ayo Mencoba/20_1.png",
    image2: "/assets/image/bab_1/sub_2/Ayo Mencoba/20_2.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Mencoba/payung.m4a",
  },
]

const assetsMenalar = [
  {
    image1: "/assets/image/bab_1/sub_2/Ayo Menalar/Meisya.png",
    image2: "/assets/image/bab_1/sub_2/Ayo Menalar/Carla.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Menalar/meisya  carla.m4a",
  },
  {
    image1: "/assets/image/bab_1/sub_2/Ayo Menalar/Meisya.png",
    image2: "/assets/image/bab_1/sub_2/Ayo Menalar/Rara.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Menalar/meisya rara.m4a",
  },
  {
    image1: "/assets/image/bab_1/sub_2/Ayo Menalar/Meisya.png",
    image2: "/assets/image/bab_1/sub_2/Ayo Menalar/Ana.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Menalar/meisya ani.m4a",
  },
]

window.addEventListener("DOMContentLoaded", () => {
  // Mencoba Tab
  const bodyTable = document.getElementById("body-table")

  for (let index = 0; index < assets.length; index++) {
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")

    td1.innerHTML = `
       <img
           src="${assets[index].image1}"
           alt="Image 1"
           class="w-max h-max"
       /> <span
       onclick="play('${assets[index].sound}')"><img
         src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" /></span><br />`

    td2.innerHTML = `
       <div id="image-dropdown-${index}"></div>
<div id="result-container-${index}" class="mt-2" style="display:none"></div>

       `
    td3.innerHTML = `
    <img
    src="${assets[index].image2}"
    alt="Image 1"
    class="w-max h-max"
/> <span

       `
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    bodyTable.appendChild(tr)
  }

  const dropdownsPlaceholders = document.querySelectorAll("[id^=image-dropdown]")
  dropdownsPlaceholders.forEach((dropdownPlaceholder, id) => {
    dropdownPlaceholder.innerHTML = `
            <div class="relative inline-block text-left">
                                             <div>
                                                <button
                                                   id="dropdownButton${id}"
                                                   type="button"
                                                   class="flex items-center justify-center w-40 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50"
                                                >
                                                   Pilih Simbol
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
                                                      onclick="selectOption('/assets/image/bab_1/sub_2/Ayo Mencoba/=.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'a' , ${id})"
                                                   >
                                                      <img
                                                         src="/assets/image/bab_1/sub_2/Ayo Mencoba/=.png"
                                                         alt="Image 1"
                                                         class="w-6 h-6 mr-2 rounded-full"
                                                      />
                                                      Sama Dengan
                                                   </a>
                                                   <a
                                                      href="#"
                                                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                      onclick="selectOption('/assets/image/bab_1/sub_2/Ayo Mencoba/lebih.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'b' , ${id})"
                                                   >
                                                      <img
                                                         src="/assets/image/bab_1/sub_2/Ayo Mencoba/lebih.png"
                                                         alt="Image 1"
                                                         class="w-6 h-6 mr-2 rounded-full"
                                                      />
                                                      Lebih Dari
                                                   </a>
                                                   <a
                                                      href="#"
                                                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                      onclick="selectOption('/assets/image/bab_1/sub_2/Ayo Mencoba/kurang.png', 'dropdownButton${id}', 'dropdownMenu${id}', 'c' , ${id})"
                                                   >
                                                      <img
                                                         src="/assets/image/bab_1/sub_2/Ayo Mencoba/kurang.png"
                                                         alt="Image 1"
                                                         class="w-6 h-6 mr-2 rounded-full"
                                                      />
                                                      Kurang Dari
                                                   </a>
                                                </div>
                                             </div>
                                          </div>
           `
  })

  // Menalar Tab
  const bodyTableMenalar = document.getElementById("body-table-menalar")

  for (let index = 0; index < assetsMenalar.length; index++) {
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")

    td1.innerHTML = `
        <img src="${assetsMenalar[index].image1}" alt="Image 1" class="w-max h-max" />
        
        <span onclick="play('${assetsMenalar[index].sound}')">
          <img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" />
        </span><br />`

    td2.innerHTML = `
        <div id="image-dropdown-menalar-${index}"></div>
<div id="result2-container-${index}" class="mt-2" style="display:none"></div>

      `
    td3.innerHTML = `
        <img src="${assetsMenalar[index].image2}" alt="Image 2" class="w-max h-max" />
        <span onclick="play('${assetsMenalar[index].sound}')">
          <img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" />
        </span><br />
      `
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    bodyTableMenalar.appendChild(tr)
  }

  const dropdownsPlaceholdersMenalar = document.querySelectorAll(
    "[id^=image-dropdown-menalar]",
  )
  dropdownsPlaceholdersMenalar.forEach((dropdownPlaceholder, id) => {
    dropdownPlaceholder.innerHTML = `
        <div class="relative inline-block text-left">
          <div>
            <button
              id="dropdownButtonMenalar${id}"
              type="button"
              class="flex items-center justify-center w-40 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            >
              Pilih Simbol
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
            id="dropdownMenuMenalar${id}"
            class="hidden absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg"
          >
            <div class="max-h-60 overflow-y-auto">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onclick="selectOptionMenalar('/assets/image/bab_1/sub_2/Ayo Mencoba/=.png', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', 'a' , ${id})"
              >
                <img
                  src="/assets/image/bab_1/sub_2/Ayo Mencoba/=.png"
                  alt="Image 1"
                  class="w-6 h-6 mr-2 rounded-full"
                />
                Sama Dengan
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onclick="selectOptionMenalar('/assets/image/bab_1/sub_2/Ayo Mencoba/lebih.png', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', 'b' , ${id})"
              >
                <img
                  src="/assets/image/bab_1/sub_2/Ayo Mencoba/lebih.png"
                  alt="Image 1"
                  class="w-6 h-6 mr-2 rounded-full"
                />
                Lebih Dari
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onclick="selectOptionMenalar('/assets/image/bab_1/sub_2/Ayo Mencoba/kurang.png', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', 'c' , ${id})"
              >
                <img
                  src="/assets/image/bab_1/sub_2/Ayo Mencoba/kurang.png"
                  alt="Image 1"
                  class="w-6 h-6 mr-2 rounded-full"
                />
                Kurang Dari
              </a>
            </div>
          </div>
        </div>
      `
  })
})

const selectedValues = []

function selectOption(optionText, buttonId, menuId, selectedValue, index) {
  var dropdownButton = document.getElementById(buttonId)
  dropdownButton.innerHTML = `
    <img src="${optionText}" alt="Image 1" class="mr-2 " />`

  // Store the selected value in a data attribute
  dropdownButton.setAttribute("data-selected-value", selectedValue)

  // Add or update the selected value in the array based on the index
  selectedValues[index] = selectedValue

  // Check if the selected value is correct
  const isCorrect = checkCorrectness(selectedValues[index], index)

  // Display "Kamu Benar" or "Kamu Salah" in the next row's cell
  displayResult(isCorrect, index)

  var dropdownMenu = document.getElementById(menuId)
  dropdownMenu.classList.add("hidden")
}

function checkCorrectness(selectedValue, index) {
  // Assuming the correct answers are stored in an array
  const correctAnswers = ["b", "b", "c", "b"]

  // Compare the selected value with the correct answer
  return selectedValue === correctAnswers[index]
}

function displayResult(isCorrect, index) {
  const resultContainer = document.getElementById(`result-container-${index}`)

  if (isCorrect) {
    resultContainer.innerHTML = "Kamu Benar"
    resultContainer.style.color = "green"
  } else {
    resultContainer.innerHTML = "Kamu Salah"
    resultContainer.style.color = "red"
  }
}

// Separate function for Menalar dropdown selection
// function selectOptionMenalar(optionText, buttonId, menuId) {
//   var dropdownButton = document.getElementById(buttonId);
//   dropdownButton.innerHTML = `
//       <img src="${optionText}" alt="Image 1" class="w-12 h-12 mr-2 " />`;

//   var dropdownMenu = document.getElementById(menuId);
//   dropdownMenu.classList.add("hidden");
// }

const selectedValues2 = []

function selectOptionMenalar(optionText, buttonId, menuId, selectedValue, index) {
  var dropdownButton = document.getElementById(buttonId)
  dropdownButton.innerHTML = `
    <img src="${optionText}" alt="Image 1" class="mr-2 " />`

  // Store the selected value in a data attribute
  dropdownButton.setAttribute("data-selected-value", selectedValue)

  // Add or update the selected value in the array based on the index
  selectedValues[index] = selectedValue

  // Check if the selected value is correct
  const isCorrect = checkCorrectness2(selectedValues[index], index)

  // Display "Kamu Benar" or "Kamu Salah" in the next row's cell
  displayResult2(isCorrect, index)

  var dropdownMenu = document.getElementById(menuId)
  dropdownMenu.classList.add("hidden")
}

function checkCorrectness2(selectedValue, index) {
  // Assuming the correct answers are stored in an array
  const correctAnswers = ["b", "c", "a"]

  // Compare the selected value with the correct answer
  return selectedValue === correctAnswers[index]
}

function displayResult2(isCorrect, index) {
  const resultContainer = document.getElementById(`result2-container-${index}`)

  if (isCorrect) {
    resultContainer.innerHTML = "Kamu Benar"
    resultContainer.style.color = "green"
  } else {
    resultContainer.innerHTML = "Kamu Salah"
    resultContainer.style.color = "red"
  }
}

// Mencoba Tab event listener
const mencobaContainer = document.getElementById("table-mencoba")

console.log(mencobaContainer)

mencobaContainer.addEventListener("click", function (event) {
  event.preventDefault()
  console.log(event)
  var dropdownMenus = document.querySelectorAll('[id^="dropdownMenu"]')
  var dropdownButtons = document.querySelectorAll('[id^="dropdownButton"]')

  for (let index = 0; index < dropdownButtons.length; index++) {
    document
      .getElementById("dropdownButton" + index)
      .addEventListener("click", function (e) {
        e.preventDefault()
        var dropdownMenu = document.getElementById("dropdownMenu" + index)
        dropdownMenu.classList.toggle("hidden")
      })
  }

  for (var i = 0; i < dropdownMenus.length; i++) {
    if (!dropdownMenus[i].contains(event.target) && event.target !== dropdownButtons[i]) {
      dropdownMenus[i].classList.add("hidden")
    }
  }
})

// Menalar Tab event listener
const menalarContainer = document.getElementById("table-menalar")

menalarContainer.addEventListener("click", function (event) {
  event.preventDefault()
  var dropdownMenusMenalar = document.querySelectorAll('[id^="dropdownMenuMenalar"]')
  var dropdownButtonsMenalar = document.querySelectorAll('[id^="dropdownButtonMenalar"]')

  for (let index = 0; index < dropdownButtonsMenalar.length; index++) {
    document
      .getElementById("dropdownButtonMenalar" + index)
      .addEventListener("click", function (e) {
        e.preventDefault()
        var dropdownMenuMenalar = document.getElementById("dropdownMenuMenalar" + index)
        dropdownMenuMenalar.classList.toggle("hidden")
      })
  }

  for (var i = 0; i < dropdownMenusMenalar.length; i++) {
    if (
      !dropdownMenusMenalar[i].contains(event.target) &&
      event.target !== dropdownButtonsMenalar[i]
    ) {
      dropdownMenusMenalar[i].classList.add("hidden")
    }
  }
})

function taskResult(type) {
  event.preventDefault()
  respon1.style.display = ""

  if (type === "mengamati") {
    const mengamatiSets = ["mengamati1", "mengamati2", "mengamati3", "mengamati4"]
    let mengamati_array = []

    mengamatiSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName)
      let setValue = getCheckedValue(setElements)
      mengamati_array.push(setValue)
    })

    const average = 4 //total soal

    const jawaban = ["benar", "benar", "benar", "salah"] // jawaban per soal + harus urut
    const resultArray = matchAdjacentElements(jawaban, mengamati_array)
    const resultCount = resultArray.length
    const total = (resultCount / average) * 100
    localStorage.setItem("sub1_2_1", total)

    resultMessage1.style.display = ""
    resultMessage2.style.display = ""
    resultMessage3.style.display = ""
    resultMessage4.style.display = ""

    // komunikasi("/app/dashboard/bab1/materi2.html?page=1");
  } else if (type === "berlatih") {
    const berlatihSets = ["berlatih1", "berlatih2", "berlatih3", "berlatih4", "berlatih5"]
    let berlatih_array = []

    berlatihSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName)
      let setValue = getCheckedValue(setElements)
      berlatih_array.push(setValue)
    })

    const average = 5 //total soal

    const jawaban = ["b", "c", "a", "a", "c"] // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, berlatih_array)
    const resultCount = resultArray.length
    const total = (resultCount / average) * 100
    localStorage.setItem("sub1_2_2", total)

    resultMessage5.style.display = ""
    resultMessage6.style.display = ""
    resultMessage7.style.display = ""
    resultMessage8.style.display = ""
    resultMessage9.style.display = ""
    // komunikasi("/app/dashboard/bab1/materi2.html?page=2");
  } else {
    return null
  }
  // Swal.fire({
  //   icon: "success",
  //   text: `Silahkan lanjut ke berikutnya!`,
  // });
  // totalPerSub();
}

function totalPerSub() {
  if (localStorage.getItem("sub1_2_1") && localStorage.getItem("sub1_2_2")) {
    const mengamati = parseInt(localStorage.getItem("sub1_2_1"))
    const berlatih = parseInt(localStorage.getItem("sub1_2_2"))
    const rata = (mengamati + berlatih) / 2

    localStorage.setItem("sub1_2", rata)
    setInterval(() => {
      localStorage.removeItem("sub1_2_1")
      localStorage.removeItem("sub1_2_2")
    }, 1000)
  }
}

function getCheckedValue(elements) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      return elements[i].value
    }
  }
  return undefined // Return undefined if no radio button is checked
}

function matchAdjacentElements(arr1, arr2) {
  // Check the length of arrays to ensure they are of the same length
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have the same length")
  }

  // Array to store matching values
  const result = []

  // Iterate through the arrays
  for (let i = 0; i < arr1.length; i++) {
    // Compare values at the current index
    if (arr1[i] === arr2[i]) {
      // If they match, add to the result array
      result.push(arr1[i])
    }
  }

  return result
}

function handleRadioButtonClick(rowNumber, result) {
  var messageElement = document.getElementById("resultMessage" + rowNumber)
  if (result === "benar") {
    messageElement.textContent = "Kamu Benar!"
    messageElement.style.color = "green"
  } else if (result === "salah") {
    messageElement.textContent = "Kamu Salah!"
    messageElement.style.color = "red"
  }
}

function komunikasi(url) {
  Swal.fire({
    icon: "success",
    title: "Success",
  }).then(() => {
    window.location.href = `${url}`
  })
}

function clearInputs() {
  // Clear radio button selections for mengamatiSets
  // const mengamatiSets = ["mengamati1", "mengamati2", "mengamati3"];
  // mengamatiSets.forEach((setName) => {
  //   let setElements = document.getElementsByName(setName);
  //   setElements.forEach((element) => {
  //     element.checked = false;
  //   });
  // });

  // Clear radio button selections for berlatihSets
  const berlatihSets = ["berlatih1", "berlatih2", "berlatih3", "berlatih4", "berlatih5"]
  berlatihSets.forEach((setName) => {
    let setElements = document.getElementsByName(setName)
    setElements.forEach((element) => {
      element.checked = false
    })
  })

  // Clear response messages
  const resultMessages = [
    "resultMessage5",
    "resultMessage6",
    "resultMessage7",
    "resultMessage8",
    "resultMessage9",
  ]
  resultMessages.forEach((messageId) => {
    document.getElementById(messageId).textContent = ""
  })
}

menanyaArr = [
  {
    item: "image1",
    image: "/assets/image/bab_1/sub_2/Ayo Menanya/S1.png",
    sedikit: "benar",
    lebih: "salah",
    sama: "salah",
  },
  {
    item: "image2",
    image: "/assets/image/bab_1/sub_2/Ayo Menanya/S2.png",
    sedikit: "salah",
    lebih: "benar",
    sama: "salah",
  },
  {
    item: "image3",
    image: "/assets/image/bab_1/sub_2/Ayo Menanya/S3.png",
    sedikit: "salah",
    lebih: "salah",
    sama: "benar",
  },
  {
    item: "image4",
    image: "/assets/image/bab_1/sub_2/Ayo Menanya/S4.png",
    sedikit: "salah",
    lebih: "benar",
    sama: "salah",
  },
  {
    item: "image5",
    image: "/assets/image/bab_1/sub_2/Ayo Menanya/S5.png",
    sedikit: "salah",
    lebih: "salah",
    sama: "benar",
  },
]

// document.addEventListener("DOMContentLoaded", function () {
//   // Populate the table with questions dynamically
//   const tableBody = document.getElementById("quizTableBody");
//   menanyaArr.forEach((question, index) => {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${index + 1}</td>
//       <td><img src="${question.image}" alt="" class="object-contain"/></td>
//       <td><input type="radio" name="${
//         question.item
//       }" value="sedikit" data-item="${question.item}"></td>
//       <td><input type="radio" name="${
//         question.item
//       }" value="lebih" data-item="${question.item}"></td>
//       <td><input type="radio" name="${question.item}" value="sama" data-item="${
//       question.item
//     }"></td>
//       <td></td>
//     `;
//     tableBody.appendChild(row);
//   });
// });

function submitForm() {
  // Get all radio inputs
  const radioInputs = document.querySelectorAll('input[type="radio"]:checked')

  // Check if any radio input is selected
  if (radioInputs.length === 0) {
    alert("Please select an option for each question.")
    return
  }

  // Initialize the table body for results
  const resultTableBody = document.getElementById("quizTableBody")

  // Clear previous responses
  Array.from(resultTableBody.children).forEach((row) => {
    row.children[5].textContent = ""
    row.children[5].style.color = "" // Clear color styling
  })

  // Check the correctness of each selected option and update the response column
  radioInputs.forEach((input) => {
    const item = input.getAttribute("data-item")
    const selectedValue = input.value

    // Find the corresponding object in menanyaArr
    const selectedItem = menanyaArr.find((obj) => obj.item === item)

    // Check if the selected value is correct
    const isCorrect = selectedItem && selectedItem[selectedValue] === "benar"

    // Find the row in the result table corresponding to the current question
    const resultRow = Array.from(resultTableBody.children).find(
      (row) =>
        row.children[2].querySelector(`[data-item="${item}"]`) === input ||
        row.children[3].querySelector(`[data-item="${item}"]`) === input ||
        row.children[4].querySelector(`[data-item="${item}"]`) === input,
    )

    // Update the response column in the result table
    if (resultRow) {
      const responseCell = resultRow.children[5]
      responseCell.textContent = isCorrect ? "Kamu Benar!" : "Kamu Salah"
      // Add color styling based on correctness
      responseCell.style.color = isCorrect ? "green" : "red"
    }
  })
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the page number from the query parameter or default to 1
  const urlParams = new URLSearchParams(window.location.search)
  let currentPage = parseInt(urlParams.get("page")) || 1

  // Display the current page
  showPage(currentPage)

  // Update the current page number and page numbers list in the HTML
  updatePageNumbers(currentPage)
})

function showPage(pageNumber) {
  // Hide all pages
  const pages = document.querySelectorAll(".page")
  pages.forEach((page) => {
    page.style.display = "none"
  })

  // Show the selected page
  const selectedPage = document.getElementById(`page${pageNumber}`)
  if (selectedPage) {
    selectedPage.style.display = "block"
  }

  // Update the current page number in the "currentPage" span
  document.getElementById("currentPage").textContent = pageNumber
}

function nextPage() {
  const totalPages = document.querySelectorAll(".page").length
  let currentPage = parseInt(document.getElementById("currentPage").textContent)

  if (currentPage < totalPages) {
    currentPage++
    updatePage(currentPage)
  }
}

function prevPage() {
  let currentPage = parseInt(document.getElementById("currentPage").textContent)

  if (currentPage > 1) {
    currentPage--
    updatePage(currentPage)
  }
}

function updatePage(pageNumber) {
  // Update the query parameter
  window.history.pushState({}, "", `?page=${pageNumber}`)

  // Display the new page
  showPage(pageNumber)

  // Update the page numbers list in the HTML
  updatePageNumbers(pageNumber)
}

function updatePageNumbers(currentPage) {
  const totalPages = document.querySelectorAll(".page").length
  const pageNumbersContainer = document.getElementById("pageNumbers")
  const pageNumbersContainer2 = document.getElementById("pageNumbers2")
  let pageNumbersHTML = ""

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      pageNumbersHTML += `<strong>${i}</strong> `
    } else {
      pageNumbersHTML += `<a href="?page=${i}" onclick="updatePage(${i}); return false;">${i}</a> `
    }
  }

  pageNumbersContainer.innerHTML = pageNumbersHTML
  pageNumbersContainer2.innerHTML = pageNumbersHTML
}

let mencobaArr = []

function kirimMencoba() {
  let providedArray = ["Kamu Benar", "Kamu Benar", "Kamu Benar", "Kamu Benar"] // Replace this with your provided array
  let trueCount = 0

  for (let i = 0; i < 4; i++) {
    let mencoba = document.getElementById(`result-container-${i}`)
    let res = mencoba.textContent

    if (mencoba.textContent !== null && mencoba.textContent !== "") {
      mencoba.style.display = "block"
    }

    if (mencobaArr.length < 4) {
      mencobaArr.push(res)
    } else {
      mencobaArr = []
      mencobaArr.push(res)
    }
  }

  console.log("mencobaArr:", mencobaArr)

  // Compare mencobaArr with providedArray and count true matches
  for (let i = 0; i < mencobaArr.length; i++) {
    if (mencobaArr[i] === providedArray[i]) {
      trueCount++
    }
  }

  console.log("Count of true matches:", trueCount)

  localStorage.setItem("sub2_mencoba", (trueCount / 4) * 100)

  // Optionally, you can return the trueCount value
  // komunikasi("/app/dashboard/bab1/materi2.html?page=3");
}

let menalarArr = []

function kirimMenalar() {
  let providedArray = ["Kamu Benar", "Kamu Benar", "Kamu Benar", "Kamu Benar"] // Replace this with your provided array
  let trueCount = 0

  for (let i = 0; i < 3; i++) {
    let menalar = document.getElementById(`result2-container-${i}`)
    let res = menalar.textContent

    if (menalar.textContent !== null && menalar.textContent !== "") {
      menalar.style.display = "block"
    }

    if (menalarArr.length < 3) {
      menalarArr.push(res)
    } else {
      menalarArr = []
      menalarArr.push(res)
    }
  }

  console.log("menalarArr:", menalarArr)

  // Compare menalarArr with providedArray and count true matches
  for (let i = 0; i < menalarArr.length; i++) {
    if (menalarArr[i] === providedArray[i]) {
      trueCount++
    }
  }

  console.log("Count of true matches:", trueCount)

  localStorage.setItem("sub2_menalar", (trueCount / 3) * 100)

  // Optionally, you can return the trueCount value
  // komunikasi("/app/dashboard/bab1/materi2.html?page=4");
}

function clearAll() {
  const dropdownButtonsMenalar = document.querySelectorAll(
    '[id^="dropdownButtonMenalar"]',
  )
  const dropdownMenusMenalar = document.querySelectorAll('[id^="dropdownMenuMenalar"]')

  // Iterate through each dropdown
  for (let index = 0; index < dropdownButtonsMenalar.length; index++) {
    // Clear the selected option
    const dropdownButton = document.getElementById("dropdownButtonMenalar" + index)
    dropdownButton.dataset.selectedOption = "" // Set or remove any specific attribute that tracks the selected option

    // Reset the dropdown UI
    const dropdownMenu = document.getElementById("dropdownMenuMenalar" + index)
    dropdownMenu.classList.add("hidden")

    // Remove content inside the result container
    const resultContainer = document.getElementById("result2-container-" + index)
    resultContainer.innerHTML = ""

    // Update the dropdown button text (if needed)
    dropdownButton.innerText = "Pilih Simbol"
  }
}

let respon1 = document.getElementById("respon1")

let resultMessage1 = document.getElementById("resultMessage1")
let resultMessage2 = document.getElementById("resultMessage2")
let resultMessage3 = document.getElementById("resultMessage3")
let resultMessage4 = document.getElementById("resultMessage4")

let resultMessage5 = document.getElementById("resultMessage5")
let resultMessage6 = document.getElementById("resultMessage6")
let resultMessage7 = document.getElementById("resultMessage7")
let resultMessage8 = document.getElementById("resultMessage8")
let resultMessage9 = document.getElementById("resultMessage9")
