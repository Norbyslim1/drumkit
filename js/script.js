document.addEventListener("DOMContentLoaded", function(){
    var tick=0;
    window.addEventListener('keydown', function(e){
        var keyStroke= e.keyCode;
        var arr=['<div>'];
        var player= document.getElementById(keyStroke);
        clear=document.getElementsByTagName('div');
        for (var i=0; i<clear.length; i++){
            clear[i].classList.remove('playing');}
       
        tick= document.querySelector('div[data-key="'+keyStroke+'"]');
        if(player==null){return;}
        player.currentTime=0;
        player.play();       
        tick.classList.add('playing');
        
    });

})
