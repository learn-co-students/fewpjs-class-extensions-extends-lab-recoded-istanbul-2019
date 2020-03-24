class Polygon{
    constructor(arr){
        this.sides = arr
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let sum = 0;
    for (var int of this.sides) {
      sum += int
    }
    return sum
  }

}

class Triangle extends Polygon{
  
    get isValid(){
       return (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1])
       
    }
}

class Square extends Polygon{

    get isValid(){
        return (this.sides[0] === this.sides[1] && this.sides[2] === this.sides[3] && this.sides[0] === this.sides[3])
    }

    get area(){
        return this.sides[0] * this.sides[0]
    }
}