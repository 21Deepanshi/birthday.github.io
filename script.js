window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}
const body = document.getElementById("body");

function play(){
  party.sparkles(body);
  party.confetti(body);
  party.sparkles(body);
  party.confetti(body);
  party.sparkles(body);
  party.confetti(body);
}
