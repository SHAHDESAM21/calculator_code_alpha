
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
var calc=document.getElementById("display").value;
var result;
if (calc.includes("*")) {
    num1 = Number(calc.slice(0,calc.indexOf("*")));
    num2 = Number(calc.slice(calc.indexOf("*")+1,calc.length));
    console.log(num1);
    console.log(typeof(num1))
    console.log(num2);
    result=num1*num2
    document.getElementById("display").value = result;
}
else if (calc.includes("/")) {
  num1 = Number(calc.slice(0, calc.indexOf("/")));
  num2 = Number(calc.slice(calc.indexOf("/") + 1, calc.length));
  console.log(num1);
  console.log(typeof num1);
  console.log(num2);
  result = num1 / num2;
  document.getElementById("display").value = result;
} else if (calc.includes("+")) {
  num1 = Number(calc.slice(0, calc.indexOf("+")));
  num2 = Number(calc.slice(calc.indexOf("+") + 1, calc.length));
  console.log(num1);
  console.log(typeof num1);
  console.log(num2);
  result = num1 + num2;
  document.getElementById("display").value = result;
} else if (calc.includes("-")) {
  num1 = Number(calc.slice(0, calc.indexOf("-")));
  num2 = Number(calc.slice(calc.indexOf("-") + 1, calc.length));
  console.log(num1);
  console.log(typeof num1);
  console.log(num2);
  result = num1 - num2;
  document.getElementById("display").value = result;
} else {
    document.getElementById("display").value = "Error";
}
//   try {
//     const result = eval(document.getElementById("display").value);
//     document.getElementById("display").value = result;
//   } catch (error) {
//     document.getElementById("display").value = "Error";
//   }
}
