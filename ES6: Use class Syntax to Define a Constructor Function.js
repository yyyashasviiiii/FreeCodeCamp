// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name; // this keyword used as'this' refers to it's current surrounding scope and no further.
    }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//                    END
