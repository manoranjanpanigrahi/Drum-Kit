
// grabbing the audio file with the KeyCode that was pressed by the user  
document.addEventListener('keydown' , function (event) {
   const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

   if(!audio) return; //if no audio file is attached with a alphab then the func. will not exec.

   audio.currentTime = 0  //sets the audio file playing to the start of the audio
   audio.play();
   key.classList.add('playing')  //adding class playing to the key class
});

function removeTransition(e) {
   //if there is not transform prop on the pressed button then the function will exit
   if (e.propertyName !== 'transform') return;         

   //remo the playing prop from the pressed alpha. here this = current alpha
   this.classList.remove('playing');
}
//stores all the div having the .key class i.e all the alphabets
const keys = document.querySelectorAll('.key');


/*looping over each alphabet and  add a evnt Lstnr that triggers when the transition is ended on tht button and calls the removesTrans function that removes the playing class from the button that has transitioned*/
keys.forEach(key => key.addEventListener('transitionend', removeTransition));