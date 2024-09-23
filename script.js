let string = "";
let inputField = document.querySelector("input");
let buttons = document.querySelectorAll("button");

// Event listener for buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      // Evaluate the expression and handle invalid input
      try {
        string = eval(string);
        if (isNaN(string)) {
          inputField.value = "Invalid Input";
        } else {
          inputField.value = string;
        }
      } catch (error) {
        inputField.value = "Invalid Input";
      }
    } else if (e.target.innerHTML == "C") {
      // Clear the input
      string = "";
      inputField.value = string;
    } else if (e.target.innerHTML == "x") {
      // Delete the last character (backspace functionality)
      string = string.slice(0, -1);
      inputField.value = string;
    } else {
      // Append clicked button value to the string
      string += e.target.innerHTML;
      inputField.value = string;
    }
  });
});

// Event listener for manual keyboard input
inputField.addEventListener("input", (e) => {
  string = inputField.value; // Update the string with the manually typed input
});

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Evaluate the expression when Enter is pressed
    try {
      string = eval(string);
      if (isNaN(string)) {
        inputField.value = "Invalid Input";
      } else {
        inputField.value = string;
      }
    } catch (error) {
      inputField.value = "Invalid Input";
    }
  }
});
