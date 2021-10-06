class car{
    constructor(name,year) {
        this.name=name;
        this.year=year;
    }
}
const myCar=new car("ford",2017);
console.log("This"+ myCar.name + "is" + myCar.year)
