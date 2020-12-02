import { Birds } from './birds.js';
    class Chicken extends Birds {
        constructor(name,color){
            super(name,color)
            this.wingsCount = 2;
            this.move = 'I dont fly'
            this.fly = "can't"
            this.voice = '*Chick chick*'
        }
    }

    export { Chicken }