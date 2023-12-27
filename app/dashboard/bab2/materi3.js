function taskResult() {
  event.preventDefault();

  const mengamatiSets = [
    "berlatih1",
    "berlatih2",
    "berlatih3",
    "berlatih4",
    "berlatih5",
    "berlatih6",
    "berlatih7",
  ];
  let mengamati_array = [];

  mengamatiSets.forEach((setName) => {
    let setElements = document.getElementsByName(setName);
    let setValue = getCheckedValue(setElements);
    mengamati_array.push(parseInt(setValue));
  });

  const average = 7; //total soal

  const jawaban = [7, 5, 7, 6, 4, 5, 2]; // jawaban per soal + harus urut
  const resultArray = matchAdjacentElements(jawaban, mengamati_array);
  const resultCount = resultArray.length;
  const total = (resultCount / average) * 100;
  localStorage.setItem("sub2_3_1", total);
  Swal.fire({
    icon: "success",
    text: `Silahkan lanjut ke berikutnya!`,
  });
  totalPerSub();
}

function totalPerSub() {
  if (localStorage.getItem("sub2_3_1")) {
    const mengamati = parseInt(localStorage.getItem("sub2_3_1"));

    localStorage.setItem("sub2_3", mengamati);
    setInterval(() => {
      localStorage.removeItem("sub2_3_1");
    }, 1000);
  }
}

function getCheckedValue(elements) {
  for (let i = 0; i < elements.length; i++) {
    return elements[i].value;
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

function checkAnswer(questionNumber, setNumber) {
  // Get selected option
  var selectedOption = document.getElementById('berlatih' + setNumber).value;

  // Convert the selected option to a number
  var selectedOptionNumber = parseInt(selectedOption, 10);
  console.log(selectedOptionNumber);

  // Get the correct answer for the current question
  var correctAnswer = correctAnswers1[questionNumber - 1];
  console.log(correctAnswer);

  // Get the <p> element for displaying response
  var responseElement = document.getElementById('response' + 1 + '_' + questionNumber);

  // Check if selected option is correct
  if (selectedOptionNumber === correctAnswer) {
      responseElement.textContent = 'Kamu benar!';
      responseElement.style.color = 'green';
  } else {
      responseElement.textContent = 'Kamu salah!';
      responseElement.style.color = 'red';
  }
}

// Define the correct answers arrays
var correctAnswers1 = [7, 5, 7, 6, 4, 5, 2];

// Add event listeners for each select element using a loop
for (let i = 1; i <= 7; i++) {
  document.getElementById('berlatih' + i).addEventListener('change', (function (questionNumber) {
      return function () {
          // Extract the setNumber from the select element's ID
          var setNumber = this.id.replace('berlatih', '');
          checkAnswer(questionNumber, setNumber);
      };
  })(i));
}

function komunikasi() {
  Swal.fire({
    icon: "success",
    title: "Success",  }).then(() => {
    window.location.href = "/app/dashboard/bab2/materi3.html";
  });
}