/** */
class Animals {
    constructor (name,color){
        this.name = name;
        this.color = color;
    }
    

    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }

}

export { Animals }