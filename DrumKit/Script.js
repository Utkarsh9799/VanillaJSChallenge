window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);

function playSound(e) 
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("transition");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e)
{
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.remove("transition");
}