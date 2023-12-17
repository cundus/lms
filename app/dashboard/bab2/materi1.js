var totals = [];

    function updateTotal(questionNumber) {
      // Find the corresponding question options and total element
      var option1 = parseInt(document.getElementById('question' + questionNumber + 'Option1').value);
      var option2 = parseInt(document.getElementById('question' + questionNumber + 'Option2').value);
      var totalElement = document.getElementById('totalQuestion' + questionNumber);

      // Perform the calculation
      var total = option1 + option2;

      // If the question number is in the range 6-10, subtract the total
      if (questionNumber >= 6 && questionNumber <= 10) {
        total = option1 - option2;
      }

      // Update the total and store it in the totals array
      totalElement.innerText = total;
      totals[questionNumber] = total;

      // Calculate the overall sum and update the total
      var overallSum = totals.reduce(function (acc, cur) {
        return acc + (cur || 0);
      }, 0);

      // Display the overall sum on the page
      document.getElementById('overallSum').innerText = overallSum;
    }