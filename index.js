// Your code here

class Polygon{
    constructor(array){
        this.sides= array;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce(function(acc,cur){
            return acc+cur;
        });
    } 
}


class Triangle extends Polygon{
    get isValid(){
     const oneSide=this.sides;
     if(oneSide[0]+oneSide[1]>oneSide[2] && oneSide[1]+oneSide[2]>oneSide[0] &&oneSide[2]+oneSide[0]>oneSide[1]){
         return true;
     }
     else{
         return false;
     }
    }
}


class Square extends Polygon{
    get isValid(){
        const oneSide= this.sides;
        if(oneSide[0] === oneSide[1]  ){
            return true;
        }
        else{
            return false;
        }
    }
    get area(){
        const oneSide=this.sides;
        return oneSide[0]*oneSide[0];
    }
}