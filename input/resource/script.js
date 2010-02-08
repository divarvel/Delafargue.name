var pwnzor = function(color){
  var content = document.getElementById("content");
  if(color == 1)
    content.style.background = "#FF9900";
  else
    content.style.background = "#DDDDDD";
  
  setTimeout(pwnzor(1 - color), 1000);
}

if (window.addEventListener) {
  var sequence = [], konamiCode = "38,38,40,40,37,39,37,39,66,65";
  window.addEventListener("keydown", function(e){
    sequence.push( e.keyCode );
    if ( sequence.toString().indexOf( konamiCode ) >= 0 ){
      // Trucs importants
      var header = document.getElementById("header");
      header.getElementsByTagName("a")[0].innerHTML = "Clément 'Kevin' Delafargue";
      header.getElementsByTagName("a")[0].href = "http://www.goatse.fr";
      pwnzor(1);
      sequence = [];
    }
  }, true);
}

