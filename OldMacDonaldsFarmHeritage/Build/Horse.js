"use strict";
var OldMacDonaldsFarmHeritage;
(function (OldMacDonaldsFarmHeritage) {
    class Horse extends OldMacDonaldsFarmHeritage.Animal {
        doSpecialAction() {
            console.log(this.name, "stands on hind legs");
        }
    }
    OldMacDonaldsFarmHeritage.Horse = Horse;
})(OldMacDonaldsFarmHeritage || (OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=Horse.js.map