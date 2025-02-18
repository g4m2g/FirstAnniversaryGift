const sliderContainer = document.getElementById('sliderContainer');
const sliderHandle = document.getElementById('sliderHandle');
let isDragging = false;


// Calculate boundaries
const containerRect = sliderContainer.getBoundingClientRect();
const maxX = sliderContainer.offsetWidth - sliderHandle.offsetWidth;

// Mouse down event
sliderHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    sliderHandle.style.transition = 'none'; // Remove transition while dragging
});

// Mouse move event
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const containerRect = sliderContainer.getBoundingClientRect();
    const x = e.clientX - containerRect.left - (sliderHandle.offsetWidth / 2);
            
    // Constrain movement within the container
    const boundedX = Math.max(0, Math.min(x, maxX));
    sliderHandle.style.left = boundedX + 'px';
});

// Mouse up event
document.addEventListener('mouseup', () => {
    if (!isDragging) return;
            
    isDragging = false;
    sliderHandle.style.transition = 'left 0.5s ease-out'; // Restore transition
    sliderHandle.style.left = maxX + 'px'; // Move to the right
});

// Initialize position
sliderHandle.style.left = '480px';

// If check-button is clicked
const checkButton = document.getElementById("checkButton");

checkButton.addEventListener('click', function() {
    window.location.href = 'lover.html';
});

