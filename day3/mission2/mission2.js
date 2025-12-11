let person = {
  name: "효빈",
  sayName: function () {
    console.log(`제 이름은 ${this.name} 입니다.`);
  },
};

const run = () => {
  person.sayName();
};

run();
