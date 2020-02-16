// Your code here
class Polygon{
  constructor(array){
    this.array=array;
  }
  get countSides(){
    return this.array.length;
  }
  get perimeter(){
    return this.array.reduce((memo,e)=>  {return memo+=e},0);
  }
}

class Triangle extends Polygon{
  
  get isValid(){
    let sum=this.array[0]+this.array[1]
    let sub=Math.abs(this.array[0]-this.array[1])
       if(this.countSides==3&&sum>this.array[2]&&sub<this.array[2]){
      return true;
    }
    else 
    {return false}
  }
}
class Square extends Polygon{
  get area(){
    return (this.array[0] * this.array[0]);
  }
  get isValid(){
    if(this.countSides==4&&this.perimeter/4==this.array[0]){
      return true;
    }
    else
    {return false}
  }
  
  
}