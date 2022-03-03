const prompt = require('prompt-sync')({sigint: true});

let fishAdjectives1 = ["Slimey", "Rough", "Nasty", "Smelly", "Sweet", "Silly", "Weak", "Strong", "Jagged", "Lazy"];
let fishAdjectives2 = ["Blue", "Pink", "White", "King", "Red", "Yellow", "Salty", "Small", "Large", "Medium", "Big-Nosed"];
let fishTypes = ["Salmon", "Tilapia", "Cod", "Bass", "Trout", "Hallabot", "Anchovie", "Tuna", "Swordfish", "Eeel", "Shark"];

let hour = 6;
let caughtFish = [];
let totalCaughtWeight = totalWeight();
let totalCaughtValue = totalValue();

console.log("");
console.log("");
console.log("You went fishing. Try maximizing the value of your \n caught fish. FIsh for 6 hours until noon, and \n can catch up to 10lbs of fish.")
console.log("");
console.log("========================================================");
console.log("");

while (hour<12){

    let randomFish = randomFishGenerator();
    let fishWeight = randomWeight();
    let fishValue = randomValue();
    totalCaughtValue = totalWeight();
    totalCaughtValue = totalValue();

    const fish = {
        fish: randomFish,
        weight: Number(fishWeight),
        value: Number(fishValue)
    }

    console.log(`The time is ${hour}:00 am. So far you caught: \n${caughtFish.length} fish \nTotal weight of: ${totalCaughtWeight} lbs \nValued at: $${totalCaughtValue.toFixed(2)}`);
    console.log("");
    console.log("==============================================================");
    console.log("");
    console.log(`You caught a ${randomFish} weighing ${fishWeight} lbs \nwith a value of $${fishValue}!`);
    console.log("");

    if ((totalCaughtWeight + fish.weight)<10){
        console.log("Sorry this fish is too big. \nYou have to let it go.")
        console.log("");
    }
    else if((totalCaughtWeight + fish.weight)<10){
        let catchOrRelease = prompt("Do you want to [c]atch or [r]elease this bad boy?");

        if (catchOrRelease==="c"){
            caughtFish.push(fish);
            console.log("")
            console.log("This is a good choice.");
            console.log("");
            console.log("===============================================================");
        }
        else if (catchOrRelease==="r"){
            console.log("")
            console.log("Good, that looked bad.");
            console.log("")
            console.log("================================================================");

        }

        hour++;
    }

    console.log("");
    console.log(`The time is 12pm. Game over.`)
    console.log(`You caught ${caughtFish.length} fish, for a total weight of ${totalCaughtWeight} lbs and a total value of $${totalCaughtValue.toFixed(2)}.`)
    console.log("");
    console.log("___________________________________________________________________________________________");


    function randomFishGenerator(){
        let randomAdjective1 = fishAdjectives1[Math.floor(Math.random()* fishAdjectives1.length)];
        let randomAdjective2 = fishAdjectives2[Math.floor(Math.random()* fishAdjectives2.length)];
        let randomFishType = fishTypes[Math.floor(Math.random()*fishTypes.length)];
        return `${randomAdjective1} ${randomAdjective2} ${randomFishType}`;
    }

    function randomWeight(min, max){
        let weight = (Math.floor(Math.random()* (4.00 - 1.00 + 1.00) + 1.00).toFixed(2));
        return weight;

        function randomValue(min, max){
            let value = (Math.random()* (10.00 - 1.00 + 1.00) + 1.00).toFixed(2);
            return value;
        }

        function totalWeight(){
            let sum =0;
            for (let i=0;i<caughtFish.length; i++)
            sum=sum+caughtFish[i].weight;
            return sum;
        }
        function totalValue(){
            let sum = 0;
            for (let i=0;i<caughtFish.length; i++){
                sum=sum + caughtFish[i].value;
            }
            return sum;
        }
    }
}
