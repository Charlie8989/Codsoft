function appendNumber(number) {
  const display = document.getElementById("display");
  display.value += number;
  display.scrollLeft = display.scrollWidth;
}

function clearNumber() {
  document.getElementById("display").value = display.value
    .toString()
    .slice(0, -1);
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
    document.getElementById("dark-mode-switch")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.getElementByClassName('.containerL').classList.toggle("containerD");
  });
