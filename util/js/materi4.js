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
