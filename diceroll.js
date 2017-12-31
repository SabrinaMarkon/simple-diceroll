var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// set of values each die can have.
var Sides;
(function (Sides) {
    Sides[Sides["One"] = 0] = "One";
    Sides[Sides["Two"] = 1] = "Two";
    Sides[Sides["Three"] = 2] = "Three";
    Sides[Sides["Four"] = 3] = "Four";
    Sides[Sides["Five"] = 4] = "Five";
    Sides[Sides["Six"] = 5] = "Six";
})(Sides || (Sides = {}));
var dielength = 100;
var diewidth = 100;
var diesize = dielength + "px";
var diebordercolor = '#000';
var dieborderwidth = '5px';
var diemargin = '10px';
var diceRollS = [];
// class to create a die.
var dieRoll = /** @class */ (function () {
    function dieRoll(div) {
        this.div = div;
    }
    dieRoll.prototype.getSide = function (side) {
        if (typeof (side) === 'number') {
            return true;
        }
        this.div.innerHTML = side;
        return true;
    };
    return dieRoll;
}());
// extend dieRoll class to create a method for rolling the dice.
var dieRoller = /** @class */ (function (_super) {
    __extends(dieRoller, _super);
    function dieRoller(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = diesize;
        _this.div.style.height = diesize;
        _this.div.style.border = "solid " + diebordercolor + " " + dieborderwidth;
        _this.div.style.marginBottom = diemargin;
        return _this;
    }
    dieRoller.prototype.getSide = function (side) {
        this.div.innerHTML = '<p>' + Sides[side] + '</p>';
        return true;
    };
    // We can also create static members of a class, those that are visible on the class itself rather than on the instances
    dieRoller.Sides = Sides;
    return dieRoller;
}(dieRoll));
for (var index = 0; index < 6; index++) {
    diceRollS.push({
        'div': document.createElement('div')
    });
}
// get a random number between 0 and 5 for a die (or 1 to 6 sides on a die).
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
diceRollS.map(function (elem, index) {
    // for each item in array: elem is the value, index is the index.
    var sidePickClass = new dieRoller(elem.div);
    document.body.appendChild(elem.div);
    sidePickClass.getSide(getRandomIntInclusive(0, 5));
});
