
var randomResult;
var lost;
var win;

// setters
// getters

// $(".crystal").attr('class');

var resetAndStart= function (){
    $(".crystals").empty();
    var images= [
        'https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/7/70/Shadowshard_crystal_icon.png',
        'https://www.rd.com/wp-content/uploads/2017/08/13_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg', 
        'http://atlas-content-cdn.pixelsquid.com/stock-images/natural-crystal-group-oJBXAX0-600.jpg', 
        'http://www.crystalclearintentions.co.nz/wp-content/uploads/crystals.jpg'];

    randomResult= Math.floor(Math.random() * 69) + 30; //hoisting


    $("#result").html("Random Result: " + randomResult);
    for(var i=0; i<4; i++){

    var random= Math.floor(Math.random() * 11) +1;
    console.log(random);

    var crystal= $("<div>");
        crystal.attr({"class": "crystal", "data-random": random});
        crystal.css({
            "background-image":"url('" + images[i]) + "')",
            "background-size":"cover"
        });
        
        $(".crystals").append(crystal);
    }  
    $("#previous").html("Total Score:" + previous);
}

resetAndStart();

//event delegation
$(document).on('click', "crystal", function() {
    
    var num= parseInt($(this).attr("data-random")); //turns into a number
    previous += num;
    $("#previous").html("Total Score:" + previous);
    console.log(previous);

    if(previous > randomResult){
        lost++;
        $("#lost").html("You Lost:" + lost);
        previous= 0;
        resetAndStart();
    }
    else if(previous === randomResult){
        win++;
        $("#win").html("You Win:" + win);
        previous= 0;
        resetAndStart();
    }
});

// pseudo code

// a game with 4 crystals and get a random result 
// every crystal needs to have a random number between 1-12 
// a new random number should beb generated every single time we win or lost to those 4 cystals 
// when clicking any crystal, it should be adding with the previous result until it equals the random result
// if it is greater then the random result, we decrement a lost counter
// then we start over if it is equal, then we increment a win counter