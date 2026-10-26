"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("Farm is starting");
        let NewFarm = new OldMacDonaldsFarm.OldMacDonaldsFarm;
        NewFarm.createNewAnimals();
        console.log(OldMacDonaldsFarm.foodsupply);
        console.log("Day begins");
        for (let i = 0; i < OldMacDonaldsFarm.stall.length; i++) {
            OldMacDonaldsFarm.stall[i].sing();
            OldMacDonaldsFarm.stall[i].eat();
        }
        console.log("Day finished");
        console.log(OldMacDonaldsFarm.foodsupply);
    }
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Main.js.map