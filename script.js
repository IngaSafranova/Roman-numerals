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

let output = '';

const InputValue = (e)=> {
    const InputValue =input.value ;
console.log(InputValue)
}
button.addEventListener('click', InputValue)

// const RomanToNumber = ()=>{
//     for (const key in romanNumerals) {
    
//         const numberValue = romanNumerals[key];
                
//             console.log(key, numberValue)
//             while (numberValue >= )
//         }
        
// }

