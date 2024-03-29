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

skipButtons.forEach(button => button.addEventListener('click', skip));

function skip()
{
    video.currentTime += parseFloat(this.dataset.skip);
}

ranges.forEach(range => range.addEventListener('change', rangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));

function rangeUpdate()
{
    video[this.name] = this.value;
}

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

function scrub(e) 
{
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}