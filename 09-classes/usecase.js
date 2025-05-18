// ✅ Use Case 1: Modeling entities in OOP style
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    display() {
      return `${this.make} ${this.model}`;
    }
  }
  const car1 = new Car("Tesla", "Model 3");
  console.log(car1.display());  // Tesla Model 3
  
  // ✅ Use Case 2: Inheritance for specialized types
  class ElectricCar extends Car {
    constructor(make, model, batteryLife) {
      super(make, model);
      this.batteryLife = batteryLife;
    }
    display() {
      return `${super.display()} with battery life ${this.batteryLife} hours`;
    }
  }
  const eCar = new ElectricCar("Tesla", "Model X", 12);
  console.log(eCar.display());  // Tesla Model X with battery life 12 hours
  
  // ✅ Use Case 3: Private fields for encapsulation
  class BankAccount {
    #balance = 0;
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
    deposit(amount) {
      this.#balance += amount;
    }
    getBalance() {
      return this.#balance;
    }
  }
  const acc = new BankAccount(100);
  acc.deposit(50);
  console.log(acc.getBalance());  // 150
  // console.log(acc.#balance);    // SyntaxError
  
  // ✅ Use Case 4: Static methods for utility functions
  class MathUtil {
    static square(n) {
      return n * n;
    }
  }
  console.log(MathUtil.square(5));  // 25
  