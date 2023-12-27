function taskResult(type) {
  event.preventDefault();

  if (type === "berlatih1") {
    const mengamatiSets = [
      "berlatih1_1",
      "berlatih1_2",
      "berlatih1_3",
      "berlatih1_4",
      "berlatih1_5",
      "berlatih1_6",
      "berlatih1_7",
      "berlatih1_8",
      "berlatih1_9",
      "berlatih1_10",
      "berlatih1_11",
      "berlatih1_12",
      "berlatih1_13",
      "berlatih1_14",
      "berlatih1_15",
    ];
    let mengamati_array = [];

    mengamatiSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName);
      let setValue = getCheckedValue(setElements);
      mengamati_array.push(parseInt(setValue));
    });

    const average = 15; //total soal

    const jawaban = [4, 4, 8, 6, 8, 14, 2, 3, 5, 5, 5, 10, 4, 5, 9]; // jawaban per soal + harus urut
    const resultArray = matchAdjacentElements(jawaban, mengamati_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub2_2_1", total);
  } else if (type === "berlatih2") {
    const berlatihSets = [
      "berlatih2_1",
      "berlatih2_2",
      "berlatih2_3",
      "berlatih2_4",
      "berlatih2_5",
    ];
    let berlatih_array = [];

    berlatihSets.forEach((setName) => {
      let setElements = document.getElementsByName(setName);
      let setValue = getCheckedValue(setElements);
      berlatih_array.push(parseInt(setValue));
    });

    const average = 5; //total soal

    const jawaban = [5, 8, 2, 5, 2]; // jawaban per soal + harus urut

    const resultArray = matchAdjacentElements(jawaban, berlatih_array);
    const resultCount = resultArray.length;
    const total = (resultCount / average) * 100;
    localStorage.setItem("sub2_2_2", total);
  } else {
    return null;
  }
  Swal.fire({
    icon: "success",
    text: `Silahkan lanjut ke berikutnya!`,
  });
  totalPerSub();
}

function totalPerSub() {
  if (localStorage.getItem("sub2_2_1") && localStorage.getItem("sub2_2_2")) {
    const mengamati = parseInt(localStorage.getItem("sub2_2_1"));
    const berlatih = parseInt(localStorage.getItem("sub2_2_2"));
    const rata = (mengamati + berlatih) / 2;

    localStorage.setItem("sub2_2", rata);
    setInterval(() => {
      localStorage.removeItem("sub2_2_1");
      localStorage.removeItem("sub2_2_2");
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
