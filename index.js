// Your code here
class Polygon{
  constructor(array){
    this.array = array;
  }
  
  get countSides(){
    return this.array.length
  }
  
  get perimeter(){
    let sum =0;
    for (const el of this.array){
      sum += el
    }
    return sum
  }
}

class Triangle extends Polygon{
  get isValid (){
    
    // if (this.array.length===3 && this.array.reduce((a,b)=> a+b) > this.array[2] ) {
    //   return true
    // }else{
    //   return false
    // }
    let mx = Math.max(...this.array)
    let mn = Math.min(...this.array)
    let md = this.array[Math.floor(this.array.length/2)];
    
      if (mn+md>mx && this.array.length===3){
        return true
      } else{
      return false
    }
   
  }
}

class Square extends Polygon{
  get isValid(){
    if (this.array[0]===this.array[1]) {
      return true
    }else{
      return false
    }
    
  }
  get area(){
    return this.array[0]*this.array[0]
  }
}