$(window).ready(function(){

    function draw(max, classname, colorname){
        var i=1;
        var func1 = setInterval(function(){
        if(i<max){
            color1(i,classname,colorname);
            i++;
        } else{
            clearInterval(func1);
        }
        },15);
    }
    function color1(i, classname,colorname){
        $(classname).css({
            "background":"conic-gradient("+colorname+" 0% "+i+"%, #ddd "+i+"% 100%)"
        });
    
    };

    draw(20, '.pie-chart1', '#222');
    draw(30, '.pie-chart2', '#222');
    draw(50, '.pie-chart3', '#222');
    draw(60, '.pie-chart4', '#222');
    draw(70, '.pie-chart5', '#222');
    draw(80, '.pie-chart6', '#222');
    draw(100, '.pie-chart7', '#222');


    let $img = $(".car_content");
    let $btn = $(".color_btn .active");
    let $lbtn = $(".side_btn .lbtn");
    let $rbtn = $(".side_btn .rbtn");
    let oldidx = 0;
    let idx = 0; 
    let img_n = $img.length; 

    function changeImg(idx){

    if(oldidx != idx){
        $btn.eq(oldidx).removeClass("active"); 
        $btn.eq(idx).addClass("active"); 
        $img.eq(oldidx).stop().fadeOut("300"); 
        $img.eq(idx).stop().fadeIn("300"); 
        $img.eq(oldidx).removeClass("active");
        $img.eq(idx).addClass("active");
    }
    oldidx = idx;

    draw(20, '.pie-chart1', '#red');
    draw(30, '.pie-chart2', '#222');
    draw(50, '.pie-chart3', '#222');
    draw(60, '.pie-chart4', '#222');
    draw(70, '.pie-chart5', '#222');
    draw(80, '.pie-chart6', '#222');
    draw(100, '.pie-chart7', '#222');

    };


    $lbtn.click(function(){

        idx--;
            if(idx < 0){
            idx=img_n-1;
        }
        changeImg(idx);

    });

    $rbtn.click(function(){

        idx++;
        if(idx > img_n-1){
            idx=0;
        }
        changeImg(idx); 
    });

});