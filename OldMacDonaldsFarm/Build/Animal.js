"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    class Animal {
        name = "";
        race = "";
        foodType = "";
        voice = "";
        constructor(_name, _race, _foodType, _voice) {
            this.name = _name;
            this.race = _race;
            this.foodType = _foodType;
            this.voice = _voice;
        }
        sing() {
            console.log("the", this.race, "named", this.name, "is singing:");
            switch (this.voice) {
                case "boog":
                    console.log("Old Mac Donalds had a farm", this.voice, "Ee, i, ee, i, o");
                    break;
                case "muuh":
                    console.log("Old Mac Donalds had a farm", this.voice, "Ee, i, ee, i, o");
                    break;
                case "ihhr":
                    console.log("Old Mac Donalds had a farm", this.voice, "Ee, i, ee, i, o");
                    break;
                case "oink":
                    console.log("Old Mac Donalds had a farm", this.voice, "Ee, i, ee, i, o");
                    break;
                case "iiaa":
                    console.log("Old Mac Donalds had a farm", this.voice, "Ee, i, ee, i, o");
                    break;
                case "meeh":
                    console.log("Old Mac Donalds had a farm", this.voice, "Ee, i, ee, i, o");
                    break;
            }
        }
        eat() {
            console.log("the", this.race, "named", this.name, "is eating:");
            switch (this.foodType) {
                case "hay":
                    console.log(this.name, "ate 1 hay");
                    OldMacDonaldsFarm.foodsupply["hay"] -= 1;
                    break;
                case "carrot":
                    console.log(this.name, "ate 1 carrot");
                    OldMacDonaldsFarm.foodsupply["carrot"] -= 1;
                    break;
                case "oats":
                    console.log(this.name, "ate 1 oats");
                    OldMacDonaldsFarm.foodsupply["oats"] -= 1;
                    break;
                case "corn":
                    console.log(this.name, "ate 1 corn");
                    OldMacDonaldsFarm.foodsupply["corn"] -= 1;
                    break;
                case "grass":
                    console.log(this.name, "ate 1 grass");
                    OldMacDonaldsFarm.foodsupply["grass"] -= 1;
                    break;
                case "wheat":
                    console.log(this.name, "ate 1 wheat");
                    OldMacDonaldsFarm.foodsupply["wheat"] -= 1;
                    break;
            }
        }
    }
    OldMacDonaldsFarm.Animal = Animal;
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map