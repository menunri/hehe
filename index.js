// Prize segments with weighted probabilities
const prizes = [
    { amount: '₱1,000', color: '#adeac3', weight: 55 },
    { amount: '₱500', color: '#3b82f6', weight: 20 },
    { amount: '₱200', color: '#eab308', weight: 20 },
    { amount: '₱100', color: '#ef4444', weight: 5 }
];

// Calculate cumulative weights for selection
const totalWeight = prizes.reduce((sum, p) => sum + p.weight, 0);

// Segment centers (degrees from top, clockwise)
// Segment 1: 45°, Segment 2: 135°, Segment 3: 225°, Segment 4: 315°
const segmentCenters = [45, 135, 225, 315];

const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const result = document.getElementById('result');
const message = document.getElementById('message');

let hasSpun = false;

// Weighted random selection
function selectPrize() {
    const random = Math.random() * totalWeight;
    let cumulative = 0;
    
    for (let i = 0; i < prizes.length; i++) {
        cumulative += prizes[i].weight;
        if (random < cumulative) {
            return { index: i, ...prizes[i] };
        }
    }
    
    // Fallback (shouldn't reach here)
    return { index: 0, ...prizes[0] };
}

// Spin the wheel
function spinWheel() {
    if (hasSpun) return;
    hasSpun = true;
    
    // Disable button
    spinBtn.disabled = true;
    spinBtn.textContent = 'SPINNING...';
    
    // Select prize based on weighted probability
    const result2 = selectPrize();
    const targetIndex = result2.index;
    const targetAngle = segmentCenters[targetIndex];
    
    // Calculate rotation: add 5-8 full rotations (1800-2880 degrees) plus target
    const fullRotations = 5 * 360; // 5 full spins
    // Invert the angle because wheel rotates clockwise
    // To get segment to top, we need to rotate: fullRotations + (360 - targetAngle)
    const finalRotation = fullRotations + (360 - targetAngle);
    
    // Apply the rotation
    wheel.style.transform = `rotate(${finalRotation}deg)`;
    
    // Vibrate if supported
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // Show result after animation
    setTimeout(() => {
        showResult(result2);
    }, 4000);
}

// Show the result
// Show the result
function showResult(prize) {
    // Hide message and button
    message.classList.add('hidden');
    spinBtn.classList.add('hidden');
    
    // Declare amountEl only once
    const amountEl = result.querySelector('.amount');
    
    // Preload images for animation to prevent flickering
    const img1 = new Image();
    img1.src = 'img/slime.png';
    const img2 = new Image();
    img2.src = 'img/slime-1.png';
    
    // Inject ONLY the slime image
    amountEl.innerHTML = `
        <img id="resultSlime" src="img/slime.png" alt="slime" style="width:100px; height:100px;">
    `;
    
    // Reveal the result container
    result.classList.remove('hidden');
    
    // Start slime animation
    const resultSlime = document.getElementById('resultSlime');
    let index = 0;
    
    setInterval(() => {
        // Toggle the image source every 300ms
        resultSlime.src = index === 0 ? 'img/slime-1.png' : 'img/slime.png';
        index = (index + 1) % 2;
    }, 300);
    
    
    // Vibrate celebration (for mobile)
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
    
    // Launch confetti matching the prize color
    launchConfetti(prize.color);
}

// Confetti effect
function launchConfetti(prizeColor) {
    const colors = [
        prizeColor,
        '#ffffff',
        '#ffd700',
        '#ff6b6b'
    ];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const size = Math.random() * 8 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Event listener - tap wheel to spin
const wheelContainer = document.querySelector('.wheel-container');
wheelContainer.addEventListener('click', spinWheel);

// Add this line so the SPIN button works too
spinBtn.addEventListener('click', spinWheel);
