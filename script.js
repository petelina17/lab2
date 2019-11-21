/**
 * @type {boolean} - Indicates if audio plays or not
 */
let music = false;

/**
 * Get audio and play it onclick
 * @type {HTMLElement}
 */
const abba = document.getElementById('abba');
abba.addEventListener('click', fPlay);

/**
 * Pause or play audio
 */
function fPlay() {
    const abbaAudio = document.getElementById('abbaAudio');
    if (music) {
        music = !music;
        abbaAudio.pause();
    }
    else  {
        music = !music;
        abbaAudio.play();
    }
}