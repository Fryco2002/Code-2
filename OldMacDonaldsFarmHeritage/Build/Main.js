"use strict";
var OldMacDonaldsFarmHeritage;
(function (OldMacDonaldsFarmHeritage) {
    window.addEventListener("load", handleLoad);
    OldMacDonaldsFarmHeritage.foodStash = {
        "hay": 15,
        "corn": 15,
        "grass": 15,
        "meat": 15
    };
    OldMacDonaldsFarmHeritage.stall = [];
    function handleLoad() {
        //Crate the animals
        let newCow = new OldMacDonaldsFarmHeritage.Cow("berta the cow", "grass", "muuh");
        let newChick = new OldMacDonaldsFarmHeritage.Chicken("hans the chicken", "corn", "gack-gack");
        let newDog = new OldMacDonaldsFarmHeritage.Dog("Pluto the dog", "meat", "bark");
        let newHorse = new OldMacDonaldsFarmHeritage.Horse("Gustav the horse", "hay", "wiihr");
        OldMacDonaldsFarmHeritage.stall.push(newCow, newChick, newDog, newHorse);
        console.log(OldMacDonaldsFarmHeritage.stall);
        //Day cycle
        console.log("new day begins");
        for (let i = 0; i < OldMacDonaldsFarmHeritage.stall.length; i++) {
            OldMacDonaldsFarmHeritage.stall[i].sing();
            OldMacDonaldsFarmHeritage.stall[i].eat();
            OldMacDonaldsFarmHeritage.stall[i].doSpecialAction();
        }
        console.log("day ends");
        //Day cylce
        console.log(OldMacDonaldsFarmHeritage.foodStash);
    }
})(OldMacDonaldsFarmHeritage || (OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=Main.js.map