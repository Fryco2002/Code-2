"use strict";
var OldMacDonaldsFarmHeritage;
(function (OldMacDonaldsFarmHeritage) {
    class Chicken extends OldMacDonaldsFarmHeritage.Animal {
        doSpecialAction() {
            console.log(this.name, "lays an egg");
        }
    }
    OldMacDonaldsFarmHeritage.Chicken = Chicken;
})(OldMacDonaldsFarmHeritage || (OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=Chicken.js.map