
var showingMenu = false;


function ShowMenu(){
  var m = document.getElementById("Menu");
  var h = document.getElementById("HH");
  var b = document.getElementById("body");
  if(showingMenu == false){
    showingMenu = true;
      m.style.display="inline";
      h.style.height="100%";
      h.style.background= "rgba(0, 0, 0,0.7)";
      b.style.overflow = "hidden";
  }
  else {
    showingMenu = false;
    m.style.display="none";
    h.style.height="45px";
    h.style.background= "rgba(0, 0, 0,0.5)";
    b.style.overflow = "auto";
  }
}

function mediaQuery(x){
  var m = document.getElementById("Menu");
  var h = document.getElementById("HH");
  var b = document.getElementById("body");
  if (x.matches) { // If media query matches
    showingMenu = false;
    m.style.display="none";
    }
    else {
    showingMenu = true;
    m.style.display="inline";
    h.style.height="45px";
    h.style.background= "rgba(0, 0, 0,0.5)";
    b.style.overflow = "auto";
    }
}

var x = window.matchMedia("(max-width: 900px)");
mediaQuery(x);
x.addListener(mediaQuery);
