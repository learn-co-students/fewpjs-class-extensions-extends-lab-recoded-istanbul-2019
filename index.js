// Your code here
class Polygon{
    constructor(sides){
        this.sides=sides;
    }

    get countSides(){
        let count=0;
        for(const e of this.sides){
            count++;
        }
        return count;
    }
    get perimeter(){
        let sum=0;
        for(const e of this.sides){
            sum+=e;
        }
        return sum;
    }

} 

class Triangle extends Polygon{
    constructor(sides){
        super(sides);
    }



    get isValid(){
        if(this.countSides===3){
            let highest= Math.max.apply(null,this.sides);
            let sum2= this.perimeter-highest;
            return sum2>highest;
        } 
    }

}


class Square extends Polygon{
    constructor(sides){
        super(sides);
    }
    get isValid(){
        if(this.countSides===4){
            let length= this.sides[0];
            for(const e of this.sides){
                if(e!==length){
                    return false;
                }
            }
            return true;
        } 
    }

    get area(){
        return (this.perimeter/4)**2
    }

}
