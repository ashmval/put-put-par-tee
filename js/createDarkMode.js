
window.addEventListener("load", init, false);



function init(){

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



    //
    //
    // let darkModeElement =  document.getElementById("darkMode");
    // let bodyElement = document.getElementById("body");
    // let lightModeElement = document.getElementById("lightMode");
    // const titleFontElement = document.querySelectorAll('.titleFont');
    // const largeFontElement = document.querySelectorAll('.largeFont');
    //
    // darkModeElement.addEventListener("click", function(){
    //
    //     bodyElement.style.background = 'rgb(15, 15, 15)';
    //     bodyElement.style.color = 'rgb(245, 245, 245)';
    //     lightModeElement.style.display = 'block';
    //     darkModeElement.style.display = 'none';
    //     titleFontElement.forEach(titleFont => {
    //         titleFont.style.color = 'rgb(245, 245, 245)';
    //     });
    //     largeFontElement.forEach(largeFont => {
    //         largeFont.style.color = 'rgb(245, 245, 245)';
    //     })
    // });
    //
    // lightModeElement.addEventListener("click", function(){
    //
    //     bodyElement.style.background = 'rgb(245, 245, 245)';
    //     bodyElement.style.color = 'rgb(15, 15, 15)';
    //     darkModeElement.style.display = 'block';
    //     lightModeElement.style.display = 'none';
    //     titleFontElement.forEach(navLink => {
    //         navLink.style.color = 'rgb(15, 15, 15)';
    //     });
    // });


}
