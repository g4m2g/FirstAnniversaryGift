// Countdown to our Anniversary
function updateCountdown() {
    const anniversaryDate = new Date("2025-02-21T00:00:00").getTime(); // Use ISO format for reliability
    const now = new Date().getTime();
    const timeLeft = anniversaryDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "🎉 Happy Anniversary, my love! ❤️";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}

document.addEventListener("DOMContentLoaded", function() {
    updateCountdown(); // Run once immediately after DOM loads
    setInterval(updateCountdown, 1000); // Update every second
});

// Get the saved love count from localStorage (or start from 0)
let loveCount = localStorage.getItem("loveCounter") ? parseInt(localStorage.getItem("loveCounter")) : 0;

// Update the displayed counter
document.getElementById("counter").innerText = loveCount;

// When the button is clicked, increase the counter and save it
document.getElementById("loveButton").addEventListener("click", function() {
    loveCount++;
    document.getElementById("counter").innerText = loveCount;
    localStorage.setItem("loveCounter", loveCount); // Save to localStorage
    
});
