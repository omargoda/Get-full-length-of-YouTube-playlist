var list = document.getElementsByClassName('ytd-thumbnail-overlay-time-status-renderer');
var time = 0;

function toS(hms) {
  var a = hms.split(':');
  while (a.length < 3) {
    a.unshift(0);
  }
  var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
  return seconds;
}

function toHMS(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var result = (d < 10 ? "0" + d : d) + ":" + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s  < 10 ? "0" + s : s);
  return result;
}

function add(item) {
   var timeString = (item.innerText || item.textContent);
   time += toS(timeString);
}

for (var i = 0; i < list.length; i++) {
  var item = list[i];
  add(item);
}

console.log("The full duration time is: " + toHMS(time));
