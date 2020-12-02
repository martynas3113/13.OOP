import { Pet } from '../pet/pet.js';

class Cat extends Pet {
    constructor(name, color) {
        super(name, color)

        this.voice = 'Meow Meow!'
        this.legsCount = 4;
        this.likesPlaying = 'like';
        this.Likewalk = "don't like"
    }


}

export { Cat }