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

let diceRollS: Array<diceRoll> = [];

// class to create a die.
class dieRoll {
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
    }
    getSide(side: string) : boolean {
        (this.div as HTMLElement).innerHTML = Sides[side];
        return true;
    }
}

for (let index: number = 0; index < 6; index++) {
    diceRollS.push({
        'div': document.createElement('div')    
    });
}

diceRollS.map((elem, index) => {
 // for each item in array: elem is the value, index is the index.
    let sidePickClass = new dieRoller(elem.div);
    
    document.body.appendChild(elem.div);


});

