document.addEventListener('DOMContentLoaded', function() {
  adjustView();

  const fb_icon = document.querySelector("#fb_icon");
  fb_icon.onmouseover = function() {mouseOver(fb_icon)};
  fb_icon.onmouseout = function() {mouseOut(fb_icon)};

  const linkedin_icon = document.querySelector("#linkedin_icon");
  linkedin_icon.onmouseover = function() {mouseOver(linkedin_icon)};
  linkedin_icon.onmouseout = function() {mouseOut(linkedin_icon)};

  window.addEventListener("resize",adjustView);
});

function mouseOver(icon) {
  icon.style.bottom = "25px";
}

function mouseOut(icon) {
  icon.style.bottom = "20px";
}


// Test function to ajust scroll if window is large or small
function adjustView() {
  const elem = document.querySelector("body");

  if (window.innerWidth> 400) {
    elem.style.width = "100%";
    elem.style.overflowX = "hidden";
  } else{
    elem.style.width = "400px";
    elem.style.overflowX = "visible";
  }

}
