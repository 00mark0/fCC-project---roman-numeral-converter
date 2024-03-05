let userInput = document.getElementById('number');
let button = document.getElementById('convert-btn');
let result = document.getElementById('output');

let romanMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(num) {
  result.style.removeProperty('color');
  result.style.removeProperty('background-color');
  result.style.removeProperty('border');

  if (num === '') {
    result.textContent = 'Please enter a valid number';
    result.style.color = 'red';
    result.style.backgroundColor = '#FFCCCB';
    result.style.border = '2px solid red';
    return;
  } else if (num < 1) {
    result.textContent = 'Please enter a number greater than or equal to 1';
    result.style.color = 'red';
    result.style.backgroundColor = '#FFCCCB';
    result.style.border = '2px solid red';
    return;
  } else if (num > 3999) {
    result.textContent = 'Please enter a number less than or equal to 3999';
    result.style.color = 'red';
    result.style.backgroundColor = '#FFCCCB';
    result.style.border = '2px solid red';
    return;
  } else {
    let roman = '';
    for (let key in romanMap) {
      while (num >= romanMap[key]) {
        roman += key;
        num -= romanMap[key];
      }
    }
    result.textContent = roman;
    return;
  }
}
button.addEventListener('click', (e) => {
  e.preventDefault();
  convertToRoman(userInput.value);
});
