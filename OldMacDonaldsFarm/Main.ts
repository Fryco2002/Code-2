namespace OldMacDonaldsFarm {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        console.log("Farm is starting");
        let NewFarm: OldMacDonaldsFarm = new OldMacDonaldsFarm;
        NewFarm.createNewAnimals();
        console.log(foodsupply);

        console.log("Day begins");
        for (let i:number = 0; i < stall.length; i++) {
            stall[i].sing();
            stall[i].eat();
        }
        console.log("Day finished");
        console.log(foodsupply);
    }

}