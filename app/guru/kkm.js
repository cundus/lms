import { getAllKKM, createKKM } from "../../util/js/db.js";

// Assuming you have a reference to the table element
let allData = [];

// Items per page
const itemsPerPage = 5;

// Calculate the number of pages
let totalPages = 0;

// Initial page
let currentPage = 1;

// Reference to the table element
const table = document.querySelector(".data_kkm");

// Function to populate the table with user data for the current page
const populateTable = () => {
  // Clear existing table rows
  table.innerHTML = "";

  // Add header row
  const headerRow = table.createTHead().insertRow();
  headerRow.innerHTML = "<th>No</th><th>Nama</th><th>KKM</th>";

  // Add data rows
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = allData.slice(startIndex, endIndex);

  const tbody = table.createTBody();
  currentPageData.forEach((data, index) => {
    const row = tbody.insertRow();
    row.innerHTML = `<td>${startIndex + index + 1}</td><td>${
      data.name
    }</td><td>${data.kkm}</td>`;
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
  allData = await getAllKKM();
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

async function createdKKM(event) {
  console.log("Function called");
  event.preventDefault();
  console.log("Prevent Default executed");

  const name = document.getElementById("subjectSelect").value;
  const kkm = document.getElementById("kkmInput").value;

  const data = {
    name: name,
    kkm: kkm,
  };

  console.log("Data:", data); // Add this line for debugging

  try {
    await createKKM(data);
    console.log("createKKM success"); // Add this line for debugging

    Swal.fire({
      icon: "success",
      title: "success",
    }).then(() => {
      window.location.href = "/app/guru/kkm.html";
    });
  } catch (error) {
    console.error("createKKM error:", error); // Add this line for debugging
    // Handle the error as needed
  }
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  createdKKM(event);
});
