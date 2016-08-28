 window.onload=function(){
    var Btn=document.getElementById("btn");
    var oUl=document.getElementsByTagName("ul")[0];
    var oLi=oUl.getElementsByTagName("li");
    var oCenter=document.getElementById("center");
    var oBtns=document.getElementsByTagName("button");
    var color=['#31dad4','#ac31da','#67bfe4','#f85d77','#f85dd2','#f242c7','#d742f2','#a142f2','#4274f2','#42f2db','#42f263','#f7ef18','#f76218','red']
      Btn.onclick=function(){
        for(var i=0;i<oLi.length;i++){
        oLi[i].className="";
      }
        var randIndex=Math.floor(Math.random()*oLi.length+0);
        oLi[randIndex].className="show";
        var randColor=Math.floor(Math.random()*color.length+0);
        document.body.style.background=color[randColor];
        oCenter.style.color=color[randColor];
        for(var j=0;j<oBtns.length;j++){
            oBtns[j].style.background=color[randColor];
        }
      
        //var rColor=Math.floor(Math.random()*255+0);
         //var   gColor=Math.floor(Math.random()*255+0);
          //var  bColor=Math.floor(Math.random()*255+0);
            //alert(rColor);alert(gColor);alert(bColor);
        //document.body.style.background=“RGB(”+rColor+“,”+gColor+”,“+bColor+”)“;
        //oCenter.style.color=“RGB(”+rColor+“,”+gColor+”,“+bColor+”)“;
        //oBottom.style.background=“RGB(”+rColor+“,”+gColor+”,“+bColor+”)“;
      
  }
    

    }
  