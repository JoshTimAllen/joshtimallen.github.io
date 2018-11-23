
var showingMenu = false;


function ShowMenu(){
  var m = document.getElementById("Menu");
  if(showingMenu == false){
    showingMenu = true;
      m.style.display="inline";
  }
  else {
    showingMenu = false;
    m.style.display="none";
  }
}

function mediaQuery(x){
  var m = document.getElementById("Menu");
  if (x.matches) { // If media query matches
    showingMenu = false;
    m.style.display="none";
    }
    else {
    showingMenu = true;
    m.style.display="inline";
    }
}

var x = window.matchMedia("(max-width: 900px)");
mediaQuery(x);
x.addListener(mediaQuery);
