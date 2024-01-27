let array = [1, 2, 3, 4, 5];
let arrLen = array.length;
console.log(arrLen);

console.log(array.at(-1));

let x = () => {
  return "Hello from x";
};
let mixArray = ["Tejas", true, x(), 100];
console.log(mixArray);
let mixArray2 = [
  "apple",
  { name: "Tejas" },
  true,
  function () {
    console.log("Hello From Function");
  },
];
mixArray2.age = 25;
console.log(mixArray2);

mixArray.push(69);
console.log(mixArray);

//restOperator
let rest = restOpertor(1, 2, 3, 4, 5);
function restOpertor(...a) {
  console.log(a);
}

//spreadOperator
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [...arr, ...arr2];
console.log(arr3);
arr3 = [arr, arr2];
console.log(arr3);

// Call Back Function
const fetchData = (callBack) => {
  setTimeout(() => {
    callBack("Done");
  }, 2000);
};

setTimeout(() => {
  console.log("Timer is Done");
  fetchData((text) => {
    console.log(text);
  });
}, 2500);

Promises;

const fetchDataAsync = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);
  });
};

const main = async () => {
  let a = await new Promise((resolve) => setTimeout(resolve, 0));
  console.log(a);
  console.log("Timer is done");

  const result = await fetchDataAsync();
  console.log(result, "result");
};

main();
