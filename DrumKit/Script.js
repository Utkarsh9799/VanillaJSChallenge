window.addEventListener('keydown', playSound);

function playSound(e) 
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("transition");
    audio.currentTime = 0;
    audio.play();
}