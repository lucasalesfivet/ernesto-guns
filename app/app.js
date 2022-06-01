import fontAwesome from "https://cdn.skypack.dev/font-awesome@4.7.0";

$(window).scroll(function(){
  var wscroll = $(this).scrollTop();
  if(wscroll > 100){
   $(".navbar").addClass("shrink-nav");
    $(".logo").addClass("shrink-logo");
  }
  else{
    $(".navbar").removeClass("shrink-nav");
    $(".logo").removeClass("shrink-logo");
  }
});