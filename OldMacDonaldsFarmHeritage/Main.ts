namespace OldMacDonaldsFarmHeritage {
    window.addEventListener("load", handleLoad);
    export let foodStash = {
        "hay": 15,
        "corn": 15,
        "grass": 15,
        "meat": 15
    };

    export let stall: Animal[] = [];

    function handleLoad(): void {
        //Crate the animals
        let newCow: Animal = new Cow("berta the cow", "grass", "muuh");
        let newChick: Animal = new Chicken("hans the chicken", "corn", "gack-gack");
        let newDog: Animal = new Dog("Pluto the dog", "meat", "bark");
        let newHorse: Animal = new Horse("Gustav the horse", "hay", "wiihr");
        stall.push(newCow, newChick, newDog, newHorse);
        console.log(stall);

        //Day cycle
        console.log("new day begins");
        for (let i: number = 0; i < stall.length; i++) {
            stall[i].sing();
            stall[i].eat();
            stall[i].doSpecialAction();
        }
        console.log("day ends");
        //Day cylce

        console.log(foodStash);
    }
}