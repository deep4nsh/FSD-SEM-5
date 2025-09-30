// let x = 3;
// if(x%2==0){console.log('evev')}
// else{console.log('odd')}

// const a = parseInt(prompt("Please enter number1:"));
// const b = parseInt(prompt("Please enter number2:"));
// const c = parseInt(prompt("Please enter number3:"));

// console.log(Math.max(a,b,c));


const dayNumber = new Date().getDay(); // 0 (Sun) to 6 (Sat)

let dayName;

switch (dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown day";
}

console.log(`Today is ${dayName}`);

