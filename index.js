// Your code here
class Polygon{
    constructor(array){
        this.array = array;
        for(let i =0; i< array.length ; i++){
            this.side = i +1
            this.el = this.array[i]
        }
    }

    get countSides(){
        return this.side;
    }

    get perimeter(){
       return this.array.reduce(function(acc , cValue){
            return acc + cValue;
        } , 0)
    }

    get isValid(){
        for(let i =0; i< this.array.length ; i++){
          this.el = this.array[i]
          if(this.el === this.array[this.array.length -1] ){
              return true;
          }else{
              return false;
          }
         }
      }

      get area(){
        return this.el * this.el ;
    }

}


class Triangle extends Polygon{
   
}

class Square extends Polygon{
    
}

