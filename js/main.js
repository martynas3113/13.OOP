import { Dog } from './animals/pet/dog.js';
import { Cat } from './animals/pet/cat.js';
import { Rabbit } from './animals/pet/rabbit.js';
import { Parrot } from './animals/bird/parrot.js';
import { Pigeon } from './animals/bird/pigeon.js';
import { Chicken } from './animals/bird/chicken.js';
import { Goldfish } from './animals/fish/goldfish.js';
import { Nemofish } from './animals/fish/nemofish.js';




const tony = new Parrot('Tony', 'Green')

tony.introduce();

tony.sound()

const matt = new Pigeon('Matt', 'Gray')

matt.introduce();

matt.sound();

const robin = new Chicken('Robin', 'White')

robin.introduce();

robin.sound();

const robert = new Goldfish('Robert', 'Gold')

robert.introduction()

const nemo = new Nemofish('Nemo','Striped')

nemo.introduction()

nemo.sound()



/*
Animal (params: name, color, methods: sound, indroduce)
    Pet (params: legsCount, likesPlaying (Boolean), MEthods: walk)
        Dog
        Cat
        Rabbit
    Bird (params: wingsCount,, Methods: fly)
        Parrot
        Pigeon
        Chicken
    Fish(params: fin; Methods: swim)
        Goldfish
        Nemofish
        Salmon


*/

