// Your code here
class Polygon {
  constructor(ints) {
    this.ints = ints;
  }
  get countSides() {
    return this.ints.length;
  }
  get perimeter() {
    return this.ints.reduce((acc, cur) => acc + cur);
  }
}

class Triangle extends Polygon {
  constructor(ints) {
    super(ints);
  }
  get isValid() {
    return this.ints[0] === this.ints[1] && this.ints[0] === this.ints[2] && this.ints[1] === this.ints[2]
  }
}

class Square extends Polygon {
  constructor(ints) {
    super(ints);
  }
  get isValid() {
    let firstSide = this.ints[0];
    let isValid;
    this.ints.forEach(element => {
      if (element === firstSide) {
        isValid = true;
      } else {
        isValid = false;
      }
    });
    return isValid;
  }
  get area() {
    return this.ints[0] * this.ints[1];
  }
}