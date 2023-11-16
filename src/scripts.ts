const buttonOne = document.getElementById('buttonOne');
const boxOne = document.getElementById('boxOne');
buttonOne.addEventListener('click', () => {
  boxOne.style.backgroundColor = 'yellow';
});
boxOne.addEventListener('mouseover', () => {
  boxOne.style.backgroundColor = 'red';
});
boxOne.addEventListener('mouseout', () => {
  boxOne.style.backgroundColor = '#1fc2ae';
});

const buttonTwo = document.getElementById('buttonTwo');
const boxTwo = document.getElementById('boxTwo');
buttonTwo.addEventListener('click', () => {
  boxTwo.textContent = 'SUCCESS';
});

const buttonThree = document.getElementById('buttonThree');
const boxThree = document.getElementById('boxThree');
buttonThree.addEventListener('click', () => {
  boxThree.style.opacity = '0';
});

const buttonFour = document.getElementById('buttonFour');
const boxFour = document.getElementById('boxFour');
buttonFour.addEventListener('click', () => {
  boxFour.style.opacity = boxFour.style.opacity === '0' ? '1' : '0';
});

const buttonFive = document.getElementById('buttonFive');
const boxFive = document.getElementById('boxFive');
const colors = ['blue', 'yellow', 'pink', 'green', 'orange'];
buttonFive.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  boxFive.style.backgroundColor = randomColor;
});

let intervalFive: number;
let timer: number;
boxFive.addEventListener('mouseover', () => {
  timer = 0;
  intervalFive = window.setInterval(() => {
    timer += 1;
    boxFive.textContent = timer.toString();
    if (timer >= 10) {
      clearInterval(intervalFive);
    }
  }, 1000);
});
boxFive.addEventListener('mouseout', () => {
  timer = 0;
  boxFive.textContent = timer.toString();
  clearInterval(intervalFive);
});

const buttonSix = document.getElementById('buttonSix');
const boxSix = document.getElementById('boxSix');
buttonSix.addEventListener('click', () => {
  let counter = 0;
  const intervalSix = setInterval(() => {
    counter += 1;
    boxSix.textContent = counter.toString();
    if (counter >= 10) {
      clearInterval(intervalSix);
    }
  }, 3000);
});

const buttonSeven = document.getElementById('buttonSeven');
const body = document.getElementById('body');
buttonSeven.addEventListener('click', () => {
  body.style.backgroundColor = '#000000';
  boxOne.style.backgroundColor = '#18D5E1';
  boxTwo.style.backgroundColor = '#18D5E1';
  boxThree.style.backgroundColor = '#18D5E1';
  boxFour.style.backgroundColor = '#18D5E1';
  boxFive.style.backgroundColor = '#18D5E1';
  boxSix.style.backgroundColor = '#18D5E1';
});

const placeholder = document.getElementById('placeholder') as HTMLInputElement;
const hiddenText = document.getElementById('hiddenText');
placeholder.addEventListener('input', () => {
  hiddenText.innerHTML = placeholder.value;
});
