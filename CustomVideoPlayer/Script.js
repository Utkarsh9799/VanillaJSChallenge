//Selecting elements for video player
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

function togglePlay()
{
    if(video.paused)
    {
        video.play();
    }
    else if(video.play)
    {
        video.pause();
    }
    updateButton();
}

function updateButton()
{
    if(video.paused)
    toggle.textContent="►";
    else if(video.play)
    toggle.textContent="❚ ❚";
}

video.addEventListener('timeupdate', updateProgress);

function updateProgress()
{
    const time = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${time}%`;
}

