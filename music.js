const song = document.querySelector("audio");
const play = document.querySelector(".play");
const playImage = document.querySelector(".play-image");
const seekBar = document.querySelector('.seek-bar');
const volumeUp = document.querySelector(".up");
const volumeDown = document.querySelector(".down");
const nextSong = document.querySelector(".next");
const backSong = document.querySelector(".back");
const songImg = document.querySelector(".songimg");
const songName = document.querySelector(".songname");
/*-------------------back and next-----------------------*/
let songIndex = 1;
let imageIndex = 1;
let songsName = 1;
const songs =["songs/Bahram Saz.mp3", "songs/2 Faced.mp3", "songs/Pitbull.mp3"];
const imgs =["img/Bahram - Saz.jpg", "img/2faced.jpg", "img/back in time.jpg"];
const names =["Bahram-saz", "$LICK-2 Faced", "Pitbull-back in time"];

function playSong(i){
  song.src = songs[i];
  songImg.src = imgs[i];
  songName.innerText = names[i];
  song.currentTime = 0;
  song.play();
  songIndex = i;
  imageIndex = i;
  songsName = i;
}

backSong.addEventListener("click",()=>{
  if(songIndex > 0){
    playSong(songIndex - 1);
  }
});
nextSong.addEventListener("click",()=>{
  if(songIndex < songs.length -1){
    playSong(songIndex + 1);
  }
})




/*------------song time------------------------- */
seekBar.addEventListener("input", ()=>{
  const seektime = song.duration * (seekBar.value / 100);
  song.currentTime = seektime;
})
song.addEventListener("timeupdate", ()=>{
  const newTime = song.currentTime *(100/ song.duration);
  seekBar.value = newTime;
})


/*---------------volume----------------------*/
volumeUp.addEventListener("click", ()=>{
  if(song.volume < 1){
    song.volume += 0.1;
  }
});
volumeDown.addEventListener("click", ()=>{
  if(song.volume > 0){
    song.volume -= 0.1;
  }
})



/*----------play-pause-----------------------*/
let value = true;
play.addEventListener("click",()=>{
  if(value){
    song.play();
    playImage.src="img/pause.png"
    play.style.backgroundColor="white";
    play.style.padding="0";
    value=false;
  }else{
    song.pause();
    playImage.src="img/play.png"
    play.style.backgroundColor="#860efe";
    play.style.paddingLeft="5px";
    value=true;
  }
  
})