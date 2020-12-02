import { Birds } from './birds.js';

class Parrot extends Birds {
    constructor (name,color) {
        super (name,color)
        this.wingsCount = 2;
        this.move = 'Fly'
        this.voice = '*Mimics voice*'
        this.fly = "don't like"
    }


    
}

export { Parrot }