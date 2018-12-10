
 setInterval(function() {
   console.log("starts");
   if ($('div.sc-cMljjf.bqDeCs').length) {
      var appBanners = document.getElementsByClassName('sc-cMljjf bqDeCs'), i;
console.log("exists");
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}
   }
}, 100);
