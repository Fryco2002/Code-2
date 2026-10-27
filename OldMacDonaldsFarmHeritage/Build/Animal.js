"use strict";
var OldMacDonaldsFarmHeritage;
(function (OldMacDonaldsFarmHeritage) {
    class Animal {
        name;
        foodType;
        voice;
        constructor(_name, _foodType, _voice) {
            this.name = _name;
            this.foodType = _foodType;
            this.voice = _voice;
        }
        sing() {
            console.log(this.name, "sings: Old MacDonalds had a farm", this.voice, "E-I-E-I-O");
        }
        eat() {
            let randomAmount = Math.floor(Math.random() * 3) + 1;
            OldMacDonaldsFarmHeritage.foodStash[this.foodType] -= randomAmount;
            console.log(this.name, "is eating", randomAmount, ":", this.foodType);
        }
        doSpecialAction() {
            console.log("animal does its special action");
        }
    }
    OldMacDonaldsFarmHeritage.Animal = Animal;
})(OldMacDonaldsFarmHeritage || (OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=Animal.js.map