if (window.addEventListener) {
  var sequence = []
  var konamiCode = "38,38,40,40,37,39,37,39,66,65";
  window.addEventListener("keydown", function(e){
    sequence.push( e.keyCode );
    if ( sequence.toString().indexOf( konamiCode ) >= 0 ){
      // Trucs importants
      var header = document.getElementById("header");
      header.getElementsByTagName("a")[0].innerHTML = "Clément 'Kevin' Delafargue";
      
      
      
      sequence = [];
    }
  }, true);
}

