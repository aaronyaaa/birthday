// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel with error handling
    try {
        const carouselElement = document.getElementById('memoriesCarousel');
        if (carouselElement) {
            const carousel = new bootstrap.Carousel(carouselElement, {
                interval: 3000,  // Change slide every 3 seconds
                wrap: true,      // Continuous loop
                keyboard: true,  // Enable keyboard navigation
                pause: 'hover',  // Pause on mouse hover
                touch: true      // Enable touch swipe
            });
        }
    } catch (error) {
        console.error('Error initializing carousel:', error);
    }

    // Trigger confetti animation automatically on page load
    createConfetti();
});

// Confetti creation function
function createConfetti() {
    const colors = ['#d6336c', '#f08a5d', '#b83b5e', '#6a2c70', '#f9ed69'];
    const confettiCount = 100;
    const container = document.createElement('div');
    
    // Set container styles
    Object.assign(container.style, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        overflow: 'visible',
        zIndex: 9999
    });

    document.body.appendChild(container);

    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        Object.assign(confetti.style, {
            position: 'absolute',
            width: '8px',
            height: '8px',
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: Math.random() * window.innerWidth + 'px',
            top: '-10px',
            opacity: Math.random(),
            borderRadius: '50%',
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `fall 3s linear forwards`,
            animationDelay: (Math.random() * 2) + 's'
        });
        container.appendChild(confetti);
    }

    // Remove confetti after animation
    setTimeout(() => {
        container.remove();
    }, 5000);
}
