
 setInterval(function() {
   console.log("starts");
   if (document.getElementsByClassName('sc-cMljjf bqDeCs') != undefined) {
      var appBanners = document.getElementsByClassName('sc-cMljjf bqDeCs'), i;
console.log("exists");
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}
    
   }
  exit();
}, 100);
