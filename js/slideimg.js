$(document).ready(function(){

  let $simg = $(".main_img");
  let $simgli = $(".main_img li");
  let $sbtn = $(".slide_btn ul li");
  let $snext = $(".slide_side_btn .nex");
  let $spre = $(".slide_side_btn .pre");
  let simg_w=$simgli.width();
  let simg_n=$simgli.length; 
  let soldidx=0;
  let sindex=0; 

  function slideImg(sindex){
    targetX=-(sindex*simg_w) 

    $simg.stop().animate({left:targetX},600); 
    $sbtn.eq(soldidx).removeClass("active"); 
    $sbtn.eq(sindex).addClass("active");
    soldidx=sindex;

  };

  //자동함수 생성
  function slideAuto(){
    sindex++;
  
    if(sindex > simg_n-1){ 
      sindex=0;
    }
    slideImg(sindex);
  }

  auto = setInterval(slideAuto,5000);

  $sbtn.click(function(){
    clearInterval(auto);
    sindex=$(this).index();
    slideImg(sindex);
    auto = setInterval(slideAuto,5000); 
  });


});
