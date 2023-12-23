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
  
      const average = 15; //total soal
  
      const jawaban = [7, 5, 7, 6, 4, 5, 2, 3, 5, 5, 5, 10, 4, 5, 9]; // jawaban per soal + harus urut
      const resultArray = matchAdjacentElements(jawaban, mengamati_array);
      const resultCount = resultArray.length;
      const total = (resultCount / average) * 100;
      localStorage.setItem("sub2_2_1", total);

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
  