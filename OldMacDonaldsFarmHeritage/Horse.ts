namespace OldMacDonaldsFarmHeritage {

    export class Horse extends Animal {

        doSpecialAction(): void {
            console.log(this.name, "stands on hind legs");
        }
    }

}