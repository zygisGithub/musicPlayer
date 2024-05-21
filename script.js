
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play')
    const pauseButton = document.getElementById('pause')
    const audioPlayer = document.getElementById('audioPlayer')
    const songSelector = document.getElementById('songSelector')
    const titlePlay = document.getElementById('titlePlay')
    const titlePause = document.getElementById('titlePause')
    const bar = document.getElementById('bar')
    const volumeControl = document.getElementById('volumeControl')
    const progressContainer = document.querySelector('.bar')

    playButton.addEventListener('click', () => {
        audioPlayer.play();
    });

    pauseButton.addEventListener('click', () => {
        audioPlayer.pause();
    });

    songSelector.addEventListener('change', (event) => {
        const selectedSong = event.target.value
        audioPlayer.src = selectedSong;
        titlePause.innerHTML = `${selectedSong}`
        titlePlay.innerHTML = `${selectedSong}`
    })
    setInterval(function () {
        bar.style.width = `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`
    },10)

    volumeControl.addEventListener('input', (event) => {
        audioPlayer.volume = event.target.value
    });

    progressContainer.addEventListener('click', (event) => {
        const rect = progressContainer.getBoundingClientRect()
        const offsetX = event.clientX - rect.left
        const totalWidth = rect.width
        const clickPositionRatio = offsetX / totalWidth;
        audioPlayer.currentTime = clickPositionRatio * audioPlayer.duration
    });

    audioPlayer.volume = volumeControl.value
})
