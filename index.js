// Your code here
class Polygon {
    constructor(arrayOfIntegers) {
        this.intArr = arrayOfIntegers
    }

    get countSides() {
        return this.intArr.length
    }

    get perimeter() {
        let total = 0
        for (let num of this.intArr) {
            total += parseInt(num)
        }
        return total
    }
}

class Triangle extends Polygon {
  
    get isValid() {
        let intArray = this.intArr
        if (this.countSides !== 3 || !Array.isArray(intArray)) {
            return false
        }
        else { 
            let side1 = parseInt(intArray[0])
            let side2 = parseInt(intArray[1])
            let side3 = parseInt(intArray[2])
            if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
                return true
            }
            else {
                return false
            }
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.countSides === 4) {

            let newArr = this.intArr.filter(num => parseInt(num) === parseInt(this.intArr[0]))
            
            return newArr.length === 4

        }
        else {
            return false
        }
    }

    get area() {
        return parseInt(this.intArr[0]) * parseInt(this.intArr[1])
    }
}