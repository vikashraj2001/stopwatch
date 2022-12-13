let Hr = 0;
let Min = 0;
let Sec = 0;
let count = 0;
let timer = false;

function start(){
     timer=true;
     stopwatch();
}
function stop(){
    timer=false;

}
function reset(){
   timer = false;
   Hr=0;
   Min=0;
   Sec=0;
   count=0;
   document.getElementById("hr").innerHTML="00";
   document.getElementById("min").innerHTML="00";
   document.getElementById("sec").innerHTML="00";
   document.getElementById("count").innerHTML="00";
}

function stopwatch(){
      
      if(timer==true){
        count=count+1;

        if(count == 100){
            Sec=Sec+1;
            count=0;
        }
        if(Sec==60){
            Min=Min+1;
            Sec=0;
        }
        if(Min==60){
            Hr=Hr+1;
            Min=0;
            Sec=0;
        }
    document.getElementById("hr").innerHTML=Hr;
    document.getElementById("min").innerHTML=Min;
    document.getElementById("sec").innerHTML=Sec;
    document.getElementById("count").innerHTML=count;
    setTimeout("stopwatch()", 10);


      }

}
