
$(window).load(function(){ setInterval(function() {
   console.log("starts");
   if ($('.bqDeCs').length) {
      var appBanners = document.getElementsByClassName('bqDeCs'), i;
console.log("exists");
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}
   }
}, 100);  })



