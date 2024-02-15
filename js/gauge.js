/* $(window).ready(function(){

    draw(20, '.pie-chart1', '#red');
    draw(30, '.pie-chart2', '#222');
    draw(50, '.pie-chart3', '#222');
    draw(60, '.pie-chart4', '#222');
    draw(70, '.pie-chart5', '#222');
    draw(80, '.pie-chart6', '#222');
    draw(100, '.pie-chart7', '#222');
    });
    
function draw(max, classname, colorname){
    var i=1;
    var func1 = setInterval(function(){
    if(i<max){
        color1(i,classname,colorname);
        i++;
    } else{
        clearInterval(func1);
    }
    },20);
}
function color1(i, classname,colorname){
    $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #ddd "+i+"% 100%)"
    });

}
 */

