import { Fish } from './fish.js';
    class Nemofish extends Fish{
        constructor(name,color){
            super(name,color)
            this.finCount = 4;
            this.swim = 'hate'

        }
    }

    export { Nemofish }