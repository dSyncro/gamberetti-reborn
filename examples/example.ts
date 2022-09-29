function min(a: number, b: number) {
  return a < b ? a : b;
}

function max(a: number, b: number) {
  return a > b ? a : b;
}

function clamp(t: number, minimum: number, maximum: number) {
  const upperBound = min(t, maximum);
  const result = max(minimum, upperBound);
  return result;
}

class Person {
  constructor(
    public name: string,
    public surname: string,
    public age: number
  ) {}

  get fullName() {
    return this.name + this.surname;
  }

  getAgeDiff(other: Person) {
    return this.age - other.age;
  }
}

const gino = new Person("Gino", "La Mosca", 999);
const gennaro = new Person("Gennaro", "Esposito", 40);

const ageDiff = gino.getAgeDiff(gennaro);
