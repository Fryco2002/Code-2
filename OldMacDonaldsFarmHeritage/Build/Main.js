"use strict";
var OldMacDonaldsFarmHeritage;
(function (OldMacDonaldsFarmHeritage) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("Main programm");
        let newCow = new OldMacDonaldsFarmHeritage.Cow("berta", "grass", "muuh");
        console.log(newCow);
        newCow.doSpecialAction();
        let newChick = new OldMacDonaldsFarmHeritage.Chicken("hans", "corn", "book");
        console.log(newChick);
        newChick.doSpecialAction();
    }
})(OldMacDonaldsFarmHeritage || (OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=Main.js.map