let videos = document.querySelectorAll('.video-conatainer video');
let showVideoEl = document.querySelector('.show-video');
let mainVideoEL = document.querySelector('.show-video video');
let timeEl = document.querySelector('.show-video span')


videos.forEach(video =>{
    video.addEventListener('click',showVideo);
})
function showVideo () {
    mainVideoEL.src = this.src;
    showVideoEl.style.display = "block"

    
}
timeEl.addEventListener('click',hidevideo);
function hidevideo(){
    showVideoEl.style.display= "none";

}