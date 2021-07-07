// Your code here

class Polygon{
  constructor(array){
    this.array = array
  }
  get countSides(){
    return this.array.length

  }
  get perimeter(){
    return this.array.reduce((acc,total)=>acc+total)
  }


}


class Triangle extends Polygon{
  get isValid(){
    let sorted = this.array.sort((a,b)=>a-b)
   return Boolean(sorted.length==3 && sorted[0]+sorted[1]>sorted[2]>Math.abs(sorted[1]-sorted[0]))
  }

}

class Square extends Polygon{
  get isValid(){
    return Boolean([...new Set(this.array)].length==1)
  }

  get area(){
   return [...new Set(this.array)]**2
  }
  
}

let polygon =  new Polygon( [ 5, 5, 5 ] )