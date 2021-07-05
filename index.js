// Your code here

class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    return this.array.reduce((memo, v) => {
      return (memo += v);
    });
  }
}

class Triangle extends Polygon {
  get isValid() {
    let result = true;
    let side1 = this.array[0];
    let side2 = this.array[1];
    let side3 = this.array[2];

    if (
      side1 + side2 < side3 ||
      side1 + side3 < side2 ||
      side2 + side3 < side1
    ) {
      result = false;
    }
    return result
  }
}

class Square extends Polygon {
  get isValid() {
    let result = true;
    let side = this.array[0];

    this.array.forEach(element => {
      if (element !== side) {
        result = false;
      }
    });
    return result;
  }

  get area() {
    return Math.pow(this.array[0], 2);
  }
}
