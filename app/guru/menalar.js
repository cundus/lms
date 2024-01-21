import { getMenalar, getMencoba, getMengamati } from "../../util/js/db.js";

// Assuming you have a reference to the table element
let allData = [];

// Items per page
const itemsPerPage = 5;

// Calculate the number of pages
let totalPages = 0;

// Initial page
let currentPage = 1;

// Reference to the table element
const table = document.querySelector(".data_siswa");

// Function to populate the table with user data for the current page
const populateTable = () => {
  // Clear existing table rows
  table.innerHTML = "";

  // Add header row
  const headerRow = table.createTHead().insertRow();
  headerRow.innerHTML =
    "<th>No</th><th>Nama</th><th>Jawaban 1</th><th>Jawaban 2</th><th>Jawaban 3</th><th>Jawaban 4</th><th>Jawaban 5</th><th>Jawaban 6</th><th>Jawaban 7</th><th>Jawaban 8</th><th>Nilai</th><th>Aksi</th>";

  // Add data rows
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = allData.slice(startIndex, endIndex);

  const tbody = table.createTBody();
  currentPageData.forEach((data, index) => {
    // Check if the data satisfies the selected filters
    const babFilter = document.getElementById("babFilter").value;
    const subFilter = document.getElementById("subFilter").value;

    if (
      (babFilter === "" || data.bab === babFilter) &&
      (subFilter === "" || data.sub === subFilter)
    ) {
      const row = tbody.insertRow();
      row.innerHTML = `<td>${startIndex + index + 1}</td><td>${data.name}</td>
      <td>${data.jawaban1 || ""}</td>
      <td>${data.jawaban2 || ""}</td>
      <td>${data.jawaban3 || ""}</td>
      <td>${data.jawaban4 || ""}</td>
      <td>${data.jawaban5 || ""}</td>
      <td>${data.jawaban6 || ""}</td>
      <td>${data.jawaban7 || ""}</td>
      <td>${data.jawaban8 || ""}</td>
      <td>${data.nilai}</td>
      <td><button class="p-2" onclick="deleteMenalar('${
        data.nisn + data.bab + data.sub
      }')"><img src="../../assets/image/delete.png" width="20em">
            </button></td>`;
    }
  });
};

// Function to generate pagination links
const generatePaginationLinks = () => {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    li.addEventListener("click", () => goToPage(i));
    paginationContainer.appendChild(li);
  }
};

// Function to handle page navigation
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    populateTable();
    updatePaginationUI();
  }
};

// Function to update the appearance of the pagination links
const updatePaginationUI = () => {
  const paginationLinks = document
    .getElementById("pagination")
    .getElementsByTagName("li");

  for (let i = 0; i < paginationLinks.length; i++) {
    const link = paginationLinks[i];
    const pageNumber = parseInt(link.textContent, 10);

    if (pageNumber === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  }
};

// Function to handle "Next" button click
const nextPage = () => {
  if (currentPage < totalPages) {
    currentPage++;
    populateTable();
    updatePaginationUI();
  }
};

// Function to handle "Previous" button click
const prevPage = () => {
  if (currentPage > 1) {
    currentPage--;
    populateTable();
    updatePaginationUI();
  }
};

// Call the function to fetch all users and set up pagination
const initializePagination = async () => {
  allData = await getMenalar();
  console.log(allData);
  if (allData) {
    totalPages = Math.ceil(allData.length / itemsPerPage);
    generatePaginationLinks();
    populateTable();
    updatePaginationUI();
  }
};

// Set up event listeners for pagination buttons
document.getElementById("prevPage").addEventListener("click", prevPage);
document.getElementById("nextPage").addEventListener("click", nextPage);

// Initialize pagination
initializePagination();

// Add event listeners for filter options
document.getElementById("babFilter").addEventListener("change", populateTable);
document.getElementById("subFilter").addEventListener("change", populateTable);
