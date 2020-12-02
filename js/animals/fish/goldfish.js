import { Fish } from './fish.js';
    class Goldfish extends Fish{
        constructor(name,color){
            super(name,color)
            this.finCount = 3;
            this.swim = 'love'

        }
    }

    export { Goldfish }