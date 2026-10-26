namespace OldMacDonaldsFarm {
    
    export let stall: Animal[] = [];
    export let foodsupply = {
        hay: 15, //Sheep
        carrot: 15, //Horse
        oats: 15, //Pig
        corn: 15, //Donkey
        grass: 15, //Cow
        wheat: 15 //Chicken
    }

    export class OldMacDonaldsFarm {

        constructor() {
            console.log("constructor");
        }

        createNewAnimals(): void {
            console.log("new animal is created");

            const randomNames = ["Berta", "Rudolf", "Peter", "Jürgen", "Hans", "Herbert", "Lorenzo", "Günter", "Josef", "Torsten", 
                "Hubert", "Ulrich", "Gerd", "Franz", "Dirk", "Gisela", "Heidi", "Sophie", "Adelheit", "Marry"];

            const radnomRaces = ["Chicken", "Cow", "Horse", "Pig", "Donkey", "Sheep"];

            for (let i = 0; i < Math.floor(Math.random() * (10) + 5); i++) {
                
                let chooseName: string = randomNames[Math.floor(Math.random() * randomNames.length)];
                //console.log(chooseName);
                let chooseRace: string = radnomRaces[Math.floor(Math.random() * radnomRaces.length)];
                //console.log(chooseRace);
                let chooseFood: string = "";
                let chooseVoice: string = "";

                switch (chooseRace) {
                    case "Chicken":
                        //console.log("chicken");
                        chooseFood = "wheat";
                        chooseVoice = "boog";
                        break;
                    case "Cow":
                        //console.log("cow");
                        chooseFood = "grass";
                        chooseVoice = "muuh";
                        break;
                    case "Horse":
                        //console.log("horse");
                        chooseFood = "carrot";
                        chooseVoice = "ihhr";
                        break;
                    case "Pig":
                        //console.log("pig");
                        chooseFood = "oats";
                        chooseVoice = "oink";
                        break;
                    case "Donkey":
                        //console.log("donkey");
                        chooseFood = "corn";
                        chooseVoice = "iiaa";
                        break;
                    case "Sheep":
                        //console.log("sheep");
                        chooseFood = "hay";
                        chooseVoice = "meeh";
                        break;
                    default:
                        //console.log("ERROR")
                        break;
                }

                let newAnimal: Animal = new Animal(chooseName, chooseRace, chooseFood, chooseVoice);
                stall.push(newAnimal);               
            }
            console.log(stall);
        }
    }
}