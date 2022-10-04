// --- Config --- //
var cookiePopupTitle = "Message to FCPS Students";
var cookiePopupDesc = "This site is maintained by someone like you!";
var cookiePopupLink = 'To Reccomend a Game: <a href="/dump/cookieinfo.html" target="_blank">click here!</a>';
var cookiePopupButton = "Ok!";

function pureFadeIn(elem, display) {
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
function pureFadeOut(elem) {
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}
