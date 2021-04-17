class Vec3
{
    constructor(x, y, z)
    {
        this.x = x;
	    this.y = y;
	    this.z = z;
    }

    add(v)
    {
	    this.x += v.x;
	    this.y += v.y;
	    this.z += v.z;
	    return this;
    }

    distance(v)
    {
        return Math.sqrt(Math.pow((this.x-v.x),2) + Math.pow((this.y-v.y),2) + Math.pow((this.z-v.z),2));
    }

    sum()
    {
	    return this.x + this.y + this.z;
    }

    min()
    {
        var min = this.x;
        if(min > this.y){
            min = this.y;
        }
        if(min > this.z){
            min = this.z;
        }
        return min;
    }

    max()
    {
        var max = this.x;
        if(max < this.y){
            max = this.y;
        }
        if(max < this.z){
            max = this.z;
        }
        return max;
    }

    mid()
    {
        if(this.x != this.min() && this.x != this.max()){
            return this.x;
        }
        if(this.y != this.min() && this.y != this.max()){
            return this.y;
        }
        if(this.z != this.min() && this.z != this.max()){
            return this.z;
        }
    }
}
