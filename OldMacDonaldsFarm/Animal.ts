namespace OldMacDonaldsFarm {

    export class Animal {
        name: string = "";
        race: string = "";
        foodType: string = "";
        voice: string = "";

        constructor(_name: string, _race: string, _foodType: string, _voice: string) {
            this.name = _name;
            this.race = _race;
            this.foodType = _foodType;
            this.voice = _voice;
        }

        sing(): void {
            console.log("the", this.race, "named", this.name, "is singing:");
            switch(this.voice) {
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

        eat(): void {
            console.log("the", this.race, "named", this.name, "is eating:");
            switch(this.foodType) {
                case "hay":
                    console.log(this.name, "ate 1 hay");
                    foodsupply["hay"] -= 1
                    break;
                case "carrot":
                    console.log(this.name, "ate 1 carrot");
                    foodsupply["carrot"] -= 1
                    break;
                case "oats":
                    console.log(this.name, "ate 1 oats");
                    foodsupply["oats"] -= 1
                    break;
                case "corn":
                    console.log(this.name, "ate 1 corn");
                    foodsupply["corn"] -= 1
                    break;
                case "grass":
                    console.log(this.name, "ate 1 grass");
                    foodsupply["grass"] -= 1
                    break;
                case "wheat":
                    console.log(this.name, "ate 1 wheat");
                    foodsupply["wheat"] -= 1
                    break;
            }
            
        }
    }




}