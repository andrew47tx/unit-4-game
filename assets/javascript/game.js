
var randomResult;
var lost;
var win;

randomResult= Math.floor(Math.random() * 69) + 30; // hoisting


$("#result").html("Random Result: " + randomResult);
for(var i=0; i<4; i++){

    var random= Math.floor(Math.random() * 11) +1;
    console.log(random);

    var crystal= $("<div>");
        crystal.attr({"class": "crystal", "data-random": random});

    $(".crystals").append(crystal);
    
}
$(".crystal").on("click", function () {
    console.log($(this));
});

// pseudo code

// a game with 4 crystals and get a random result 
// every crystal needs to have a random number between 1-12 
// a new random number should beb generated every single time we win or lost to those 4 cystals 
// when clicking any crystal, it should be adding with the previous result until it equals the random result
// if it is greater then the random result, we decrement a lost counter
// then we start over if it is equal, then we increment a win counter