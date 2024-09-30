/* ------- RANDOM CODES ------- */

// Function to generate combination of characters
function generateCode() {
  // Create variables to store generated codes and the type of characters we want to show as codes

  // Generate character multiple times using a loop
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length; // Randomly select a character from the variable and store in a new variable
    code += str.charAt(char); // Accumulate the generated character into a string of 8 characters
  }
  return code; //return the final accumulated string when loop ends
}

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton() {
  document.getElementById("submit").disabled = true;
}

// Activate function
disableButton();

//NOTE: submit button is initially disabled upon loading of this page - see <body> in html
var code = " "; // to store generated codes and initialize to empty value
var getCode = " "; //to store entered code
var btnvalue; //for button boolean value

//determne when to able or disable button
function disableButton(btnvalue) {
  document.getElementById("submit").disabled = btnvalue; // able/disable button
  if (btnvalue == true) {
    // test if button is disabled or enabled
    // set button and label color translucent
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    // set button and label color with no transparency
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
}

// listen to user input code
var codebox = document.getElementById("codeentered"); // get textbox
codebox.addEventListener("input", evaluateCode); // listen to code entered in textbox


}

//create variable to hold the type of characters we want to show as codes
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
