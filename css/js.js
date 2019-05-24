var w = 350;
var _w = $(window).width();
$(function(){
   if(_w <= 480){
       var ifrs = document.getElementsByTagName(‘iframe’);
     for(var i=0;i<ifrs.length;i++){
          var ifr = ifrs[i];
          var a = ifr.src;
            if(a.indexOf(‘https://www.facebook.com/') == -1) continue;
          var b = a.indexOf(’&width=‘);
           var c = a.substring(0, b + 7);
          var d = c + w;
          ifr.src = d;
            ifr.width = w;
      }
   }
});