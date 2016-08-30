$(document).ready(function(){
  var color=['#31dad4',
  '#ac31da',
  '#67bfe4',
  '#f85d77',
  '#f85dd2',
  '#f242c7',
  '#d742f2',
  '#a142f2',
  '#4274f2',
  '#42f2db',
  '#42f263',
  '#f7ef18',
  '#f76218',
  'red']
   $("#btn").click(function(){
    for(var i=0;i<$("li").length;i++){
      $($("li")[i]).hide();
    }
    var randIndex=Math.floor(Math.random()*$("li").length+0);   
    $($("li")[randIndex]).fadeIn(2000);
    var randColor=Math.floor(Math.random()*color.length+0);
   $("body").css({"background":color[randColor]});
   $(".center").css({"color":color[randColor]});
   $("button").css({"background":color[randColor]});
      })      
});  
