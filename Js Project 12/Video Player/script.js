const player =document.querySelector('.player')
const  video=document.querySelector('video')
const  progressRange =document.querySelector('.progress-range')
const  progressBar=document.querySelector('.progress-bar')
const playBtn=document.getElementById('play-btn')
const VolumeIcon=document.getElementById('volume-icon')
const  volumeRange =document.querySelector('.volume-range')
const  volumesBar=document.querySelector('.volume-bar')
const duration=document.querySelector('.time-duration')
const currentTime=document.querySelector('.time-ellapse')
const fullscreenBtn=document.querySelector('.fullscreen')
const speed=document.querySelector('.player-speed')

// fuul screen
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  video.classList.add('video-fullscreen')
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  video.classList.remove('video-fullscreen')

}
// toggleplay
function toggleplay(){
    if(video.paused){
        video.play()
        playBtn.classList.replace('fa-play', 'fa-pause')
        playBtn.setAttribute('title', 'Pause')
    }else{
        video.pause();
        playBtn.classList.replace('fa-pause', 'fa-play')
        playBtn.setAttribute('title', 'Play')
        // showPlayIcon();
    }
}
function displayTime(time){
    const minutes=Math.floor(time / 60);
    let seconds= Math.floor(time % 60);
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`
}
function updateProgess(){
    progressBar.style.width= `${(video.currentTime / video.duration) * 100}%`
    currentTime.textContent= `${displayTime(video.currentTime)} /`;
    duration.textContent= `${displayTime(video.duration)}`
}
function setProgress(e){
    const newTime= e.offsetX / progressRange.offsetWidth;
    progressBar.style.width=`${newTime * 100}%`;
    video.currentTime=newTime * video.duration;

}
let lastVolume =1;
function changeVolume(e){
    let volume= e.offsetX  / volumeRange.offsetWidth;
    if(volume < 0.1){
        volume= 0
    }
    if(volume  > 0.9){
        volume =1;
    }
    volumesBar.style.width= `${volume * 100}%`;
    video.volume =volume;
    VolumeIcon.className= ``;
    if(volume > 0.7){
        VolumeIcon.classList.add('fas','fa-volume-up')
    }
    else if(volume < 0.7 && volume > 0 ){
        VolumeIcon.classList.add('fas', 'fa-volume-down')
    }else if(volume == 0){
        VolumeIcon.classList.add('fas','fa-volume-off')
    }
lastVolume =volume;
}
// togglemute
function togglemute(){
    VolumeIcon.className= '';
    if(video.volume){
        lastVolume =video.volume;
        video.volume=0;
        volumesBar.style.width=0;
        VolumeIcon.classList.add('fas','fa-volume-mute');
        VolumeIcon.setAttribute('title','Unmute')
    }
    else{
        video.volume=lastVolume;
        volumesBar.style.width=`${lastVolume * 100}%`;
        VolumeIcon.classList.add('fas','fa-volume-up');
        VolumeIcon.setAttribute('title','Mute')
    }

}
function changeSpeed(){
    video.playbackRate =speed.value;
}
let fullscreen= false;
function toggleFullScreen(){
    if(!fullscreen){
        openFullscreen(player)
    }else{
        closeFullscreen();
    }
    fullscreen =! fullscreen; 
}
playBtn.addEventListener('click' ,toggleplay);
video.addEventListener('click', toggleplay)
// video.addEventListener('ended', showPlayIcon);
video.addEventListener('timeupdate',updateProgess);
video.addEventListener('canplay',updateProgess)
progressRange.addEventListener('click',setProgress);
volumeRange.addEventListener('click',changeVolume)
VolumeIcon.addEventListener('click',togglemute )
speed.addEventListener('change', changeSpeed)
fullscreenBtn.addEventListener('click', toggleFullScreen) 