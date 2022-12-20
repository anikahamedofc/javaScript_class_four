//1. type conversion
// string
const inputNumber = "7500";
console.log(inputNumber + 10);
console.log(typeof inputNumber); // string
console.log(Number(inputNumber), inputNumber); // convert to number use number function

console.log(typeof Number(inputNumber));

// Number
const birthYear = 1992; // number
console.log(String(birthYear)); //convert to string use string function
console.log(typeof String(birthYear));

const firstName = "AnikAhmed";
console.log(Number(firstName)); // this is NaN value

// 2. type coercion
let numberGet = 5;
console.log("i have " + numberGet + " story book !");
console.log("20" - 5); // it will automatic substrack and give 15 as number
console.log("20" + 5); // it will not add string it will concatinate as result 205
console.log("20" * 5);
console.log("20" - "15" + 5); // it will substrack and give number as result and add 5 as number

// 3. javaScript Truthy and Falsy Value
// there are 5 falsy value
// 0
// NaN
// null
// ""
// undefined
console.log(Boolean(0)); //Falsy
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));

console.log(Boolean(1)); //Truthy

//example
let job = 0; // false value
if (job) {
  console.log("i have good job !");
} else {
  console.log("looking for a good job !");
}
let gotJob = 1; // truthy value
if (gotJob) {
  console.log("i have good job !");
} else {
  console.log("looking for a good job !");
}

let salery;
if (salery) {
  console.log("my salery is set !");
} else {
  console.log("my salery is not set !");
}

// 4. conditional statement
let earning = 25000;
if (earning > 35000) {
  console.log("his earing is excellent !");
} else if (earning > 20000) {
  console.log("his earning is good !");
} else if (earning > 10000) {
  console.log("his earning is average !");
} else {
  console.log("his earnign is not good enough !");
}

// example
let today = "Friday";
if (today === "Satarday") {
  console.log("Today 9 pm we have main live class");
} else if (today === "Sunday") {
  console.log("Today 9 pm we have support  class");
} else if (today === "Monday") {
  console.log("Today 9 pm we have main live  class");
} else if (today === "Tuesday") {
  console.log("Today 9 pm we have support  class");
} else if (today === "Wednesday") {
  console.log("Today 9 pm we have main live  class");
} else if (today === "Thusday") {
  console.log("Today 9 pm we have support  class");
} else if (today === "Friday") {
  console.log("Today is holiday");
} else {
  console.log(
    "ERROR ! please select days eg: Satarday, Sunday etc or check spelling is correct"
  );
}

// 5. nested condition statement
let x = 10;
if (x >= 10) {
  if (x == 10) {
    console.log("X is equal then 10 !");
  } else {
    console.log("X is greater then 10 !");
  }
} else if (x >= 5) {
  if (x == 5) {
    console.log(" X is equal then 5 !");
  } else {
    console.log(" X is greater then 5 !");
  }
} else {
  console.log(" X is lower then 5 !");
}

// 6. switch statement
let day = "";
switch (day) {
  case "Satarday":
    console.log("Today 9 pm we have main live class !");
    break;
  case "Sunday":
    console.log("Today 9 pm we have support class !");
    break;
  case "Monday":
    console.log("Today 9 pm we have main live class !");
    break;
  case "Tuesday":
    console.log("Today 9 pm we have support class !");
    break;
  case "Wednesday":
    console.log("Today 9 pm we have main live class !");
    break;
  case "Thusday":
    console.log("Today 9 pm we have support class !");
    break;
  case "Friday":
    console.log("Today is Holiday 2 !");
    break;
  default:
    console.log(
      "ERROR ! please select days eg: Satarday, Sunday etc or check spelling is correct"
    );
}
