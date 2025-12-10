let x = 1;

function test() {
  console.log(x);
  var x = 2;
  console.log(x);
}

test();
console.log(x);
