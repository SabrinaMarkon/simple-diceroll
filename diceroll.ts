/**
 * @author Sabrina Markon
 * @version 1.0
 * January 1, 2018 Happy New Year! :)
 * This program tosses 6 dice with a button click. I want to practice Typescript. That is all :)
 */ 

// set of values each die can have.
enum Sides {
    One, Two, Three, Four, Five, Six
}

// interface to describe a die's types
interface diceRoll {
    'div': Element;
}

let dielength: number = 100;
let diewidth: number = 100;
let diesize: string = `${ dielength }px`;
let diebordercolor: string = '#000';
let dieborderwidth: string = '5px';
let diemargin: string = '10px';

let diceRollS: Array<diceRoll> = [];

// class to create a die.
class dieRoll implements diceRoll {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
    getSide(side: number | string) : boolean {
        if (typeof(side) === 'number') {
            return true;
        }
        (this.div as HTMLElement).innerHTML = side;
        return true;
    }
}

// extend dieRoll class to create a method for rolling the dice.
class dieRoller extends dieRoll {
    // We can also create static members of a class, those that are visible on the class itself rather than on the instances
    static Sides = Sides;
    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = diesize;
        (this.div as HTMLElement).style.height = diesize;
        (this.div as HTMLElement).style.border = `solid ${ diebordercolor } ${ dieborderwidth }`;
        (this.div as HTMLElement).style.marginBottom = diemargin;
    }
    getSide(side: string) : boolean {
        (this.div as HTMLElement).innerHTML = '<p>' + Sides[side] + '</p>';
        return true;
    }
}

for (let index: number = 0; index < 6; index++) {
    diceRollS.push({
        'div': document.createElement('div')    
    });
}

function rollAgain() {
    // get a random number between 0 and 5 for a die (or 1 to 6 sides on a die).
    let getRandomIntInclusive: Function = (min, max) => {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    diceRollS.map((elem, index) => {
    // for each item in array: elem is the value, index is the index.
        let sidePickClass = new dieRoller(elem.div);
        document.body.appendChild(elem.div);
        sidePickClass.getSide(getRandomIntInclusive(0, 5));
    });
}

var buttondiv = document.createElement('button');
buttondiv.style.cssText = 'width:110px; font: 22px #000 Arial; background: lightblue; text-align: center; padding: 10px; margin-bottom: 15px;';
document.body.appendChild(buttondiv).textContent = 'Roll Dice!';
buttondiv.onclick = (event) => {
    rollAgain();
}

rollAgain();


