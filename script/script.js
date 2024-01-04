$(function(){
   $(".nav>ul>li").mouseover(function(){
      $(".submenu").stop().slideDown(200);
   });
   $(".nav>ul>li").mouseout(function(){
      $(".submenu").stop().slideUp(200);
   });
   
   let currentIndex = 0;

   setInterval(function(){
      if(currentIndex<2){
         currentIndex++;
      }else{
         currentIndex = 0;
      }
      let slidePosition = currentIndex * (-300)+"px";

      $(".slideList").animate({top:slidePosition},400);
   },3000);

   let tabBtn = $(".tab_btn>ul>li");
   let tabCont = $(".tab_cont>div");

   tabCont.hide().eq(0).show();

   tabBtn.click(function(){
      let target = $(this);
      let index = target.index();

      tabBtn.removeClass("active");
      target.addClass("active");
      tabCont.css("display", "none");
      tabCont.eq(index).css("display", "block");
   });
   $(".layerPopup").click(function(){
      $(".layer").show();
      $(".layer_bg").show();
   });
   $(".layer .close").click(function(){
      $(".layer").hide();
      $(".layer_bg").hide();
   });
});