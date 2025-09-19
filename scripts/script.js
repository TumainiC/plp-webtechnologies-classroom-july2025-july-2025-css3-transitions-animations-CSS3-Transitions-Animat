// Dark Mode Toggle (scope: global variable "isDark")
let isDark = false;
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
  toggleDarkMode();
});

// Function with no params but using global scope
function toggleDarkMode() {
  isDark = !isDark; // flip state
  document.body.className = isDark ? "dark" : "light";
}

// Animate Box Button
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

animateBtn.addEventListener("click", () => {
  triggerAnimation(box, "animate");
});

// Function with parameters & return value
function triggerAnimation(element, className) {
  element.classList.add(className);

  // Remove class after animation ends (reusable)
  element.addEventListener("animationend", () => {
    element.classList.remove(className);
  });

  return true; // return useful value for debugging
}

// Example of local vs global scope
function addNumbers(a, b) {
  let result = a + b; // local variable
  return result;
}
console.log("2 + 3 =", addNumbers(2, 3));
