window.addEventListener("keydown", function(event) {
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const audioKey = document.querySelector(`.key[data-key="${event.key}"]`);
    console.log(document.querySelector(`audio[data-key="${event.key}"]`));
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    audioKey.classList.add("playing");
});

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

