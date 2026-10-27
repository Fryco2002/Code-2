namespace OldMacDonaldsFarmHeritage {

    export class Chicken extends Animal {

        doSpecialAction(): void {
            console.log(this.name, "lays an egg");
        }
    }
}