import { Birds } from './birds.js'

class Pigeon extends Birds {
    constructor(name,color) {
        super(name,color)
        this.wingsCount = '2 (1 broken)'
        this.fly= 'love'
        this.voice = '*singing*'
        this.move = 'Fly'
    }
}

export { Pigeon }