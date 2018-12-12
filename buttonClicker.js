const checkInterval = 3*1000
console.info("Button listener started.");
function timerFunc() {
  if (document.URL.indexOf("seniors") >= 0) {
  var btn = document.getElementsByClassName("sc-jwKygS bPNJDy");
  if (btn.length > 0) {
    btn[0].click()
  }
  }
}

setInterval(timerFunc,checkInterval);
