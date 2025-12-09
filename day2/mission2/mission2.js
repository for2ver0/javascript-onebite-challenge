function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("올바른 연산자(+, -, *, /)를 입력하세요.");
  }
}

calculate(10, 5, "+");
calculate(10, 5, "-");
calculate(10, 5, "*");
calculate(10, 5, "/");

calculate(10, 5, "=");
