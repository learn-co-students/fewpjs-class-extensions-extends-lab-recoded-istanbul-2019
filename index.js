// Your code here
class Polygon {
    constructor(side) {
        this.side = side
        this.length = side.lenght
    }
    get countSides() {
        return this.side.length
    }
    get perimeter() {
        return this.side.reduce((acc, curr) => {
            return acc = acc + curr
        }, 0)


    }

}
class Triangle extends Polygon {
    get isValid() {

        // if (this.side.length > 3) return;
        // for (let index = 0; index < this.side.length; index++) {
        //     if (this.side[0] === this.side[index]) {
        //         console.log(this.side[0] === this.side[index])
        //         return true
        //     }
        //     else {

        //         return false
        //     }

        // }
        if (this.side.length > 3) return;
        // this.side.forEach((element) => {
        //     console.log(element)
        // })
        return ((this.side[0] === this.side[1]) && (this.side[0] === this.side[2]) && (this.side[1] === this.side[2]))
    }

}
class Square extends Polygon {

    get isValid() {

        // if (this.side.length > 3) return;
        // for (let index = 0; index < this.side.length; index++) {
        //     if (this.side[0] === this.side[index]) {
        //         console.log(this.side[0] === this.side[index])
        //         return true
        //     }
        //     else {

        //         return false
        //     }

        // }
        if (this.side.length > 4) return;
        // this.side.forEach((element) => {
        //     console.log(element)
        // })
        return ((this.side[0] === this.side[1]) && (this.side[0] === this.side[2]) && (this.side[0] === this.side[3]))
    }
    get area() {
        return this.side[0] * this.side[0]
    }


}