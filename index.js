// Your code here

class Polygon{
  constructor(sides){
    this.sides=sides
  }
  get countSides(){return this.sides.length}
  get perimeter(){
    let sum=0
    for(let i of this.sides){
      sum+=i
    } return sum
    
  }
}

class Triangle extends Polygon{
  get isValid(){
    let arr=this.sides
    if(arr[0]+arr[1]<=arr[2]||arr[0]+arr[2]<=arr[1]||arr[1]+arr[2]<=arr[0]) return false
    return true
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
  
  get area(){
    return this.sides[0]*this.sides[0]
  }
}