class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce(function(total, side) {
            return total + side
        }, 0)
    }

}

class Triangle  extends Polygon{
    get isValid(){
      let a = this.sides[0]
      if (a < (this.sides[1] + this.sides[2])) return true
      else return false
    }
  }

  class Square extends Polygon{
    get isValid(){
      let arr=this.sides
      for(let i=0;i<arr.length-1;i++){
        if(arr[i]!=arr[i+1])return false
      }
      return true
    } 

    get area() {
        return this.sides[0] * this.sides[1]


    }
}