class test {
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location
    }

    getName(){
        return "Your name is " + name
    }
    getAge(){
        return ("Your age is " + age)
    }
    getLocation(){
        return ("Your location is " + this.location)
    }
}

bob = new test("mayowa", 20 ,"maryland")
console.log(bob.getLocation())