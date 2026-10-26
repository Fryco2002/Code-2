namespace OldMacDonaldsFarmHeritage {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        console.log("Main programm");
        let newCow: Animal = new Cow("berta", "grass", "muuh");
        console.log(newCow);
        newCow.doSpecialAction();
        let newChick: Animal = new Chicken("hans", "corn", "book");
        console.log(newChick);
        newChick.doSpecialAction();
    }

}