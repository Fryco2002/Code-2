"use strict";
var OldMacDonaldsFarmHeritage;
(function (OldMacDonaldsFarmHeritage) {
    class Animal {
        name = "";
        foodType = "";
        voice = "";
        constructor(_name, _foodType, _voice) {
            this.name = _name;
            this.foodType = _foodType;
            this.voice = _voice;
        }
        sing() {
            console.log("animal is singing");
        }
        eat() {
            console.log("animal is eating");
        }
        doSpecialAction() {
            console.log("animal does its special action");
        }
    }
    OldMacDonaldsFarmHeritage.Animal = Animal;
})(OldMacDonaldsFarmHeritage || (OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=Animal.js.map