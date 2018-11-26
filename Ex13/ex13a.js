
$(document).ready(function() {
    // run function on initial page load
    colorGuess();
});
 
function colorGuess() {
    var colorArray = ["The Shining","The Ring", "Jeepers Creepers", "Dracula", "Nightmare on Elm Street", "The Nun", "Insidious", "Hellraiser", "Frankenstein", "The Tingler", "Halloween", "Scream", "Child's Play", "Pet Sematary", "Carrie", "When a Stranger Calls"];
    var images =['shining.jpg','thering.jpg', 'jeeperscreepers.jpg', 'dracula.jpg', 'nightmareonelmstreet.jpg', 'thenun.jpg','insidious.jpg', 'hellraiser.jpg', 'frankenstein.jpg', 'tinger.jpg', 'halloween.jpg', 'scream.jpg', 'childsplay.jpg', 'petsematary.png', 'carrie.jpg','whenastrangercalls.jpg'];
    var randomNumber = Math.floor(Math.random() * colorArray.length);
    var stripped = colorArray[randomNumber].toLowerCase();
    console.log(colorArray[randomNumber]);
    console.log(stripped);
    $('#submit').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        
        if (guess == stripped || guess == colorArray[randomNumber]) {
            $('h1').text(guess + ' is right!');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        } else  {
            $('h1').text(guess + ' is wrong');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })
}