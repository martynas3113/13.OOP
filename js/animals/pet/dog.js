import { Pet } from '../pet/pet.js';

class Dog extends Pet {
    constructor(name,color) {
        super(name, color);
        this.legsCount = 4;
        this.voice =  'Wuf Wuf!'
        this.likesPlaying = "don't like"
        this.Likewalk = "like"
    }

}
export { Dog }