// Function to append the clicked button's value to the display
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Function to calculate the result
function calculate() {
  let expression = document.getElementById("display").value;

  // Check for invalid operator `//`
  if (expression.includes("//")) {
    document.getElementById("display").value = "Error";
    return;
  }

  try {
    let result = eval(expression);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}
