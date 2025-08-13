document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const slides = document.querySelectorAll('.slide');
    const loadingBar = document.querySelector('.progress');
    const loadingText = document.querySelector('.loading-text');
    const bgMusic = document.getElementById('bgMusic');
    const loadingContainer = document.querySelector('.loading-container');
    
    // Loading messages
    const loadingMessages = [
        'Entering the World of the Past',
        'Preparing Your Journey',
        'Loading the American Frontier',
        'Saddling Up',
        'Almost There, Partner'
    ];
    
    // Slideshow functionality
    let currentSlide = 0;
    
    function showNextSlide() {
        // Fade out current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Fade in next slide
        slides[currentSlide].classList.add('active');
        
        // Change loading text every slide change
        if (currentSlide % 2 === 0) {
            const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
            loadingText.textContent = randomMessage;
        }
    }
    
    // Start slideshow
    setInterval(showNextSlide, 5000);
    
    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 95) {
            progress = 95; // Hold at 95% until fully loaded
        }
        loadingBar.style.width = `${progress}%`;
    }, 500);
    
    // Mute button elements
    const muteButton = document.getElementById('muteButton');
    const volumeIcon = document.querySelector('.volume-icon');
    const muteIcon = document.querySelector('.mute-icon');
    let isMuted = false;
    
    // Toggle mute function
    function toggleMute() {
        isMuted = !isMuted;
        bgMusic.muted = isMuted;
        
        // Update button appearance
        if (isMuted) {
            volumeIcon.style.display = 'none';
            muteIcon.style.display = 'block';
            muteButton.setAttribute('aria-label', 'Unmute music');
        } else {
            volumeIcon.style.display = 'block';
            muteIcon.style.display = 'none';
            muteButton.setAttribute('aria-label', 'Mute music');
        }
    }
    
    // Handle music with user interaction (browser autoplay policy)
    function handleFirstInteraction() {
        // Try to play music
        const playPromise = bgMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented:", error);
                // Show play button or handle the error
            });
        }
        
        // Remove this event listener after first interaction
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
        
        // Add mute button click handler after first interaction
        muteButton.addEventListener('click', toggleMute);
    }
    
    // Add event listeners for first interaction
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    
    // Handle game loaded event (this would be called by the game when loading is complete)
    window.addEventListener('loadGame', () => {
        clearInterval(loadingInterval);
        loadingBar.style.width = '100%';
        loadingText.textContent = 'Press any key to continue';
        
        // Enable click to continue
        document.addEventListener('click', () => {
            // This would trigger the game to continue
            if ('alt' in window) {
                alt.emit('loadingScreen:continue');
            }
        });
        
        document.addEventListener('keydown', () => {
            // This would trigger the game to continue
            if ('alt' in window) {
                alt.emit('loadingScreen:continue');
            }
        });
    });
    
    // For testing - remove in production
    // Simulate game loaded after 15 seconds
    setTimeout(() => {
        window.dispatchEvent(new Event('loadGame'));
    }, 15000);
    
    // Handle window resize
    function handleResize() {
        // Adjust any responsive elements here
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
});
