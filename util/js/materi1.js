const assets = [
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Sepeda.png",
    sound: "/assets/sounds/bab_1/sub_1/ayo_mencoba/Sepeda.m4a",
    text: "Berapa banyaknya sepeda?",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Kursi.png",
    sound: "/assets/sounds/bab_1/sub_1/ayo_mencoba/Kursi.m4a",
    text: "Berapa banyaknya kursi?",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Ayunan.png",
    sound: "/assets/sounds/bab_1/sub_1/ayo_mencoba/Ayunan.m4a",
    text: "Berapa banyak ayunan?",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Jungatjungit.png",
    sound: "/assets/sounds/bab_1/sub_1/ayo_mencoba/Jungkat jungkit.m4a",
    text: "Berapa banyaknya jungkat-jungkit?",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Buku.png",
    sound: "",
    text: "Berapa banyaknya buku?",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Bola.png",
    sound: "/assets/sounds/bab_1/sub_1/ayo_mencoba/Bola.m4a",
    text: "Berapa banyaknya bola?",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Perosotan.png",
    sound: "/assets/sounds/bab_1/sub_1/ayo_mencoba/Perosotan.m4a",
    text: "Berapa banyaknya perosotan?",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Layang-layang.png",
    sound: "/assets/sounds/bab_1/sub_1/ayo_mencoba/Layang2.m4a",
    text: "Berapa banyaknya layang-layang?",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Balon.png",
    sound: "/assets/sounds/bab_1/sub_1/ayo_mencoba/Balon.m4a",
    text: "Berapa banyaknya balon?",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mencoba/Benda Keleker.png",
    sound: "/assets/sounds/bab_1/sub_1/ayo_mencoba/Kelereng.m4a",
    text: "Berapa banyaknya kelereng?",
  },
];

const assetsMenalar = [
  {
    image: "/assets/image/bab_1/sub_1/ayo_mengamati/Lambang Bilangan 7.png",
    text: "Ini nama bilangan berapa?",
    sound1:
      "/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Ini nama bil berapa.m4a",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mengamati/Lambang Bilangan 4.png",
    text: "Ini nama bilangan berapa?",
    sound1:
      "/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Ini nama bil berapa.m4a",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mengamati/Lambang Bilangan 8.png",
    text: "Ini nama bilangan berapa?",
    sound1:
      "/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Ini nama bil berapa.m4a",
  },
];

const assetsBilangan = [
  {
    image: "/assets/image/bab_1/sub_1/ayo_mengamati/Item Donat.png",
    text: "Ada berapa jumlah donat ini?",
    sound1:
      "/assets/sounds/bab_1/sub_1/Menghitung Banyak Benda _ Bilangan/Donat.m4a",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mengamati/Item Payung.png",
    text: "Ada berapa jumlah payung ini?",
    sound1:
      "/assets/sounds/bab_1/sub_1/Menghitung Banyak Benda _ Bilangan/Payung.m4a",
  },
  {
    image: "/assets/image/bab_1/sub_1/ayo_mengamati/Item Sendok.png",
    text: "Ada berapa jumlah sendok?",
    sound1:
      "/assets/sounds/bab_1/sub_1/Menghitung Banyak Benda _ Bilangan/Sendok.m4a",
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
    />
    <span onclick="play('${assets[index].sound}')">
            <img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" />
          </span>
          <p>${assets[index].text}</p>
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

  // Menalar Tab
  const bodyTableMenalar = document.getElementById("body-table-menalar");

  for (let index = 0; index < assetsMenalar.length; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerHTML = `
          <img src="${assetsMenalar[index].image}" alt="Image 1" class="w-max h-max" />
          
          <span onclick="play('${assetsMenalar[index].sound1}')">
            <img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" />
          </span>
          <p>${assetsMenalar[index].text}</p>
          `;

    td2.innerHTML = `
          <div id="image-dropdown-menalar-${index}"></div>
  
        `;
    td3.innerHTML = `
          <div id="result2-container-${index}" class="mt-2" style="display:none"></div>
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
              Pilih Nama Bilangan
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
                  onclick="selectOptionMenalar('Satu', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '1' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Satu.m4a')"
                >
                  
                  Satu
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionMenalar('Dua', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '2' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Dua.m4a')"
                >
                 
                  Dua
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionMenalar('Tiga', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '3' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Tiga.m4a')"
                >
                  Tiga
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionMenalar('Empat', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '4' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Empat.m4a')"
                >
                  Empat
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionMenalar('Lima', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '5' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Lima.m4a')"
                >
                  Lima
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionMenalar('Enam', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '6' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Enam.m4a')"
                >
                  Enam
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionMenalar('Tujuh', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '7' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Tujuh.m4a')"
                >
                  Tujuh
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionMenalar('Delapan', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '8' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Delapan.m4a')"
                >
                  Delapan
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionMenalar('Sembilan', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '9' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Sembilan.m4a')"
                >
                  Sembilan
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionMenalar('Sepuluh', 'dropdownButtonMenalar${id}', 'dropdownMenuMenalar${id}', '10' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Sepuluh.m4a')"
                >
                  Sepuluh
                </a>
              </div>
            </div>
          </div>
        `;
  });

  // Menalar Tab
  const bodyTableBilangan = document.getElementById("body-table-bilangan");

  for (let index = 0; index < assetsBilangan.length; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerHTML = `
          <img src="${assetsBilangan[index].image}" alt="Image 1" class="w-max h-max" />
          
          <span onclick="play('${assetsBilangan[index].sound1}')">
            <img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" />
          </span>
          <p>${assetsBilangan[index].text}</p>
          `;

    td2.innerHTML = `
          <div id="image-dropdown-bilangan-${index}"></div>
  
        `;
    td3.innerHTML = `
          <div id="result3-container-${index}" class="mt-2" style="display:none"></div>
        `;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    bodyTableBilangan.appendChild(tr);
  }

  const dropdownsPlaceholdersBilangan = document.querySelectorAll(
    "[id^=image-dropdown-bilangan]"
  );
  dropdownsPlaceholdersBilangan.forEach((dropdownPlaceholder, id) => {
    dropdownPlaceholder.innerHTML = `
          <div class="relative inline-block text-left">
            <div>
              <button
                id="dropdownButtonBilangan${id}"
                type="button"
                class="flex items-center justify-center w-40 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              >
              Pilih Nama Bilangan
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
              id="dropdownMenuBilangan${id}"
              class="hidden absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg"
            >
              <div class="max-h-60 overflow-y-auto">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/1.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '1' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Satu.m4a')"
                >
                <img
                  src="/assets/image/bab_1/sub_1/ayo_mengamati/1.png"
                  alt="Image 1"
                  class="w-12 h-12 mr-2 rounded-full"
                />
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/2.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '2' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Dua.m4a')"
                >
                 
                <img
                src="/assets/image/bab_1/sub_1/ayo_mengamati/2.png"
                alt="Image 1"
                class="w-12 h-12 mr-2 rounded-full"
              />
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/3.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '3' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Tiga.m4a')"
                >
                <img
                src="/assets/image/bab_1/sub_1/ayo_mengamati/3.png"
                alt="Image 1"
                class="w-12 h-12 mr-2 rounded-full"
              />
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/4.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '4' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Empat.m4a')"
                >
                <img
                src="/assets/image/bab_1/sub_1/ayo_mengamati/4.png"
                alt="Image 1"
                class="w-12 h-12 mr-2 rounded-full"
              />
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/5.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '5' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Lima.m4a')"
                >
                <img
                src="/assets/image/bab_1/sub_1/ayo_mengamati/5.png"
                alt="Image 1"
                class="w-12 h-12 mr-2 rounded-full"
              />
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/6.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '6' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Enam.m4a')"
                >
                <img
                src="/assets/image/bab_1/sub_1/ayo_mengamati/6.png"
                alt="Image 1"
                class="w-12 h-12 mr-2 rounded-full"
              />
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/7.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '7' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Tujuh.m4a')"
                >
                <img
                src="/assets/image/bab_1/sub_1/ayo_mengamati/7.png"
                alt="Image 1"
                class="w-12 h-12 mr-2 rounded-full"
              />
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/8.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '8' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Delapan.m4a')"
                >
                <img
                src="/assets/image/bab_1/sub_1/ayo_mengamati/8.png"
                alt="Image 1"
                class="w-12 h-12 mr-2 rounded-full"
              />
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/9.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '9' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Sembilan.m4a')"
                >
                <img
                src="/assets/image/bab_1/sub_1/ayo_mengamati/9.png"
                alt="Image 1"
                class="w-12 h-12 mr-2 rounded-full"
              />
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onclick="selectOptionBilangan('/assets/image/bab_1/sub_1/ayo_mengamati/10.png', 'dropdownButtonBilangan${id}', 'dropdownMenuBilangan${id}', '10' , ${id}, '/assets/sounds/bab_1/sub_1/Menulis_Nama Bilangan/Sepuluh.m4a')"
                >
                <img
                src="/assets/image/bab_1/sub_1/ayo_mengamati/10.png"
                alt="Image 1"
                class="w-12 h-12 mr-2 rounded-full"
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
    <img src="${optionText}" alt="Image 1" class="mr-2" />
  `;

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
  const correctAnswers = ["d", "e", "b", "a", "f", "j", "c", "g", "h", "i"];

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

const selectedValues2 = [];

function selectOptionMenalar(
  optionText,
  buttonId,
  menuId,
  selectedValue,
  index,
  soundUrl
) {
  var dropdownButton = document.getElementById(buttonId);
  dropdownButton.innerHTML = `
    <div class='flex flex-col items-center justify-center text-center'>
    <p>${optionText}</p>
    <br/>
    <span onclick="play('${soundUrl}')" class="">
      <img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" />
    </span>
    </div>
    `;

  // Store the selected value in a data attribute
  dropdownButton.setAttribute("data-selected-value", selectedValue);

  // Add or update the selected value in the array based on the index
  selectedValues[index] = selectedValue;

  // Check if the selected value is correct
  const isCorrect = checkCorrectness2(selectedValues[index], index);

  // Display "Kamu Benar" or "Kamu Salah" in the next row's cell
  displayResult2(isCorrect, index);

  var dropdownMenu = document.getElementById(menuId);
  dropdownMenu.classList.add("hidden");
}

function checkCorrectness2(selectedValue, index) {
  // Assuming the correct answers are stored in an array
  const correctAnswers = ["7", "4", "8"];

  // Compare the selected value with the correct answer
  return selectedValue === correctAnswers[index];
}

function displayResult2(isCorrect, index) {
  const resultContainer = document.getElementById(`result2-container-${index}`);

  if (isCorrect) {
    resultContainer.innerHTML = "Kamu Benar";
    resultContainer.style.color = "green";
  } else {
    resultContainer.innerHTML = "Kamu Salah";
    resultContainer.style.color = "red";
  }
}

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

const selectedValues3 = [];

function selectOptionBilangan(
  optionText,
  buttonId,
  menuId,
  selectedValue,
  index,
  soundUrl
) {
  var dropdownButton = document.getElementById(buttonId);
  dropdownButton.innerHTML = `
    <div class='flex flex-col items-center justify-center text-center'>
    <img src="${optionText}" alt="Image 1" class="mr-2" />
    <br/>
    <span onclick="play('${soundUrl}')" class="">
      <img src="/assets/image/sound.png" class="w-6 h-6 cursor-pointer select-none" />
    </span>
    </div>
    `;

  // Store the selected value in a data attribute
  dropdownButton.setAttribute("data-selected-value", selectedValue);

  // Add or update the selected value in the array based on the index
  selectedValues3[index] = selectedValue;

  // Check if the selected value is correct
  const isCorrect = checkCorrectness3(selectedValues3[index], index);

  // Display "Kamu Benar" or "Kamu Salah" in the next row's cell
  displayResult3(isCorrect, index);

  var dropdownMenu = document.getElementById(menuId);
  dropdownMenu.classList.add("hidden");
}

function checkCorrectness3(selectedValue, index) {
  // Assuming the correct answers are stored in an array
  const correctAnswers = ["7", "4", "5"];

  // Compare the selected value with the correct answer
  return selectedValue === correctAnswers[index];
}

function displayResult3(isCorrect, index) {
  const resultContainer = document.getElementById(`result3-container-${index}`);

  if (isCorrect) {
    resultContainer.innerHTML = "Kamu Benar";
    resultContainer.style.color = "green";
  } else {
    resultContainer.innerHTML = "Kamu Salah";
    resultContainer.style.color = "red";
  }
}

// Bilangan Tab event listener
const bilanganContainer = document.getElementById("table-bilangan");

bilanganContainer.addEventListener("click", function (event) {
  event.preventDefault();
  var dropdownMenusBilangan = document.querySelectorAll(
    '[id^="dropdownMenuBilangan"]'
  );
  var dropdownButtonsBilangan = document.querySelectorAll(
    '[id^="dropdownButtonBilangan"]'
  );

  for (let index = 0; index < dropdownButtonsBilangan.length; index++) {
    document
      .getElementById("dropdownButtonBilangan" + index)
      .addEventListener("click", function (e) {
        e.preventDefault();
        var dropdownMenuBilangan = document.getElementById(
          "dropdownMenuBilangan" + index
        );
        dropdownMenuBilangan.classList.toggle("hidden");
      });
  }

  for (var i = 0; i < dropdownMenusBilangan.length; i++) {
    if (
      !dropdownMenusBilangan[i].contains(event.target) &&
      event.target !== dropdownButtonsBilangan[i]
    ) {
      dropdownMenusBilangan[i].classList.add("hidden");
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
//       selectOption(row, index);
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
    options[i].setAttribute("onclick", "selectOption(" + row + ", " + i + ")");
  }
}

// Dynamically generate options for each question
// for (var i = 0; i < questions.length; i++) {
//   generateOptions(i + 1, questions[i]);
// }

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

    resultMessage4.style.display = "block";
    resultMessage5.style.display = "block";
    resultMessage6.style.display = "block";
    resultMessage7.style.display = "block";
    resultMessage8.style.display = "block";
    // komunikasi("/app/dashboard/bab1/materi1.html?page=4");
  } else {
    return null;
  }
  // Swal.fire({
  //   icon: "success",
  //   text: `Silahkan lanjut ke berikutnya!`,
  // });
  totalPerSub();
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
  var messageElement = document.getElementById("resultMessage" + rowNumber);
  if (result === "benar") {
    messageElement.textContent = "Kamu Benar!";
    messageElement.style.color = "green";
  } else if (result === "salah") {
    messageElement.textContent = "Kamu Salah!";
    messageElement.style.color = "red";
  }
}

function komunikasi(url) {
  Swal.fire({
    icon: "success",
    title: "Success",
  }).then(() => {
    window.location.href = `${url}`;
  });
}
let menalarArr = [
  {
    answer: "mata",
    angka: "2",
    image: "/assets/image/bab_1/sub_1/ayo_menalar/mata.png",
  },
  {
    answer: "telinga",
    angka: "2",
    image: "/assets/image/bab_1/sub_1/ayo_menalar/telinga.png",
  },
  {
    answer: "hidung",
    angka: "1",
    image: "/assets/image/bab_1/sub_1/ayo_menalar/hidung.png",
  },
  {
    answer: "tangan",
    angka: "2",
    image: "/assets/image/bab_1/sub_1/ayo_menalar/tangan.png",
  },
  {
    answer: "kaki",
    angka: "2",
    image: "/assets/image/bab_1/sub_1/ayo_menalar/kaki.png",
  },
  {
    answer: "mulut",
    angka: "1",
    image: "/assets/image/bab_1/sub_1/ayo_menalar/mulut.png",
  },
  {
    answer: "jari tangan",
    angka: "10",
    image: "/assets/image/bab_1/sub_1/ayo_menalar/10 jari tangan.png",
  },
  {
    answer: "jari kaki",
    angka: "10",
    image: "/assets/image/bab_1/sub_1/ayo_menalar/10 jari kaki.png",
  },
];

let tableBody = document.querySelector("#quizTable tbody");

menalarArr.forEach((item, index) => {
  let row = tableBody.insertRow();

  // Input column
  let inputCell = row.insertCell(0);
  let inputField = document.createElement("input");
  inputField.type = "number";
  inputField.placeholder = "Enter your answer";
  inputCell.appendChild(inputField);

  // Image column
  let imageCell = row.insertCell(1);
  let imageElement = document.createElement("img");
  imageElement.src = item.image;
  imageElement.alt = "Image " + index;
  imageElement.width = 50; // Set the width as needed
  imageCell.appendChild(imageElement);

  // Response column
  let responseCell = row.insertCell(2);
});

let menalarJawaban = [];

function submitAnswers() {
  for (let index = 0; index < menalarArr.length; index++) {
    let userInput = tableBody.rows[index].cells[0]
      .querySelector("input")
      .value.toLowerCase();
    let correctAnswer = menalarArr[index].angka.toLowerCase();
    let responseElement = tableBody.rows[index].cells[2];

    if (userInput === correctAnswer) {
      responseElement.textContent = "Kamu Benar!";
      responseElement.style.color = "green";
    } else {
      responseElement.textContent = "Kamu Salah!";
      responseElement.style.color = "red";
    }

    if (menalarJawaban.length < 8) {
      menalarJawaban.push(userInput);
    } else {
      menalarJawaban = [];
      menalarJawaban.push(userInput);
    }
  }

  console.log("menalarJawaban:", menalarJawaban);

  // Compare menghitungArr with providedArray and count true matches
  let trueCount = 0;
  for (let i = 0; i < menalarJawaban.length; i++) {
    if (menalarJawaban[i] === menalarArr[i].angka) {
      trueCount++;
    }
  }

  console.log("Count of true matches:", trueCount);

  localStorage.setItem("sub1_menalar", (trueCount / 8) * 100);
  localStorage.setItem("sub1_menalar_jawaban", JSON.stringify(menalarJawaban));

  // komunikasi("/app/dashboard/bab1/materi1.html?page=6");
}

function clearAll() {
  for (let index = 0; index < menalarArr.length; index++) {
    tableBody.rows[index].cells[0].querySelector("input").value = "";
    tableBody.rows[index].cells[2].textContent = "";
  }
}

function checkAnswers() {
  // Loop through each row in the table
  for (let i = 1; i <= 5; i++) {
    const selectedValue = document.querySelector(
      `input[name="menanya1_${i}"]:checked`
    );

    if (!selectedValue) {
      // If no option is selected for a particular row
      alert(`Pilih jawaban untuk pertanyaan nomor ${i} terlebih dahulu.`);
      return;
    }

    // Get the correct answer (assuming it's stored elsewhere, you may need to adapt this part)
    const correctAnswer = getCorrectAnswer(i);

    // Check if the selected value matches the correct answer
    if (selectedValue.value === correctAnswer) {
      document.getElementById(`resultMessage1${i}`).innerText = "Kamu Benar!";
      document.getElementById(`resultMessage1${i}`).style.color = "green";
    } else {
      document.getElementById(`resultMessage1${i}`).innerText = "Kamu Salah!";
      document.getElementById(`resultMessage1${i}`).style.color = "red";
    }
  }
}

// Example function to get correct answers (you may need to adapt this part)
function getCorrectAnswer(questionNumber) {
  switch (questionNumber) {
    case 1:
      return "benar";
    case 2:
      return "benar";
    case 3:
      return "benar";
    case 4:
      return "benar";
    case 5:
      return "benar";
    // Add more cases for each question
    default:
      return "";
  }
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
  const berlatihSets = [
    "berlatih1",
    "berlatih2",
    "berlatih3",
    "berlatih4",
    "berlatih5",
  ];
  berlatihSets.forEach((setName) => {
    let setElements = document.getElementsByName(setName);
    setElements.forEach((element) => {
      element.checked = false;
    });
  });

  // Clear response messages
  const resultMessages = [
    "resultMessage4",
    "resultMessage5",
    "resultMessage6",
    "resultMessage7",
    "resultMessage8",
  ];
  resultMessages.forEach((messageId) => {
    document.getElementById(messageId).textContent = "";
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

let menulisArr = [];

function kirimMenulis() {
  let providedArray = ["Kamu Benar", "Kamu Benar", "Kamu Benar"]; // Replace this with your provided array
  let trueCount = 0;

  for (let i = 0; i < 3; i++) {
    let menulis = document.getElementById(`result2-container-${i}`);
    let res = menulis.textContent;

    if (menulis.textContent !== null && menulis.textContent !== "") {
      menulis.style.display = "block";
    }

    if (menulisArr.length < 3) {
      menulisArr.push(res);
    } else {
      menulisArr = [];
      menulisArr.push(res);
    }
  }

  console.log("menulisArr:", menulisArr);

  // Compare menulisArr with providedArray and count true matches
  for (let i = 0; i < menulisArr.length; i++) {
    if (menulisArr[i] === providedArray[i]) {
      trueCount++;
    }
  }

  console.log("Count of true matches:", trueCount);

  localStorage.setItem("sub1_menulis", (trueCount / 3) * 100);

  // Optionally, you can return the trueCount value
  // kirimData("Bab 1", "Menulis Nama Bilangan", "sub1_menulis");

  // komunikasi("/app/dashboard/bab1/materi1.html?page=2");
}

let menghitungArr = [];

function kirimMenghitung() {
  let providedArray = ["Kamu Benar", "Kamu Benar", "Kamu Benar"]; // Replace this with your provided array
  let trueCount = 0;

  for (let i = 0; i < 3; i++) {
    let menghitung = document.getElementById(`result3-container-${i}`);
    let res = menghitung.textContent;

    if (menghitung.textContent !== null && menghitung.textContent !== "") {
      menghitung.style.display = "block";
    }

    if (menghitungArr.length < 3) {
      menghitungArr.push(res);
    } else {
      menghitungArr = [];
      menghitungArr.push(res);
    }
  }

  console.log("menghitungArr:", menghitungArr);

  // Compare menghitungArr with providedArray and count true matches
  for (let i = 0; i < menghitungArr.length; i++) {
    if (menghitungArr[i] === providedArray[i]) {
      trueCount++;
    }
  }

  console.log("Count of true matches:", trueCount);

  localStorage.setItem("sub1_menghitung", (trueCount / 3) * 100);

  // Optionally, you can return the trueCount value
  // komunikasi("/app/dashboard/bab1/materi1.html?page=3");
}

let berlatihArr = [];

function selesaiBerlatih() {
  let providedArray = [
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
    "Kamu Benar!",
  ]; // Replace this with your provided array
  let trueCount = 0;

  for (let i = 4; i < 9; i++) {
    let berlatih = document.getElementById(`resultMessage${i}`);
    let res = berlatih.textContent;

    if (berlatih.textContent !== null && berlatih.textContent !== "") {
      berlatih.style.display = "block";
    }

    if (berlatihArr.length < 3) {
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

  localStorage.setItem("sub1_berlatih", (trueCount / 3) * 100);

  // Optionally, you can return the trueCount value
  return trueCount;
}

// function kirimData(bab, sub, nilai) {
//   let res = parseInt(localStorage.getItem(`${nilai}`));
//   insertBerlatih(bab, sub, res);
// }

let resultMessage4 = document.getElementById("resultMessage4");
let resultMessage5 = document.getElementById("resultMessage5");
let resultMessage6 = document.getElementById("resultMessage6");
let resultMessage7 = document.getElementById("resultMessage7");
let resultMessage8 = document.getElementById("resultMessage8");

resultMessage4.style.display = "none";
resultMessage5.style.display = "none";
resultMessage6.style.display = "none";
resultMessage7.style.display = "none";
resultMessage8.style.display = "none";

// let result3container0 = document.getElementById("result3-container-0");
// let result3container1 = document.getElementById("result3-container-1");
// let result3container2 = document.getElementById("result3-container-2");

// result3container0.style.display = "hidden";
// result3container1.style.display = "hidden";
// result3container2.style.display = "hidden";
