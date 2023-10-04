 function makeBubble(){
            var bubble = "";
            
            for(var i =0; i<=168; i++){
                var num = Math.floor(Math.random()*10);
                bubble += `<div class="bubble">${num}</div>`
            }
            document.querySelector(".bcont").innerHTML = bubble;
 }


 var sec = 60;
 var score = 0;
 var hitt = 0;
 function timer(){  
     var time = setInterval(function(){
        if(sec>0){
            sec--;
            document.querySelector("#timer").textContent = sec;
        }
        else{
            clearInterval(time);
            document.querySelector(".bcont").innerHTML = `<h1>GAME OVER</h1>`;
        }
     },1000)
 }

 function hit(){
     hitt = Math.floor(Math.random()*10);
     document.querySelector("#hit").textContent = hitt;
 }

function scoreEval(){
    score += 10;
    document.querySelector("#score").textContent = score
}

document.querySelector(".bcont").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitt){
        scoreEval();
        makeBubble();
        hit();
    }
})

 hit();
 timer();
 makeBubble();