const videoContainer = document.getElementById('videoContainer');
const introVideo = document.getElementById('introVideo');
const playButton = document.getElementById('playButton');

// Load saved video time from localStorage
const savedTime = localStorage.getItem('videoTime');
if (savedTime) {
    introVideo.currentTime = parseFloat(savedTime); // Set video to saved time
}

// Show video container when play button is clicked
playButton.onclick = function() {
    videoContainer.style.display = 'block'; // Show the video container
    playButton.style.display = 'none'; // Hide the play button

    // Play the video
    introVideo.play().catch((error) => {
        console.error("Video playback failed:", error);
    });
};

// Save the current video time to localStorage every second
introVideo.ontimeupdate = function() {
    localStorage.setItem('videoTime', introVideo.currentTime);
};

// Hide video and show main content after video ends
introVideo.onended = function() {
    localStorage.removeItem('videoTime'); // Clear saved time
    videoContainer.style.display = 'none'; // Hide video
    document.getElementById('mainContent').classList.remove('hidden'); // Show main content
};

// Handle form submission
const reportForm = document.getElementById('reportForm');
const message = document.getElementById('message');

reportForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    message.innerText = '"💀உங்கள் செய்தி அண்ணியனுக்கு அனுப்பப்பட்டுள்ளது மற்றும் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டுள்ளது.💀"'; // Fake submission message
});
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Array of punishment messages
    const punishments = [
        "தண்டனை: உயிருக்கு ஆபத்தான தண்டனைகள் அனுபவிக்கிறார்கள். தந்திரமாகப் பிறரை ஏமாற்றியவர்களை இருளும் துன்பமும் நிரம்பிய இடத்தில் அடைத்து துன்புறுத்துவர்.",
        "தண்டனை: குற்றவாளியின் கண்கள் முற்றிலும் குருடாக்கப்படுகின்றன. இருளும் துன்பத்திலும் மூழ்கி வாழ்கிறான்.",
        "தண்டனை: குற்றவாளியை கொதிக்கும் எண்ணெய் நிரப்பிய குண்டிலில் போட்டுவிடுகிறார்கள்.",
        "தண்டனை: மிக கொடூரமான மிருகங்கள் குற்றவாளியை துன்புறுத்தி அடிக்கடி தாக்கும்.",
        "தண்டனை: ஒரு மிக கொடூரமான மிருகமான ரௌரவ பசு குற்றவாளியை தொடர்ச்சியாக தாக்கி துன்புறுத்தும்."
    ];

    // Select a random punishment
    const randomPunishment = punishments[Math.floor(Math.random() * punishments.length)];

    // Display the punishment in the modal
    document.getElementById('punishmentMessage').textContent = randomPunishment;
    document.getElementById('punishmentModal').classList.remove('hidden');

    // Show the refresh button after displaying the punishment
    document.getElementById('refreshButton').classList.remove('hidden');
});

// Add an event listener to the refresh button to manually refresh the page
document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();
});
document.addEventListener('DOMContentLoaded', function() {
    const skipVideoButton = document.getElementById('goToFormButton');
    const formContainer = document.getElementById('formContainer');

    // Skip video and go directly to the form
    skipVideoButton.addEventListener('click', function() {
        // Hide the video section (if necessary)
        document.getElementById('videoContainer').style.display = 'none';
        
        // Show the form section directly
        formContainer.style.display = 'block';
    });
});
