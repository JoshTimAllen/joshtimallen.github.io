
var showingMenu = false;


function ShowMenu(){
  var m = document.getElementById("Menu");
  var h = document.getElementById("HH");
  if(showingMenu == false){
    showingMenu = true;
      m.style.display="inline";
      h.style.height="100%";
      h.style.background= "rgba(0, 0, 0,0.7)";
  }
  else {
    showingMenu = false;
    m.style.display="none";
    h.style.height="45px";
    h.style.background= "rgba(0, 0, 0,0.5)";
  }
}

function mediaQuery(x){
  var m = document.getElementById("Menu");
  var h = document.getElementById("HH");
  if (x.matches) { // If media query matches
    showingMenu = false;
    m.style.display="none";
    }
    else {
    showingMenu = true;
    m.style.display="inline";
    h.style.height="45px";
    h.style.background= "rgba(0, 0, 0,0.5)";
    }
}

var x = window.matchMedia("(max-width: 900px)");
mediaQuery(x);
x.addListener(mediaQuery);
