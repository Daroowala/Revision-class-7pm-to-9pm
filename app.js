let numberOfCats = prompt("How many cats?");
let tooManyCats = Number (numberOfCats) + 1;
if (numberOfCats === null) {
    console.log("User canceled the prompt.");}
else if (numberOfCats === (numberOfCats)) {
    console.log("Please enter a valid number of cats.");
} else {
    console.log("Too many cats would be: " + tooManyCats);
} 

