const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element the play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('Whoops an error in getting the video', error);
    }
}

button.addEventListener('click', async() => {
    //Disable the button
    button.disabled = true;

    //Start Picture in Picture
    await videoElement.requestPictureInPicture();

    //Reset button
    button.disabled = false;
});



//On Load
selectMediaStream();