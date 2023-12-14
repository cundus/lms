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
`;
      tr.appendChild(td1);
      tr.appendChild(td2);

      bodyTable.appendChild(tr);
   }

   const dropdownsPlaceholders = document.querySelectorAll("[id^=image-dropdown]");
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 1.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 2.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 3.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilanngan 4.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 5.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 6.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 7.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 8.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 9.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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
                                                   onclick="selectOption('/assets/image/bab_1/sub_1/ayo_mencoba/Lambang Bilangan 10.png', 'dropdownButton${id}', 'dropdownMenu${id}')"
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

function selectOption(optionText, buttonId, menuId) {
   var dropdownButton = document.getElementById(buttonId);
   dropdownButton.innerHTML = `
             <img src="${optionText}" alt="Image 1" class="w-12 h-12 mr-2 " />`;

   var dropdownMenu = document.getElementById(menuId);
   dropdownMenu.classList.add("hidden");
}

document.addEventListener("click", function (event) {
   event.preventDefault();
   var dropdownMenus = document.querySelectorAll('[id^="dropdownMenu"]');
   var dropdownButtons = document.querySelectorAll('[id^="dropdownButton"]');

   for (let index = 0; index < dropdownButtons.length; index++) {
      document.getElementById("dropdownButton" + index).addEventListener("click", function (e) {
         e.preventDefault();
         var dropdownMenu = document.getElementById("dropdownMenu" + index);
         dropdownMenu.classList.toggle("hidden");
      });
   }

   for (var i = 0; i < dropdownMenus.length; i++) {
      if (!dropdownMenus[i].contains(event.target) && event.target !== dropdownButtons[i]) {
         dropdownMenus[i].classList.add("hidden");
      }
   }
});
