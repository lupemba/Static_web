document.addEventListener('DOMContentLoaded', function() {

  const fb_icon = document.querySelector("#fb_icon");
  fb_icon.onmouseover = function() {mouseOver(fb_icon)};
  fb_icon.onmouseout = function() {mouseOut(fb_icon)};

  const linkedin_icon = document.querySelector("#linkedin_icon");
  linkedin_icon.onmouseover = function() {mouseOver(linkedin_icon)};
  linkedin_icon.onmouseout = function() {mouseOut(linkedin_icon)};
});

function mouseOver(icon) {
  icon.style.bottom = "25px";
}

function mouseOut(icon) {
  icon.style.bottom = "20px";
}
