import { Animals } from '../animals.js';

class Fish extends Animals {
    constructor(name, color) {
        super(name, color)
    }

    introduction() {
        console.log(`Blop blop. My name is ${this.name} my color in this deep ocean is ${this.color} I have ${this.finCount} fins and I ${this.swim} to swim`);
    }

    sound() {
        console.log(`${this.name}: *blop blop*`);
    }

    move() {
        console.log(`We fish we ${this.moving}`);
    }
}

export { Fish }