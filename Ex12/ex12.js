$(document).ready(function() {
    // run function on initial page load
    demoFunction();
    // vPosH1();
 
    // run function on resize of the window
    $(window).resize(function() {
      // vPosH1();
    });
 
    // run function on scroll
    $(window).scroll(function() {

    });
});
 function demoFunction(){
	$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
	
$(document).ready(function(){
    $("button").hover(function(){
        $("#div1").fadeToggle("slow");
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
        console.log('clicked');
    });
};