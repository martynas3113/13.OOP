class SingleDog {
    constructor(name, color,breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.speed = 0;
        this.isRunnig = false;
        this.isSitting = true;
        this.lovedPeople = [];
    }   

    introduce() {
        console.log(`Hello my name is ${this.name} i am ${this.breed} and my fur color is ${this.color}`);
    }

    move(speedChange) {
        this.speed += speedChange;
        console.log(this.name, ' -> ', this.speed);
    }

    addLovedPerson (personName) {
        this.lovedPeople.push(personName);
        console.log(this.lovedPeople);
    }

}

export { SingleDog }