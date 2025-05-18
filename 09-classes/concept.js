// 🔹 1. Class Declaration and Instantiation
class Person {
    constructor(name, age) {
      this.name = name;  // public instance field
      this.age = age;
    }
  
    // 🔹 2. Instance Method
    greet() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  
    // 🔹 3. Getter & Setter
    get ageInYears() {
      return this.age;
    }
  
    set ageInYears(newAge) {
      if(newAge > 0) this.age = newAge;
      else console.error("Age must be positive");
    }
  
    // 🔹 4. Static Method
    static species() {
      return 'Homo sapiens';
    }
  }
  
  const p1 = new Person("Hrishi", 22);
  console.log(p1.greet());             // Hi, I'm Hrishi and I'm 22 years old.
  console.log(Person.species());       // Homo sapiens
  
  // Using getter & setter
  console.log(p1.ageInYears);          // 22
  p1.ageInYears = 25;
  console.log(p1.ageInYears);          // 25
  
  // 🔹 5. Inheritance
  class Student extends Person {
    constructor(name, age, course) {
      super(name, age);  // call parent constructor
      this.course = course;
    }
  
    // Override method
    greet() {
      return `${super.greet()} I'm studying ${this.course}.`;
    }
  }
  
  const s1 = new Student("Alice", 20, "Computer Science");
  console.log(s1.greet());
  // Hi, I'm Alice and I'm 20 years old. I'm studying Computer Science.
  
  // 🔹 6. Private Fields & Methods (ES2022+)
  class SecretAgent {
    #codeName;   // private field
  
    constructor(codeName) {
      this.#codeName = codeName;
    }
  
    #revealSecret() {  // private method
      return `Secret code: ${this.#codeName}`;
    }
  
    showSecret() {
      return this.#revealSecret();
    }
  }
  
  const agent = new SecretAgent("007");
  console.log(agent.showSecret());  // Secret code: 007
  // console.log(agent.#codeName); // SyntaxError
  
  // 🔹 7. Public Class Fields (ES2022+)
  class Counter {
    count = 0;  // public field
  
    increment() {
      this.count++;
    }
  }
  
  const c = new Counter();
  c.increment();
  console.log(c.count); // 1
  
  // 🔹 8. Mixin example (multiple inheritance pattern)
  const CanEat = Base => class extends Base {
    eat() { return `${this.name} is eating.`; }
  };
  const CanWalk = Base => class extends Base {
    walk() { return `${this.name} is walking.`; }
  };
  
  class Person2 {
    constructor(name) { this.name = name; }
  }
  
  class SuperPerson extends CanEat(CanWalk(Person2)) {}
  
  const sp = new SuperPerson("Hrishi");
  console.log(sp.eat());  // Hrishi is eating.
  console.log(sp.walk()); // Hrishi is walking.
  