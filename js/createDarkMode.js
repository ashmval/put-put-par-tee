/*
*
* Author: Ashley Vallette
* Creation Date: April 3, 2022
* Purpose: Creates the darkMode effect for the web page.
* Requires: /img, /css, /js - including jquery > 3.3.1
*
* */


window.addEventListener("load", init, false);

function init(){

    // On click of the button in darkModeForm change body and image to match the mode that was changed to.
    $( "#darkModeForm" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
            $( "body" ).removeClass( "dark" );
            $(".balloon").attr("src", "img/balloon-fill.svg");
        } else {
            $( "body" ).addClass( "dark" );
            $(".balloon").attr("src", "img/balloon.svg");
        }

        if( $(".largeFont").hasClass("dark")) {
            $(".largeFont").removeClass("dark");
            $(".balloon").attr("src", "img/balloon-fill.svg");
        } else {
            $(".largeFont").addClass("dark");
            $(".balloon").attr("src", "img/balloon.svg");
        }
    });

}
