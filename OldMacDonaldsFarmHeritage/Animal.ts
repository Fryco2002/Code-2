namespace OldMacDonaldsFarmHeritage {
    type FoodType = ("hay" | "corn" | "grass" | "meat");

    export class Animal {
        name: string;
        foodType: FoodType;
        voice: string;

        constructor(_name: string, _foodType: FoodType, _voice: string) {
            this.name = _name;
            this.foodType = _foodType;
            this.voice = _voice;
        }

        sing(): void {
            console.log(this.name, "sings: Old MacDonalds had a farm", this.voice, "E-I-E-I-O");
        }

        eat(): void {
            let randomAmount: number = Math.floor(Math.random() * 3) + 1;
            foodStash[this.foodType] -= randomAmount;
            console.log(this.name, "is eating", randomAmount, ":", this.foodType);
        }

        doSpecialAction(): void {
            console.log("animal does its special action");
        }
    }
}