
// OOP
// js is oop too but not strict class based oop


let obj = {
    name: "John",
    age: "12"
}

let car1 = {
    color: "red",
    speed: "100",
    brand: "tesla",
    drive() {
        console.log("driving.....")
    }
}

console.log(car1)

let car2 = {
    color: "white",
    speed: "100",
    brand: "tesla",
    drive() {
        console.log("driving.....")
    }
}


function Car(color, speed, brand) {
    this.color = color
    this.speed = speed
    this.brand = brand

    // this.drive = () => {
    //     console.log("driving.....")
    // }
}

Car.prototype.drive = () => {
    console.log("driving... prototype");
}

// let car3 = new Car("blue", "200", "volvo")
// let car4 = new Car("blue", "200", "volvo")

// console.log(car3)
// console.log(car4)
// // console.log(car3.brand)
// car3.drive()




class Animal {

    constructor(name, has_fur, breed) {
        this.name = name;
        this.has_fur = has_fur
        this.breed = breed
    }

    eat() {
        console.log("eating.....");
    }

}

// inheritence
// => when we have some unique features, properties
class Cat extends Animal {
    constructor(name, has_fur, breed, behaviour) {
        super(name, has_fur, breed);
        // this.#behaviour = behaviour
    }
    #behaviour = "value";

    // setter and getter methods
    setBehviour(value) {
        this.#behaviour = value
    }

    getBehaviour() {
        return this.#behaviour;
    }

    eat(one) {
        console.log("licking...");
    }

    process() {
        console.log("bend the legs")
        console.log("jumping..")
        console.log("always land on the legs..")
    }

    jump() {
        this.process();
    }

}

let cat1 = new Cat("cat", true, "breed1", "aggresive");

console.log(cat1)




// let animal1 = new Animal("cat");
// let animal2 = new Animal("cat");
// console.log(animal1)



/// method overloading , method overriding.




