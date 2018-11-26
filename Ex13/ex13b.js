$(document).ready(function(){
    // run fintion on initial page
    wordGuess();

    });

function movieGuess() {
    var movieArray = ["Alabama" , "Alaska" , "Arizona" , "Arkansas" , "California" , "Colorado" , "Conneticut" , "Deleware" , "Florida" , "Georgia" , "Hawaii" , "Idaho" , "Illinois" , "Indiana" , "Iowa" , "Kansas" , "Kentucky" , "Louisana" , "Maine" , "Maryland" , "Massachusetts" , "Michigan" , "Minnesota" , "Mississippi" , "Missouri" , "Montana" , "Nebraska" , "Nevada" , "New Hampshire" , "New Jersey" , "New Mexico" , "New York" , "North Carolina" , "North Dakota" , "Ohio" , "Oklahoma" , "Oregon" , "Pennsylvania" , "Rhode Island" , "South Carolina" , "South Dakota", "Tennessee" , "Texas" , "Utah" , "Vermont" , "Virginia" , "Washington" , "West Virginia" , "Wisconsin" , "Wyoming"]
    var randomNumber = Math.floor(Math.random() * movieArray.length);
    var stripped = movieArray[randomNumber].toLowerCase();
    console.log(movieArray[randomNumber]);
    console.log(stripped);
$('#submit').click(function() {
        var guess = $('input').val();
        console.log(guess);
        if (guess == stripped || guess == movieArray[randomNumber]) {
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

