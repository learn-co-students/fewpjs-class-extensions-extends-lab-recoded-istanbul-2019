// Your code here
class Polygon {
    constructor(side) {
        this.side = side;
    }

    get countSides() {
        return this.side.length;
    }
    get perimeter() {
        let sum=0
        for(let side of this.side) {
            sum=sum+side
        }
        return sum;
    }
}

class Triangle extends Polygon{
    get isValid() {
        if (this.side.length > 3) return;
        return ((this.side[0] === this.side[1]) && (this.side[0] === this.side[2]) && (this.side[1] === this.side[2]))
    }
}
class Square extends Polygon {
    get isValid() {
        if (this.side.length > 4) return;
        return ((this.side[0] === this.side[1]) && (this.side[0] === this.side[2]) && (this.side[0] === this.side[3]))
    }
    get area() {
        return this.side[0] * this.side[0]
    }
}