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
}
