$(document).ready(function() {
    // Add smooth scrolling to all links

    $(".smooth").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    
 $(".head").fadeIn( 2000, function() {
    $("#carrot").fadeIn(1000,function(){
        console.log("loaded");
    })
  });

//     $(".slideshow > div:gt(0)").hide();

// setInterval(function() {
//   $('.slideshow > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('.slideshow');
// }, 3000);

// <div class="row">
//             <div class="col-md-6">
//                 <center><img class="polaroid" src="./assets/images/az.jpg"></center>
//             </div>
//             <div class="col-md-6">
//                 <center><img class="polaroid1" style="float:left" src="./assets/images/az.jpg"></center>
//             </div>
//         </div>
//         <div class="row">
//             <div class="col-md-2"></div>
//             <div class="col-md-3">
//                 <center><img class="polaroid" src="./assets/images/az.jpg"></center>
//             </div>
//             <div class="col-md-4"></div>
//             <div class="col-md-3">
//                 <img class="polaroid1" style="margin-left:-300px !important" src="./assets/images/az.jpg">
//             </div>
//         </div>
//         <div class="row">
//             <div class="col-md-1"></div>
//             <div class="col-md-3">
//                 <center><img class="polaroid1" src="./assets/images/az.jpg">
//                 </center>
//             </div>
//             <div class="col-md-2"></div>
//             <div class="col-md-4">
//                 <center><img class="polaroid" src="./assets/images/az.jpg"></center>
//             </div>
//         </div>

});