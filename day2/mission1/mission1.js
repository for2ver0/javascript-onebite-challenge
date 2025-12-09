function checkAdult(age) {
  switch (age >= 18) {
    case true:
      console.log("성인입니다.");
      break;
    case false:
      console.log("미성년자입니다.");
      break;
  }
}

checkAdult(20);
checkAdult(18);
checkAdult(12);
