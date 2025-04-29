let display = document.getElementById('display');
let clickSound = document.getElementById('clickSound');

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch (error) {
    display.innerText = 'Error';
  }
}

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const label = document.getElementById('modeLabel');
  if (document.body.classList.contains('dark')) {
    label.textContent = 'Dark Mode';
  } else {
    label.textContent = 'Light Mode';
  }
}
