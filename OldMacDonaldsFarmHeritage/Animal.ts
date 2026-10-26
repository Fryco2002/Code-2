namespace OldMacDonaldsFarmHeritage {

    export class Animal {
        name: string = "";
        foodType: string = "";
        voice: string = "";

        constructor(_name: string, _foodType: string, _voice: string) {
            this.name = _name;
            this.foodType = _foodType;
            this.voice = _voice;
        }

        sing(): void {
            console.log("animal is singing");
        }

        eat(): void {
            console.log("animal is eating");
        }

        doSpecialAction(): void {
            console.log("animal does its special action");
        }
    }
}