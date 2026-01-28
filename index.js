const button = document.getElementById('revealBtn');
    const surprise = document.getElementById('surprise');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
    button.classList.add('hidden');
    message.classList.add('hidden');
    surprise.classList.remove('hidden');
    surprise.classList.add('show');

    if (navigator.vibrate) {
        navigator.vibrate(30);
    }

    launchConfetti();
    });


    function launchConfetti() {
    const colors = ['#c760ffff', '#fb40cfff', '#fb40e2ff', '#eb79ffff', '#e040fb'];

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

        const size = Math.random() * 6 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';

        document.body.appendChild(confetti);

        setTimeout(() => {
        confetti.remove();
        }, 4000);
    }
    }

    const img = [
    'img/slime.png',
    'img/slime-1.png'
    ];

    const imgs = document.getElementById('anim');
    let index = 0;

    // Preload images
    img.forEach(src => {
        const i = new Image();
        i.src = src;
    });

    setInterval(() => {
        imgs.src = img[index];
        index = (index + 1) % img.length;
    }, 300); // speed (ms)
