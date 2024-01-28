import { getKuis, getMencoba, getMengamati } from "../../util/js/db.js";

// Assuming you have a reference to the table element
let allData = [];

// Items per page
const itemsPerPage = 5;

// Calculate the number of pages
let totalPages = 0;

// Initial page
let currentPage = 1;

// Reference to the table element
const table = document.querySelector(".data_kuis");

// Function to populate the table with user data for the current page
const populateTable = () => {
  // Clear existing table rows
  table.innerHTML = "";

  // Add header row
  const headerRow = table.createTHead().insertRow();
  headerRow.innerHTML =
    "<th>No</th><th>Nama</th><th>NISN</th><th>Sekolah</th><th>Nilai</th><th>Hari</th><th>Waktu</th><th>Aksi</th>";

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
      row.innerHTML = `<td>${startIndex + index + 1}</td><td>${
        data.name
      }</td><td>${data.nisn}</td><td>${data.sekolah}</td><td>${
        data.nilai
      }</td><td>${data.hari}</td><td>${
        data.waktu
      }</td><td><button class="p-2" onclick="deleteKuis('${
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
  allData = await getKuis();
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

// Function to convert table data to Excel and trigger download
const downloadExcel = () => {
  // Select the table element
  const table = document.querySelector(".data_kuis");

  // Convert the table to a worksheet
  const ws = XLSX.utils.table_to_sheet(table);

  // Create a workbook with the worksheet
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Data");

  // Generate a binary string from the workbook
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  // Convert binary string to Blob
  const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });

  // Create a download link
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data_kuis.xlsx";

  // Append the link to the document and trigger the download
  document.body.appendChild(a);
  a.click();

  // Cleanup
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
};

// Function to convert string to ArrayBuffer
const s2ab = (s) => {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
};

// Attach event listener to the download button
document
  .getElementById("downloadExcelBtn")
  .addEventListener("click", downloadExcel);
