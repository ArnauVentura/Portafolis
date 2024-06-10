document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('interactiveVideo');

    // Función para manejar la pausa en tiempos específicos
    function handleKeyPress(event) {
        const key = event.key.toUpperCase();

        switch (key) {
            case 'T':
                video.currentTime = 15;
                video.play();
                setTimeout(() => {
                    video.pause();
                }, (19 - 15) * 1000);
                break;
            case 'P':
                video.currentTime = 10;
                video.play();
                setTimeout(() => {
                    video.pause();
                }, (14 - 10) * 1000);
                break;
            case 'M':
                video.currentTime = 20;
                video.play();
                setTimeout(() => {
                    video.pause();
                }, (24 - 20) * 1000);
                break;
            case ' ':
                video.currentTime = 7;
                video.pause();
                break;
            default:
                break;
        }
    }

    // Pausar el video en el segundo 7
    video.addEventListener('timeupdate', () => {
        if (Math.floor(video.currentTime) === 7) {
            video.pause();
        }
    });

    // Escuchar eventos de teclado
    document.addEventListener('keydown', handleKeyPress);
});
