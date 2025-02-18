const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
let clickCount = 0;

noButton.addEventListener('mouseenter', function() {
    // Get viewport dimensions
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    // Generate random positions
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Apply new position
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    
    // Increase Yes button size
    clickCount++;
    const newSize = 18 + (clickCount * 30); // Increase font size by 3px each click
    const newPadding = 10 + (clickCount * 3); // Increase padding by 2px each click
    const newRadius = 20 + (clickCount * 10);
    
    yesButton.style.fontSize = newSize + 'px';
    yesButton.style.padding = newPadding + 'px ' + (newPadding * 3) + 'px';
    yesButton.style.borderRadius = newRadius + 'px';

    //Decrease No button size
    const newSize2 = 18 - (clickCount * 1); // Increase font size by 3px each click
    const newPadding2 = 10 - (clickCount * 0.5); // Increase padding by 2px each click

    noButton.style.fontSize = newSize2 + 'px';
    noButton.style.padding = newPadding2 + 'px ' + (newPadding2 * 3) + 'px';
  
});

// Optional: Add yes button click handler
yesButton.addEventListener('click', function() {
    window.location.href = 'yes.html';
});

