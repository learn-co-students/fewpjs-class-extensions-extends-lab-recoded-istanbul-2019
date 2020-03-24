// Your code here
class Polygon{
    constructor(arrayofSides)
    {
        this.arrayofSides=arrayofSides;
    }

    get countSides()
    {
        return this.arrayofSides.length;
    }

    get perimeter()
    {
        let sum=0
        for(let side of this.arrayofSides)
        {
            sum=sum+side
        }

        return sum;
    }
}

class Triangle extends Polygon{
    get isValid()
    {
        return (
            (this.arrayofSides[0] + this.arrayofSides[1]) > (this.arrayofSides[2]))&&
            ((this.arrayofSides[1] + this.arrayofSides[2]) > (this.arrayofSides[0]))&&
            ((this.arrayofSides[2] + this.arrayofSides[0]) > (this.arrayofSides[1]))

    }
}

class Square extends Polygon
{
    get isValid()
    {
        if(
            (this.arrayofSides[0]===this.arrayofSides[1]))
            { return true; }
        else 
        {
            return false;
        }
    }

    get area()
    {
        return this.arrayofSides[0]*this.arrayofSides[1]
    }
}