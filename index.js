// DOM Content Loaded
document.addEventListener("DOMContentLoaded", (event) => {
    const quoteBox = document.getElementById("quote-box")
    quoteBox.className = "notification"

    const quotes = [
        "La felicidad se puede hallar hasta en los más oscuros momentos, si somos capaces de usar bien la luz.",
        "No son nuestras habilidades las que muestran lo que somos, sino nuestras elecciones.",
        "La juventud no puede saber cómo piensa y siente la edad. Pero los viejos somos culpables si olvidamos cómo fue ser joven.",
        "No existe el bien ni el mal, solo existe el poder y aquellos demasiado débiles para ejercerlo."
    ];

    let quoteIndex = 0;
    setInterval(() => {
        quoteBox.innerText = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 8000);
});

// Música
const songs = [
    { title: "Las Ganas - Risketo", file: "assets/musica/las ganas.wav", cover: "assets/musica/risketo.png" },
    { title: "Yines - Risketo", file: "assets/musica/YINES.wav", cover: "assets/musica/risketo.png" },
    { title: "A solas - Risketo", file: "assets/musica/SOLAS.mp3", cover: "assets/musica/risketo.png" },
    { title: "Mirame - Risketo", file: "assets/musica/mirame.mp3", cover: "assets/musica/risketo.png" }
];

let current = 0;
const audio = document.getElementById("audio-player");
const title = document.getElementById("song-title");
const cover = document.getElementById("cover");
const playIcon = document.getElementById("play-icon");

function loadSong(index) {
    audio.src = songs[index].file;
    title.textContent = songs[index].title;
    cover.src = songs[index].cover;
    playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    } else {
        audio.pause();
        playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    }
}

function nextSong() {
    current = (current + 1) % songs.length;
    loadSong(current);
    if (!audio.paused) audio.play();
}

function prevSong() {
    current = (current - 1 + songs.length) % songs.length;
    loadSong(current);
    if (!audio.paused) audio.play();
}

function setVolume(value) {
    audio.volume = value;
}

window.onload = () => {
    loadSong(current);
    audio.volume = 0.5;
};