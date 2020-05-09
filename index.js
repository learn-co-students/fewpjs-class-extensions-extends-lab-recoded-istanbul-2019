class Polygon {
    constructor(arr){
        this.sides = arr ;
    }

    get countSides (){
        return this.sides.length;
    }

    get perimeter (){
        return this.sides.reduce((acc,curr) => {
            return acc + curr;
        }); 
    }
}

class Triangle extends Polygon {
    get isValid (){
        const s = this.sides;
        if(s[0]+s[1]>s[2] && s[1]+s[2]>s[0] && s[0]+s[2]>s[1]){
            return true;
        }else{
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if(this.sides.every(v => v === this.sides[0])){
            return true;
        }else{
        return false;
        }
    }

    get area (){
        return this.sides [0] ** 2;
    }
}