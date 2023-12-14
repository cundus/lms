function play(sound) {
   console.log(sound);
   var audio = new Audio(sound);
   audio.pause();
   audio.currentTime = 0;
   audio.play();
}
