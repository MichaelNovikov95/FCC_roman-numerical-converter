const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const Submit = (e) => {
  e.preventDefault();
  inputController();
};

const inputController = () => {
  const num = parseInt(input.value);
  if (!num) {
    output.textContent = "Please enter a valid number";
    return;
  } else if (num < 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = Converter(num);
    input.value = "";
  }
};

const Converter = (num) => {
  if (num >= 1000) {
    return "M" + Converter(num - 1000);
  }
  if (num >= 900) {
    return "CM" + Converter(num - 900);
  }
  if (num >= 500) {
    return "D" + Converter(num - 500);
  }
  if (num >= 400) {
    return "CD" + Converter(num - 400);
  }
  if (num >= 100) {
    return "C" + Converter(num - 100);
  }
  if (num >= 90) {
    return "XC" + Converter(num - 90);
  }
  if (num >= 50) {
    return "L" + Converter(num - 50);
  }
  if (num >= 40) {
    return "XL" + Converter(num - 40);
  }
  if (num >= 10) {
    return "X" + Converter(num - 10);
  }
  if (num >= 9) {
    return "IX" + Converter(num - 9);
  }
  if (num >= 5) {
    return "V" + Converter(num - 5);
  }
  if (num >= 4) {
    return "IV" + Converter(num - 4);
  }
  if (num >= 1) {
    return "I" + Converter(num - 1);
  }
  return "";
};

convertBtn.addEventListener("click", Submit);
