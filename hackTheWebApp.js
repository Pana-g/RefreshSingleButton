var checkExist = setInterval(function() {
   if ($('#the-canvas').length) {
      var appBanners = document.getElementsByClassName('bqDeCs'), i;

for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}
   }
}, 100);
