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

    sum()
    {
	    return this.x + this.y + this.z;
    }

    min()
    {
        min = this.x;
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
        max = this.x;
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
