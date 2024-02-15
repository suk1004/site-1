$(document).ready(function(){

  $(".con2").hide();

  $(".btn").find("b:nth-child(2)").click(function(){
    $(".con2").show();
    $(".con1 ").hide();
  });

  $(".btn").find("b:nth-child(1)").click(function(){
    $(".con1").show();
    $(".con2").hide();
  });

  $(".btn").find("b:nth-child(2)").click(function(){
    $(".btn").find("b:nth-child(1)").removeClass("active")
    $(".btn").find("b:nth-child(2)").addClass("active")
  });

  $(".btn").find("b:nth-child(1)").click(function(){
    $(".btn").find("b:nth-child(2)").removeClass("active")
    $(".btn").find("b:nth-child(1)").addClass("active")
  });

});
