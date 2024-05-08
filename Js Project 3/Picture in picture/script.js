const video =document.getElementById('video')
const button =document.getElementById('button')

async function selectMediaStream(){
    try{
        const  mediaStream= await navigator.mediaDevices.getDisplayMedia();
        video.srcObject=mediaStream;
        video.onloadedmetadata = ()=>{
            video.play();
        }
    }
    catch(err){
        console.log('whoops,error here', err)
    }

}
button.addEventListener('click',async ()=>{
    button.disabled=true
    await video.requestPictureInPicture();

})
selectMediaStream();