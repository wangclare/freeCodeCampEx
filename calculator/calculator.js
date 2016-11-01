window.onload=function(){
  var oDiv = document.getElementById("numbtn");
  var oBtn = oDiv.getElementsByTagName("button");
  var oScr = document.getElementById("screen");
  var a,b,c;
  for(var i=2;i<18;i++){
    oBtn[i].onclick=function(){
      if(a==true){
    //这里加一个判断是因为，如果没有判断的话，每次赋值，都会清空屏幕显示的重新开始，这不是我所想要的结果，所以只有在使用了等于号之后的那次清空
    oScr.innerHTML="";
    a=false;
    //这里需要把a重新设置成false,要不然后面每次执行的时候a都等于true,都会使oScr.innerHTML="";
  };
  oScr.innerHTML+=this.innerHTML;
  //a = oScr.innerHTML;
}
}
oBtn[0].onclick=function(){
  oScr.innerHTML="";
}
oBtn[1].onclick=function(){
 if(c==true && a==true){
     //当c和a都为true时才执行，如果舍弃a，当=好后没有点击CE，点击i=2-18后，此时c还为true,那边此时点击CE，又会使屏幕变成b了，可是现在已经是新的循环了，这样是不对的。
     oScr.innerHTML=b;
     c=false;
     //c=false是希望接下来就不执行if语句，此时就按照if外的语句执行，否则屏幕上一直就是b时的字符串，这样点击CE的时候就一直保持同一个字符串不动。
   } oScr.innerHTML=oScr.innerHTML.slice(0,oScr.innerHTML.length-1);
 }
 oBtn[19].onclick=function(){
  b=oScr.innerHTML;  oScr.innerHTML=eval(oScr.innerHTML);
  a=c=true;
    //当点击=号之后，希望屏幕清空
  }
}