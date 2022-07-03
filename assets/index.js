//function duar() {
//    var x = document.getElementById("navAtasku");
//    if (x.className === "navAtas") {
  //      x.className += " responsive";
    //} else {x.className = "navAtas";
//}


function dropDown() {
    document.getElementById("Drop").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.active')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }