const assets = [
  {
    image: "/assets/image/bab_1/sub_2/Ayo Mencoba/1.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Mencoba/rambutan.m4a",
  },
  {
    image: "/assets/image/bab_1/sub_2/Ayo Mencoba/2.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Mencoba/sepeda.m4a",
  },
  {
    image: "/assets/image/bab_1/sub_2/Ayo Mencoba/3.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Mencoba/gelas.m4a",
  },
  {
    image: "/assets/image/bab_1/sub_2/Ayo Mencoba/4.png",
    sound: "/assets/sounds/bab_1/sub_2/Ayo Mencoba/payung.m4a",
  },
];

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
];

window.addEventListener("DOMContentLoaded", () => {
  // Mencoba Tab
  const bodyTable = document.getElementById("body-table");

  for (let index = 0; index < assets.length; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.innerHTML = `
       <img
           src="${assets[index].image}"
           alt="Image 1"
           class="w-max h-max"
       /> <span
       onclick="play('${assets[index].sound}')"><img
         src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" /></span><br />`;

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
                                                      onclick="selectOption('/assets/image/bab_1/sub_2/Ayo Mencoba/=.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                      onclick="selectOption('/assets/image/bab_1/sub_2/Ayo Mencoba/lebih.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                      onclick="selectOption('/assets/image/bab_1/sub_2/Ayo Mencoba/kurang.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
           `;
  });

  // Menalar Tab
  const bodyTableMenalar = document.getElementById("body-table-menalar");

  for (let index = 0; index < assetsMenalar.length; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerHTML = `
        <img src="${assetsMenalar[index].image1}" alt="Image 1" class="w-max h-max" />
        
        <span onclick="play('${assetsMenalar[index].sound}')">
          <img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" />
        </span><br />`;

    td2.innerHTML = `
        <div id="image-dropdown-menalar-${index}"></div>
      `;
    td3.innerHTML = `
        <img src="${assetsMenalar[index].image2}" alt="Image 2" class="w-max h-max" />
        <span onclick="play('${assetsMenalar[index].sound}')">
          <img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" />
        </span><br />
      `;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    bodyTableMenalar.appendChild(tr);
  }

  const dropdownsPlaceholdersMenalar = document.querySelectorAll(
    "[id^=image-dropdown-menalar]"
  );
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
                onclick="selectOptionMenalar('/assets/image/bab_1/sub_2/Ayo Mencoba/=.png', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}')"
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
                onclick="selectOptionMenalar('/assets/image/bab_1/sub_2/Ayo Mencoba/lebih.png', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}')"
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
                onclick="selectOptionMenalar('/assets/image/bab_1/sub_2/Ayo Mencoba/kurang.png', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}')"
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
      `;
  });
});

function selectOption(optionText, buttonId, menuId) {
  var dropdownButton = document.getElementById(buttonId);
  dropdownButton.innerHTML = `
                <img src="${optionText}" alt="Image 1" class="w-12 h-12 mr-2 " />`;

  var dropdownMenu = document.getElementById(menuId);
  dropdownMenu.classList.add("hidden");
}

// Separate function for Menalar dropdown selection
function selectOptionMenalar(optionText, buttonId, menuId) {
  var dropdownButton = document.getElementById(buttonId);
  dropdownButton.innerHTML = `
      <img src="${optionText}" alt="Image 1" class="w-12 h-12 mr-2 " />`;

  var dropdownMenu = document.getElementById(menuId);
  dropdownMenu.classList.add("hidden");
}

// Mencoba Tab event listener
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

// Menalar Tab event listener
const menalarContainer = document.getElementById("table-menalar");

menalarContainer.addEventListener("click", function (event) {
  event.preventDefault();
  var dropdownMenusMenalar = document.querySelectorAll(
    '[id^="dropdownMenuMenalar"]'
  );
  var dropdownButtonsMenalar = document.querySelectorAll(
    '[id^="dropdownButtonMenalar"]'
  );

  for (let index = 0; index < dropdownButtonsMenalar.length; index++) {
    document
      .getElementById("dropdownButtonMenalar" + index)
      .addEventListener("click", function (e) {
        e.preventDefault();
        var dropdownMenuMenalar = document.getElementById(
          "dropdownMenuMenalar" + index
        );
        dropdownMenuMenalar.classList.toggle("hidden");
      });
  }

  for (var i = 0; i < dropdownMenusMenalar.length; i++) {
    if (
      !dropdownMenusMenalar[i].contains(event.target) &&
      event.target !== dropdownButtonsMenalar[i]
    ) {
      dropdownMenusMenalar[i].classList.add("hidden");
    }
  }
});

function taskResult(type) {
  event.preventDefault();

  if (type === "mengamati") {
    const mengamatiSets = ["mengamati1", "mengamati2", "mengamati3", "mengamati4"];
    let mengamati_array = [];

    mengamatiSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName);
      let setValue = getCheckedValue(setElements);
      mengamati_array.push(setValue);
    });

    const average = 4; //total soal

    const jawaban = ["benar", "benar", "benar", "salah"]; // jawaban per soal + harus urut
    const resultArray = matchAdjacentElements(jawaban, mengamati_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub1_2_1", total);
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

    const jawaban = ["b", "c", "a", "a", "c"]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, berlatih_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub1_2_2", total);
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
  if (localStorage.getItem("sub1_2_1") && localStorage.getItem("sub1_2_2")) {
    const mengamati = parseInt(localStorage.getItem("sub1_2_1"));
    const berlatih = parseInt(localStorage.getItem("sub1_2_2"));
    const rata = (mengamati + berlatih) / 2;

    localStorage.setItem("sub1_2", rata);
    setInterval(() => {
      localStorage.removeItem("sub1_2_1");
      localStorage.removeItem("sub1_2_2");
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
