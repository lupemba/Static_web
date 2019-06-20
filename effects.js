document.addEventListener('DOMContentLoaded', function() {

  const fb_icon = document.querySelector("#fb_icon");
  fb_icon.onmouseover = function() {mouseOver(fb_icon)};

  const linkedin_icon = document.querySelector("#linkedin_icon");
  linkedin_icon.onmouseover = function() {mouseOver(linkedin_icon)};
});

let direction = 1;

function mouseOver(icon) {
  // Get the value of the buttom
  const elem_style = getComputedStyle(icon);
  let integer = parseInt(elem_style.bottom, 10);
  // Check If it should move up or down
  if (integer>400) {
    direction = -1;
  }
  if (integer<50) {
    direction = 1;
  }
  //move icon
  icon.style.bottom = (integer+direction*40)+"px";
}
