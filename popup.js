// Generated by CoffeeScript 1.7.1
(function() {
  var btnPlay, btnShow, btnStop;

  btnPlay = document.getElementById("play");

  btnStop = document.getElementById("stop");

  btnPlay.onclick = function() {
    chrome.extension.sendMessage({
      greeting: "play"
    });
    return btnShow("play");
  };

  btnStop.onclick = function() {
    chrome.extension.sendMessage({
      greeting: "stop"
    });
    return btnShow("stop");
  };

  btnShow = function(status) {
    if (status === "play") {
      btnPlay.style.display = "none";
      btnStop.style.display = "block";
    } else {
      btnPlay.style.display = "block";
      btnStop.style.display = "none";
    }
    return true;
  };

  btnShow(localStorage["status"]);

}).call(this);
