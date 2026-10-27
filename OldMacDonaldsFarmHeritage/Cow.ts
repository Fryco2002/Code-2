namespace OldMacDonaldsFarmHeritage {

    export class Cow extends Animal {

        doSpecialAction(): void {
            console.log(this.name, "gives milk");
        }
    }
}