


function playSound(e){
   const audio= document.querySelector(`audio[data-key ="${e.keyCode}"]`)
   const key =document.querySelector(`div[data-key="${e.keyCode}"]`);
   if(!audio) return;  //end it if theres no audio
   key.classList.add(playing);
   audio.currentTime = 0;
   audio.play()
}

// const key =document.querySelector(".key")


window.addEventListener("keydown", playSound)