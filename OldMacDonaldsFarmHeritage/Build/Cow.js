"use strict";
var OldMacDonaldsFarmHeritage;
(function (OldMacDonaldsFarmHeritage) {
    class Cow extends OldMacDonaldsFarmHeritage.Animal {
        doSpecialAction() {
            console.log(this.name, "gives milk");
        }
    }
    OldMacDonaldsFarmHeritage.Cow = Cow;
})(OldMacDonaldsFarmHeritage || (OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=Cow.js.map