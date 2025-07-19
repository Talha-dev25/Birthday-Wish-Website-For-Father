document.addEventListener('DOMContentLoaded', function () {
    // Loader timeout
    setTimeout(function () {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);

    // Birthday song
    const birthdaySong = document.getElementById('birthdaySong');
    let isPlaying = true;

    window.toggleMusic = function () {
        if (isPlaying) {
            birthdaySong.pause();
            document.querySelector('.music-btn i').classList.remove('fa-pause');
            document.querySelector('.music-btn i').classList.add('fa-music');
        } else {
            birthdaySong.play();
            document.querySelector('.music-btn i').classList.remove('fa-music');
            document.querySelector('.music-btn i').classList.add('fa-pause');
        }
        isPlaying = !isPlaying;
    };

    // Confetti animation
    function createConfetti() {
        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.position = 'fixed';
            confetti.style.top = '0';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`; 
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 7000);
        }
    }

    setInterval(createConfetti, 3000);
    setTimeout(createConfetti, 1000);
    setTimeout(createConfetti, 1500);
    setTimeout(createConfetti, 2000);

    // Candle hover flicker
    const candle = document.querySelector('.candle');
    const flame = document.querySelector('.flame');

    candle.addEventListener('mouseover', function () {
        flame.style.animation = 'flicker 0.1s infinite alternate';
    });

    candle.addEventListener('mouseout', function () {
        flame.style.animation = 'flicker 0.5s infinite alternate';
    });

    // Click to blow candle
    candle.addEventListener('click', function () {
        flame.style.display = 'none';
        setTimeout(() => {
            flame.style.display = 'block';
        }, 2000);
    });
});
