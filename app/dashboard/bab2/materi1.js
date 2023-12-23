var totals = [];

function updateTotal(questionNumber) {
  // Find the corresponding question options and total element
  var option1 = parseInt(
    document.getElementById("question" + questionNumber + "Option1").value
  );
  var option2 = parseInt(
    document.getElementById("question" + questionNumber + "Option2").value
  );
  var totalElement = document.getElementById("totalQuestion" + questionNumber);

  // Perform the calculation
  var total = option1 + option2;

  // If the question number is in the range 6-10, subtract the total
  if (questionNumber >= 6 && questionNumber <= 10) {
    total = option1 - option2;
  }

  // Update the total and store it in the totals array
  totalElement.innerText = total;
  totals[questionNumber] = total;

  console.log(totals);
}

function taskResult(type) {
  event.preventDefault();

  if (type === "berlatih") {
    let berlatih_array = totals;

    if (berlatih_array.length === 11) {
      berlatih_array.splice(0, 1);
    }

    const average = 10; //total soal

    const jawaban = [4, 7, 9, 9, 10, 8, 5, 2, 6, 3]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, berlatih_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub2_1", total);
  } else {
    return null;
  }
  // totalPerSub();
}

// function totalPerSub() {
//   if (localStorage.getItem("sub2_1_1")) {
//     const berlatih = parseInt(localStorage.getItem("sub2_1_1"));

//     localStorage.setItem("sub2_1", berlatih);
//     setInterval(() => {
//       localStorage.removeItem("sub2_1_1");
//     }, 1000);
//   }
// }

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
