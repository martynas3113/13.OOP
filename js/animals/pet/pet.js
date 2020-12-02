
import { Animals } from '../animals.js';

class Pet extends Animals { 
    constructor (name,color) {
        super (name,color)
        
    }

    introduce(){
        console.log(`Hello my name is ${this.name} and my color is ${this.color}. I have ${this.legsCount} legs and I ${this.likesPlaying} to play`);
    }

    walk(){
        console.log(`My name is ${this.name} and I ${this.Likewalk} to walk`);
    }

    
}
export{ Pet }