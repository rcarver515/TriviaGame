$(document).ready(function() {

var movieQuote = [
        {movie: "Taxi Driver", quote:"You talkin to me?"} ,
        {movie: "Citizen Kane", quote: "Rosebud"},
        {movie: "The Wizard of Oz", quote: "Toto Ive got a feeling were not in Kansas anymore."},
        {movie: "Star Wars", quote: "Luke I am your father."},
        {movie: "Jerry McGuire", quote: "Show me the money!"},
        {movie: "The Terminator", quote: "I'll be back."},
        {movie: "Field of dreams", quote: "If you build it he will come."},
        {movie: "The sixth sense", quote: "I see dead people."},
        {movie: "Apollo", quote: "Houston we have a problem."},
        {movie: "Frankenstein", quote: "It's alive! it's alive!"}

] 

var computerPick
var userScore = 0
var userGuess = 


    // Event: Click any button to start/generate random movieQuote selection    
    $("#random-button").on("click", function () {

        var randomIndex = Math.floor(Math.random() * movieQuote.length) + 1;
        console.log(randomIndex)
        
        computerPick = movieQuote[randomIndex]

        $("#computer-pick").text(computerPick.quote);
        
})

// Iterate over movieQuote & print random movie quote to 1st card
for (var i = 0; i < movieQuote.length; i++) {

 }



 // create event for user to enter their guess in 2nd card

 $(".user-choice").on("type-text", function() {

 })

 // Enter lock game to prevent user from changing answer after game calculates win/loss
 

 // Get the value of the users guess
 var usersGuess = $(this).val();
 console.log("Your guess: " + usersGuess);


 // if users guess matches computer's pick increase wins count in 4th card

 $("#guess-btn").on("click", function () {
    userGuess = $("#user-guess").val()
   
   if (userGuess === computerPick.movie) {
     $("#display-answer").text("CORRECT!")
      //add logic to increment score `score++` & display score
   } 

  
    //add logic to decrement & display score
   }) 

 
 if (parseInt(usersGuess) === computerPick) {
     $("#win-counter").text("Wins: ");
     lockGame = true;
}

// if users guess does not match computer's pick increase loss count in card 5
if (userGuess !== computerPick.movie) {
    $("#display-answer").text("WRONG!")
    
else {
    $("#loss-counter").text("Losses: ");
    lockGame = true;
}



    });
function newFunction(movieQuote) {
    var randomMovie = " ";
    var computerPick = Math.floor(Math.randomMovie() * movieQuote + 1);
    var lockGame = false;
}

