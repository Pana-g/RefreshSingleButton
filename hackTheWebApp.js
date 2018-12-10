var checkExist = setInterval(function() {
   console.log("starts");
   if ($('#the-canvas').length) {
      var appBanners = document.getElementsByClassName('bqDeCs'), i;
console.log("exists");
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}
   }
}, 100);

$(document).ready(function(){ checkExist }) 
