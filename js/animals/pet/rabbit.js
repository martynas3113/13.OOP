import { Pet } from '../pet/pet.js';

class Rabbit extends Pet {
    constructor(name, color) {
        super(name, color)
        this.earsCount = 2;
        this.voice = '*nose moving'
        this.likesPlaying = 'hate'
        this.legsCount = 4;
        this.Likewalk = 'hate'
    }


    introduce() {
        console.log(`Hello my name is ${this.name} and my color is ${this.color}. I have ${this.legsCount} legs and ${this.earsCount} big ears. I ${this.likesPlaying} to play`);
    }
}

export { Rabbit } 