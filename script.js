//have roman numerals object
//loop through roman numerals
//while roman num value is bigger that input, substract numerals value from input
//put roman numeral to result string

const input = document.getElementById("number");

const button = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanNumerals = {
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

let output = [];

const RomanToNumber = (e) => {
  let inputValue = input.value;
  output = [];
  result.innerText = "";
  if (inputValue === "") {
    result.innerHTML = "Please enter a valid number";
  } else if (inputValue === "-1") {
    result.innerText = "Please enter a number greater than or equal to 1";
  } else if (inputValue >= parseInt("4000")) {
    result.innerText = "Please enter a number less than or equal to 3999";
  } else {
    for (const key in romanNumerals) {
      const numberValue = romanNumerals[key];

      while (inputValue >= numberValue) {
        inputValue -= numberValue;
        output.push(key);
        console.log(inputValue, key);
      }
    }
    result.innerText = output.join("");
    input.value = "";
  }
};

button.addEventListener("click", RomanToNumber);
