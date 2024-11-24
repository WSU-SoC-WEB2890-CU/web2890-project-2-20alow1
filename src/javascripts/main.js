import "bootstrap";

var group2 = document.getElementsByClassName("galleryGroup2");

function removeDNone2() {
    [].forEach.call(group2, function(quilt) {
      quilt.classList.remove("d-none");
    });
}
  
document.getElementById("galleryMore").addEventListener('click', function() {
    removeDNone2();
    // Remove the More Results button when there are no more quilts left
    document.getElementById("galleryMore").classList.add("d-none");
});





// If need to change accordion function on mobile screen. Customize this code.
// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }
  
//   // Create a MediaQueryList object
//   var x = window.matchMedia("(max-width: 700px)")
  
//   // Call listener function at run time
//   myFunction(x);
  
//   // Attach listener function on state changes
//   x.addEventListener("change", function() {
//     myFunction(x);
//   });