// ELEMENTS

const videoContainer =
document.getElementById('videoContainer');

const introVideo =
document.getElementById('introVideo');

const playButton =
document.getElementById('playButton');

const skipButton =
document.getElementById('skipButton');

const mainContent =
document.getElementById('mainContent');

const reportForm =
document.getElementById('reportForm');

const message =
document.getElementById('message');

const punishmentModal =
document.getElementById('punishmentModal');

const punishmentMessage =
document.getElementById('punishmentMessage');

const refreshButton =
document.getElementById('refreshButton');



// LOAD SAVED VIDEO TIME

const savedTime =
localStorage.getItem('videoTime');

if(savedTime){

    introVideo.currentTime =
    parseFloat(savedTime);
}



// PLAY VIDEO

playButton.onclick = function(){

    videoContainer.style.display = 'block';

    playButton.style.display = 'none';

    introVideo.play()
    .catch((error) => {

        console.error(
        "Video playback failed:",
        error
        );

    });

};



// SAVE VIDEO TIME

introVideo.ontimeupdate = function(){

    localStorage.setItem(
    'videoTime',
    introVideo.currentTime
    );

};



// VIDEO END

introVideo.onended = function(){

    closeVideo();

};



// SKIP BUTTON

skipButton.onclick = function(){

    closeVideo();

};



// COMMON FUNCTION

function closeVideo(){

    introVideo.pause();

    introVideo.currentTime = 0;

    localStorage.removeItem('videoTime');

    videoContainer.style.display = 'none';

    mainContent.classList.remove('hidden');

}



// FORM SUBMIT

reportForm.addEventListener(
'submit',
function(event){

    event.preventDefault();



    // SUCCESS MESSAGE

    message.innerText =
    "💀 உங்கள் செய்தி அண்ணியனுக்கு அனுப்பப்பட்டுள்ளது 💀";



    // PUNISHMENTS

    const punishments = [

        "தண்டனை: உயிருக்கு ஆபத்தான தண்டனைகள் அனுபவிக்கிறார்கள்.",

        "தண்டனை: குற்றவாளியின் கண்கள் முற்றிலும் குருடாக்கப்படுகின்றன.",

        "தண்டனை: குற்றவாளியை கொதிக்கும் எண்ணெயில் வீசப்படுவார்.",

        "தண்டனை: கொடூரமான மிருகங்கள் தாக்கும்.",

        "தண்டனை: ரௌரவ பசு தொடர்ந்து துன்புறுத்தும்."

    ];



    // RANDOM MESSAGE

    const randomPunishment =

    punishments[
        Math.floor(
        Math.random() * punishments.length
        )
    ];



    // SHOW MODAL

    punishmentMessage.textContent =
    randomPunishment;

    punishmentModal.classList.remove(
    'hidden'
    );



    // SHOW REFRESH BUTTON

    refreshButton.classList.remove(
    'hidden'
    );

});



// REFRESH PAGE

refreshButton.addEventListener(
'click',
function(){

    location.reload();

});
