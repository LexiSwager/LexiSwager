//in order for any jQuery to work you need to add the code to call the jQuery library and add the tag to call your js file. Reference the bottom two tags before the close of the body on the Day 6 notes file.

$(document).ready(function() {
    // run function on initial page load
    // call your function by writing yourFunctionName(); below
button();

});

//change your function name to something that makes sense. Use that name to call it above.

function button() {
	var images = ['1stfortune.png', '2ndcookie.png', '3rdcookie.png', '4thcookie.png', '5thcookie.png', '6thcookie.png', '7thcookie.png', '8thcookie.png', '9thhcook.png', '10th.png', '11th.png', '12cookie.png']
	$("#unread").click(function() {
  		$('#unread').css('background-image', 'url(CookieImages/' + images[Math.floor(Math.random() * images.length)] + ')');
  	});
}