let places = ["market", "church", "office", "mall", "gym", "bank",
    "saloon", "eatery", "spa", "club", "office", "airport", "gym", "eatery", "market", "office", "mall", "eatery", "spa", "market", "eatery", "saloon", "church", "office", "spa", "club", "office", "office", "mall", "eatery", "gym", "bank", "saloon", "airport", "gym", "eatery"];

function countFrequency(array, place){
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if(array[i] === place){
            count++;
        }
    }
    return count; 
}

// console.log(countFrequency(places, "office"));

const button = document.getElementById("btn");
button.addEventListener("click", function(){
    let place = document.getElementById("place").value;
    let result = countFrequency(places, place);

    document.getElementById("result").innerHTML = "Suspect appeared in the " + place + " " + result + " times."
});
