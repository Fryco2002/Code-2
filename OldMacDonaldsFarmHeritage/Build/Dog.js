"use strict";
var OldMacDonaldsFarmHeritage;
(function (OldMacDonaldsFarmHeritage) {
    class Dog extends OldMacDonaldsFarmHeritage.Animal {
        doSpecialAction() {
            console.log(this.name, "gives paw");
        }
    }
    OldMacDonaldsFarmHeritage.Dog = Dog;
})(OldMacDonaldsFarmHeritage || (OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=Dog.js.map