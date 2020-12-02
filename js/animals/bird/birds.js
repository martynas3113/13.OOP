import { Animals } from '../animals.js';

    class Birds extends Animals {
        constructor(name,color){
            super(name,color);

        }

        introduce(){
            console.log(`Howdy my name is ${this.name} my feathers are ${this.color}. I have ${this.wingsCount} wings and I ${this.fly}  fly!`);
        }

        fly() {
            console.log(`We birds we ${this.move}!`);
        }
    }

    export { Birds }