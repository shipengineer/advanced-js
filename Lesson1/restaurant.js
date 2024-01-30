class Cook {
  constructor(name, specs) {
    this.name = name;
    this.specs = specs;
  }
}

class Dish {
  constructor(name, specs) {
    this.name = name;
    this.specs = specs;
  }
}
class Customer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

const margarita = new Dish("margarita", "pizza");
const pepperoni = new Dish("pepperoni", "pizza");
const philadelphia = new Dish("philadelphia", "sushi");
const california = new Dish("california", "sushi");
const tiramisu = new Dish("tiramisu", "desert");
const cheesecake = new Dish("cheesecake", "desert");

const Viktor = new Cook("Viktor", ["pizza"]);
const Olga = new Cook("Olga", ["sushi"]);
const Dmitriy = new Cook("Dmitriy", ["desert"]);

const Alexey = new Customer("Алексей", 1);
const Maria = new Customer("Марина", 2);
const Irina = new Customer("Ирина", 3);

const cooksCanMake = new Map();
cooksCanMake.set(Viktor, [margarita, pepperoni]);
cooksCanMake.set(Olga, [philadelphia, california]);
cooksCanMake.set(Dmitriy, [tiramisu, cheesecake]);

const orders = new WeakMap();
orders.set(Alexey, [pepperoni, tiramisu]);
orders.set(Maria, [california, margarita]);
orders.set(Irina, [cheesecake]);

console.log(cooksCanMake.get(Viktor));
console.log(orders.get(Alexey));
