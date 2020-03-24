// Your code here
class Polygon{
    constructor(arr){
        this.sides = arr
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce(myfunc)
        function myfunc(memo, el){
          return memo + el
        }
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