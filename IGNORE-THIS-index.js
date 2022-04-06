const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const wrongAdd = (a, b) => a + `${b}`;

const mathsGuy = (func, a, b) => {
  const result = func(a, b);

  console.log({ result });

  return result;
};

// mathsGuy(wrongAdd, 3, 4);

const refObj = {
  smoker: {
    0: "non smoker",
    1: "smoker",
  },
  eye_colour: {
    0: "brown",
    1: "green",
  },
};

let num = "2345";

// const numMaker = (number) => {
//   console.log(number);
//   const number2 = parseInt(prompt("Enter a decimal number: "));
//   const result = number2.toString(2);

//   console.log({ result });
//   return result;
// };

// numMaker(num);

// const binary = 010101010101;

const recursionCake = (cakeNum) => {
  if (cakeNum === 0) console.log("FINISHED!");
  else {
    console.log(`You have cut a slice! There is ${cakeNum} left!`);
    recursionCake(cakeNum - 1);
  }
};

const num = 10;

recursionCake(num);
