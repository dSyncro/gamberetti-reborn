// This code is from 2022

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
    return this.positiveDifference(this.age, other.age);
  }

  private positiveDifference(a: number, b: number) {
    return Math.abs(a - b);
  }
}

const carlos = new Person("Carlos", "Sainz", 28);
const charles = new Person("Charles", "Leclerc", 24);

const ageDiff = carlos.getAgeDiff(charles);
console.log(ageDiff);
